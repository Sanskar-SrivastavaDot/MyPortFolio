import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Zap, Code2, BookOpen } from "lucide-react"

const highlights = [
  {
    icon: <Code2 size={18} />,
    label: "Tech Focus",
    value: "DSA & Web Dev",
    color: "blue",
  },
  {
    icon: <Target size={18} />,
    label: "Goal",
    value: "Software Internship",
    color: "violet",
  },
  {
    icon: <Zap size={18} />,
    label: "Strengths",
    value: "C++, React, Logic",
    color: "cyan",
  },
  {
    icon: <BookOpen size={18} />,
    label: "Degree",
    value: "B.Tech '29",
    color: "amber",
  },
]

const colorMap = {
  blue: "border-brand-blue/20 bg-brand-blue/5 text-brand-blue",
  violet: "border-brand-violet/20 bg-brand-violet/5 text-brand-violet",
  cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
  amber: "border-amber-500/20 bg-amber-500/5 text-amber-400",
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="py-28 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">01 — About</p>
          <h2 className="section-title max-w-lg">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-base leading-relaxed font-body">
              Hey, I&apos;m <span className="text-white font-semibold">Sanskar Srivastava</span> — an
              engineering student with a sharp interest in{" "}
              <span className="text-brand-blue-light">data structures, algorithms</span>, and{" "}
              <span className="text-brand-violet-light">modern web development</span>.
            </p>
            <p className="text-slate-400 text-base leading-relaxed font-body">
              Actively seeking my first software development internship. I enjoy breaking down complex problems into elegant
              code, whether that&apos;s optimizing a graph traversal in C++ or crafting a pixel-perfect
              UI.
            </p>
            <p className="text-slate-400 text-base leading-relaxed font-body">
              When I&apos;m not grinding LeetCode, you&apos;ll find me building side projects, reading
              about system design, or exploring new tech. I believe consistent, focused practice
              beats talent alone — every single time.
            </p>

            {/* Career Focus Card */}
            <div className="glass-card p-5 mt-6 border-l-2 border-l-brand-blue">
              <p className="font-mono text-xs text-brand-blue mb-2 tracking-widest uppercase">
                Current Focus
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Deepening DSA fundamentals in C++ · Building real-world React projects ·
                · Preparing for SDE internship interviews
              </p>
            </div>
          </motion.div>

          {/* Right — Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="glass-card-hover p-5 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border mb-4 ${colorMap[item.color]}`}
                >
                  {item.icon}
                </div>
                <p className="font-mono text-xs text-slate-500 mb-1 tracking-wide uppercase">
                  {item.label}
                </p>
                <p className="font-display font-semibold text-sm text-white group-hover:text-brand-blue-light transition-colors">
                  {item.value}
                </p>
              </motion.div>
            ))}

            {/* Extra stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="col-span-2 glass-card p-5 flex items-center gap-4"
            >
              <div className="flex-1">
                <p className="font-mono text-xs text-slate-500 mb-1 tracking-wide uppercase">
                  Problems Solved
                </p>
                <p className="font-display font-bold text-2xl gradient-text">300+</p>
                <p className="font-body text-xs text-slate-500 mt-1">
                  LeetCode · CodeForces · GFG
                </p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex-1">
                <p className="font-mono text-xs text-slate-500 mb-1 tracking-wide uppercase">
                  Projects Built
                </p>
                <p className="font-display font-bold text-2xl gradient-text">2+</p>
                <p className="font-body text-xs text-slate-500 mt-1">
                  Live & Deployed
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
