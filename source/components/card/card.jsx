import React from "react";
import PropTypes from "prop-types";
import useStateWithHandlers from "./hooks";

const Modifier = {
  SELECTED: `card--selected`,
  DISABLED: `card--disabled`,
};

function getProfitList(profit) {
  return profit.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.count > 0 && <span>{`${item.count} `}</span>}
        {`${item.item}\n`}
      </React.Fragment>
    );
  });
}

function getAdditionalText(modifier, description, filling, onLinkClick) {
  switch (modifier) {
    case Modifier.SELECTED:
      return <p className="card__additional-text">{description}</p>;
    case Modifier.DISABLED:
      return (
        <p className="card__additional-text card__additional-text__yellow">
          {`Печалька, ${filling} закончился.`}
        </p>
      );
    default:
      return (
        <p className="card__additional-text">
          Чего сидишь? Порадуй котэ,
          <a href="#" className="card__link"
            onClick={onLinkClick}
          > купи.</a>
        </p>
      );
  }
}

function getUpperText(isHover, isSelected) {
  if (isHover && isSelected) {
    return <p className="card__upper-text card__upper-text--pink">Котэ не одобряет?</p>;
  }

  return <p className="card__upper-text">Сказочное заморское яство</p>;
}

function Card(props) {
  const {cardData} = props;
  const {brand, filling, action, weight, isActive, images, description} = cardData;
  const {png, webp} = images;
  const {count, profit} = action;

  const {state, handlers} = useStateWithHandlers();
  const {isSelected, isHover} = state;
  const {onCardClick, onCardMouseOut, onCardMouseOver, onLinkClick} = handlers;

  const specialClass = !isActive ? Modifier.DISABLED :
    isSelected ? Modifier.SELECTED : ``;

  return (
    <div
      className={`card ${specialClass}`}
    >
      <div className="card__body">
        <div className="card__event-trigger"
          onClick={onCardClick}
          onMouseOut={onCardMouseOut}
          onMouseOver={onCardMouseOver}
        />

        {getUpperText(isHover, isSelected)}

        <h3 className="card__title">
          {brand}
          <span className="card__feature">{filling}</span>
        </h3>
        <dl className="card__action">
          <dt className="card__action-condition">
            <span>{`${count} `}</span>
            порций
          </dt>
          <dd className="card__action-profit">

            {getProfitList(profit)}

          </dd>
        </dl>
        <p className="card__tag">
          <span className="card__count">{weight}</span>
          <span className="card__metric">кг</span>
        </p>
        <picture>
          <source
            type="image/webp"
            srcSet={`${webp.default} 1x, ${webp.retina} 2x`}
          />
          <img
            className="card__image"
            src={png.default}
            srcSet={`${png.retina}`}
            alt="изображение кота"
          />
        </picture>
      </div>

      {getAdditionalText(specialClass, description, filling, onLinkClick)}

    </div>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    filling: PropTypes.string.isRequired,
    action: PropTypes.shape({
      count: PropTypes.number.isRequired,
      profit: PropTypes.array.isRequired,
    }),
    weight: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    images: PropTypes.shape({
      png: PropTypes.objectOf(PropTypes.string).isRequired,
      webp: PropTypes.objectOf(PropTypes.string).isRequired,
    }),
    description: PropTypes.string.isRequired,
  })
};

export default Card;
