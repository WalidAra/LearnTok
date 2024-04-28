"use client"; // react mode
import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import api from "@/lib/apis";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

type Props = {
  video_id: string;
  token: string;
};

const CommentContainer = ({ video_id, token }: Props) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | boolean>(null);

  const updateComments = async () => {
    const res: HTTPResponse = await api.getVideoComments({ video_id });
    if (res.status) {
      const data = res.data as CommentProps[];
      setComments(data.reverse());
    }
  };

  useEffect(() => {
    const GetComments = async () => {
      setIsLoading(true);

      try {
        const res: HTTPResponse = await api.getVideoComments({ video_id });
        if (res.status) {
          const data = res.data as CommentProps[];
          setComments(data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    GetComments();
  }, [video_id]);

  return (
    <Box className="w-full flex-1 flex flex-col gap-4 md:overflow-hidden ">
      <Box className="overflow-auto flex-1 gap-3 p-1 flex flex-col ">
        {comments.map((c) => (
          <CommentCard comment={c} key={c.id + "videoPageComment"} />
        ))}
      </Box>
      <CommentInput updateComments={updateComments} video_id={video_id} />

    </Box>
  );
};

export default CommentContainer;
