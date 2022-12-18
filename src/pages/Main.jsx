import React, { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Pizza from "../components/Pizza";
import { PizzaSkeleton } from "../components/Skeleton";
import Sort from "../components/Sort";

const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState({ name: "популярности", sort: "rating" });

  // const sortArr = ["raiting", "price", "title"];

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://639db24c1ec9c6657bb03671.mockapi.io/items?category=` +
        category +
        "&sortBy=" +
        sort.sort
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [category, sort]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            category={category}
            setCategory={setCategory}
          ></Categories>
          <Sort sort={sort} setSort={setSort}></Sort>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
            : items.map((pizza) => <Pizza key={pizza.id} {...pizza}></Pizza>)}
        </div>
      </div>
    </>
  );
};

export default Main;
