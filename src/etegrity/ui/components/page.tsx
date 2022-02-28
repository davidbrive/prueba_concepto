import React, { FC } from "react";
import "../scss/styles.css";

export const Page: FC<{
  title: string;
  image: string;
  text: string;
  questions: Array<any>;
}> = ({ title, image, text }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <div className="card__container">
        <img src={image} alt="" />
        {text}
      </div>
    </div>
  );
};
