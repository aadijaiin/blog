import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
const Topics = () => {
  //   const topics = [
  //     { icon: "database", label: "Database" },
  //     { icon: "accessibility_new", label: "Accessibility" },
  //     { icon: "speed", label: "Web Performance" },
  //   ];
  return (
    <div className="sidebar-card">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-primary rounded-full"></span> Topics
      </h3>
      <div className="space-y-4">
        <a
          className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 hover:bg-primary hover:text-white transition-all duration-300 group"
          href="#"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
              <CloudQueueIcon className="text-[22px]!" />
            </div>
            <span className="font-bold">Cloud Services</span>
          </div>
          <ArrowForwardIcon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[18px]!" />
        </a>
        {/* <a
          className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 hover:bg-primary hover:text-white transition-all duration-300 group"
          href="#"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
              <AccessibilityIcon className="text-[22px]!" />
            </div>
            <span className="font-bold">Accessibility</span>
          </div>
          <ArrowForwardIcon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[18px]!" />
        </a>
        <a
          className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 hover:bg-primary hover:text-white transition-all duration-300 group"
          href="#"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-primary/10 text-primary rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]!">
                speed
              </span>
            </div>
            <span className="font-bold">Web Performance</span>
          </div>
          <ArrowForwardIcon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[18px]!" />
        </a> */}
      </div>
    </div>
  );
};

export default Topics;
