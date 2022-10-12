import SortItem from "../components/SortItem/SortItem";
import Pagination from "../components/Pagination/Pagination";
import PizzaItem from "../components/Home/PizzaItems/PizzaItem";
import PizzaList from "../components/Home/PizzaItems/PizzaList";

function HomePage({ forSort, renderPizza, forPagination }) {
  return (
    <div>
      <SortItem {...forSort} />
      <div className="content__items"><PizzaList/> </div>
      <Pagination {...forPagination} />
    </div>
  );
}

export default HomePage;
