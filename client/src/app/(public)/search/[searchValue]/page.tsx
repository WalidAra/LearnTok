import MainView from "@/components/atoms/MainView";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import VideoSearchPanel from "@/components/features/search/VideoSearchPanel";
import UserSearchPanel from "@/components/features/search/UserSearchPanel";

type Props = {
  params: {
    searchValue: string;
  };
};

const Search = ({ params: { searchValue } }: Props) => {
  return (
    <MainView>
      <Tabs className="w-full" position="relative" variant="unstyled">
        <TabList className="center">
          <Tab>Videos</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="purple.500"
          borderRadius="1px"
        />
        <TabPanels>
          <VideoSearchPanel searchValue={searchValue} />
          <UserSearchPanel searchValue={searchValue} />
        </TabPanels>
      </Tabs>
    </MainView>
  );
};

export default Search;
