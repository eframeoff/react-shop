import React, { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Pizza from "../components/Pizza";
import { PizzaSkeleton } from "../components/Skeleton";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";
import { useContext } from "react";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCat, setSor } from "../store/slices/filterSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { category, sort } = useSelector((state) => state.filter);

  const setSort = (val) => {
    dispatch(setSor(val));
  };

  const setCategory = (val) => {
    dispatch(setCat(val));
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://639db24c1ec9c6657bb03671.mockapi.io/items?page=${page}&limit=4&${
        category > 0
          ? `category=${category}&sortBy=${sort.sort}`
          : `sortBy=${sort.sort}`
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [category, sort, page]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));
  const sushis = items
    .filter((item) => item.title.toLowerCase().includes(search))
    .map((pizza) => <Pizza key={pizza.id} {...pizza}></Pizza>);

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
        <h2 className="content__title">Выбери свой сет!</h2>
        <div className="content__items">{isLoading ? skeletons : sushis}</div>

        <Pagination onChange={setPage}></Pagination>
      </div>
    </>
  );
};

export default Main;
