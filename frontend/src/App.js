import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* ⭐ IMPORTANT FOR VERCEL (handles refresh & direct links) */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
