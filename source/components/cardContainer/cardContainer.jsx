import React, {useState} from "react";
import Card from "../card/card.jsx";

function CardContainer(props) {
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

  return (
    <Card
      {...props}
      isSelected={isSelected}
      isHover={isHover}
      onCardClick={handleCardClick}
      onCardMouseOut={handleCardMouseOut}
      onCardMouseOver={handleCardMouseOver}
      onLinkClick={handleLinkClick}
    />
  );
}

export default CardContainer;
