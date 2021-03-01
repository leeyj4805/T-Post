import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spin } from "antd";

const HomePage = lazy(() => import("./pages/home/home"));
const LoginPage = lazy(() => import("./pages/auth/login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Spin size="large" />}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}
