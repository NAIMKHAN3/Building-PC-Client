import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://building-pc.vercel.app/api/v1/product' }),
    endpoints: () => ({}),
})


export const { useGetPokemonByNameQuery } = apiSlice