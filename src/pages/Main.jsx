import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

import { arr } from "../components/Sort";
import {
  Categories,
  Pizza,
  PizzaSkeleton,
  Sort,
  Pagination,
} from "../components";
import { SearchContext } from "../App";
import { setCat, setSor, setFilt } from "../store/slices/filterSlice";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const sort = useSelector((state) => state.filter.sort);
  const category = useSelector((state) => state.filter.category);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({ name: "популярности", sort: "rating" });

  const { search } = useContext(SearchContext);

  // const setSort = (val) => {
  //   dispatch(setSor(val));
  // };

  const setCategory = (val) => {
    dispatch(setCat(val));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortN = arr.filter((i) => params.sort === i.sort);
      dispatch(setFilt({ ...params, sortN }));
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://639db24c1ec9c6657bb03671.mockapi.io/items?page=${page}&limit=4&${
          category > 0
            ? `category=${category}&sortBy=${sort.sort}&title=${search}`
            : `sortBy=${sort.sort}&title=${search}`
        }`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [category, sort, page, search]);

  useEffect(() => {
    const getParams = qs.stringify({
      sort: sort.sort,
      page,
      search,
      category,
    });

    navigate(`?${getParams}`);
  }, [category, sort, page, search]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  // Организовал поиск через фильтр

  // const sushisWithSearch = items
  //   .filter((item) => item.title.toLowerCase().includes(search))
  //   .map((pizza) => <Pizza key={pizza.id} {...pizza}></Pizza>);

  const sushis = items.map((pizza) => (
    <Pizza key={pizza.id} {...pizza}></Pizza>
  ));
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
