"use client";

import { Button } from "@/components/cli/button";
import { useUserUpdate } from "@/context/user-update";
import api from "@/lib/apis";
import { cn } from "@/lib/utils";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  token: string;
};

export default function UpdateContainer({ token }: Props) {
  const router = useRouter();
  const {
    bio,
    confirmNewPassword,
    email,
    firstName,
    lastName,
    newPassword,
    oldPassword,
    username,
    Reset,
    picture: { pic },
  } = useUserUpdate();
  return (
    <div
      className={cn(
        "absolute left-1/2 duration-200 flex-wrap gap-2 sm:gap-0 justify-center flex-col sm:flex-row z-50 -translate-x-1/2 py-2 px-4 rounded-md bg-primary flex sm:justify-between items-center md:w-128 w-[95%] sm:96 2xl:w-175",
        bio ||
          confirmNewPassword ||
          firstName ||
          email ||
          oldPassword ||
          username ||
          pic ||
          lastName ||
          newPassword
          ? "bottom-4"
          : "bottom-0 translate-y-full"
      )}
    >
      <p className="text-sm text-primary-foreground">
        Careful you have unsaved changes
      </p>
      <Flex className="items-center gap-4">
        <Button
          onClick={Reset}
          className="text-primary-foreground"
          variant={"ghost"}
        >
          Reset
        </Button>
        <Button
          onClick={async () => {
            console.log(bio);
            console.log(email);
            console.log(firstName);
            console.log(lastName);
            console.log(confirmNewPassword);
            console.log(newPassword);
            console.log(oldPassword);
            console.log(username);
            console.log(pic);

            const res: HTTPResponse = await api.updateUserProfile({
              token,
              email,
              bio,
              confirmNewPassword,
              oldPassword,
              username,
              firstName,
              lastName,
              newPassword,
              pic,
            });

            if (res.status) {
              router.refresh();
            }
          }}
          variant={"default"}
          className="bg-green-600 hover:bg-green-800 duration-200 text-primary-foreground"
        >
          Save Changes
        </Button>
      </Flex>
    </div>
  );
}
