import { useState } from "react";

function SortItem({ category, setCategory, sortType, setSortType }) {
  const categoryArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [showPopUp, setShowPopUp] = useState("none");

  const sortTypes = [
    { title: "популярності", value: "rating" },
    { title: "ціна", value: "price" },
    { title: "алфавіту", value: "title" },
  ];

  function onClick(index) {
    setCategory(index);
  }

  // {console.log(sortType)}


  const renderCategory = categoryArr.map((c, i) => (
    <li
      key={c}
      onClick={() => onClick(i)}
      className={category === i ? "active" : ""}
    >
      {c}
    </li>
  ));

  return (
    <>
      <div className="content__top">
        <div className="categories">
          <ul>{renderCategory}</ul>
        </div>
        <div className="sort">
          <div className="sort__label" onClick={() => setShowPopUp("")}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортировка по:</b>

            <span>{sortType.title}</span>
          </div>
          <div className="sort__popup" style={{ display: `${showPopUp}` }}>
            <ul>
              {sortTypes.map((e) => (
                <li
                  key={e.title}
                  onClick={() => {
                    setSortType(e);
                    setShowPopUp("none");
                  }}
                  className={sortType.value === e.value ? "active" : ""}
                >
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h2 className="content__title">Все пиццы</h2>
    </>
  );
}

export default SortItem;
