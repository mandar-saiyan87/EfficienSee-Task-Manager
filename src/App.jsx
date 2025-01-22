import React from "react";
import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="relative">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
