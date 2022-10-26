import { configureStore } from "@reduxjs/toolkit";
import card from "./Card/redux";
import { productsSlice } from "./Products/redux";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        card
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;