import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/loading";


const LoginPage = lazy(() => import("./pages/auth/login"));
const MyPage = lazy(() => import("./pages/mypage/login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}
