import React from "react";

const Tags = () => {
  const tags = [
    { name: "lorem", href: "#" },
    { name: "uxdesign", href: "#" },
    { name: "javascript", href: "#" },
    { name: "minimalism", href: "#" },
  ];
  return (
    <div className="sidebar-card">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-primary rounded-full"></span> Tags
      </h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <a
            key={tag.name}
            className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 text-sm font-bold rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary hover:text-primary transition-all"
            href={tag.href}
          >
            #{tag.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tags;
