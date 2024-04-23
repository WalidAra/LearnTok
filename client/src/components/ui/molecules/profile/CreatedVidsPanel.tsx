import { Box } from "@chakra-ui/react";
import React from "react";
import VideoContainer from "../../atoms/VideoContainer";
import { auth } from "@/auth";
import api from "@/lib/apis";

const CreatedVidsPanel = async () => {
  const session = await auth();

  if (session?.user?.name) {
    const res: HTTPResponse = await api.getUserCreatedVideos({
      token: session.user.name,
    });

    console.log("====================================");
    console.log(res);
    console.log("====================================");
  }

  return (
    <Box className="w-full grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-auto-fill">
      <VideoContainer />
    </Box>
  );
};

export default CreatedVidsPanel;
