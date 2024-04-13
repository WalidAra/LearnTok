import { Box } from "@chakra-ui/react";
import React from "react";
import NormalNote from "./types/NormalNote";
import CommentNote from "./types/CommentNote";


const NoteContainer = () => {
  return (
    <Box className="w-full flex flex-col h-72 overflow-auto md:h-96">
      <NormalNote msg="liked your video" />
      <CommentNote msg="commented on your video" />
      <NormalNote msg="liked your video" />
      <CommentNote msg="commented on your video" />
      <NormalNote msg="liked your video" />
      <NormalNote msg="liked your video" />

      {/* <div className="w-full h-full flex items-center justify-center" >
      <p className="text-sm text-accent-foreground" >You got no notifications</p>
      </div> */}
    </Box>
  );
};

export default NoteContainer;
