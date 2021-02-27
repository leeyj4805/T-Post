import React, { useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "../../assets/images/t-logo.png";
import "./login.scss";
import useFetch from "../../hooks/useFetch";

function Login() {
  const {
    fetch: userInfoFetch,
    data: userInfoData,
    error: userInfoError,
  } = useFetch({
    method: "GET",
    url: `${process.env.REACT_APP_SERVER_URL}/userinfo?state=1234`,
  });

  const handleLogin = () => {
    window.location.href = `${
      process.env.REACT_APP_SERVER_URL
    }/oauth2/authorization/twitch?original_request=${
      window.location.origin + "/login"
    }`;
  };

  useEffect(() => {
    console.log("초기 렌더링 데이터 요청");
    userInfoFetch();
  }, []);

  useEffect(() => {
    console.log(userInfoData, userInfoError);
  }, [userInfoData, userInfoError]);

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
