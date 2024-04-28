import React from "react";

type Props = {
  url: string;
  video_id: string;
};

const VideoSection = ({ url, video_id }: Props) => {
  return (
    <section className="2xl:w-112 md:w-96 w-full h-full border-border rounded-md border center-div p-2">
      <video
        controls
        className="w-full h-[92%] bg-black rounded-xl object-contain"
        src={url}
      />
    </section>
  );
};

export default VideoSection;
