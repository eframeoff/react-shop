import React from "react";
import { useState } from "react";

const Categories = ({ category, setCategory }) => {
  console.log(category);
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
            // onClick={() => setCatActive(index)}
            onClick={() => setCategory(index)}
            className={category === index ? "active" : ""}
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
