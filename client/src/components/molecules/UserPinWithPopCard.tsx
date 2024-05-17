import React from "react";
import TwitterCard from "../organisms/TwitterCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/cli/shadcn/tooltip";
import XCard from "../organisms/XCard";

type Props = {
  user: User;
};

export default function UserPinWithPopCard({ user }: Props) {
  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip>
        <TooltipTrigger>
          <TwitterCard
            fullName={user.fullName}
            pic={user.picture}
            status_name={user.Status.name}
            username={user.username}
          />
        </TooltipTrigger>
        <TooltipContent side="left" className="p-0 m-0 bg-transparent ">
          <XCard user={user} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
