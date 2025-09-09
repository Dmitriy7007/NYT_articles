import type { PostResponse } from '@/types/post'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const isDev = import.meta.env.DEV

export const nytApi = createApi({
  reducerPath: 'nytApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/.netlify/functions/nyt',
  }),
  endpoints: builder => ({
    getPosts: builder.query<PostResponse, { year: number; month: number }>({
      query: ({ year, month }) => {
        if (isDev) {
          return {
            url: `/${year}/${month}.json`,
            params: {
              'api-key': import.meta.env.VITE_NYT_API_KEY,
            },
          }
        } else {
          return `?year=${year}&month=${month}`
        }
      },
    }),
  }),
})

export const { useGetPostsQuery } = nytApi
