import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPizza = createAsyncThunk(
  "pizza/get",
  async function (_, { rejectWithValue, dispatch,getState }) {
    try {
      console.log( getState().pizzaReducer.currentCategory)
      const category =  getState().pizzaReducer.currentCategory
      const res = await fetch(`https://633d5bca7e19b178290cb6d2.mockapi.io/pizzas${category===0?'':`?category=${category-1}`}`);
      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json()

      dispatch(setPagination({length: data.length, page:1}))
      dispatch(setPizza(data)) ;
    } catch (err) {
      rejectWithValue(err.message)
    }
  }
);

const category = [
  "Все",
    "Екслюзив",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortTypes = [
  { title: "популярності", value: "rating" },
  { title: "ціна", value: "price" },
  { title: "алфавіту", value: "title" },
];

const PizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState: {
    pizzas:[[],[],[],[],],
    category,
    sortTypes,
    pagination: {
      length:10,
      page:1
    },
    currentCategory: 0,
    currentSortType: { title: "алфавіту", value: "title" },
    isLoading: true,
    err:null
  },
  reducers: {
    setSortType(state, action) {
      state.currentSortType = action.payload;
      state.pagination.page = 1
    },
    setCategory(state, action) {
      state.currentCategory = action.payload;
    },
    setPagination(state, action) {
      console.log(action)
      state.pagination = action.payload;
    },
    setPage(state, action) {
      state.pagination.page = action.payload;
    },
    setPizza(state, action){
      state.pizzas = action.payload
    }
  },
  extraReducers: {
   [ getPizza.pending]:(state)=>{
     state.isLoading = true
     state.pizzas = [[],[],[],[],]
   },
    [ getPizza.fulfilled]:(state)=>{
      state.isLoading = false

    },
    [ getPizza.rejected]:(state, action)=>{
      state.isLoading = false
      state.err = action.payload
    },

  },
});

export const { setCategory, setPage, setSortType, setPizza, setPagination } = PizzaSlice.actions;
export default PizzaSlice.reducer;
