import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Link } from "react-scroll"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >


      {/* Center Content */}
      <div className="section-container text-center relative z-10">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-brand-blue bg-transparent mb-6 sm:mb-8 mx-4 sm:mx-0"
        >
          <span className="font-mono text-[10px] sm:text-xs text-brand-blue tracking-widest uppercase text-center">
            Open to Internships &amp; Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-mono font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none mb-4 px-2"
        >
          <span className="text-white">Sanskar</span>
          <br />
          <span className="gradient-text">Srivastava</span>
        </motion.h1>

        {/* Role Pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-4 sm:my-6 px-4"
        >
          <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-brand-blue/60" />
          <span className="font-mono text-[11px] sm:text-sm text-slate-400 tracking-wider text-center">
            Engineering Student &nbsp;·&nbsp; Developer &nbsp;·&nbsp; DSA 
          </span>
          <span className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-brand-violet/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="font-body text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4"
        >
          Building clean, efficient software — one algorithm at a time.
          <br className="hidden sm:block" />
          Turning caffeine &amp; C++ into elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Link to="projects" smooth duration={700} offset={-80}>
            <button className="btn-primary">
              <span>View Projects</span>
            </button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-80}>
            <button className="btn-outline text-sm">
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: <Github size={18} />,
              href: "https://github.com/Sanskar-SrivastavaDot",
              label: "GitHub",
            },
            {
              icon: <Linkedin size={18} />,
              href: "https://www.linkedin.com/in/sanskar-srivastava-243378367",
              label: "LinkedIn",
            },
            {
              icon: <Mail size={18} />,
              href: "mailto:srivastavasanskar31@gmail.com",
              label: "Email",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={link.label}
              className="p-3 border-2 border-white bg-transparent text-slate-300
                         hover:text-[#252525] hover:bg-white
                         transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
