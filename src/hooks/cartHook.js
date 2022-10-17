import {useSelector} from "react-redux";

export const useCartInfo=()=>{
    const pizzas = useSelector(state => state.cartReducer.pizzas)
    const sum =
        pizzas.reduce((sum, pizza) => {
            return sum + pizza.price * pizza.count;
        }, 0);
    const count =
        pizzas.reduce((count, pizza) => {
            return count + pizza.count;
        }, 0);
    return {sum, count}
}