import { createSlice } from '@reduxjs/toolkit';

export const likedProductSlices = createSlice({
    name: 'like',
    initialState: {
        counterLike: 0,
    },
    reducers: {
        increaseLiked: (state) => {
            console.log("from likeProductsSlices", state)
        }
    }
})

export const { increaseLiked } = likedProductSlices.actions
export default likedProductSlices.reducer
