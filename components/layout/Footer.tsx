import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-20 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <span className="text-2xl font-extrabold">
            John<span className="text-primary">Blog</span>
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            A creative professional sharing insights and building premium
            digital experiences for global clients.
          </p>
        </div>
        <div>
          <h4 className="font-extrabold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
            Explore
          </h4>
          <ul className="space-y-4 text-[15px] text-slate-500 dark:text-slate-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Latest News
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
            Resources
          </h4>
          <ul className="space-y-4 text-[15px] text-slate-500 dark:text-slate-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Notice
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Cookie Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
            Stay Connected
          </h4>
          <div className="flex gap-4">
            <a
              className="w-11 h-11 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-primary hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <PublicOutlinedIcon className="text-[20px]!" />
            </a>
            <a
              className="w-11 h-11 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-primary hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <EmailOutlinedIcon className="text-[20px]!" />
            </a>
            <a
              className="w-11 h-11 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-primary hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <GitHubIcon className="text-[20px]!" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-20 pt-10 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-medium text-slate-400">
          © 2024 JohnBlog. Handcrafted with care.
        </p>
        <p className="text-sm font-medium text-slate-400">
          Designed for modern creatives.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
