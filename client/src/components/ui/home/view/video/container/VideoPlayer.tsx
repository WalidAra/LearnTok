"use client";
import React, { useEffect, useRef, useState } from "react";
import SoundBtn from "./interactions/SoundBtn";
import PlayPauseBtn from "./interactions/PlayPauseBtn";
import { cn } from "@/lib/utils";

export default function VideoPlayer() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b2isVisible";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement?.play();
        } else {
          videoElement?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility);
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="sm:max-w-68 md:max-w-64 center_div">
      <div
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        className="w-full bg-black center_div overflow-hidden rounded-lg relative"
      >
        <video
          loop={true}
          ref={videoRef}
          src={url}
          className="sm:w-full aspect-[9/16]"
        />
        <div
          className={cn(
            "top-4 right-4 absolute scale-50 duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <SoundBtn videoRef={videoRef} />
        </div>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 duration-200 -translate-x-1/2 -translate-y-1/2",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <PlayPauseBtn videoRef={videoRef} />
        </div>
      </div>
    </div>
  );
}
