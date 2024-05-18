/* eslint-disable react-hooks/rules-of-hooks */

import { Text } from "@chakra-ui/react";
import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import UserShortPin from "./UserShortPin";
import { useFetch } from "@/hooks/useFetch";

type P = {
  user_id: string;

}

const PopularUsers = async () => {
    const res = await useFetch({ method: "GET", endPoint: "/popular/users" });

  return (
    <div className="w-full border border-border rounded-md overflow-hidden  p-2 ">
      <Text className="font-medium"> Popular users </Text>

      <ScrollShadow className="grid grid-cols-3 h-40 mt-2">

        {res.data.map((v:P) => (
          <UserShortPin key={v.user_id} user_id={v.user_id} />
        ))}
      </ScrollShadow>
    </div>
  );
};

export default PopularUsers;
