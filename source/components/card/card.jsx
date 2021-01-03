import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const {cardData} = props;
  const {topText, brand, filling, action, weight, isActive, images} = cardData;
  const {png, webp} = images;
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
          <dt className="card__action-condition">
            <span>{`${count} `}</span>
            порций
          </dt>
          <dd className="card__action-profit">

            {profit.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.count > 0 && <span>{`${item.count} `}</span>}
                  {`${item.item}\n`}
                </React.Fragment>
              );
            })}

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
