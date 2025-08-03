import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import BlogForm from "./components/BlogForm";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/blog/:index" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

