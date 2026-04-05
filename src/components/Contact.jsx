import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle2 } from "lucide-react"

const socialLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "srivastavasanskar31@gmail.com",
    href: "https://mailto:srivastavasanskar31@gmail.com",
    color: "blue",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "UserName:Sanskar-SrivastavaDot",
    href: "https://github.com/Sanskar-SrivastavaDot",
    color: "violet",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "UserName:sanskar-srivastava",
    href: "https://www.linkedin.com/in/sanskar-srivastava-243378367",
    color: "cyan",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "India",
    href: null,
    color: "amber",
  },
]

const colorMap = {
  blue: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
  violet: "text-brand-violet bg-brand-violet/10 border-brand-violet/20",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with your form endpoint (e.g. Formspree)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="orb w-[500px] h-[500px] bg-brand-blue/6 bottom-[-100px] right-[-100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">05 — Contact</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg font-body">
            Whether you have an internship opportunity, want to collaborate, or just want to
            chat about code — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {socialLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.09 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="glass-card-hover p-4 flex items-center gap-4 group"
                  >
                    <div className={`p-2.5 rounded-xl border ${colorMap[link.color]}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-500 mb-0.5 tracking-wide uppercase">
                        {link.label}
                      </p>
                      <p className="text-slate-200 text-sm group-hover:text-white transition-colors font-body">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card p-4 flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border ${colorMap[link.color]}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-500 mb-0.5 tracking-wide uppercase">
                        {link.label}
                      </p>
                      <p className="text-slate-200 text-sm font-body">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
              className="glass-card p-4 flex items-center gap-3 border-l-2 border-l-green-500"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-slate-300 text-sm font-body">
                <span className="text-green-400 font-semibold">Available</span> for internships
                and part-time projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 font-body text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-6 text-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-xs text-slate-500 mb-2 tracking-widest uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sanskar srivastava"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                                 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.06] transition-all font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 mb-2 tracking-widest uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                                 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.06] transition-all font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 mb-2 tracking-widest uppercase">
                      Message : This is Just a Demo Form
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                                 focus:outline-none focus:border-brand-blue/40 focus:bg-white/[0.06] transition-all resize-none font-body"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-600 font-mono">
                    // or email me directly at srivastavasanskar31@gmail.com
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
