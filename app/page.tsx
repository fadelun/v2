import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen  bg-dark-1 text-warm-text">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
