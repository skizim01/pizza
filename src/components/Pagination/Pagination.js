import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../store/PizzaSlice";


const Pagination = () => {
  const dispatch = useDispatch();

  const { page, length } = useSelector(
    (state) => state.pizzaReducer.pagination
  );

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => dispatch(setPage(event.selected + 1))}
      pageCount={Math.round(length/4)}
      forcePage={page-1}
    />
  );
};

export default Pagination

