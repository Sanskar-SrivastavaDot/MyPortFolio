import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { projects } from "../data/projects"

const tagColorMap = {
  React: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Tailwind CSS": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  JavaScript: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Node.js": "text-green-400 bg-green-400/10 border-green-400/20",
  HTML: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  CSS: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
}

function ProjectCard({ project, index, isInView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card group relative overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:shadow-card-dark flex flex-col"
    >
      {/* Gradient Header Banner */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Floating gradient blob on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.4 }}
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} blur-2xl pointer-events-none`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Number */}
        <p className="font-mono text-xs text-slate-600 mb-3">
          {String(index + 1).padStart(2, "0")}
        </p>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-blue-light transition-colors duration-300 flex items-center gap-2">
          {project.title}
          <motion.span
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={16} className="text-brand-blue" />
          </motion.span>
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed font-body flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                tagColorMap[tag] || "text-slate-400 bg-white/5 border-white/10"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10
                       text-slate-300 text-xs font-body hover:border-brand-blue/40 hover:text-white
                       hover:bg-brand-blue/10 transition-all duration-300"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                       bg-brand-blue/15 border border-brand-blue/25 text-brand-blue-light text-xs font-body
                       hover:bg-brand-blue/25 hover:border-brand-blue/50 transition-all duration-300"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="projects" className="py-28 relative">
      <div className="orb w-[400px] h-[400px] bg-brand-blue/5 top-0 right-0 pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">03 — Projects</p>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg font-body">
            A selection of projects where I turned ideas into working software. Each one taught me something new.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sanskar-SrivastavaDot"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
