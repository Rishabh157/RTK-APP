import { configureStore } from "@reduxjs/toolkit";
import addLikedProductsSlice from '../features/productsSliceces/likeProductSlice';

export default configureStore({
    reducer: {
        likedProducts: addLikedProductsSlice,
    },
})
