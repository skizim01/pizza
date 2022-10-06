import PizzaItem from "./PizzaItem/PizzaItem";
import { useEffect, useState } from "react";
import Skeleton from "./PizzaItem/Skeleton";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import NotFoundBlock from "../NotFoundBlock/NotFound";

function HomePage({forSort, renderPizza}) {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout forSort={forSort} />}>
          <Route
            index
            element={<div className="content__items">{renderPizza} </div>}
          />
          <Route path="*" element={<NotFoundBlock/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default HomePage;
