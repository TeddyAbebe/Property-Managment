import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store";

// Base query configuration
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:12000",
  prepareHeaders: (headers, { getState }) => {
    // Get the token from the Redux store
    const token = (getState() as RootState).login.value?.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// API slice definition
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({
    fetchLocations: builder.query({
      query: (filters) => ({
        url: "/location",
        method: "GET",
        params: filters,
      }),
    }),

    fetchSites: builder.query({
      query: () => ({
        url: "/site",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchLocationsQuery, useFetchSitesQuery } = apiSlice;
