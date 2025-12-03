import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InstallGuide from "./components/InstallGuide";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <InstallGuide />
      <Footer />
    </div>
  );
}
