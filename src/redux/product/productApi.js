const { apiSlice } = require("../api/apiSlice");

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (id) => `/product/category-products/${id}`
        }),
        getSingleProduct: builder.query({
            query: (id) => `/product/single-product/${id}`
        }),
    })
})


export const {useGetProductsQuery, useGetSingleProductQuery} = productApi;