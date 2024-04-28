"use client";
import React, { createContext, useContext, useState } from "react";

type Props = {
  picture: {
    pic: string;
    setPic(img: string): void;
  };
  username: string;
  setUsername(username: string): void;
  email: string;
  setEmail(email: string): void;
  bio: string;
  setBio(bio: string): void;
  oldPassword: string;
  setOldPassword(password: string): void;
  newPassword: string;
  setNewPassword(password: string): void;
  confirmNewPassword: string;
  setConfirmNewPassword(password: string): void;
  firstName: string;
  setFirstName(firstName: string): void;
  lastName: string;
  setLastName(lastName: string): void;
  Reset: () => void;
};

const UserUpdate = createContext<Props>({
  picture: {
    pic: "",
    setPic(img: string) {},
  },
  username: "",
  setUsername(username: string) {},
  email: "",
  setEmail(email: string) {},
  bio: "",
  setBio(bio: string) {},
  oldPassword: "",
  setOldPassword(password: string) {},
  newPassword: "",
  setNewPassword(password: string) {},
  confirmNewPassword: "",
  setConfirmNewPassword(password: string) {},
  firstName: "",
  setFirstName(firstName: string) {},
  lastName: "",
  setLastName(lastName: string) {},
  Reset() {},
});

export default function UserUpdateProvider({ children }: Kids) {
  const [pic, setPic] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const Reset = () => {
    setPic("");
    setUsername("");
    setEmail("");
    setBio("");
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <UserUpdate.Provider
      value={{
        picture: { pic, setPic },
        username,
        setUsername,
        email,
        setEmail,
        bio,
        setBio,
        oldPassword,
        setOldPassword,
        newPassword,
        setNewPassword,
        confirmNewPassword,
        setConfirmNewPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        Reset,
      }}
    >
      {children}
    </UserUpdate.Provider>
  );
}

export const useUserUpdate = () => useContext(UserUpdate);
