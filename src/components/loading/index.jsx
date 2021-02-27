import { CircularProgress, Flex } from "@chakra-ui/react";
import React from "react";

// 페이지 전환시 잠시 뜨는 로딩페이지
function Loading() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <CircularProgress
        isIndeterminate
        thickness="6px"
        size="150px"
        color="#4a65f6"
      />
    </Flex>
  );
}

export default Loading;
