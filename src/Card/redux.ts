import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products ,CardProduct } from "./model";
import { RootState } from "../store";

const Card = createSlice({
    name: 'card',
    initialState: [] as Array<CardProduct>,
    reducers: {
        addtocard: (state, action: PayloadAction<Products>) => {
            const product_index = state.findIndex((value) => (
                value.id === action.payload.id
            ))
            if (product_index !== -1) {
                state[product_index].amount += 1
            } else {
                state.push({ ...action.payload, amount: 1 })
            }
        },
        removefromcard: (state, action: PayloadAction<String>) => {
            const product_index = state.findIndex((value) => (
                value.id === action.payload
            ))

            if (state[product_index].amount > 1) {
                state[product_index].amount -= 1
            } else {
                state.filter((value) => (
                    value.id !== action.payload
                ))
            }
        }
    }
}) 

export const getCardProducts = (state: RootState) => state.card;

export const gettotalprice = (state: RootState) => state.card.reduce((acc, next) => acc += (next.amount * next.price), 0);

export const { addtocard, removefromcard } = Card.actions;

export default Card.reducer;