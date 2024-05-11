import MainView from "@/components/atoms/MainView";
import House from "@/components/utils/House";
import { useFetch } from "@/hooks/useFetch";
import CurrentVideoProvider from "@/providers/currentVideo";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const res = await useFetch({ method: "GET", endPoint: "/videos/" });

  return (
    <MainView className="p-4 bg-background ">
      {/* <CurrentVideoProvider>
        <House>
          <Suspense fallback={<Loading />}>
            <p className="flex-1 bg-red-500 w-full">{res.message}</p>
          </Suspense>
        </House>
      </CurrentVideoProvider> */}
    </MainView>
  );
}
