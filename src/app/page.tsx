import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import Experience from "@/components/home/Experience";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 pb-24">
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <Experience />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
