import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShieldCheckLine,
  RiTruckLine,
  RiPriceTag3Line,
  RiAwardLine,
  RiCustomerServiceLine,
  RiBoxingLine,
  RiLeafLine,
  RiStarLine,
  RiBuilding2Line,
  RiTeamLine,
  RiGlobalLine,
} from "react-icons/ri";
import ProductCard from "../components/ProductCard";
import { products, stats, whyUs } from "../data/products";

const whyIcons = [
  RiAwardLine,
  RiPriceTag3Line,
  RiBoxingLine,
  RiBoxingLine,
  RiTruckLine,
  RiCustomerServiceLine,
];

const statIcons = [RiLeafLine, RiBuilding2Line, RiTeamLine, RiGlobalLine];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1A12]">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Green blob */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#0A4A2E]/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#C8E63C]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#C8E63C]/30 rounded-full bg-[#C8E63C]/10 mb-8"
              >
                <RiLeafLine className="text-[#C8E63C]" size={14} />
                <span className="text-xs font-600 tracking-widest uppercase text-[#C8E63C]">
                  Made in India
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-['Playfair_Display'] font-800 text-white leading-[1.05] mb-6"
              >
                Premium{" "}
                <span className="text-[#C8E63C]">Cleaning</span>{" "}
                Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg"
              >
                Manufacturer and supplier of high-quality hygiene products for
                homes, businesses, hotels, hospitals, and commercial establishments
                across India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#C8E63C] text-[#0A4A2E] font-600 rounded-xl hover:bg-[#d4f040] transition-colors text-sm"
                >
                  View Products
                  <RiArrowRightLine size={16} />
                </Link>
                <Link
                  to="/wholesale"
                  className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-500 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  Become a Distributor
                </Link>
              </motion.div>
            </div>

            {/* Stats grid on hero */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <Icon className="text-[#C8E63C] mb-3" size={24} />
                    <div className="text-4xl font-['Playfair_Display'] font-800 text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 0 900 80 720 60C540 40 240 0 0 40L0 80Z" fill="#F7F9F4" />
          </svg>
        </div>
      </section>

      {/* ── About Snapshot ── */}
      <section className="py-20 bg-[#F7F9F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A4A2E]/10 rounded-full mb-6">
                <RiStarLine className="text-[#0A4A2E]" size={12} />
                <span className="text-xs font-600 tracking-widest uppercase text-[#0A4A2E]">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-700 text-[#0D1A12] leading-tight mb-6">
                Trusted Cleaning Products, Built for India
              </h2>
              <p className="text-[#5A6B5F] leading-relaxed mb-6">
                Krithiv Enterprise manufactures high-quality cleaning and hygiene products
                designed for homes, offices, hotels, restaurants, hospitals, and commercial
                establishments. We combine effective formulas with competitive pricing to serve
                wholesalers and retailers across the region.
              </p>
              <p className="text-[#5A6B5F] leading-relaxed mb-8">
                From a single bottle to a bulk pallet — we ensure consistent quality,
                reliable supply, and fast turnaround at every scale.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#0A4A2E] font-600 text-sm border-b-2 border-[#C8E63C] pb-0.5 hover:border-[#0A4A2E] transition-colors"
              >
                Our Full Story
                <RiArrowRightLine size={15} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#0A4A2E] rounded-3xl p-10 text-white relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <blockquote className="text-2xl font-['Playfair_Display'] font-500 leading-relaxed mb-6 relative">
                  "To become a trusted cleaning and hygiene products brand across every home and business in India."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8E63C] flex items-center justify-center">
                    <RiLeafLine className="text-[#0A4A2E]" size={18} />
                  </div>
                  <div>
                    <div className="font-600 text-sm">Krithiv Enterprise</div>
                    <div className="text-white/50 text-xs">Our Vision</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A4A2E]/10 rounded-full mb-4">
                <RiLeafLine className="text-[#0A4A2E]" size={12} />
                <span className="text-xs font-600 tracking-widest uppercase text-[#0A4A2E]">
                  Our Products
                </span>
              </div>
              <h2 className="text-4xl font-['Playfair_Display'] font-700 text-[#0D1A12]">
                Seven Categories, One Source
              </h2>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-2 text-sm text-[#0A4A2E] font-600 hover:gap-3 transition-all shrink-0"
            >
              All Products <RiArrowRightLine size={15} />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-20 bg-[#F7F9F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A4A2E]/10 rounded-full mb-4">
              <RiShieldCheckLine className="text-[#0A4A2E]" size={12} />
              <span className="text-xs font-600 tracking-widest uppercase text-[#0A4A2E]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl font-['Playfair_Display'] font-700 text-[#0D1A12] max-w-lg mx-auto">
              The Krithiv Difference
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="bg-white border border-[#D4E2D8] rounded-2xl p-6 hover:shadow-lg hover:border-[#0A4A2E]/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A4A2E]/10 flex items-center justify-center mb-4 group-hover:bg-[#0A4A2E] transition-colors">
                    <Icon className="text-[#0A4A2E] group-hover:text-[#C8E63C] transition-colors" size={22} />
                  </div>
                  <h3 className="font-['Playfair_Display'] font-600 text-[#0D1A12] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A6B5F] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0A4A2E] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-700 text-white mb-4 leading-tight">
                Ready to Partner with Us?
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Join our growing network of distributors and retailers. Get attractive
                margins, reliable supply, and dedicated support.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/wholesale"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#C8E63C] text-[#0A4A2E] font-600 rounded-xl hover:bg-[#d4f040] transition-colors"
              >
                Become a Distributor
                <RiArrowRightLine size={16} />
              </Link>
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 py-4 border border-white/30 text-white font-500 rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
