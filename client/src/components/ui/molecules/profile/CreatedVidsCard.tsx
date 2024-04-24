import { Box } from "@chakra-ui/react";
import React from "react";
import VideoContainer from "../../atoms/VideoContainer";
import DeleteVideoButton from "../../atoms/profile/card/DeleteVideoButton";

type Props = {
  video: VideoProps;
};

const CreatedVidsCard = async ({ video }: Props) => {
  return (
    <Box className={"relative"}>
      <DeleteVideoButton />
      <VideoContainer video={video} />
    </Box>
  );
};

export default CreatedVidsCard;
