import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const LoginPage = lazy(() => import("./pages/auth/login"));
const StreamerLoginProcessPage = lazy(() =>
  import("./pages/auth/streamer-login-process")
);
const ViewerLoginProcessPage = lazy(() =>
  import("./pages/auth/viewer-login-process")
);

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
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
        }
      >
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <Route
            path="/login/streamer"
            component={StreamerLoginProcessPage}
            exact
          />
          <Route
            path="/login/viewer"
            component={ViewerLoginProcessPage}
            exact
          />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </Suspense>
    </Router>
  );
}
