import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";

const defaultPosts = [
  {
    title: "The Rise of React",
    description: "A quick overview of how React became so popular.",
    date: "2025-07-28",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Deploying Your First Web App on Vercel",
    description: "Step-by-step walkthrough for React/Next.js apps using Vercel.",
    date: "2025-08-01",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "What is CI/CD? Explained with Jenkins",
    description: "Get started with Jenkins for Java/Maven CI/CD.",
    date: "2025-07-12",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function LandingPage() {
  const [allPosts, setAllPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blogpost")) || [];
    const defaultWithSource = defaultPosts.map(post => ({ ...post, source: "default" }));
    const savedWithSource = savedPosts.map(post => ({ ...post, source: "user" }));
    setAllPosts([...defaultWithSource, ...savedWithSource]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrollBottom && visibleCount < allPosts.length) {
        setVisibleCount(prev => prev + 3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, allPosts.length]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        EXPLORE, LEARN and SHARE YOUR KNOWLEDGE
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.slice(0, visibleCount).map((blog, index) => (
          <Card
            key={index}
            className={`rounded-2xl shadow-md hover:shadow-lg transition ${
              blog.source === "user" ? "border-blue-400 border" : ""
            }`}
          >
            <CardContent className="p-4">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
              )}
              <CardTitle className="text-xl font-semibold mb-2">{blog.title}</CardTitle>

              <p className="text-sm text-gray-600 mb-2">
                {blog.description.length > 20
                  ? `${blog.description.slice(0, 20)}...`
                  : blog.description}
              </p>

              {blog.description.length > 20 && (
                <button
                  className="text-blue-800 hover:underline text-sm font-medium mb-2"
                  onClick={() => navigate(`/blog/${index}`)}
                >
                  View more
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <button
        className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 mx-auto block mt-10"
        onClick={() => navigate("/add-blog")}
      >
        Add Blog
      </button>

      <footer className="text-center text-gray-500 mt-10 py-6 border-t text-sm">
        © 2025 TechBlogs. Built with 💙 by Darshana
      </footer>
    </div>
  );
}
