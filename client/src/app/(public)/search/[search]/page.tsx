import MainView from "@/components/ui/molecules/MainView";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import SearchedVideos from "@/components/ui/molecules/search/SearchedVideos";
import SearchedUsers from "@/components/ui/molecules/search/SearchedUsers";

type Props = {
  params: {
    search: string;
  };
};

const Search = ({ params: { search } }: Props) => {
  return (
    <MainView className="p-2 md:p-4">
      <Tabs variant={'unstyled'} position="relative" >
        <TabList className="center-div ">
          <Tab>Videos</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <SearchedVideos searchValue={search} />
          </TabPanel>
          <TabPanel>
            <SearchedUsers searchValue={search} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainView>
  );
};

export default Search;
