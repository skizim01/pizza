import "./App.css";
import "./scss/app.scss";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import GetSortPizzaHOC from "./components/HomePage/GetSortPizzaHOC";
import homePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <GetSortPizzaHOC page={ homePage}/>
    </BrowserRouter>
  );
}

export default App;
