import MainView from "@/components/atoms/MainView";
import UploadContainer from "@/components/features/upload/UploadContainer";
import { getCategories } from "@/lib/api/public/category";
import { auth } from "@/utils/auth";
import React from "react";

const Upload = async () => {
  const session = await auth();
  const res = await getCategories();

  if (session?.user?.name && session && res.status === true) {
    return (
      <MainView className=" center p-2 md:p-4 ">
        <section className="rounded-md border  gap-6 flex flex-col items-start justify-center p-2 md:p-4 border-border">
          <div>
            <p className="text-xl font-semibold">Upload Video</p>
            <p className="text-md text-muted-foreground mt-1">
              Post a video to your account
            </p>
          </div>
          <UploadContainer
            learnCategories={res.data as Category[]}
            token={session.user.name}
          />
        </section>
      </MainView>
    );
  }
  return null;
};

export default Upload;
