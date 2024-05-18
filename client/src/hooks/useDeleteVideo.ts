import { deleteVideo } from "@/providers/DeleteVideoProvider";
import { useContext } from "react";

export const useDeleteVideo = () => useContext(deleteVideo);
