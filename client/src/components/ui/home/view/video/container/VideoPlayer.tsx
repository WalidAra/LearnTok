import React from "react";

export default function VideoPlayer() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3";

  return (
    <div className="sm:max-w-68 md:max-w-64 center_div">
      <div className="w-full bg-black center_div overflow-hidden rounded-lg" >
        <video
          src={url}
          className="sm:w-full aspect-[9/16] "
        ></video>
      </div>
    </div>
  );
}
