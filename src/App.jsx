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
const Notifications = React.lazy(() =>
  import("./Pages/Notifications/Notifications")
);
const Search = React.lazy(() => import("./Pages/Search/Search"));
const Pickups = React.lazy(() => import("./Pages/Pickups/Pickups"));
const CancelPickup = React.lazy(() =>
  import("./Pages/CancelPickup/CancelPickup")
);
const Account = React.lazy(() => import("./Pages/Account/Account"));
const EditAccount = React.lazy(() => import("./Pages/EditAccount/EditAccount"));
const ChangePassword = React.lazy(() =>
  import("./Pages/ChangePassword/ChangePassword")
);
const Language = React.lazy(() => import("./Pages/Language/Language"));
const Payment = React.lazy(() => import("./Pages/Payment/Payment"));
const NewCard = React.lazy(() => import("./Pages/NewCard/NewCard"));
const Privacy = React.lazy(() => import("./Pages/Privacy/Privacy"));
const Help = React.lazy(() => import("./Pages/Help/Help"));
const Chat = React.lazy(() => import("./Pages/Chat/Chat"));
const Schedule = React.lazy(() => import("./Pages/Schedule/Schedule"));

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
          <Route
            path="/notifications"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Notifications />
              </Suspense>
            }
          />
          <Route
            path="/pickups"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Pickups />
              </Suspense>
            }
          />
          <Route
            path="/pickups/cancel"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <CancelPickup />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Account />
              </Suspense>
            }
          />
          <Route
            path="/account/edit"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <EditAccount />
              </Suspense>
            }
          />
          <Route
            path="/account/password"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <ChangePassword />
              </Suspense>
            }
          />
          <Route
            path="/account/language"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Language />
              </Suspense>
            }
          />
          <Route
            path="/account/cards"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Payment />
              </Suspense>
            }
          />
          <Route
            path="/account/cards/new"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <NewCard />
              </Suspense>
            }
          />
          <Route
            path="/account/privacy"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="/account/help"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Help />
              </Suspense>
            }
          />
          <Route
            path="/customer-service"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Chat />
              </Suspense>
            }
          />
          <Route
            path="/schedule"
            element={
              <Suspense fallback={<Loader type="placeholder" />}>
                <Schedule />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
