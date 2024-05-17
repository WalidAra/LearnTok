/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/cli/shadcn/button";
import { useUserUpdate } from "@/providers/UpdateProfileProvider";
import { cn } from "@/lib/utils";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/react";

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
  const [isFetching, setIsFetching] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "fixed left-1/2 duration-200 flex-wrap gap-2 sm:gap-0 justify-center flex-col sm:flex-row z-50 -translate-x-1/2 p-2 rounded-md bg-primary flex sm:justify-between items-center md:w-128 w-[95%] sm:96 2xl:w-175",
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
          className=" hover:bg-white/10 text-white"
          variant={"ghost"}
        >
          Reset
        </Button>
        <Button
          onClick={async () => {
            setIsFetching(true);
            const res = await useFetch({
              method: "PUT",
              endPoint: "/auth/update",
              body: {
                bio,
                email,
                fullName: firstName + " " + lastName,
                password: newPassword,
                username,
                picture: pic,
              },
              token,
              TokenInclude: true,
            });

            if (res.status === true) {
              setIsFetching(false);
              router.push('/profile');
            }
          }}
          variant={"default"}
          className="bg-green-600 hover:bg-green-800 duration-200 text-primary-foreground"
        >
          {isFetching ? (
            <div className="flex items-center gap-2">
              <Spinner size="sm" />
              <span> Updating...</span>
            </div>
          ) : (
            "Save Changes"
          )}
        </Button>
      </Flex>
    </div>
  );
}
