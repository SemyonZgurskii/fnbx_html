import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const {cardData} = props;
  const {topText, brand, filling, action, weight, isActive} = cardData;
  const {count, profit} = action;
  const Modifier = {
    selected: `card--selected`,
    disabled: `card--disabled`,
  };

  return (
    <div className={`card  ${isActive ? `` : Modifier.disabled}`}>
      <div className="card__body">
        <p className="card__tagline">{topText}</p>
        <h3 className="card__title">
          {brand}
          <span className="card__feature">{filling}</span>
        </h3>
        <dl className="card__action">
          <dt className="card__action-condition">{count} порций</dt>
          <dl className="card__action-profit">
            {profit.map((item, index) => {
              return <span key={index}>item</span>;
            })}
          </dl>
        </dl>
        <p className="card__tag">
          <span className="card__count">{weight}</span>
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

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default Card;
