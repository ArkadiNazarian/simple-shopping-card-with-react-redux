import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Products } from './model';

const initialState: Array<Products> = [
    { title: "Car game", price: 70, id: "1" },
    { title: "Airplane game", price: 80, id: "2" },
    { title: "War game", price: 90, id: "3" }
]

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Products>) => {
            state.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<string>) => (
            state.filter((value) => (
                value.id !== action.payload
            ))
        )
    }
})

export const { addProduct, removeProduct } = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.products;
//                                                   reducer's name
