import React, { useState } from "react";
import { data } from "../Data/data";

export default function Card({ setCount, count }) {
  const mobile = data;
  const [cart, setCart] = useState([]);

  const handleToggleCart = (id) => {
    const item = mobile.find((item) => item.id === id);
    if (cart.includes(item)) {
      setCart(cart.filter((item) => item.id !== id));
      setCount(parseInt(count) - 1);
    } else {
      setCart([...cart, item]);
      setCount(parseInt(count) + 1);
    }
  };

  return (
    <>
      <div className="data-content">
        {mobile.map((list) => (
          <div key={list.id} className="data-card">
            <img src={list.image} alt={list.name} />
            <h1>{list.name}</h1>
            <p>RATE : {list.rate}</p>
            <p>RAM : {list.RAM}GB</p>
            <p>ROM : {list.ROM}GB</p>
            <p>RATING : {list.rating}</p>

            <div className="btn-group">
              <button
                className={`btn ${cart.includes(list) ? "remove-btn" : "add-btn"}`}
                onClick={() => handleToggleCart(list.id)}
              >
                {cart.includes(list) ? "REMOVE" : "ADD"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
