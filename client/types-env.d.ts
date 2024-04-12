type Kids = {
  children: React.ReactNode;
};

type Theme = "light" | "dark" | "system";

type HTTPResponse = {
  status: boolean;
  message: string;
  data: any;
};
type HTTPResponseWithToken = {
  status: boolean;
  message: string;
  data: Client;
  token: string;
};

type Client = {
  email: string;
  username: string;
  fullName: string;
  picture: string;
  bio: string;
  isBanned: boolean;
  createdAt: string;
  provider_id: string;
  status_id: string;
};
