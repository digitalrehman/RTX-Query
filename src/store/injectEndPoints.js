import { api } from "./slice";

let inject = api.injectEndpoints({
    endpoints: (builder) => ({
        deleteProduct: builder.mutation({
            query: (postId) => ({
                url: `/products/${postId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"],
        })
    })
})

export let { useDeleteProductMutation } = inject