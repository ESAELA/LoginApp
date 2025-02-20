import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx';
import './index.css'
import Recovery from "./pages/Recovery.jsx";
import Register from "./pages/Register.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);
