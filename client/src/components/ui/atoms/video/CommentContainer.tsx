import { Box } from "@chakra-ui/react";
import React from "react";
import CommentInput from "./CommentInput";
import CommentCard from "./CommentCard";

const comments = [
  "Short comment",
  "This is a medium-length comment. It provides more information than a short comment but isn't too long.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies nisl eget ex mattis, non vulputate velit volutpat. Vestibulum vehicula, velit at venenatis eleifend, mauris dui scelerisque massa, vel convallis justo lorem a est. In vitae sapien vitae magna euismod mattis. Suspendisse ut ligula non nulla hendrerit dapibus. Vivamus nec placerat quam, quis scelerisque turpis. Pellentesque non risus tincidunt, lacinia justo sed, aliquam nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam at nisl ligula. Nulla posuere sapien ac ipsum vehicula, a congue ligula eleifend. Mauris non sapien in justo vestibulum luctus non in arcu. Ut commodo felis in tortor euismod, quis bibendum libero pharetra.",
  "Another short comment",
  "This is another medium-length comment. It provides additional information to the discussion.",
  "Etiam euismod velit sed lacinia vestibulum. Aliquam a ligula in leo convallis interdum. Donec consequat, lectus non ullamcorper fermentum, enim libero posuere magna, vitae tristique ipsum dolor id augue. Nunc accumsan dui sed metus fringilla lacinia. Nam id est eget mi tincidunt efficitur nec non ex. Nullam ut posuere nunc, sit amet faucibus dui. Morbi varius metus id mi auctor, ac aliquam orci feugiat. Fusce posuere ligula nec purus ullamcorper placerat.",
  "A very short comment",
  "This comment is very long and detailed, covering multiple aspects of the topic being discussed. It provides insights and analysis, making it a valuable contribution to the conversation.",
  "Cras sollicitudin purus nec magna tempor convallis. Duis vel leo nec mauris sollicitudin dignissim. Fusce et dictum arcu. Morbi et erat eu eros vestibulum mattis. Nulla facilisi. Nam sodales justo vitae metus eleifend, nec pharetra velit laoreet. Donec nec mi urna. Quisque sed risus sit amet tortor vestibulum ultrices. Vivamus vitae fermentum enim. Donec nec metus nec eros tempor sodales sit amet non sem. Duis ultricies velit nec dapibus fermentum. Vestibulum consectetur, nisi nec rutrum eleifend, neque neque condimentum nisi, non cursus sapien leo ac justo. Ut at leo nec nisl tempor cursus vel vel mi. Nulla facilisi."
];

const CommentContainer = () => {
  return (
    <Box className="w-full flex-1 flex flex-col gap-4 md:overflow-hidden ">
      <Box className="overflow-auto flex-1 gap-3 p-1 grid ">
        {comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </Box>
      <CommentInput />
    </Box>
  );
};

export default CommentContainer;
