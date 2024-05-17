import Loading from "@/app/loading";
import { useFetch } from "@/hooks/useFetch";
import { TabPanel } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SearchUserCard from "./SearchUserCard";

type Props = {
  searchValue: string;
};

const UserSearchPanel = async ({ searchValue }: Props) => {
  const res = await useFetch({
    method: "POST",
    endPoint: "/user/search",
    body: { name: searchValue },
  });

  return (
    <TabPanel className="w-full flex gap-4 flex-col">
      <Suspense fallback={<Loading />}>
        {res.data.length === 0 ? (
          <div className="block text-center w-full h-full my-10">
            We found nothing sorry about that :\
          </div>
        ) : (
          res.data.map((user: User) => {
            return <SearchUserCard user={user} key={user.id} />;
          })
        )}
      </Suspense>
    </TabPanel>
  );
};

export default UserSearchPanel;
