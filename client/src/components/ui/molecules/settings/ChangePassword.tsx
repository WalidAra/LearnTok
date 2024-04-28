"use client";
import { Input } from "@/components/cli/input";
import { Label } from "@/components/cli/label";
import { useUserUpdate } from "@/context/user-update";
import { Box } from "@chakra-ui/react";
import React from "react";

const ChangePassword = () => {
  const {
    setOldPassword,
    setNewPassword,
    setConfirmNewPassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
  } = useUserUpdate();

  return (
    <div className="border border-border p-6 rounded-md flex flex-col gap-6">
      <Box className="flex flex-col">
        <p className="font-bold text-lg">Change Password</p>
        <p className="text-base">Here you can set your new password</p>
      </Box>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="old">Old Password</Label>
        <Input
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          type="old"
          id="old"
          placeholder="old"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="new">New Password</Label>
        <Input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="new"
          id="new"
          placeholder="new"
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="new-password">New Password Confirmation</Label>
        <Input
         value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          type="new-password"
          id="new-password"
          placeholder="new-password"
        />
      </div>
    </div>
  );
};

export default ChangePassword;
