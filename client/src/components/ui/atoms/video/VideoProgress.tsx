/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import api from "@/lib/apis";

type Props = {
  videoRef: React.RefObject<HTMLVideoElement>;
  video_id: string;
  token: string | null;
};

export default function VideoProgress({ videoRef, token, video_id }: Props) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = async () => {
      if (videoRef.current) {
        const { currentTime, duration } = videoRef.current;
        const calculatedProgress = (currentTime / duration) * 100;
        setProgress(calculatedProgress);

        if (Math.floor(calculatedProgress) === 50 && token) {

          const res:HTTPResponse = await api.insertView({token , video_id});;
        }
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [videoRef]);

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <Progress
        color="danger"
        size="sm"
        aria-label="Loading..."
        value={progress}
      />
    </div>
  );
}
