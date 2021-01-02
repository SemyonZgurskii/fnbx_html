import React from "react";
import Products from "../components/products/products.jsx";

export default function Main() {
  return (
    <main>
      <p className="main__text">Ты сегодня покормил кота?</p>
      <section className="main__products">
        <Products/>
      </section>
    </main>
  );
}
