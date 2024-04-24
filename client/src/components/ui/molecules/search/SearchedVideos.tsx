import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DiscoverCard from "../DiscoverCard";
import api from "@/lib/apis";

type Props = {
  searchValue: string;
};

export default async function SearchedVideos({ searchValue }: Props) {
  const res: HTTPResponse = await api.searchVideos({ title: searchValue });


  return (
    <Box className="flex-wrap w-full gap-4 flex">
      {res.status && res.data.length > 0 ? (
        res.data.map((v: VideoProps) => <DiscoverCard video={v} key={v.id} />)
      ) : (
        <Box className="center-div">
          <Text textAlign={'start'} >Sorry we found nothing</Text>
        </Box>
      )}
    </Box>
  );
}
