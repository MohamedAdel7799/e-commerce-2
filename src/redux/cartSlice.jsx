import { createSlice } from "@reduxjs/toolkit";

const cartslice =createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart: (state , action )=>{
            state.cart.push(action.payload)

        },
        Removefromcart:(state,action)=>{

            state.cart = state.cart.filter(x=>x.id !== action.payload.id) 
        }

    }
})

export default cartslice.reducer;
export const {Addtocart ,Removefromcart} =cartslice.actions;