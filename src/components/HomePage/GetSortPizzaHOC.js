import { useEffect, useState } from "react";
import Skeleton from "./PizzaItem/Skeleton";
import PizzaItem from "./PizzaItem/PizzaItem";



function GetSortPizzaHOC({page}) {
  const [category, setCategory] = useState(0);
  const [sortType, setSortType] = useState({
    title: "алфавіту",
    value: "title",
  });

  const [pizzas, setPizzas] = useState([[], [], [], []]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPizzas() {
      setIsLoading(true);
      await fetch("https://633d5bca7e19b178290cb6d2.mockapi.io/pizzas")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPizzas(data);
        });
      setIsLoading(false);
    }

    getPizzas();
  }, [category]);

  const renderPizza = isLoading
    ? pizzas.map((e) => <Skeleton />)
    : pizzas
        .filter((pizza) =>
          category === 0 ? pizza : pizza.category === category - 1
        )
        .sort((a, b) => {
          if (a[sortType.value] > b[sortType.value]) {
            return 1;
          } else if (a[sortType.value] < b[sortType.value]) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((pizza) => <PizzaItem key={pizza.id} {...pizza} />);
  const forSort = {
    category,
    setCategory,
    sortType,
    setSortType,
  };

  const forHomePageProps = { renderPizza, forSort };
  return page(forHomePageProps);
}

export default GetSortPizzaHOC;
