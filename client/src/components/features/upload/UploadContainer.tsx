/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useCallback, useState } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/cli/shadcn/form";
import { Textarea } from "@/components/cli/shadcn/textarea";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(10).max(100),
});

type Props = {
  token: string;
  learnCategories: Category[];
};

const UploadContainer = ({ token, learnCategories }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      title: "",
    },
  });
  const router = useRouter();
  const [categories, setCategories] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [categoryError, setCategoryError] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const Reset = useCallback(() => {
    setCategories([]);
    setFile(null);
    setProgress(0);
  }, []);

  const handleCategoryChange = useCallback(
    (category: string) => {
      if (categories.length > 0 && categoryError === true) {
        setCategoryError(false);
      }
      const index = categories.indexOf(category);

      if (index === -1) {
        setCategories([...categories, category]);
      } else {
        setCategories(categories.filter((c) => c !== category));
      }
    },
    [categories, categoryError]
  );

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isUploading === true) {
      return;
    }

    setIsUploading(true);

    if (categories.length === 0) {
      setCategoryError(true);
      return;
    }

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
              endPoint: "/video/upload",
              body: {
                title: values.title,
                description: values.description,
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
    } else if (file === null) {
      toast("Select a video to upload", {
        description: "select video with format mp4,ogg or webm",
        action: {
          label: "Undo",
          onClick: () => {},
        },
      });
    } else {
      toast("Wrong format", {
        description: "select video with format mp4,ogg or webm",
        action: {
          label: "Undo",
          onClick: () => {},
        },
      });
    }

    setIsUploading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full flex justify-center md:justify-normal flex-wrap items-center gap-6 "
      >
        {file !== null ? (
          <VideoHolder file={file} setFile={setFile} />
        ) : (
          <VideoButtonHolder setFile={setFile} />
        )}
        <Box className="flex flex-col gap-4 w-full md:w-112">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className=" md:w-96 xl:w-112 2xl:128 w-full"
                    placeholder="Title"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your video's display title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className=" md:w-96 xl:w-112 2xl:128 w-full"
                    placeholder="Type your description here."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your video's description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <Label
                htmlFor="message"
                className={categoryError ? "text-destructive" : ""}
              >
                Choose the category
              </Label>
              <div className="w-full flex flex-wrap gap-2 shadow-none">
                {learnCategories.map((category) => (
                  <Toggle
                    variant={"outline"}
                    key={category.id}
                    value={category.id}
                    onClick={() => {
                      handleCategoryChange(category.id);
                    }}
                  >
                    {category.category}
                  </Toggle>
                ))}
              </div>
            </div>
            <p
              key=":r1:-form-item-message"
              className="text-[0.8rem] ml-2 font-medium text-destructive"
            >
              {categoryError === true && "Pick one category at least"}
            </p>
          </div>

          <Flex className="items-center gap-4">
            <Button
              onClick={Reset}
              className="border flex items-center gap-2 border-border"
              variant={"secondary"}
            >
              Cancel
            </Button>
            <Button className="relative" type="submit">
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
      </form>
    </Form>
  );
};

export default UploadContainer;
