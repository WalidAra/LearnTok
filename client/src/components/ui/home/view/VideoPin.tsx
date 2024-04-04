import React from "react";
import ColorSync from "../../global/ColorSync";
import Poster from "./video/Poster";
import VideoContainer from "./video/VideoContainer";

export default function VideoPin() {
  return (
    <ColorSync
      className="m-auto p-2 gap-2 w-full sm:w-450 xl:w-128 border h-full flex-shrink-0 snap-center flex flex-col"
      onDark={""}
      onLight={"border-border"}
    >
      <Poster />
      <VideoContainer />
    </ColorSync>
  );
}
