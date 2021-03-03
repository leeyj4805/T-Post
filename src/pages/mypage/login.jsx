import React from "react";
import "./login.scss";
import logo from "../../assets/images/t-logo.png";

function Mypage() {
    return(
        <div className="headerArea">
            <div className="container">
                <img className="titleLogo" src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default Mypage;
