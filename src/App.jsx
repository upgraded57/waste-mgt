import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
const Onboarding = React.lazy(() => import("./Pages/Onboarding/Onboarding"));
const Home = React.lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/onboarding"
          element={
            <Suspense fallback={<Loader />}>
              <Onboarding />
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
