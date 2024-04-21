"use client";

import React from "react";
import { Toggle } from "@/components/cli/toggle";
import { useUpload } from "@/context/Upload";

export default function CategoryMenuItem({ c }: { c: Category }) {
  const {
    category: { setValue, value },
  } = useUpload();

  const handleToggleCategory = () => {
    const index = value.indexOf(c.id);
    if (index !== -1) {
      const newValue = [...value];
      newValue.splice(index, 1);
      setValue(newValue);
    } else {
      setValue([...value, c.id]);
    }

    console.log('====================================');
    console.log(value);
    console.log('====================================');
  };

  return (
    <Toggle onClick={handleToggleCategory} variant={"outline"}>
      {c.category}
    </Toggle>
  );
}
