import ScrollingContainer from "@/components/ui/global/ScrollingContainer";
import VideoPin from "@/components/ui/home/view/VideoPin";

export default function Home() {
  return (
    <ScrollingContainer className="p-2 w-full h-M53 items-center overflow-y-auto flex flex-col gap-2 mainView">
      <VideoPin />
      <VideoPin />
      <VideoPin />
    </ScrollingContainer>
  );
}
