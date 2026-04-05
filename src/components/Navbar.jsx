import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link } from "react-scroll"

const navItems = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-card-dark"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="gradient-text">SS</span>
              <span className="text-white/40 font-light">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                offset={-80}
                className="nav-link cursor-pointer after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-primary py-2 px-5 text-xs">
                Connect
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/[0.05]"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer font-body text-sm"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="contact"
                smooth
                duration={600}
                onClick={() => setMenuOpen(false)}
              >
                <button className="btn-primary w-full justify-center mt-2">
                  Connect
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
