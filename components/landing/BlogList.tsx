import React from "react";
import Image from "next/image";

type Blog = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  avatar: string;
  date: string;
};

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="lg:col-span-8 space-y-10">
        <header className="flex items-center gap-5 pb-2 border-b border-slate-100 dark:border-slate-800/50">
          <div className="h-10 w-1.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold tracking-tight">
            Latest Blog
          </h2>
        </header>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-slate-800/40 rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 border border-slate-100 dark:border-slate-800/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="relative md:w-[40%] aspect-4/3 rounded-3xl overflow-hidden shrink-0">
                <Image
                  src={blog.image}
                  fill
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="md:w-[60%] flex flex-col justify-center py-2">
                <div className="space-y-4">
                  <span className="inline-flex px-4 py-1.5 bg-primary/10 text-primary text-xs font-extrabold rounded-full uppercase tracking-widest">
                    {blog.category}
                  </span>

                  <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 line-clamp-2 text-base leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <footer className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50 dark:border-slate-800/50">
                  <div className="relative h-11 w-11">
                    <Image
                      src={blog.avatar}
                      fill
                      alt={blog.author}
                      className="w-11 h-11 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-slate-900 dark:text-white">
                      {blog.author}
                    </p>
                    <p className="text-[13px] text-slate-400 font-medium">
                      {blog.date}
                    </p>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-10">
          <button className="premium-btn px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl shadow-lg">
            Load more articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
