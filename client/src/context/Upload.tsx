"use client";
import { createContext, useContext, useRef, useState } from "react";

type Props = {
  title: any;

  description: any;
  category: {
    value: string[];
    setValue: (value: string[]) => void;
  };

  url: {
    url: string;
    setUrl: (value: string) => void;
  };
};

const Upload = createContext<Props>({
  title: null,
  description: null,
  category: {
    value: [],
    setValue: (value: string[]) => {},
  },
  url: {
    url: "",
    setUrl: (value: string) => {},
  },
});

import React from "react";

export default function UploadProvider({ children }: Kids) {
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLTextAreaElement>();
  const [categories, setCategories] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");

  return (
    <Upload.Provider
      value={{
        category: { setValue: setCategories, value: categories },
        description: description,
        title: title,
        url: {
          setUrl: setUrl,
          url: url,
        },
      }}
    >
      {children}
    </Upload.Provider>
  );
}

export const useUpload = () => useContext(Upload);
