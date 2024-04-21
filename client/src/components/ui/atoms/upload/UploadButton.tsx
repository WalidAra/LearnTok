"use client";
import { Button } from "@/components/cli/button";
import { useUpload } from "@/context/Upload";
import React from "react";

export default function UploadButton() {
  const {
    title,
    description,
    category: { value },
    url,
  } = useUpload();

  const HandleUpload = async () => {
    console.log("====================================");
    console.log(title.current?.value, description.current?.value, value, url);
    console.log("====================================");
  };

  return <Button onClick={HandleUpload}>Upload</Button>;
}
