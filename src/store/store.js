import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import PizzaSlice from "./PizzaSlice";
import CartSlice from "./cartSlice";

const store  = configureStore({
    reducer:{
        authReducer:AuthSlice,
        pizzaReducer:PizzaSlice,
        cartReducer: CartSlice
    }
})

export default store