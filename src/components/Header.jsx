import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/sushi-logo.svg";
import Search from "./Search/Search";
import { useSelector } from "react-redux";
import cart from "../assets/img/cart.svg";

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Sushi logo" />
            <div>
              <h1>React Shop</h1>
              <p>Тестовый магазин</p>
            </div>
          </div>
        </Link>
        {/* eslint-disable  */}
        {location.pathname !== "/cart" ? <Search /> : <></>}
        {location.pathname !== "/cart" ? (
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <img src={cart} alt="шт." />
              <span>{items.length}</span>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
