/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebase";
import VideoButtonHolder from "./VideoButtonHolder";
import { Box, Flex } from "@chakra-ui/react";
import { Input } from "@/components/cli/shadcn/input";
import { Label } from "@/components/cli/shadcn/label";
import { Toggle } from "@/components/cli/shadcn/toggle";
import VideoHolder from "./VideoHolder";
import { Button } from "@/components/cli/shadcn/button";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import { useFetch } from "@/hooks/useFetch";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

type Props = {
  token: string;
  learnCategories: Category[];
};

const UploadContainer = ({ token, learnCategories }: Props) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const Reset = () => {
    setTitle("");
    setDescription("");
    setCategories([]);
    setFile(null);
    setProgress(0);
  };

  const handleCategoryChange = (category: string) => {
    const index = categories.indexOf(category);

    if (index === -1) {
      setCategories([...categories, category]);
    } else {
      setCategories(categories.filter((c) => c !== category));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (file && fileTypes.includes(file.type)) {
      const fileRef = ref(storage, `videos/${file.name}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.log("error :(");
        },
        () => {
          setProgress(0);
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const res = await useFetch({
              method: "POST",
              endPoint: "",
              body: {
                title,
                description,
                url: downloadURL,
                categories,
              },
              token: token,
              TokenInclude: true,
            });

            if (res.status === true) {
              router.push("/profile");
            } else if (res.status === false && res.data?.offensive === true) {
              const sessionExpirationDate = new Date();
              toast("Your title or the description is offensive", {
                description:
                  sessionExpirationDate.toDateString() +
                  " at " +
                  sessionExpirationDate.toLocaleTimeString(),
                action: {
                  label: "Undo",
                  onClick: () => {},
                },
              });
            } else if (res.status === false && res.data?.isBanned === true) {
              const sessionExpirationDate = new Date();
              toast(
                "Your account has been banned due to repeated violations of our community guidelines",
                {
                  description:
                    sessionExpirationDate.toDateString() +
                    " at " +
                    sessionExpirationDate.toLocaleTimeString(),
                  action: {
                    label: "Undo",
                    onClick: () => {},
                  },
                }
              );
              await signOut({ callbackUrl: "/", redirect: true });
            }
          });
        }
      );
    }
  };

  return (
    <div className="w-full flex justify-center md:justify-normal flex-wrap items-center gap-4 ">
      {file !== null ? (
        <VideoHolder file={file} setFile={setFile} />
      ) : (
        <VideoButtonHolder setFile={setFile} />
      )}
      <Box className="flex flex-col gap-4 w-full md:w-112">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="title"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="description">Description</Label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-border rounded-md p-4 bg-transparent h-28"
            placeholder="Type your description here."
            id="description"
          />
          <p className="text-sm text-muted-foreground">
            This is your description video.
          </p>
        </div>

        <div className="w-full flex flex-wrap gap-2 shadow-none">
          {learnCategories.map((category) => (
            <Toggle
              variant={"outline"}
              key={category.id}
              value={category.id}
              onClick={() => {
                handleCategoryChange(category.category);
              }}
            >
              {category.category}
            </Toggle>
          ))}
        </div>

        <Flex className="items-center gap-4">
          <Button
            onClick={Reset}
            className="border flex items-center gap-2 border-border"
            variant={"secondary"}
          >
            Cancel
          </Button>
          <Button className="relative" onClick={handleSubmit}>
            <Box
              height={"100%"}
              w={progress}
              className="bg-white/10 absolute left-0 h-full top-0 duration-200"
            ></Box>
            {progress > 0 ? (
              <Flex className="items-center gap-2">
                <Spinner color="default" className="border-white" size="sm" />

                <p>Uploading...</p>
              </Flex>
            ) : (
              "Upload"
            )}
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default UploadContainer;
