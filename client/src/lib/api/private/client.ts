/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from "@/hooks/useFetch";

type Token = {
  token: string;
};

export const getProfile = async ({ token }: Token) => {
  const res = await useFetch({
    method: "GET",
    endPoint: "/auth/profile",
    TokenInclude: true,
    token: token,
  });

  return res;
};
