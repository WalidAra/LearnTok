import MainView from "@/components/atoms/MainView";
import { useFetch } from "@/hooks/useFetch";

export default async function Home() {
  const res = await useFetch({ method: "GET", endPoint: "/videos/" });

  return <MainView className="p-4 bg-background" >
    
  </MainView>;
}
