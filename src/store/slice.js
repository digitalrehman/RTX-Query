import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export let api = createApi({
  reducerPath: "fetchProduct",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getSpecificProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export let { useGetAllProductQuery, useGetSpecificProductQuery } = api;
