import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card__body">
        <p className="card__tagline">Сказочное заморское яство</p>
        <h3 className="card__title">
          Нямушка
          <span className="card__feature">с фуа-гра</span>
        </h3>
        <dl className="card__action">
          <dt className="card__action-condition">10 порций</dt>
          <dl className="card__action-profit">мышь в подарок</dl>
        </dl>
        <p className="card__tag">
          <span className="card__count">0,5</span>
          <span className="card__metric">кг</span>
        </p>
      </div>
      <p className="card__additional-text">
        Чего сидишь? Порадуй котэ,
        <a href="#" className="card__link">купи.</a>
      </p>
    </div>
  );
}

export default Card;
