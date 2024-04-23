import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import VideoFilter from "./VideoFilter";
import { MdOutlineCollections } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import CreatedVidsPanel from "../../molecules/profile/CreatedVidsPanel";

const ProfileContent = () => {
  return (
    <section className="w-full flex flex-col ">
      <Tabs
        display={"flex"}
        flexDirection={"column"}
        gap={6}
        variant="unstyled"
      >
        <TabList className="border-b border-border center-div flex-wrap md:gap-7">
          <Tab
            className="border-b-4 border-transparent"
            _selected={{ borderBottom: "4px solid red" }}
          >
            <Flex align="center">
              <MdOutlineCollections className="size-5 mr-2" />
              <Text fontSize="lg" fontWeight="500" me="12px">
                Collected
              </Text>
              <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                0
              </Text>
            </Flex>
          </Tab>
          <Tab
            className="border-b-4 border-transparent"
            _selected={{ borderBottom: "4px solid red" }}
          >
            <Flex align="center">
              <AiFillFormatPainter className="size-5 mr-2" />
              <Text fontSize="lg" fontWeight="500" me="12px">
                Created
              </Text>
              <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                0
              </Text>
            </Flex>
          </Tab>
          <Tab
            className="border-b-4 border-transparent"
            _selected={{ borderBottom: "4px solid red" }}
          >
            <Flex align="center">
              <LuHeart className="size-5 mr-2" />
              <Text fontSize="lg" fontWeight="500" me="12px">
                Liked
              </Text>
              <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                0
              </Text>
            </Flex>
          </Tab>
        </TabList>

        <Flex className="flex flex-col gap-3">
          <VideoFilter />
          <Text fontSize="2xl" className="pl-4" fontWeight="700">
            4 Results
          </Text>
        </Flex>

        <TabPanels padding={0}>
          <TabPanel padding={0}></TabPanel>
          <TabPanel>
            <CreatedVidsPanel />
          </TabPanel>
          <TabPanel>
            <Box className="w-full grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-auto-fill">
              {/* <VideoContainer /> */}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default ProfileContent;
