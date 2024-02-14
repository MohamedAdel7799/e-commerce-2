import { createSlice } from "@reduxjs/toolkit";

const cartslice =createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        Addtocart: (state , action )=>{
            state.cart.push(action.payload)

        }

    }
})

export default cartslice.reducer;
export const {Addtocart} =cartslice.actions;