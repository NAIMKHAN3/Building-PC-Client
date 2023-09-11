const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    product: [],
    buttonState: false,
    totalPrice: 0
}

const pcBuildSlice = createSlice({
    name: 'pc-build',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            const findCategory = state.product?.find(product => product.category === payload.category)
            if (!findCategory) {
                state.totalPrice = state.totalPrice + payload.price
                state.product.push(payload)
            }
            if (state.product.length === 6) {
                state.buttonState = true
            }
        },
        removeAllProduct: (state) => {
            state.product = [];
            state.buttonState = false;
            state.totalPrice = 0
        }
    }
})
export const { addProduct, removeAllProduct } = pcBuildSlice.actions;
export default pcBuildSlice.reducer;