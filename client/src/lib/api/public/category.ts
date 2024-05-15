/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "@/hooks/useFetch";

export const getCategories = async () => {
  const res = await useFetch({
    method: "GET",
    endPoint: "/categories",
  });

  return res;
};
