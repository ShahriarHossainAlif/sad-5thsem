import React from "react";
import "./index.css";
import Home from "./routes/Home"
import BudgetPackage from "./routes/BudgetPackage"
import ContactUs from "./routes/ContactUs"
import Destinations from "./routes/Destinations"
import GoldPackage from "./routes/GoldPackage"
import Login from "./routes/Login"
import User from "./routes/User"
import AdminDashboard from "./routes/AdminDashboard"
import { Route, Routes } from "react-router-dom";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/budget-package" element={<BudgetPackage/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/destinations" element={<Destinations/>} />
      <Route path="/gold-packages" element={<GoldPackage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
    </>
  );
}

export default App;
