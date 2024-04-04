import ScrollingContainer from "@/components/ui/global/ScrollingContainer";
import VideoPin from "@/components/ui/home/view/VideoPin";

export default function Home() {
  return (
    <ScrollingContainer className="w-full h-M53 scroll-snap-type p-2 gap-2 flex-col flex overflow-auto ">
      <VideoPin />
      <VideoPin />
      <VideoPin />
    </ScrollingContainer>
  );
}
