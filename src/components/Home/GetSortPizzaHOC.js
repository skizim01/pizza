import { useEffect, useState } from "react";

import { getPizza } from "../../store/PizzaSlice";
import {useDispatch, useSelector} from "react-redux";

function GetSortPizzaHOC({ page }) {
  const category = useSelector(state => state.pizzaReducer.currentCategory)

  const dispatch = useDispatch()
  const [Page, setPage] = useState(1);
  useEffect(  () => {
     dispatch(getPizza());
  }, [category]);

  const forPagination = { setPage, Page };
  const forHomePageProps = { forPagination };
  return page(forHomePageProps);
}

export default GetSortPizzaHOC;
