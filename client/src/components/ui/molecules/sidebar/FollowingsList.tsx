"use client";
import React, { useState } from "react";
import { User } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@/components/cli/button";

export default function FollowingsList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full border border-border rounded-xl md:px-4 h-56 flex flex-col overflow-hidden relative">

    <Button>Se</Button>

      <Link href={"/user/user_id"}>
        <User
          className="md:justify-normal justify-center gap-0 md:gap-2  py-2 rounded-none"
          name={<div className="hidden md:block">Jane Doe</div>}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            className: "w-6 h-6 md:w-8 md:h-8",
          }}
        />
      </Link>
      <Link href={"/user/user_id"}>
        <User
          className="md:justify-normal justify-center gap-0 md:gap-2  py-2 rounded-none"
          name={<div className="hidden md:block">Jane Doe</div>}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            className: "w-6 h-6 md:w-8 md:h-8",
          }}
        />
      </Link>
      <Link href={"/user/user_id"}>
        <User
          className="md:justify-normal justify-center gap-0 md:gap-2  py-2 rounded-none"
          name={<div className="hidden md:block">Jane Doe</div>}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            className: "w-6 h-6 md:w-8 md:h-8",
          }}
        />
      </Link>
      <Link href={"/user/user_id"}>
        <User
          className="md:justify-normal justify-center gap-0 md:gap-2  py-2 rounded-none"
          name={<div className="hidden md:block">Jane Doe</div>}
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            className: "w-6 h-6 md:w-8 md:h-8",
          }}
        />
      </Link>
    </div>
  );
}
