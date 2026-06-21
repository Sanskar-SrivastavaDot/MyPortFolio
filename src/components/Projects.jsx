import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { projects } from "../data/projects"


function ProjectCard({ project, index, isInView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card-hover group relative overflow-hidden flex flex-col"
    >

      <div className="p-6 flex flex-col flex-1">
        {/* Number */}
        <p className="font-mono text-xs text-slate-600 mb-3">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="font-display font-bold text-xl mb-3 transition-colors duration-300 flex items-center gap-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed font-body flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 border border-current bg-transparent"
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
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-current font-body text-xs 
                       hover:bg-black hover:text-white transition-colors duration-200"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-current font-body text-xs 
                       hover:bg-black hover:text-white transition-colors duration-200"
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
