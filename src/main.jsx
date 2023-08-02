import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { StartUps } from "./pages/StartUps";
import { Contact } from "./pages/Contact";
import { Programs } from "./pages/Programs";
import { BrowserRouter, Route, Routes} from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/startups" element={<StartUps/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
