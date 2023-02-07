import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../store/slices/cartSlice";
import {
  SvgCart,
  SvgCartClear,
  SvgGreyArrowLeft,
} from "../components/SvgItems";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalCount = items.reduce((sum, item) => item.count + sum, 0);
  const clearCart = () => {
    dispatch(removeItems());
  };
  return (
    <div class="container container--cart">
      <div class="cart">
        <div class="cart__top">
          <h2 class="content__title">
            <SvgCart />
            Корзина
          </h2>
          <div class="cart__clear">
            <SvgCartClear />
            <span onClick={() => clearCart()}>Очистить корзину</span>
          </div>
        </div>
        <div class="content__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom-details">
            <span>
              Всего сетов: <b> {totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div class="cart__bottom-buttons">
            <Link to="/" class="button button--outline button--add go-back-btn">
              <SvgGreyArrowLeft />
              <span>Вернуться назад</span>
            </Link>
            <div class="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
