import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcons from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <div className="sidebar-card bg-primary text-white border-none shadow-2xl shadow-primary/25 p-10 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <h3 className="text-2xl font-extrabold mb-5 relative z-10">
        Let&apos;s talk
      </h3>
      <p className="text-white/80 text-base mb-8 leading-relaxed relative z-10">
        Ready to take your digital experience to the next level? Let&apos;s
        connect and build something remarkable.
      </p>
      <div className="flex items-center gap-5 relative z-10">
        <a
          aria-label="LinkedIn"
          className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
          href="#"
        >
          <LinkedInIcon />
        </a>
        <a
          aria-label="GitHub"
          className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
          href="#"
        >
          <GitHubIcon />
        </a>
        <a
          aria-label="Email"
          className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
          href="#"
        >
          <MailIcons />
        </a>
      </div>
    </div>
  );
};

export default Contact;
