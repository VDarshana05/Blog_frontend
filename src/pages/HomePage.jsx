import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6">
          Welcome to TechBlogs
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover insightful articles, share your thoughts, and stay updated with the latest in tech.
        </p>
        <button
          onClick={() => navigate("/landing")}
          className="bg-blue-800 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HomePage;

