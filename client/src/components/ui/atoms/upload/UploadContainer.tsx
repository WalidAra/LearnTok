/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/cli/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/cli/form";
import { Input } from "@/components/cli/input";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Textarea } from "@/components/cli/textarea";
import { Label } from "@/components/cli/label";
import DiscardUpload from "./DiscardUpload";
import api from "@/lib/apis";
import { Toggle } from "@/components/cli/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/cli/tooltip";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/firebase/firebase";
import { Spinner } from "@nextui-org/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(10).max(100),
});

const UploadContainer = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [videoAsset, setVideoAsset] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [cats, setCats] = useState<Category[]>([]);
  const [url, setUrl] = useState<string>("");
  const { data: session } = useSession();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      title: "",
    },
  });
  const router = useRouter();

  useEffect(() => {
    api.getCategories().then((res: HTTPResponse) => {
      if (res.status) {
        setCats(res.data);
      }
    });
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      const fileRef = ref(storage, `videos/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(fileRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log("error :(");
        },
        () => {
          console.log("success!!");
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            router.push("/profile");
          });
        }
      );
    }
  };

  const HandleSelectCategories = (category_id: string) => {
    const index = categories.indexOf(category_id);
    if (index !== -1) {
      const newValue = [...categories];
      newValue.splice(index, 1);
      setCategories(newValue);
    } else {
      setCategories([...categories, category_id]);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUploading(true);
    const token = session?.user?.name ?? "";

    const res: HTTPResponse = await api.uploadVideo({
      categories: categories,
      description: values.description,
      title: values.title,
      url: url,
      token: token,
    });
    setIsUploading(false);
    if (res.status) {
      setVideoAsset(false);
      setFileName("");
      router.refresh();
    } else if (res.data.offensive) {
      toast(res.message);
      const videoUrl = url;
      const videoRef = ref(storage, videoUrl);
      deleteObject(videoRef)
        .then(() => {
          console.log("Video deleted successfully!");
          router.refresh();
        })
        .catch((error: any) => {
          console.error("Error deleting video:", error);
        });
    }
  }

  return (
    <Form {...form}>
      <form className="flex-1 justify-center flex flex-wrap gap-4">
        <Flex className="flex-col gap-2">
          {videoAsset ? (
            <div className="w-[260px] h-[458px] center-div bg-black overflow-hidden  rounded-xl">
              <video
                className="w-full h-full object-cover"
                src={url}
                controls
              ></video>
            </div>
          ) : (
            <div className=" border-dashed rounded-xl border-2 border-gray-200 flex flex-col justify-center items-center w-[260px] h-[458px] cursor-pointer ">
              <label className="cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">
                      <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                    </p>
                    <p className="text-xl font-semibold">
                      Select video to upload
                    </p>
                  </div>

                  <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                    MP4 or WebM or ogg <br />
                    720x1280 resolution or higher <br />
                    Up to 10 minutes <br />
                    Less than 2 GB
                  </p>
                  <div
                    onClick={() => {
                      uploadRef.current?.click();
                    }}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full relative"
                  >
                    <Box
                      height={"100%"}
                      w={uploadProgress}
                      className="bg-white/10 absolute left-0 h-full top-0 duration-200"
                    ></Box>
                    {uploadProgress > 0 ? (
                      <Flex className="items-center gap-2">
                        <Spinner
                          color="default"
                          className="border-white"
                          size="sm"
                        />

                        <p>Uploading...</p>
                      </Flex>
                    ) : (
                      "Select file"
                    )}
                  </div>
                </div>
                <input
                  ref={uploadRef}
                  type="file"
                  name="upload-video"
                  className="w-0 h-0"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}
          {videoAsset && fileName && (
            <Box className="h-10 w-full flex justify-between items-center px-2">
              <Text className="line-clamp-1">{fileName}</Text>

              <TooltipProvider delayDuration={1}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => {
                        setVideoAsset(false);
                        setFileName("");
                      }}
                      variant={"outline"}
                      size={"icon"}
                      className="shrink-0"
                    >
                      <LuTrash className="size-5 text-red-500  " />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Delete</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Box>
          )}
        </Flex>
        <Box className=" flex flex-col gap-6 justify-center md:justify-normal md:w-96 xl:w-112 2xl:128 w-full">
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

          <div className="grid w-full gap-2">
            <Label htmlFor="message">Choose the category</Label>
            <Box className="flex w-full flex-wrap gap-2">
              {cats.map((c) => (
                <div
                  onClick={() => {
                    HandleSelectCategories(c.id);
                  }}
                  key={c.id + "upload%"}
                >
                  <Toggle size={"sm"} variant={"outline"}>
                    {c.category}
                  </Toggle>
                </div>
              ))}
            </Box>
          </div>

          <Flex className="items-center gap-6 justify-between md:justify-normal">
            <DiscardUpload />
            <Button
              onClick={form.handleSubmit(onSubmit)}
              type="submit"
              className="flex items-center gap-2"
            >
              {isUploading && (
                <Spinner color="default" className="border-white" size="sm" />
              )}
              Upload
            </Button>
          </Flex>
        </Box>
      </form>
    </Form>
  );
};

export default UploadContainer;
