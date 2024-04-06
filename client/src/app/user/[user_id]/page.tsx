import React from "react";

type Props = {
  params: {
    user_id: string;
  };
};

export default function UserProfile({params:{user_id}}:Props) {
  return <div> {user_id}</div>;
}
