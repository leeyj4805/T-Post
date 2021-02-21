import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "./common.css";

function Login() {
  return (
    <div className="body">
      <div className="container">
        <div className="app">
          <div className="logo"></div>
          <h1 className="LoginHeader">개인아이디로 로그인하세요</h1>
          <ButtonGroup className="button-Group">
            <Button className="blue">스트리머 로그인</Button>
            <Button className="white">시청자 로그인</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Login;
