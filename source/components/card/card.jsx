import React, {useState} from "react";
import PropTypes from "prop-types";

const Modifier = {
  SELECTED: `card--selected`,
  DISABLED: `card--disabled`,
};

function getProfitLift(profit) {
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
      return <p className="card__additional-text">{`Печалька, ${filling} закончился.`}</p>;
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

  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function handleCardClick() {
    setIsClicked((prev) => !prev);
    setIsSelected(false);
  }

  function handleCardMouseOut() {
    if (isClicked) {
      setIsSelected(true);
    }

    setIsHover(false);
  }

  function handleLinkClick() {
    setIsClicked(true);
    setIsSelected(true);
  }

  function handleCardMouseOver() {
    setIsHover(true);
  }

  const specialClass = !isActive ? Modifier.DISABLED :
    isSelected ? Modifier.SELECTED : ``;

  return (
    <div
      className={`card ${specialClass}`}
    >
      <div className="card__body">
        <div className="card__event-trigger"
          onClick={handleCardClick}
          onMouseOut={handleCardMouseOut}
          onMouseOver={handleCardMouseOver}
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

            {getProfitLift(profit)}

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

      {getAdditionalText(specialClass, description, filling, handleLinkClick)}

    </div>
  );
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default Card;
