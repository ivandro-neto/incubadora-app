// App.js (or your main file)
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { StartUps } from "./pages/StartUps";
import { Contact } from "./pages/Contact";
import { Programs } from "./pages/Programs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./pages/Loader"; // Import the Loader component

const App = () => {
/*   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for the "load" event to determine when all resources are loaded
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />; // Display the loader while loading
  } */

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} loader={<Loader />} />
          <Route path="/about" element={<About />} loader={<Loader />} />
          <Route path="/programs" element={<Programs />} loader={<Loader />} />
          <Route path="/startups" element={<StartUps />} loader={<Loader />} />
          <Route path="/contact" element={<Contact />} loader={<Loader />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
