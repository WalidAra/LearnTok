import GlobalVideoCard from "@/components/molecules/GlobalVideoCard";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Discover = async () => {
  const res = await useFetch({ method: "GET", endPoint: "/videos/" });

  if (res.status === true) {
    return (
      <div className="w-full flex flex-wrap gap-4 mt-2">
        {res.data.map((video: VideoClip) => (
          <GlobalVideoCard key={video.id} video={video} />
        ))}
      </div>
    );
  }
};

export default Discover;
