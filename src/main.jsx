import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx';
import './index.css'
import Login from "./pages/Login.jsx";
import Recovery from "./pages/Recovery.jsx";
import Register from "./pages/Register.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"
import ForgotUserName from "./pages/ForgotUserName.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/forgotusername" element={<ForgotUserName />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);
