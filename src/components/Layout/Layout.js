import Header from "../Header/Header";
import SortItem from "../SortItem/SortItem";
import {Outlet, Route, Routes, useRoutes} from "react-router";

function Layout({ forSort }) {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            {/*<Routes>*/}
            {/*  <Route index element={<SortItem {...forSort} />} />*/}
            {/*</Routes>*/}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}



export default Layout;


