import { configureStore } from "@reduxjs/toolkit";
import productSlices from '../features/productsSliceces/ProductsSlice';
import { productsApi } from "../features/productsSliceces/productsApi";

const store = configureStore({
    reducer: {
        products: productSlices,
        [productsApi.reducerPath]: productsApi.middleware,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([productsApi.middleware]),
})

export default store;
