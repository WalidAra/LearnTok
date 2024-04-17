/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const NotFound404 = () => {
  return (
    <Flex direction="column" align="center" pt={{ sm: "125px", lg: "75px" }}>
      <Image
        src={"/error.png"}
        w="400px"
        maxW="90%"
        mt={{ base: "4vh", lg: "20vh" }}
        mb="10px"
      />
      <Text
        fontSize={{ base: "40px", lg: "46px" }}
        fontWeight="700"
        mb="30px"
        textAlign={{ base: "center", md: "start" }}
      >
        Ah, dang. We didnt find that page.
      </Text>
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Text fontWeight="500" fontSize={{ base: "md", md: "lg" }} me="4px">
          Maybe it’s best you start back at our home page...
        </Text>
        <Link fontSize={{ base: "md", md: "lg" }} fontWeight="500" href="/">
          Return at home here.
        </Link>
      </Flex>
    </Flex>
  );
};

export default NotFound404;
