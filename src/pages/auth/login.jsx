import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "../../assets/images/t-logo.png";
import "./login.scss";

const response_type = "code";
const client_id = process.env.REACT_APP_CLIENT_ID;
const scope = "user:read:email user_read moderation:read";
const redirect_uri = window.location.origin;

function Login() {
  const handleLogin = () => {
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;
  };

  return (
    <div className="Login">
      <div className="LoginWrapper">
        <img src={logo} alt="logo" />
        <h1 className="LoginHeader">개인아이디로 로그인하세요</h1>
        <ButtonGroup className="button-Group">
          <Button className="blue" onClick={handleLogin}>
            스트리머 로그인
          </Button>
          <Button className="white" onClick={handleLogin}>
            시청자 로그인
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Login;
