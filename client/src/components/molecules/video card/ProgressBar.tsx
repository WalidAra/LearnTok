/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import { useFetch } from "@/hooks/useFetch";
import { Progress } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {
  videoRef: React.RefObject<HTMLVideoElement>;
  video_id: string;
};

export default function ProgressBar({ videoRef, video_id }: Props) {
  const { data: session } = useSession();
  const [progress, setProgress] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    const updateProgress = async () => {
      if (videoRef.current) {
        const { currentTime, duration } = videoRef.current;
        const calculatedProgress = (currentTime / duration) * 100;
        setProgress(calculatedProgress);

        if (
          calculatedProgress >= 50 &&
          session?.user?.name &&
          isDone === false
        ) {


          const res = await useFetch({
            method: "POST",
            body: { video_id },
            token: session.user.name,
            TokenInclude: true,
            endPoint: "/view/create",
          });

          if (res.status === false && res.data.isExists === true) {
            setIsDone(true);
          }
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
  }, [isDone, session?.user?.name, videoRef]);
  return (
    <div className="w-full">
      <Progress
        color="danger"
        size="sm"
        aria-label="progress"
        value={progress}
      />
    </div>
  );
}
