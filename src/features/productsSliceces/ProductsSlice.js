import { createSlice } from '@reduxjs/toolkit';

export const productSlices = createSlice({
    name: 'allproducts',
    initialState: {
        allProducts: [],
    },
    reducers: {
        increaseLiked: (state) => {
            console.log("from likeProductsSlices", state)
        }
    }
})

export const { increaseLiked } = productSlices.actions
export default productSlices.reducer
