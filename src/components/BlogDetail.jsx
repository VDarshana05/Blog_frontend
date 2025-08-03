import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const defaultPosts = [
  {
    title: "The Rise of React",
    description: "A quick overview of how React became so popular.",
    date: "2025-07-28",
  },
  {
    title: "Deploying Your First Web App on Vercel",
    description: "Step-by-step walkthrough for React/Next.js apps using Vercel.",
    date: "2025-08-01",
  },
  {
    title: "What is CI/CD? Explained with Jenkins",
    description: "Get started with Jenkins for Java/Maven CI/CD.",
    date: "2025-07-12",
  },
];

export default function BlogDetail() {
  const { index } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogpost")) || [];
    const all = [...defaultPosts, ...saved];
    setBlog(all[parseInt(index)]);
  }, [index]);

  if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">Published on {blog.date}</p>
         {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-xl mb-4 shadow-md"
        />
      )}
      <p className="text-lg leading-7">{blog.description}</p>

      <button
        className="mt-6 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}
