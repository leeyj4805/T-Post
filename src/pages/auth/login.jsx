import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "../../assets/images/t-logo.png";
import "./login.scss";

function Login() {
  const handleStreamerLogin = () => {
    window.location.href = `https://dev.api.tpost.lol/oauth2/authorization/twitch?redirectUrl=${
      window.location.origin + "/login/streamer"
    }`;
  };

  const handleViewerLogin = () => {
    window.location.href = `https://dev.api.tpost.lol/oauth2/authorization/twitch?redirectUrl=${
      window.location.origin + "/login/viewer"
    }`;
  };

  return (
    <div className="Login">
      <div className="LoginWrapper">
        <img src={logo} alt="logo" />
        <h1 className="LoginHeader">개인아이디로 로그인하세요</h1>
        <ButtonGroup className="button-Group">
          <Button className="blue" onClick={handleStreamerLogin}>
            스트리머 로그인
          </Button>
          <Button className="white" onClick={handleViewerLogin}>
            시청자 로그인
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Login;
