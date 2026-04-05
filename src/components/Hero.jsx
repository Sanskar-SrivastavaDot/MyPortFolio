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
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none"
        aria-hidden
      />

      {/* Orbs */}
      <div
        className="orb w-[500px] h-[500px] bg-brand-blue/10 top-[-100px] left-[-150px]"
        aria-hidden
      />
      <div
        className="orb w-[400px] h-[400px] bg-brand-violet/10 bottom-[-80px] right-[-100px]"
        aria-hidden
      />
      <div
        className="orb w-[300px] h-[300px] bg-brand-blue/5 top-[40%] right-[20%]"
        aria-hidden
      />

      {/* Center Content */}
      <div className="section-container text-center relative z-10">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 mb-8"
        >
          <Sparkles size={13} className="text-brand-blue" />
          <span className="font-mono text-xs text-brand-blue tracking-widest uppercase">
            Open to Internships &amp; Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4"
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
          className="flex items-center justify-center gap-3 my-6"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-blue/60" />
          <span className="font-mono text-sm text-slate-400 tracking-wider">
            Engineering Student &nbsp;·&nbsp; Developer &nbsp;·&nbsp; DSA 
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-violet/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
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
            <button className="btn-primary text-sm">
              <span>View Projects</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
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
              href: "https://mailto:srivastavasanskar31@example.com",
              label: "Email",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="p-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-400
                         hover:text-white hover:border-brand-blue/40 hover:bg-brand-blue/10
                         transition-all duration-300 hover:-translate-y-1"
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
