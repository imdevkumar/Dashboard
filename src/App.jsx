import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Snapshot from "./pages/Snapshot";
import Evolution from "./pages/Evolution";
import Compare from "./pages/Compare";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/snapshot" element={<Snapshot />} />
        <Route path="/evolution" element={<Evolution />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </>
  );
}

export default App;
