import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/homePage";
import LeadQualificationPage from "@/pages/leadQualificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lead-qualification" element={<LeadQualificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
