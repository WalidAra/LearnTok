import { Box } from "@chakra-ui/react";
import React from "react";
import VideoContainer from "../../atoms/VideoContainer";
import api from "@/lib/apis";

type Props = {
  video_id: string;
};

export default async function LikedVideoCard({ video_id }: Props) {
  const res: HTTPResponse = await api.getVideoByID({ video_id });

  return <div>LikedVideoCard</div>;
}
