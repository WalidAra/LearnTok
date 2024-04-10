"use client";
import { createContext, useContext, useRef, useState } from "react";
import { type CarouselApi } from "@/components/cli/carousel";

type Props = {
  carousel: {
    api: any;
    setApi: any;
  };
  form: {
    current: number;
    setCurrent: (value: number) => void;
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
  carousel: { api: undefined, setApi: undefined },
  form: {
    current: 1,
    setCurrent: (value: number) => {},
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
  const [current, setCurrent] = useState<number>(1);
  const [api, setApi] = React.useState<CarouselApi>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

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

        carousel: { api, setApi },
        form: { current, setCurrent },
      }}
    >
      {children}
    </MyForm.Provider>
  );
}

export const useMyForm = () => useContext(MyForm);
