/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts"
        }),
        getPostById: builder.query({
            query: (id) => `/post/${id}`
        })
    })
});

export const { useGetPostsQuery, useGetPostByIdQuery } = baseApi;

export default baseApi;
