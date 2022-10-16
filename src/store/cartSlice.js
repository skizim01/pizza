import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {pizzas:[{id: 1,
    count: 1,
    type: 0,
    size:26}]},
  reducers: {
    addPizza(state, action) {
      console.log(state.pizzas[0], action)
      state.pizzas.push({
        id: (state.length+1)*Math.random(),
        pizzaId: action.payload.id,
        count: 1,
        type: action.payload.type,
        size: action.payload.size,
      });

    },
    removePizza(state, action) {
      console.log(state)
      state.pizzas.filter((pizza) => pizza.id !== action.payload);

    },incrementPizza(state, action){
      state.pizzas.find(pizza => pizza.id===action.payload).count +=1
    }, decrementPizza(state, action){
      state.pizzas.find(pizza => pizza.id===action.payload).count -=1
    }
  },
});

export const { addPizza, removePizza, incrementPizza, decrementPizza } =
  cartSlice.actions;
export default cartSlice.reducer;
