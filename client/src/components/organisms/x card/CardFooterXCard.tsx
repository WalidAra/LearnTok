import { useFetch } from "@/hooks/useFetch";
import { formatNumber } from "@/lib/formatNumber";
import { CardFooter } from "@nextui-org/react";
import React from "react";

type Props = {
  user_id: string;
};

export default async function CardFooterXCard({ user_id }: Props) {
  const res = await useFetch({
    method: "GET",
    endPoint: `/user/${user_id}/profile-status`,
  });


  if (res.status === true) {
    return (
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {formatNumber(res.data.followings)}
          </p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {formatNumber(res.data.followers)}
          </p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    );
  }
}
