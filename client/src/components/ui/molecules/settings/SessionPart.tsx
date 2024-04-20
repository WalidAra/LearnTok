import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Chip, Divider } from "@nextui-org/react";

const SessionPart = () => {
  return (
    <div className="border border-border w-full p-6 rounded-md flex flex-col gap-6">
      <p className="font-bold text-lg"> Sessions</p>

      <Box className="flex items-center justify-between">
        <p className="font-medium">Chrome, Bucharest 68.128.072.301</p>

        <Flex className="items-center gap-6">
          <p>DZ</p>

          <Chip color="danger">Chip</Chip>
        </Flex>
      </Box>

      <Divider />
      <Box className="flex items-center justify-between">
        <p className="font-medium">Chrome, Bucharest 68.128.072.301</p>

        <Flex className="items-center gap-6">
          <p>DZ</p>

          <Chip color="danger">Chip</Chip>
        </Flex>
      </Box>

      <Divider />
      <Box className="flex items-center justify-between">
        <p className="font-medium">Chrome, Bucharest 68.128.072.301</p>

        <Flex className="items-center gap-6">
          <p>DZ</p>

          <Chip color="danger">Chip</Chip>
        </Flex>
      </Box>

      <Divider />
      <Box className="flex items-center justify-between">
        <p className="font-medium">Chrome, Bucharest 68.128.072.301</p>

        <Flex className="items-center gap-6">
          <p>DZ</p>

          <Chip color="danger">Chip</Chip>
        </Flex>
      </Box>

      <Divider />
    </div>
  );
};

export default SessionPart;
