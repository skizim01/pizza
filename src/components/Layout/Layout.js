import Header from "../Header/Header";
import SortItem from "../SortItem/SortItem";
import { Outlet } from "react-router";

function Layout({ forSort }) {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <SortItem {...forSort} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
