import { Spinner } from "@nextui-org/react";
import React from "react";

type Props = {};

export default function LoadingSpinner() {
  return (
    <div className="flex-1 center">
      <Spinner />
    </div>
  );
}
