import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress, Flex } from "@chakra-ui/react";

const HomePage = lazy(() => import("./pages/home/home"));
const MyPage = lazy(() => import("./pages/Photo/Photo"));
const LoginPage = lazy(() => import("./pages/auth/login"));

const PageLoading = () => {
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
};

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route path="/home" component={HomePage} exact />
          <Route path="/mypage" component={MyPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}
