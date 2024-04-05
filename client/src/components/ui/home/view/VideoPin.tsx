import React from "react";
import ColorSync from "../../global/ColorSync";
import Poster from "./video/Poster";
import VideoContainer from "./video/VideoContainer";

export default function VideoPin() {
  return (
    <ColorSync
      className="border h-full flex-shrink-0 snap-center w-full sm:w-450 xl:w-450 rounded flex flex-col p-2 gap-2"
      onDark={""}
      onLight={"border-border"}
    >
      <Poster />
      <VideoContainer />
    </ColorSync>
  );
}
