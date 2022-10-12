import Skeleton from "./Skeleton";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";

const PizzaList = () => {
  const { pizzas, isLoading, currentSortType, currentCategory, pagination } = useSelector(
    (state) => state.pizzaReducer
  );
  const renderPizza =( isLoading
    ? pizzas.map((e, i) => <Skeleton key={i} />)
    : pizzas
        .filter((pizza) =>
          currentCategory === 0 ? pizza : pizza.category === currentCategory - 1
        )
        .sort((a, b) => {
          if (a[currentSortType.value] > b[currentSortType.value]) return 1;
          else if (a[currentSortType.value] < b[currentSortType.value])
            return -1;
          else return 0;
        }).slice((pagination.page-1)*4, (pagination.page)*4>pagination.length?pagination.length:(pagination.page)*4)
        .map((pizza) => <PizzaItem key={pizza.id} {...pizza} />));
  return <>{renderPizza}</>;
};

export default PizzaList
