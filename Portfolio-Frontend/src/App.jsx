import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AboutSection from "./components/home/AboutSection";
import Timeline from "./components/home/Timeline";
import Home from "./pages/Home";
import ProjectDescription from "./pages/ProjectDescription";

function App() {
  return (
    <div className="bg-bodyColor min-h-screen">
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
          <Route path="/project/:id" element={<ProjectDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
