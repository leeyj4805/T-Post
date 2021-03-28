import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// 에러 핸들링 안되어 있음
function ViewerLoginProcess() {
  const location = useLocation();
  const history = useHistory();
  const [searchParam, setSearchParam] = useState("");

  const { fetch, loading, data, error } = useFetch({
    method: "get",
    url: `https://dev.api.tpost.lol/login/twitch${searchParam}`,
  });

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
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}

export default ViewerLoginProcess;
