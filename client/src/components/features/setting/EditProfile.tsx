"use client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PicUpdater from "./PicUpdater";
import { Label } from "@/components/cli/shadcn/label";
import { Input } from "@/components/cli/shadcn/input";
import { Textarea } from "@/components/cli/shadcn/textarea";
import { useUserUpdate } from "@/providers/UpdateProfileProvider";

type Props = {
  user: Client;
};

export default function EditProfile({ user }: Props) {
  const {
    setUsername,
    setEmail,
    username,
    email,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setBio,
    bio,
  } = useUserUpdate();

  return (
    <div className="rounded-md flex flex-col gap-4 w-full border border-border p-2 md:p-4 ">
      <Box className="flex flex-col">
        <p className="font-bold text-lg">Edit your profile</p>
        <Text className="text-base" fontSize={"14px"}>
          Here you can change user account information
        </Text>
      </Box>

      <PicUpdater picture={user.picture} />

      <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="username">Username </Label>
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="username"
            id="username"
            placeholder="username"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
      </Box>

      <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="first">First Name</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="first"
            id="first"
            placeholder="first"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="last">Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="last"
            id="last"
            placeholder="Email"
          />
        </div>
      </Box>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Bio</Label>
        <Textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Type your message here."
          id="message-2"
        />
      </div>
  
    </div>
  );
}
