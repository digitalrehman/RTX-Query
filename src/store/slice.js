import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export let api = createApi({
    baseQuery: async (url) => {
        let response = await axios.get(url)
        let data = response.data
        return { data }
    },
    reducerPath: "fetchProduct",
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            queryFn: 
        }),
        getSpecificProduct: builder.query({
            queryFn:
        }),
    })
})


export let { useGetAllProductQuery } = api

