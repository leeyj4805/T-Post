import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress } from "@chakra-ui/react";

const LoginPage = lazy(() => import("./pages/auth/login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress size="100px" />}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}
