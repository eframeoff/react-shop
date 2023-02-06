import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import pl from "../assets/img/pl.svg";
const Pizza = ({ id, types, types2, sizes, price, imageUrl, title }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [sizeActive, setSizeActive] = useState(0);
  const [typeActive, setTypeActive] = useState(0);
  const [type2Active, setType2Active] = useState(0);
  console.log(price);
  console.log(sizeActive);
  console.log(typeActive);

  const onClickAdd = (count) => {
    setCount(count + 1);
    const item = {
      id,
      title,
      price,
      size: sizes[sizeActive],
      type: typeNames[typeActive],
      type2: type2Names[type2Active],
      imageUrl,
    };
    dispatch(addItem(item));
  };

  const typeNames = ["соевый соус", "нет"];
  const type2Names = ["имбирь", "нет"];

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((value, index) => (
              <li
                onClick={() => setTypeActive(index)}
                className={typeActive === index ? "active" : ""}
                key={index}
              >
                {typeNames[value]}
              </li>
            ))}
          </ul>
          <ul>
            {types2.map((value, index) => (
              <li
                onClick={() => setType2Active(index)}
                className={type2Active === index ? "active" : ""}
                key={index}
              >
                {type2Names[value]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((value, index) => (
              <li
                onClick={() => setSizeActive(index)}
                className={sizeActive === index ? "active" : ""}
                key={index}
              >
                {value} кг.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            onClick={() => onClickAdd(count)}
            className="button button--outline button--add"
          >
            <img src={pl} alt="" />
            <span>Добавить</span>
            <i>{count}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
