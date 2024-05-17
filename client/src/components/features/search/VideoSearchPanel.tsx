import Loading from "@/app/loading";
import GlobalVideoCard from "@/components/molecules/GlobalVideoCard";
import { useFetch } from "@/hooks/useFetch";
import { TabPanel } from "@chakra-ui/react";
import React, { Suspense } from "react";

type Props = {
  searchValue: string;
};

const VideoSearchPanel = async ({ searchValue }: Props) => {
  const res = await useFetch({
    method: "POST",
    endPoint: "/videos/search",
    body: { title: searchValue },
  });

  return (
    <TabPanel className="w-full flex gap-4 flex-wrap">
      <Suspense fallback={<Loading />}>
        {res.data.length === 0 ? (
          <div className="block text-center w-full h-full my-10">
            We found nothing sorry about that :\
          </div>
        ) : (
          res.data.map((video: VideoClip) => {
            return <GlobalVideoCard key={video.id} video={video} />;
          })
        )}
      </Suspense>
    </TabPanel>
  );
};

export default VideoSearchPanel;
