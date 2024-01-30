import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
        }),
        signUpUser: builder.mutation({
            query: (data) => ({
                url: '/signUp',
                method: 'POST',
                body: data,
            }),
        }),
    })
})

export const {
    useLoginUserMutation,
    useSignUpUserMutation
} = storeApi