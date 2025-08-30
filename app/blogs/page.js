"use client";
import { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import SearchBar from "../../components/SearchBar";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFiltered(
      blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(q) ||
          blog.summary.toLowerCase().includes(q) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-[#750000] text-3xl font-bold mb-6 dark:text-[#4C4CA8]">All Blogs</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}