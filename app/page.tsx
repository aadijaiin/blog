import SideBar from "@/components/common/SideBar";
import Hero from "@/components/landing/Hero";
import BlogList from "@/components/landing/BlogList";
import { posts } from "@/lib/posts";
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
      <Hero />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-16">
        <div className="lg:col-span-8">
          <BlogList blogs={posts} />
        </div>
        <SideBar />
      </section>
    </main>
  );
}
