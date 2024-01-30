import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { ICharacter } from '@/types'

interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string
}


export interface CharactherResponse extends ICharacter {
  
}

export interface CharacthersReponse {
  info: Info,
  results: ICharacter[]
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.user.token
      if (token) {
        headers.set('x-auth-token', `${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCharacters: builder.mutation<CharacthersReponse, void>({
      query: () => 'characters/',
    }),
    getCharacterbyID: builder.mutation<CharactherResponse, string>({
      query: (id: string) => `characters/${id}`,
    }),
  }),
})

export const { useGetCharactersMutation, useGetCharacterbyIDMutation } = api