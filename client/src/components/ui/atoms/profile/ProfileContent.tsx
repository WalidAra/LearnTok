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
import { MdOutlineCollections } from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import CreatedVidsPanel from "../../molecules/profile/CreatedVidsCard";
import { auth } from "@/auth";
import api from "@/lib/apis";
import CreatedVidsCard from "../../molecules/profile/CreatedVidsCard";
import CollectedVidCard from "../../molecules/profile/CollectedVidCard";

const ProfileContent = async () => {
  const session = await auth();

  let createdVideos: VideoProps[] = [];
  let collectedVideos: Bookmark[] = [];
  let likedVideos: any[] = [];
  if (session?.user?.name) {
    const created: HTTPResponse = await api.getUserCreatedVideos({
      token: session.user.name,
    });

    if (created.status) {
      createdVideos = created.data;
    }
    const collected: HTTPResponse = await api.getUserBookmarks({
      token: session.user.name,
    });

    if (collected.status) {
      collectedVideos = collected.data;
    }
    const liked: HTTPResponse = await api.getUserLikedVideos({
      token: session.user.name,
    });

    if (liked.status) {
      likedVideos = liked.data;
    }
  }

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
                {collectedVideos.length}
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
                {createdVideos.length}
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

        <TabPanels padding={0}>
          <TabPanel padding={0}>
            <Box
              className={
                collectedVideos.length > 0
                  ? "w-full grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-auto-fill"
                  : "w-full p-4 text-center"
              }
            >
              {collectedVideos.length > 0 ? (
                collectedVideos.map((v) => (
                  <CollectedVidCard key={v.id} video_id={v.video_id} />
                ))
              ) : (
                <div className="w-full h-full center-div ">
                  <Text>Your bookmark section is empty</Text>
                </div>
              )}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              className={
                createdVideos.length
                  ? "w-full grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-auto-fill"
                  : "w-full p-4 text-center"
              }
            >
              {createdVideos.length > 0 ? (
                createdVideos.map((v) => (
                  <CreatedVidsCard key={v.id} video={v} />
                ))
              ) : (
                <div className="w-full h-full center-div test">
                  <Text>You have not posted yet</Text>
                </div>
              )}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              className={
                likedVideos.length > 0
                  ? "w-full grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-auto-fill"
                  : "w-full p-4 text-center"
              }
            >
              {likedVideos.length > 0 ? (
                likedVideos.map((v) => (
                  <CollectedVidCard key={v.id} video_id={v.video_id} />
                ))
              ) : (
                <div className="w-full h-full center-div ">
                  <Text>Your liked videos section is empty</Text>
                </div>
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default ProfileContent;
