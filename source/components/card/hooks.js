import {useState} from "react";

export default function useStateWithHandlers() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function onCardClick() {
    setIsClicked((prev) => !prev);
    setIsSelected(false);
  }

  function onCardMouseOut() {
    if (isClicked) {
      setIsSelected(true);
    }

    setIsHover(false);
  }

  function onLinkClick() {
    setIsClicked(true);
    setIsSelected(true);
  }

  function onCardMouseOver() {
    setIsHover(true);
  }

  return {
    state: {isSelected, isHover},
    handlers: {onCardMouseOver, onLinkClick, onCardClick, onCardMouseOut},
  };
}
