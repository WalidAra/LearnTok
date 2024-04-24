import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Poster from "./SearchUserCard";
import api from "@/lib/apis";

type Props = {
  searchValue: string;
};

export default async function SearchedUsers({ searchValue }: Props) {
  const res: HTTPResponse = await api.searchUsers({ name: searchValue });

  console.log("====================================");
  console.log(res);
  console.log("====================================");
  return (
    <Box className="w-full sm:w-[80%] md:w-128 flex flex-col gap-3">
      {res.status || res.data.length > 0 ? (
        res.data.map((v: Client) => <Poster key={v.createdAt} />)
      ) : (
        <Box className="center-div">
          <Text>Sorry we found nothing</Text>
        </Box>
      )}
    </Box>
  );
}
