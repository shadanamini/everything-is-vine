import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const salesApi = createApi({
    reducerPath: 'sales',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SALES_API,
    }),
    refetchOnReconnect: true,
    keepUnusedDataFor: 10,
    endpoints: builder => ({
        getWineDetails: builder.query({
            query: ({id, winevo_id}) => `/api/wineries/${id}/wines/${winevo_id}/`,

        }),
    }),
});

export const { useGetWineDetailsQuery } = salesApi;
