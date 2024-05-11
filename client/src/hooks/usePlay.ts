"use client";

import { Play } from "@/providers/currentVideo";
import { useContext } from "react";

export const useCurrentVideo = () => useContext(Play);
