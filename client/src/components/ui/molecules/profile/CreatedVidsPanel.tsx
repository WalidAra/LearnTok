import { Box, Text } from "@chakra-ui/react";
import React from "react";
import VideoContainer from "../../atoms/VideoContainer";
import { auth } from "@/auth";
import api from "@/lib/apis";

const CreatedVidsPanel = async () => {
  const session = await auth();
  let videos: VideoProps[] = [];
  if (session?.user?.name) {
    const res: HTTPResponse = await api.getUserCreatedVideos({
      token: session.user.name,
    });

    if (res.status) {
      videos = res.data;
    }
  }

  return (
    <Box className="w-full grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-auto-fill">
      {videos.length > 0 ? (
        videos.map((v) => <VideoContainer key={v.id} video={v} />)
      ) : (
        <div className="w-full h-full center-div">
          <Text>You have not posted yet</Text>
        </div>
      )}
    </Box>
  );
};

export default CreatedVidsPanel;
