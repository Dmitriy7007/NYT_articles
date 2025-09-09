import type { PostResponse } from '@/types/post'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const nytApi = createApi({
  reducerPath: 'nytApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: builder => ({
    getPosts: builder.query<PostResponse, { year: number; month: number }>({
      query: ({ year, month }) => ({
        url: `/${year}/${month}.json`,
        params: {
          'api-key': import.meta.env.VITE_NYT_API_KEY,
        },
      }),
    }),
  }),
})

export const { useGetPostsQuery } = nytApi
