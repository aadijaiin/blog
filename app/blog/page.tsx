"use client";
import { useMemo, useState } from "react";
import SideBar from "@/components/common/SideBar";
import BlogList from "@/components/landing/BlogList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { posts } from "@/lib/posts";

const Page = () => {
  const [blogs, setBlogs] = useState(posts);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = useMemo(
    () =>
      posts.filter((post) => {
        const matchesQuery = post.title
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesCategory =
          category === "All" || post.category === category;
        return matchesQuery && matchesCategory;
      }),
    [query, category],
  );

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <header className="lg:col-span-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              All Blog Posts
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Deep dives into interface design, performance engineering, and
              scalable architecture.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative min-w-60">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                placeholder="Search articles..."
                type="text"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
            <div className="relative min-w-45">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
              >
                <option>All Categories</option>
                <option>Interface</option>
                <option>Database</option>
                <option>Performance</option>
              </select>
              <ExpandMoreIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>
        </div>
      </header>
      <div className="lg:col-span-8">
        <BlogList blogs={filteredBlogs} />
        {filteredBlogs.length === 0 && (
          <p className="text-slate-500">No articles found.</p>
        )}
      </div>
      <SideBar />
    </section>
  );
};

export default Page;
