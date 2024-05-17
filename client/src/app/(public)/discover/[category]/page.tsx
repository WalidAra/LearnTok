import GlobalVideoCard from "@/components/molecules/GlobalVideoCard";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params: { category } }: Props) {
  const decodedCategory = decodeURIComponent(category);

  const res = await useFetch({
    method: "POST",
    endPoint: "/videos/category",
    body: { category: decodedCategory },
  });


  return (
    <div className="w-full flex flex-wrap gap-4 mt-2">
      {res.data.map((video: VideoClip) => (
        <GlobalVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
