import React, { useState } from "react";

type TypeCard = {
  frontSide: string;
  backSide: string;
}

export default function Card({ frontSide, backSide }: TypeCard ) {
  const [isFront, changeFace] = useState(true);
  function handleClick() {
    changeFace(oldState => !oldState);
  }
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;
  return (
  <div className={classList} onClick={handleClick}>
    {text}
  </div>
  );
}