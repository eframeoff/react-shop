import React from "react";
import { useState } from "react";

const Categories = ({ category, setCategory }) => {
  const [catActive, setCatActive] = useState();
  console.log(category);
  const arr = [
    "Все",
    "филадельфия",
    "калифорния",
    "юта",
    "вегетерианские",
    "темпура",
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
