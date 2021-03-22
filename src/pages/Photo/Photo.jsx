import React from "react";
import "./Photo.scss";
import Hello from "./MainPhoto";

const Photo = () => {
  return (
    <div className="Photo">
      <a href="//#endregion">
        <Hello isSpecial={true}></Hello>
      </a>
      <h1 className="PhotoHeader">
        침착맨
        <span className="PhotoHeaderSmall">(zilione)</span>
      </h1>
      <span className="Subscriber">
        구독자<p className="number ml">76.9만명</p>
      </span>
    </div>
  );
};

export default Photo;
