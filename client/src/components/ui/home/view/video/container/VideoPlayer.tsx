/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useEffect, useState } from "react";
import Interactions from "./Interactions";
import SoundToggle from "./interactions/SoundToggle";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="sm:max-w-68 w-full relative overflow-hidden rounded-xl bg-black h-full center_div">
      <video
        loop
        className="w-full xl:h-full"
        ref={videoRef}
        src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3"
        autoPlay={isVisible} // This will start playing the video when isVisible is true
      ></video>
      <div className="absolute w-full top-4 flex justify-end pr-5 " >
        <SoundToggle />
      </div>
      <Interactions />
    </div>
  );
}
