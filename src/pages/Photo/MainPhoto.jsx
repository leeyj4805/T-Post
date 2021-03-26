import React from "react";

const Hello = ({isSpecial}) => {
  return (
    <div className="Photo">
      <a href="//#endregion">
        <div className="MainPhoto">
          <p style={isSpecial ? { display: "none" } : { display: "block" }}>
            사진보이기
          </p>
        </div>
      </a>
    </div>
  );
};

export default Hello;
