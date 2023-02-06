import React, { useState, useRef, useEffect } from "react";
import sortSvg from "../assets/img/sort.svg";
export const arr = [
  { name: "популярности", sort: "rating" },
  { name: "цене", sort: "price" },
  { name: "алфавиту", sort: "title" },
];
const Sort = ({ sort, setSort }) => {
  useEffect(() => {
    console.log("mount");
    const clickOut = (e) => {
      !e.composedPath().find((i) => i === sortRef.current) &&
        setPopupVis(false);
    };
    document.addEventListener("click", clickOut);

    return () => {
      document.body.removeEventListener("click", clickOut);
    };
  }, []);
  const [popupVis, setPopupVis] = useState(false);
  console.log(sort);
  let sortName = sort.name;
  const sortRef = useRef();
  // console.log(sortRef);
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={sortSvg} alt="" />
        <b>Сортировка по:</b>
        <span onClick={() => setPopupVis(!popupVis)}>{sortName}</span>
      </div>
      {popupVis && (
        <div className="sort__popup">
          <ul>
            {arr.map((value, index) => (
              <li
                key={index}
                onClick={() => {
                  setSort(value);
                  setPopupVis(false);
                }}
                className={sort.sort === value.sort ? "active" : ""}
              >
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
