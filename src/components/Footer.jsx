import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Link } from "react-scroll"

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
]

const socials = [
  {
    icon: <Github size={17} />,
    href: "https://github.com/Sanskar-SrivastavaDot",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={17} />,
    href: "https://www.linkedin.com/in/sanskar-srivastava-243378367",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={17} />,
    href: "https://mailto:srivastavasanskar31@gmail.com",
    label: "Email",
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="hero" smooth duration={600} className="cursor-pointer">
              <span className="font-display font-bold text-2xl">
                <span className="gradient-text">SS</span>
                <span className="text-white/30">.</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm font-body mt-2 max-w-xs">
              Engineering Student · Developer · DSA 
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="nav-link text-xs cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-500
                           hover:text-white hover:border-brand-blue/30 hover:bg-brand-blue/10
                           transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {year} Sanskar Srivastava. Built with React &amp; Tailwind CSS.
          </p>
          <p className="text-slate-700 text-xs font-mono">
            // designed &amp; coded with ❤️ by me
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-6 right-6"
      >
        <Link to="hero" smooth duration={700}>
          <button
            className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-500
                       hover:text-white hover:border-brand-blue/30 hover:bg-brand-blue/10
                       transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </button>
        </Link>
      </motion.div>
    </footer>
  )
}
