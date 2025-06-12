import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { getCookie } from "@/utils/cookies";

const BaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getCookie("authToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOption) => {
  const response = await BaseQuery(args, api, extraOption);

  if (response.error && response.error.status === 401) {
    console.log("Unauthorized - token expired");
  }

  return response;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["Auth", "User"],
  endpoints: () => ({}),
});
