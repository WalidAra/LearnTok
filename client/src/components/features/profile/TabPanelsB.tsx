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

const TabPanelsB = () => {
  return (
    <section className="w-full flex flex-col ">
      <Tabs
        display={"flex"}
        flexDirection={"column"}
        gap={6}
        variant="unstyled"
      >
        <TabList className="border-b border-border center-panel">
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
                34
              </Text>
            </Flex>
          </Tab>
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
                345
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
                20
              </Text>
            </Flex>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="test md:flex md:flex-wrap md:gap-6 grid grid-cols-2 gap-2" >
            
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default TabPanelsB;
