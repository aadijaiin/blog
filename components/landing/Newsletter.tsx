import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const Newsletter = () => {
  return (
    <div className="sidebar-card">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-primary rounded-full"></span> Newsletter
      </h3>
      <div className="space-y-6">
        <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
          Join 2,000+ readers and get the latest insights delivered straight to
          your inbox.
        </p>
        <div className="space-y-4">
          <div className="relative group">
            <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]" />
            <input
              className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400"
              placeholder="Your best email"
              type="email"
            />
          </div>
          <button className="premium-btn w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold rounded-2xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
