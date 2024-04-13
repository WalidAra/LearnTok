import React from "react";
import Notification from "../Notification";
import { Box } from "@chakra-ui/react";

type Props = {
  msg:string;
}

const CommentNote = ({msg}:Props) => {
  return (
    <Notification msg={msg}>
      <Box className="text-sm font-medium bg-accent rounded-md text-accent-foreground  p-3 w-full">
        <p className=" line-clamp-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </Box>
    </Notification>
  );
};

export default CommentNote;
