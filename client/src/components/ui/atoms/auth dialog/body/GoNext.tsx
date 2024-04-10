"use client";
import { Button } from "@/components/cli/button";
import { useMyForm } from "@/context/MyForm";
import React from "react";

export default function GoNext() {
  const {
    carousel: { api },
  } = useMyForm();

  return (
    <Button
      onClick={() => {
        api.scrollNext();
      }}
      className="w-full"
      type="submit"
    >
      Next
    </Button>
  );
}
