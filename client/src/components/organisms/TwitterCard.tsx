import { User } from "@nextui-org/react";
import React from "react";
import Badge from "../atoms/Badge";
import { defaultPic } from "@/assets/pfp";
import { cn } from "@/lib/utils";


type Props = {
  username: string;
  fullName: string;
  pic: string;
  status_name: string;
  hoverUsername?: boolean;
};

const TwitterCard = ({
  fullName,
  pic,
  status_name,
  username,
  hoverUsername = false,
}: Props) => {
  return (
    <User
      className="gap-3"
      name={
        <div className="flex  items-center gap-2">
          <span
            className={cn(
              "",
              hoverUsername
                ? "text-foreground hover:underline cursor-pointer"
                : ""
            )}
          >
            {username}
          </span>
          <Badge status_name={status_name} />
        </div>
      }
      description={fullName}
      avatarProps={{
        src: pic ? pic : defaultPic,
        isBordered: true,
      }}
    />
  );
};

export default TwitterCard;
