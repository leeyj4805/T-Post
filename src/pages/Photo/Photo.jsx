import React from "react";
import "./Photo.scss";

function Photo() {
  return (
    <div className="Photo">
        <h1 className="PhotoHeader">침착맨
          <span className="PhotoHeaderSmall">(zilione)</span>
        </h1>
        <span className="Subscriber">구독자<p className="number ml">76.9만명</p></span>
    </div>
  );
}

export default Photo;

