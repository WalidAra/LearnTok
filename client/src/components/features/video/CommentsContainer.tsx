/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Box } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";
import { useFetch } from "@/hooks/useFetch";

type Props = {
  comments: CommentClip[];
  video_id: string;
};

const CommentsContainer = ({ comments, video_id }: Props) => {
  const [videoComments, setVideoComments] = useState<CommentClip[]>(comments);

  const updateCommentsArray = useCallback(async () => {
    const res = await useFetch({
      method: "GET",
      endPoint: `/videos/${video_id}/comments`,
    });

    if (res.status === true) {
      setVideoComments(res.data as CommentClip[]);
    }
  }, []);

  return (
    <Box className="w-full flex-1 flex flex-col gap-4 overflow-hidden ">
      <Box className=" flex-1 gap-3 p-1 flex flex-col overflow-auto">
        {videoComments.map((comment) => (
          <CommentCard
            id={comment.User.id}
            key={comment.id}
            comment={comment.comment}
            picture={comment.User.picture}
            status_name={comment.User.Status.name}
            username={comment.User.username}
          />
        ))}
      </Box>
      <CommentInput
        video_id={video_id}
        updateCommentsArray={updateCommentsArray}
      />
    </Box>
  );
};

export default CommentsContainer;
