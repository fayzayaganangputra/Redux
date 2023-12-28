import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../cartItems";
import { useState } from "react";




const initialState = {
    cartItems: cartItems,
    amount: 10,
    priceTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
            clearCart: (state) => {
                state.cartItems = []
            },
            removeItem: (state, action) => {
                const itemId = action.payload
                state.cartItems = state.cartItems.filter(item => item.id !== itemId)
            },
            increas: (state, action) => {
                 const item = state.cartItems.find(
                   (item) => item.id === action.payload
                 ); 
                 item.amount = item.amount + 1
                 
            },
            decrease: (state, action) => {
                const item = state.cartItems.find(
                  (item) => item.id === action.payload
                );
                item.amount = item.amount -1;
            },
            calculateAmountAndPriceTotal: (state, action) => {
                let amount = 0
                let priceTotal = 0

                state.cartItems.forEach((item) => {
                    amount = amount + item.amount
                    priceTotal = priceTotal + item.amount * item.amount * item.price;

                    state.amount = amount
                    state.priceTotal = priceTotal
                })
            },
    }
})

export const {clearCart, removeItem, increas, decrease, calculateAmountAndPriceTotal} = cartSlice.actions

export default cartSlice.reducer