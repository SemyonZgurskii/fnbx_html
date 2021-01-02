import React from "react";
import Products from "../components/products/products.jsx";

export default function Main(props) {
  return (
    <main className="main">
      <div className="main__content">
        <p className="main__text">Ты сегодня покормил кота?</p>
        <section className="main__products">
          <Products {...props}/>
        </section>
      </div>
    </main>
  );
}
