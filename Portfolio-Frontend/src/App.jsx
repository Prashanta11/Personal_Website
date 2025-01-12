import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AboutSection from "./components/home/AboutSection";
import Timeline from "./components/home/Timeline";
import Projects from "./components/home/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <AboutSection className="flex justify-center items-center h-screen" />
          }
        />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
