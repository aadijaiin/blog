import ThemeBtn from "../ui/ThemeBtn";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            John<span className="text-primary">Blog</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-primary font-bold nav-link py-1" href="#">
            Home
          </a>
          <a
            className="font-medium hover:text-primary transition-colors nav-link py-1"
            href="#"
          >
            About me
          </a>
          <a
            className="px-6 py-2.5 border-2 border-slate-200 dark:border-slate-700 rounded-full hover:border-primary hover:text-primary font-semibold transition-all"
            href="#"
          >
            Contact Me
          </a>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
