import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import logo from "../../assets/images/t-logo.png";
import "./login.scss";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const redirectUrl = "http://127.0.0.1:3000/login";

function Login() {
  const location = useLocation();
  const history = useHistory();
  const [searchParam, setSearchParam] = useState("");

  const { fetch, loading, data, error } = useFetch({
    method: "get",
    url: `https://dev.api.tpost.lol/login/twitch${searchParam}`,
  });

  const handleLogin = () => {
    window.location.href = `https://dev.api.tpost.lol/oauth2/authorization/twitch?redirectUrl=${redirectUrl}`;
  };

  useEffect(() => {
    const searchParam = location.search;
    setSearchParam(searchParam);
  }, []);

  useEffect(() => {
    if (searchParam) {
      fetch();
    }
  }, [searchParam]);

  useEffect(() => {
    if (!loading) {
      if (!error && data.status === 200) {
        history.push("/");
      }
    }
  }, [loading, data, error]);

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
