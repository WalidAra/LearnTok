"use client";
import { createContext, useContext, useState } from "react";
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

  data: {
    email: string;
    password: string;
    username: string;
    fullName: string;
  };
};

const MyForm = createContext<Props>({
  carousel: { api: undefined, setApi: undefined },
  form: {
    current: 1,
    setCurrent: (value: number) => {},
  },

  data: {
    email: "",
    password: "",
    username: "",
    fullName: "",
  },
});

import React from "react";

export default function MyFormProvider({ children }: Kids) {
  const [current, setCurrent] = useState<number>(1);
  const [api, setApi] = React.useState<CarouselApi>();
  return (
    <MyForm.Provider
      value={{
        data: {
          email: "",
          password: "",
          username: "",
          fullName: "",
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
