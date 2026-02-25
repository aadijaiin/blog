import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-32 p-12 lg:p-16 bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="absolute inset-0 dot-grid -z-10"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
        <h1 className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
          Hi, I&apos;m <span className="text-primary">John</span>
          <br />
          This Is <span className="text-primary">My Blog ..</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
          Welcome to my creative corner of the internet. Here I share my
          thoughts on design, technology, and building better user experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
          <button className="premium-btn w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/25">
            Contact me
          </button>
          <button className="premium-btn w-full sm:w-auto px-10 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-2xl hover:border-primary hover:text-primary bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            About me
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
        <div className="relative w-64 h-64 lg:w-105 lg:h-105">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-[pulse_4s_infinite]"></div>
          <div className="relative w-full h-full overflow-hidden rounded-full border-12 border-white dark:border-slate-800 shadow-2xl z-10">
            <Image
              alt="John's Profile Picture"
              className="object-cover grayscale-20 hover:grayscale-0 transition-all duration-700 hover:scale-105"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjoqVrCIUii3z9k6ypY2Fl3JCg8wfTa-5SNIv6KqwmTp_9wJ20wiTN85De8cjnpqbwTV286SMCp7CT60ep9YKhIO2E4Ckip_wVPNbidx53HHVam8HSA5TSJk64prqHFyWndeyLvJxwgX2xY1jitWLrDZFIIsWioTGqh8OZb_guw7wKSEbFGrchn4LzqmIPibgLK363m4jT2iH4BqOKlQEEYLU-nEBhbd2f_QP7uDNctV8Wj7k56CmpvoJTLF_SSQ38APevzZ8FBAQo"
            />
          </div>
          <div className="absolute -top-6 -right-6 text-primary/20 -z-10">
            <svg height="80" viewBox="0 0 100 100" width="80">
              <circle cx="10" cy="10" fill="currentColor" r="4"></circle>
              <circle cx="40" cy="10" fill="currentColor" r="4"></circle>
              <circle cx="70" cy="10" fill="currentColor" r="4"></circle>
              <circle cx="10" cy="40" fill="currentColor" r="4"></circle>
              <circle cx="40" cy="40" fill="currentColor" r="4"></circle>
              <circle cx="70" cy="40" fill="currentColor" r="4"></circle>
              <circle cx="10" cy="70" fill="currentColor" r="4"></circle>
              <circle cx="40" cy="70" fill="currentColor" r="4"></circle>
              <circle cx="70" cy="70" fill="currentColor" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
