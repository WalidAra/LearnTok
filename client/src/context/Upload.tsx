"use client";
import { createContext, useContext, useState } from "react";

type Props = {
  category: {
    categories: string[];
    setCategories: (value: string[]) => void;
  };

  url: {
    url: string;
    setUrl: (value: string) => void;
  };
};

const Upload = createContext<Props>({
  category: {
    categories: [],
    setCategories: (value: string[]) => {},
  },
  url: {
    url: "",
    setUrl: (value: string) => {},
  },
});

import React from "react";

export default function UploadProvider({ children }: Kids) {
  const [categories, setCategories] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");

  return (
    <Upload.Provider
      value={{
        category: { setCategories, categories },

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
