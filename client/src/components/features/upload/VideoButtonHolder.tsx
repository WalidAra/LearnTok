"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type Props = {
  setFile: Dispatch<SetStateAction<File | null>>;
};

function VideoButtonHolder({ setFile }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    if (inputRef.current?.files && inputRef.current.files.length > 0) {
      const selectedFile = inputRef.current.files[0];
      setFile(selectedFile);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className=" border-dashed rounded-xl border-2 border-gray-200 flex flex-col justify-center items-center w-[260px] aspect-[9/16] cursor-pointer ">
      <div className="cursor-pointer">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-xl">
              <FaCloudUploadAlt className="text-gray-300 text-6xl" />
            </p>
            <p className="text-xl font-semibold">Select video to upload</p>
          </div>

          <p className="text-gray-400 text-center mt-10 text-sm leading-10">
            MP4 or WebM or ogg <br />
            720x1280 resolution or higher <br />
            Up to 10 minutes <br />
            Less than 500 MB
          </p>
          <div
            onClick={handleClick}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full relative"
          >
            Select a video
          </div>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        name="upload-video"
        className="w-0 h-0"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default React.memo(VideoButtonHolder);
