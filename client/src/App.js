import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
