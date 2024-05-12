type FetchResponse = {
  status: boolean;
  message: string;
  data: any;
  token?: string;
};

type Fetch = {
  endPoint?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};

type Status = {
  id: string;
  name: string;
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
  Status: Status;
};

type User = {
  id: string;
  username: string;
  fullName: string;
  picture: string;
  bio: string;
  isBanned: boolean;
  createdAt: string;
  status_id: string;
  Status: Status;
};

type PosterCip = {
  bio: string;
  fullName: string;
  id: string;
  picture: string;
  username: string;
  Status: Status;
};

type VideoClip = {
  id: string;
  title: string;
  description: string;
  url: string;
  user_id: string;
  uploadedAt: string;
  comments_count: number;
  likes_count: number;
  views_count: number;
  User: PosterCip;
};
