import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import PizzaSlice from "./PizzaSlice";

const store  = configureStore({
    reducer:{
        authReducer:AuthSlice,
        pizzaReducer:PizzaSlice
    }
})

export default store