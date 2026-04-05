import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Trophy, BookOpen, Code2 } from "lucide-react"

const education = {
  degree: "B.E in Computer Science & Engineering",
  institution: "University Institute of Engineering and Technology, Panjab University, Chandigarh",
  period: "2025 – 2029",
  gpa: "In Progress",
  courses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Computer Networks",
    "Operating Systems",
    "Database Management Systems"
  ],
}

const achievements = [
  {
    icon: <Trophy size={16} />,
    title: "300+ DSA Problems Solved",
    desc: "Across LeetCode, Codeforces, and GeeksForGeeks",
    color: "amber",
  },
  {
    icon: <Code2 size={16} />,
    title: "Active Competitive Coder",
    desc: "Regular participation in Codeforces & LeetCode contests",
    color: "blue",
  },
  {
    icon: <GraduationCap size={16} />,
    title: "Academic Excellence",
    desc: "Strong foundation in CS fundamentals & core subjects",
    color: "cyan",
  },
]

const colorMap = {
  amber: {
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  blue: {
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    text: "text-brand-blue",
    dot: "bg-brand-blue",
  },
  violet: {
    bg: "bg-brand-violet/10",
    border: "border-brand-violet/20",
    text: "text-brand-violet",
    dot: "bg-brand-violet",
  },
  cyan: {
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
  },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" className="py-28 relative">
      <div className="orb w-[500px] h-[300px] bg-brand-violet/5 bottom-0 left-0 pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">04 — Experience</p>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card p-7 h-full">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 shrink-0">
                  <GraduationCap size={22} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">
                    {education.degree}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{education.institution}</p>
                </div>
              </div>

              {/* Timeline badge */}
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="font-mono text-xs text-slate-300">{education.period}</span>
                <span className="ml-auto font-mono text-xs text-brand-blue">Currently Enrolled</span>
              </div>

              {/* Coursework */}
              <div>
                <p className="font-mono text-xs text-slate-500 mb-3 tracking-widest uppercase">
                  Relevant Coursework
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {education.courses.map((course, i) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.07 }}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-brand-blue/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/60 shrink-0" />
                      <span className="text-slate-300 text-sm font-body">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-5">
              Highlights &amp; Milestones
            </p>
            {achievements.map((item, i) => {
              const c = colorMap[item.color]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="glass-card-hover p-5 flex items-start gap-4"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${c.bg} ${c.border} ${c.text}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-body">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Coding platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="glass-card p-5 mt-2"
            >
              <p className="font-mono text-xs text-slate-500 mb-4 tracking-widest uppercase">
                Coding Platforms
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "LeetCode", val: "300+" },
                  { name: "Codeforces", val: "Div 4" },
                  { name: "GFG", val: "Active" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex-1 min-w-[100px] text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <p className="font-display font-bold text-lg gradient-text">{p.val}</p>
                    <p className="font-mono text-xs text-slate-500 mt-0.5">{p.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
