const { apiSlice } = require("../api/apiSlice");

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (id) => `/product/category-products/${id}`
        }),
        getRandomProducts: builder.query({
            query: () => `/product/random-products`
        }),
        getSingleProduct: builder.query({
            query: (id) => `/product/single-product/${id}`
        }),
    })
})


export const {useGetProductsQuery, useGetSingleProductQuery, useGetRandomProductsQuery} = productApi;