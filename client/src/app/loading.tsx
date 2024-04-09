import MainView from "@/components/ui/molecules/MainView";
import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <MainView className="flex items-center justify-center">
      <Spinner  size="lg" />
    </MainView>
  );
}
