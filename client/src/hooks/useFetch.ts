import axios, { AxiosRequestConfig } from "axios";

export const useFetch = async ({
  endPoint = "/",
  method,
  TokenInclude = false,
  body,
  token,
}: Fetch) => {
  
  const header = process.env.NEXT_PUBLIC_TOKEN_HEADER as string;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

  try {
    const axiosConfig: AxiosRequestConfig = {
      method: method.toUpperCase(),
      url: BASE_URL + (TokenInclude ? "/private" : "/public") + endPoint,
      headers: {
        "Content-Type": "application/json",
        ...(TokenInclude && { [header]: token }),
      },
      data: body,
    };

    const response = await axios(axiosConfig);    
    return response.data as FetchResponse;
  } catch (error: any) {
    console.log("====================================");
    console.error(
      `\n====> Error Fetch at : \n ` + "\nurl :",
      BASE_URL + (TokenInclude ? "/private" : "/public") + endPoint + "\n\n",
      error.message,
      "\n"
    );
    console.log("====================================");

    if (endPoint.includes("profile")) {
      return {
        status: false,
        message: "Internal server error",
        data: {
          isExpired: true,
        },
      };
    }

    return {
      status: false,
      message: "Internal server error",
      data: null,
    };
  }
};
