import { Box } from '@chakra-ui/react';
import React from 'react'

export default function FullFeaturedVideoPlayer() {
  return (
    <div className="w-full center-div rounded-lg bg-black/85">
      <Box className='w-80  bg-black' >
        <video
          className="aspect-[9/16]"
          src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3"
        ></video>
      </Box>
    </div>
  );
}
