import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-body">
      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <About />

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Skills />

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Projects />

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Experience />

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
