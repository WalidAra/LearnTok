import { Flex } from "@chakra-ui/react";
import React from "react";
import StatusInfo from "../../atoms/video/StatusInfo";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { User } from "@nextui-org/react";

const TrendCard = () => {
  return (
    <div className="border border-border p-3 rounded-xl flex gap-4">
      <video
        className="aspect-square object-cover w-48 rounded-lg bg-black"
        src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3"
      ></video>

      <Flex>
        <Flex className="flex-col gap-3 max-w-[80%]">
          <h2 className="text-xl font-semibold line-clamp-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            laudantium omnis rerum error libero officia? Similique, id magnam
            non amet, optio accusamus ullam adipisci nisi perspiciatis,
            dignissimos quam aliquam soluta.
          </h2>

          <Flex className="items-center gap-2">
            <StatusInfo count={44} icon={<AiFillEye />} label="views" />
            <StatusInfo count={45} icon={<AiFillHeart />} label="likes" />
          </Flex>

          <User
            className="justify-normal"
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              isBordered: true,
            }}
          />
          <p className="line-clamp-1 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eos
            est incidunt iure. Molestiae distinctio cumque a amet iusto quae?
            Voluptatem quos natus at autem ratione suscipit quo vitae nostrum.
          </p>
        </Flex>
      </Flex>
    </div>
  );
};

export default TrendCard;
