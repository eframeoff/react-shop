import React from "react";
import { useState } from "react";

const Categories = () => {
  const [catActive, setCatActive] = useState();
  const arr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {arr.map((value, index) => (
          <li
            onClick={() => setCatActive(index)}
            className={catActive === index ? "active" : ""}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
