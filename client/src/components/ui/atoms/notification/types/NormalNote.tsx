import React from "react";
import Notification from "../Notification";

type Props = {
  msg: string;
};


const NormalNote = ({msg}:Props) => {
  return <Notification msg={msg} />;
};

export default NormalNote;
