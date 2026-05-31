import { useState } from "react";
import { motion } from "framer-motion";
import { RiFilterLine, RiLeafLine } from "react-icons/ri";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function Products() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#F7F9F4]">
      {/* Header */}
      <div className="bg-[#0D1A12] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8E63C]/10 rounded-full mb-5">
              <RiLeafLine className="text-[#C8E63C]" size={12} />
              <span className="text-xs font-600 tracking-widest uppercase text-[#C8E63C]">
                Product Catalogue
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-['Playfair_Display'] font-800 text-white mb-4">
              Our Products
            </h1>
            <p className="text-white/60 max-w-xl text-lg">
              Seven categories of professional-grade cleaning products, available in
              multiple sizes for individuals, retailers, and bulk buyers.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1100 0 600 60 0 30L0 60Z" fill="#F7F9F4" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-10 flex-wrap"
        >
          <RiFilterLine className="text-[#5A6B5F]" size={16} />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-500 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-[#0A4A2E] text-white border-[#0A4A2E]"
                  : "bg-white text-[#5A6B5F] border-[#D4E2D8] hover:border-[#0A4A2E] hover:text-[#0A4A2E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
