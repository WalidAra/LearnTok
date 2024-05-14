import React from "react";
import { AiFillFormatPainter } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import { MdOutlineCollections } from "react-icons/md";
import {
  Tabs,
  TabList,
  Tab,
  Flex,
  Text,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import VideoPin from "./VideoPin";

type Props = {
  createdVids: VideoClip[];
  savedVids: VideoClip[];
  likedVids: VideoClip[];
  isClient?: boolean;
};

const TabPanelsB = ({
  createdVids,
  likedVids,
  savedVids,
  isClient = false,
}: Props) => {
  return (
    <section className="w-full flex flex-col flex-1 ">
      <Tabs
        display={"flex"}
        flexDirection={"column"}
        gap={6}
        variant="unstyled"
      >
        <TabList className="border-b border-border center-panel">
          {isClient && (
            <Tab
              className="border-b-4 border-transparent"
              _selected={{ borderBottom: "4px solid #6C5ECF" }}
            >
              <Flex align="center">
                <MdOutlineCollections className="size-5 mr-2" />
                <Text fontSize="lg" fontWeight="500" me="12px">
                  Collected
                </Text>
                <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                  {savedVids.length}
                </Text>
              </Flex>
            </Tab>
          )}
          <Tab
            className="border-b-4 border-transparent"
            _selected={{ borderBottom: "4px solid #6C5ECF" }}
          >
            <Flex align="center">
              <AiFillFormatPainter className="size-5 mr-2" />
              <Text fontSize="lg" fontWeight="500" me="12px">
                Created
              </Text>
              <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                {createdVids.length}
              </Text>
            </Flex>
          </Tab>
          <Tab
            className="border-b-4 border-transparent"
            _selected={{ borderBottom: "4px solid #6C5ECF" }}
          >
            <Flex align="center">
              <LuHeart className="size-5 mr-2" />
              <Text fontSize="lg" fontWeight="500" me="12px">
                Liked
              </Text>
              <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                {likedVids.length}
              </Text>
            </Flex>
          </Tab>
        </TabList>

        <TabPanels>
          {isClient && (
            <TabPanel className=" md:flex md:flex-wrap md:gap-6 grid grid-cols-2 gap-2">
              {savedVids.map((video) => (
                <VideoPin key={video.id + "collected-profile"} video={video} />
              ))}
            </TabPanel>
          )}
          <TabPanel className="md:flex md:flex-wrap md:gap-6 grid grid-cols-2 gap-2">
            {createdVids.map((video) => (
              <VideoPin key={video.id + "created-profile"} video={video} />
            ))}
          </TabPanel>
          <TabPanel className=" md:flex md:flex-wrap md:gap-6 grid grid-cols-2 gap-2">
            {likedVids.map((video) => (
              <VideoPin key={video.id + "liked-profile"} video={video} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default TabPanelsB;
