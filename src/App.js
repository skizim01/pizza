import "./App.css";
import "./scss/app.scss";
import { BrowserRouter } from "react-router-dom";
import GetSortPizzaHOC from "./components/Home/GetSortPizzaHOC";
import homePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart";
import NotFoundBlock from "./components/NotFoundBlock/NotFound";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetSortPizzaHOC page={homePage} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </Provider>
  );
}

export default App;
