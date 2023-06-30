import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navigation from "./Components/Navigation";
import SightsPage from "./Pages/SightsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sights/:city" element={<SightsPage />} />
      </Routes>
    </>
  );
}

export default App;
