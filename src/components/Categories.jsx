import React from "react";
import { useState } from "react";

const Categories = React.memo(({ category, setCategory }) => {
  const [catActive, setCatActive] = useState();
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
});

export default Categories;
