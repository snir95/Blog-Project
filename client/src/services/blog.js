import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/blogs" }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/`,
      providesTags: ["Blog"],
    }),

    updateBlog: builder.mutation({
      query: (body) => ({
        url: `/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),

    createBlog: builder.mutation({
      query: (body) => ({
        url: `/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export default blogApi;

export const {
  useGetBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useCreateBlogMutation,
} = blogApi;
