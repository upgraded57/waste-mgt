import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
const Onboarding = React.lazy(() => import("./Pages/Onboarding/Onboarding"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const PasswordRecovery = React.lazy(() =>
  import("./Pages/PasswordRecovery/PasswordRecovery")
);
const PasswordReset = React.lazy(() =>
  import("./Pages/PasswordReset/PasswordReset")
);
const Search = React.lazy(() => import("./Pages/Search/Search"));

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/onboarding"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Onboarding />
              </Suspense>
            }
          />
          <Route
            path="/auth"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Auth />
              </Suspense>
            }
          />
          <Route
            path="/password/recovery"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <PasswordRecovery />
              </Suspense>
            }
          />
          <Route
            path="/password/reset"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <PasswordReset />
              </Suspense>
            }
          />
          <Route
            index
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/search/:search_query"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Search />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
