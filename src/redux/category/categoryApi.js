const { apiSlice } = require("../api/apiSlice");

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => '/category/categorys'
        })
    })
})


export const {useGetCategoryQuery} = categoryApi;