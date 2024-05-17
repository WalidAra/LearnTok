import MainView from "@/components/atoms/MainView";
import React from "react";
import { Divider } from "@nextui-org/react";
import DiscoverNavCarousel from "@/components/features/discover/DiscoverNavCarousel";
import { Box } from "@chakra-ui/react";

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainView  className="flex flex-col p-2 gap-2 ">
      <DiscoverNavCarousel />
      <Divider className="bg-border" />
      <Box className="w-full flex-1">{children}</Box>
    </MainView>
  );
}
