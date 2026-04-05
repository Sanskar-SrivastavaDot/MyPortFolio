import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Monitor, Wrench, Brain } from "lucide-react"
import { skillCategories } from "../data/skills"

const iconMap = { Code2, Monitor, Wrench, Brain }

const colorStyles = {
  blue: {
    icon: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
    bar: "bg-gradient-to-r from-brand-blue to-brand-blue-light",
    badge: "text-brand-blue bg-brand-blue/10",
    border: "hover:border-brand-blue/30",
  },
  violet: {
    icon: "text-brand-violet bg-brand-violet/10 border-brand-violet/20",
    bar: "bg-gradient-to-r from-brand-violet to-brand-violet-light",
    badge: "text-brand-violet bg-brand-violet/10",
    border: "hover:border-brand-violet/30",
  },
  cyan: {
    icon: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    bar: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    badge: "text-cyan-400 bg-cyan-400/10",
    border: "hover:border-cyan-400/30",
  },
  amber: {
    icon: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    bar: "bg-gradient-to-r from-amber-500 to-amber-400",
    badge: "text-amber-400 bg-amber-400/10",
    border: "hover:border-amber-400/30",
  },
}

function SkillBar({ skill, color, isInView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">{skill.icon}</span>
          <span className="font-body text-sm text-slate-300">{skill.name}</span>
        </div>
        <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${colorStyles[color].badge}`}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: delay + 0.2 }}
          className={`h-full rounded-full ${colorStyles[color].bar}`}
        />
      </div>
    </motion.div>
  )
}

function CategoryCard({ category, index, isInView }) {
  const Icon = iconMap[category.icon]
  const styles = colorStyles[category.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`glass-card p-6 transition-all duration-300 ${styles.border} hover:shadow-card-dark group`}
    >
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl border ${styles.icon}`}>
          {Icon && <Icon size={18} />}
        </div>
        <h3 className="font-display font-semibold text-white text-base group-hover:text-slate-100">
          {category.label}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={category.color}
            isInView={isInView}
            delay={index * 0.1 + i * 0.07}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="skills" className="py-28 relative">
      {/* Decorative orb */}
      <div className="orb w-[600px] h-[300px] bg-brand-violet/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">02 — Skills</p>
          <h2 className="section-title">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg font-body">
            A curated set of skills I&apos;ve been sharpening — from competitive coding to modern frontend development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} category={cat} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-600 font-mono text-xs mt-10 tracking-wide"
        >
          // always learning · always building
        </motion.p>
      </div>
    </section>
  )
}
