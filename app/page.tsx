import Hero from "@/components/Hero";
import Topics from "@/components/Topics";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Topics />
    </div>
  );
}
