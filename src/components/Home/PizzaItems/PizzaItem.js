import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, incrementPizza } from "../../../store/cartSlice";

function PizzaItem({ id, imageUrl, title, types, sizes, price }) {
  const [Gtype, setType] = useState(types[0]);
  const [Gsize, setSize] = useState(sizes[0]);
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.cartReducer.pizzas);
  const [inCart, setInCart] = useState();

  useEffect(() => {
    setInCart(
      pizzas.find(
        (pizza) =>
          pizza.pizzaId === id && pizza.type === Gtype && pizza.size === Gsize
      )
    );
  }, [Gsize, Gtype, pizzas]);
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              onClick={() => {
                setType(type);
              }}
              className={Gtype === type ? "active" : ""}
            >
              {type ? "традиційне" : "тонке"}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => {
                setSize(size);
              }}
              className={Gsize === size ? "active" : ""}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`від ${price} ₴`}</div>
        <div
          className="button button--outline button--add"
          onClick={() => {
            console.log("click");
            inCart
              ? dispatch(incrementPizza(inCart.id))
              : dispatch(
                  addPizza({
                    id,
                    type: Gtype,
                    size: Gsize,
                      imgURL:imageUrl,
                      price:price, title
                  })
                );
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{inCart ? inCart.count : 0}</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
