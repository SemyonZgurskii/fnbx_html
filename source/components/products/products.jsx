import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

function Products(props) {
  const {mockData} = props;

  return (
    <ul className="products">
      {mockData.map((cardData) => {
        return (
          <li className="products__item"
            key={cardData.id}
          >
            <Card
              cardData={cardData}
            />
          </li>
        );
      })}
    </ul>
  );
}

Products.propTypes = {
  mockData: PropTypes.arrayOf(PropTypes.object),
};

export default Products;
