import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
const Onboarding = React.lazy(() => import("./Pages/Onboarding/Onboarding"));

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
