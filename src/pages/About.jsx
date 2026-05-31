import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiLeafLine,
  RiArrowRightLine,
  RiLightbulbLine,
  RiShieldCheckLine,
  RiHeartLine,
  RiFlashlightLine,
} from "react-icons/ri";

const values = [
  { icon: RiShieldCheckLine, title: "Quality First", desc: "Every product is manufactured and tested to meet the highest hygiene and safety standards before leaving our facility." },
  { icon: RiHeartLine, title: "Customer Commitment", desc: "We build long-term relationships with our distributors and retailers through consistent service, honest pricing, and reliable supply." },
  { icon: RiFlashlightLine, title: "Innovation", desc: "Continuously improving our formulations to deliver more effective, eco-conscious cleaning solutions." },
  { icon: RiLightbulbLine, title: "Accessibility", desc: "Affordable cleaning hygiene for every home, business, and institution — regardless of scale." },
];

const process = [
  { step: "01", title: "Raw Material Sourcing", desc: "We source only certified, high-grade chemical inputs from trusted domestic suppliers." },
  { step: "02", title: "Formulation", desc: "Expert chemists develop and refine formulas for maximum efficacy and safety." },
  { step: "03", title: "Manufacturing", desc: "Controlled production environment ensuring consistent quality batch after batch." },
  { step: "04", title: "Quality Testing", desc: "Multi-stage testing for pH, viscosity, microbial safety, and performance." },
  { step: "05", title: "Packaging", desc: "Clean, tamper-proof packaging in sizes suited for retail, wholesale, and institutional use." },
  { step: "06", title: "Dispatch", desc: "Fast, reliable dispatch to our distributor network across Gujarat and beyond." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7F9F4]">
      {/* Hero */}
      <div className="bg-[#0D1A12] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)", backgroundSize: "36px 36px" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8E63C]/10 rounded-full mb-5">
              <RiLeafLine className="text-[#C8E63C]" size={12} />
              <span className="text-xs font-600 tracking-widest uppercase text-[#C8E63C]">About Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-['Playfair_Display'] font-800 text-white mb-4">
              Our Story
            </h1>
            <p className="text-white/60 max-w-xl text-lg">
              Built on a simple belief — every home and business deserves reliable, effective, and affordable cleaning products.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1100 0 600 60 0 30L0 60Z" fill="#F7F9F4" />
          </svg>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="bg-white border border-[#D4E2D8] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A4A2E]/10 flex items-center justify-center mb-5">
                <RiLightbulbLine className="text-[#0A4A2E]" size={22} />
              </div>
              <h2 className="font-['Playfair_Display'] font-700 text-2xl text-[#0D1A12] mb-4">Our Mission</h2>
              <p className="text-[#5A6B5F] leading-relaxed text-lg">
                Deliver affordable and effective cleaning solutions for every household and business. We make hygiene accessible without compromise on quality.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
              className="bg-[#0A4A2E] rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)", backgroundSize: "24px 24px" }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#C8E63C]/20 flex items-center justify-center mb-5">
                  <RiLeafLine className="text-[#C8E63C]" size={22} />
                </div>
                <h2 className="font-['Playfair_Display'] font-700 text-2xl text-white mb-4">Our Vision</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  To become a trusted cleaning and hygiene products brand across India — recognized for consistency, quality, and fair pricing at every level of distribution.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A4A2E]/10 rounded-full mb-4">
              <RiShieldCheckLine className="text-[#0A4A2E]" size={12} />
              <span className="text-xs font-600 tracking-widest uppercase text-[#0A4A2E]">Our Values</span>
            </div>
            <h2 className="text-4xl font-['Playfair_Display'] font-700 text-[#0D1A12]">What We Stand For</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                className="border border-[#D4E2D8] rounded-2xl p-6 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A4A2E]/10 flex items-center justify-center mb-4">
                  <v.icon className="text-[#0A4A2E]" size={20} />
                </div>
                <h3 className="font-['Playfair_Display'] font-600 text-[#0D1A12] text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-[#5A6B5F] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A4A2E]/10 rounded-full mb-4">
              <RiFlashlightLine className="text-[#0A4A2E]" size={12} />
              <span className="text-xs font-600 tracking-widest uppercase text-[#0A4A2E]">Manufacturing</span>
            </div>
            <h2 className="text-4xl font-['Playfair_Display'] font-700 text-[#0D1A12]">From Formula to Shelf</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.step} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                className="bg-white border border-[#D4E2D8] rounded-2xl p-6 group hover:border-[#0A4A2E]/30 hover:shadow-md transition-all"
              >
                <div className="text-5xl font-['Playfair_Display'] font-800 text-[#0A4A2E]/15 mb-3 group-hover:text-[#0A4A2E]/25 transition-colors">
                  {p.step}
                </div>
                <h3 className="font-['Playfair_Display'] font-600 text-[#0D1A12] text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-[#5A6B5F] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A4A2E]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-4xl font-['Playfair_Display'] font-700 text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-white/70 mb-8">
              Whether you're a retailer, distributor, or business looking for a reliable cleaning products supplier — we're here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/wholesale" className="flex items-center gap-2 px-7 py-3.5 bg-[#C8E63C] text-[#0A4A2E] font-600 rounded-xl hover:bg-[#d4f040] transition-colors text-sm">
                Distributor Program <RiArrowRightLine size={16} />
              </Link>
              <Link to="/contact" className="flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-500 rounded-xl hover:bg-white/10 transition-colors text-sm">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
