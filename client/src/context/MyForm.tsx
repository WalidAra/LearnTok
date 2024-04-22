"use client";
import { createContext, useContext, useState } from "react";

type Props = {
  slide: {
    page: number;
    setPage: (value: number | ((prev: number) => number)) => void;
  };

  username: {
    username: string;
    setUsername: (value: string) => void;
  };

  fullName: {
    fullName: string;
    setFullName: (value: string) => void;
  };
};

const MyForm = createContext<Props>({
  slide: {
    page: 0,
    setPage: (value: number | ((prev: number) => number)) => {},
  },

  username: {
    username: "",
    setUsername: (value: string) => {},
  },

  fullName: {
    fullName: "",
    setFullName: (value: string) => {},
  },
});

import React from "react";

export default function MyFormProvider({ children }: Kids) {
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  return (
    <MyForm.Provider
      value={{
        username: {
          username,
          setUsername,
        },

        fullName: {
          fullName,
          setFullName,
        },

        slide: {
          page,
          setPage,
        },
      }}
    >
      {children}
    </MyForm.Provider>
  );
}

export const useMyForm = () => useContext(MyForm);
