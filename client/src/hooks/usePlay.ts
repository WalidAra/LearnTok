"use client";

import { CurrentIndex } from "@/providers/currentVideo";
import { useContext } from "react";

export const useCurrentVideo = () => useContext(CurrentIndex);
