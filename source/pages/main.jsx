import React from "react";
import Products from "../components/products/products.jsx";

export default function Main(props) {
  return (
    <main className="main">
      <section className="main__content">
        <p className="main__text">Ты сегодня покормил кота?</p>
        <div className="main__products">
          <Products {...props}/>
        </div>
      </section>
    </main>
  );
}
