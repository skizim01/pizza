import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { pizzas: [] },
  reducers: {
    addPizza(state, action) {
      state.pizzas.push({
        id: Math.random(),
        pizzaId: action.payload.id,
        count: 1,
        type: action.payload.type,
        size: action.payload.size,
        imgURL: action.payload.imgURL,
        price: action.payload.price,
        title: action.payload.title,
      });
    },
    removePizza(state, action) {
      state.pizzas = state.pizzas.filter(pizza=>pizza.id!==action.payload)
    },
    removeAll(state){
      state.pizzas = []
    },
    incrementPizza(state, action) {
      state.pizzas.find((pizza) => pizza.id === action.payload).count += 1;
    },
    decrementPizza(state, action) {
      state.pizzas.find((pizza) => pizza.id === action.payload).count -= 1;
    },
  },
});

export const { addPizza, removePizza, incrementPizza, decrementPizza , removeAll} =
  cartSlice.actions;
export default cartSlice.reducer;
