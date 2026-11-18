import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Timeline from "../components/Timeline";
import Courses from "../components/Courses";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return <><Navbar /><main><Hero /><AboutSection /><Timeline /><Courses /><Skills /><Projects /><Contact /></main><Footer /></>;
}
