type FetchResponse = {
  status: boolean;
  message: string;
  data: any;
  token?: string;
};

type Fetch = {
  endPoint?: string;
  method: string;
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};
