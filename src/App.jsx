import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("@/pages/HomePage"));
const LeadQualificationPage = React.lazy(() => import("@/pages/LeadQualificationPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lead-qualification" element={<LeadQualificationPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;