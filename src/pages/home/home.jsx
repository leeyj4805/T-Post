import React from "react";
import Header from "../../components/layouts/header";
import "./home.scss";

function HomePage() {
  return (
    <div className="Home">
      <Header isLogIn={false} />
    </div>
  );
}

export default HomePage;
