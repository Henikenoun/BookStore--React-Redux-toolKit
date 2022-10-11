import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedIn: false , name:' Heni Kenoun'},
    reducers: {
        logOut: (state) =>{
            state.isLoggedIn = !state.isLoggedIn ;
        }
    }
        
})

export const {logOut} = authSlice.actions
export default authSlice.reducer ;