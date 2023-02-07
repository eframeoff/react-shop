import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/slices/cartSlice";
import { minusItem, plusItem } from "../store/slices/cartSlice";
import { SvgButtonClear, SvgMinus, SvgPlus } from "./SvgItems";
const CartItem = ({ id, title, price, size, type, type2, imageUrl, count }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    console.log(price);
    dispatch(removeItem({ id, price }));
  };
  const minusIt = () => {
    dispatch(minusItem(id));
  };

  const plusIt = () => {
    dispatch(plusItem(id));
  };

  return (
    <div class="cart__item">
      <div class="cart__item-img">
        <img class="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div class="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type}, {type2}, {size} кг
        </p>
      </div>
      <div class="cart__item-count">
        <button
          disabled={count === 1}
          onClick={() => minusIt()}
          class="button button--outline button--circle cart__item-count-minus"
        >
          <SvgMinus />
        </button>
        <b>{count}</b>
        <div
          onClick={() => plusIt()}
          class="button button--outline button--circle cart__item-count-plus"
        >
          <SvgPlus />
        </div>
      </div>
      <div class="cart__item-price">
        <b>{price * count}</b>
      </div>
      <div class="cart__item-remove" onClick={() => deleteItem()}>
        <div class="button button--outline button--circle">
          <SvgButtonClear />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
