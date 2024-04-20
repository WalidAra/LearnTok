"use client";

import { Toggle } from "@/components/cli/toggle";
import React from "react";

export default function CategoryMenuItem({ c }: { c: Category }) {
  return <Toggle variant={'outline'} >{c.category}</Toggle>;
}
