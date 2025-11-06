import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `all?fields=name,flags,population`,
    }),
    getCountryDetailsByName:builder.query({
      query:(cname)=>`/name/${cname}?fullText=true`
    })
  }),
})

export const { useGetAllCountriesQuery,useGetCountryDetailsByNameQuery } = countriesApi