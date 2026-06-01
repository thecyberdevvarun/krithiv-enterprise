import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShieldCheckLine,
  RiDropLine,
} from "react-icons/ri";

const categoryIcons = {
  Bathroom: RiDropLine,
  "Personal Care": RiShieldCheckLine,
  Kitchen: RiDropLine,
  Flooring: RiDropLine,
  "Glass & Surfaces": RiDropLine,
  Automotive: RiDropLine,
};

export default function ProductCard({ product, index = 0 }) {
  const Icon = categoryIcons[product.category] || RiDropLine;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#D4E2D8] hover:border-[#0A4A2E]/30 hover:shadow-xl hover:shadow-[#0A4A2E]/10 transition-all duration-300"
    >
      {/* Color Band */}
      <div
        className="h-2 w-full"
        style={{ backgroundColor: product.colorAccent }}
      />

      <div className="p-4 sm:p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${product.colorAccent}18` }}
          >
            <Icon style={{ color: product.colorAccent }} size={16} />
          </div>
          <span className="text-[10px] sm:text-xs font-600 tracking-widest uppercase text-[#5A6B5F]">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-700 text-[#0D1A12] mb-2 group-hover:text-[#0A4A2E] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6B5F] leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {product.tagline}
        </p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 bg-[#F7F9F4] border border-[#D4E2D8] rounded-full text-[#5A6B5F] font-500"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Benefits */}
        <ul className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-6">
          {product.benefits.slice(0, 2).map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs sm:text-sm text-[#1C2B21]">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: product.colorAccent }}
              />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 sm:gap-3">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-gradient-to-r from-[#0A4A2E] to-[#0d6b42] text-white text-xs sm:text-sm font-500 rounded-lg hover:shadow-lg hover:shadow-[#0A4A2E]/30 transition-all duration-300 group/btn"
          >
            View Details
            <RiArrowRightLine className="group-hover/btn:translate-x-0.5 transition-transform" size={14} />
          </Link>
          <Link
            to="/contact"
            className="px-3 sm:px-4 py-2 sm:py-2.5 border border-[#0A4A2E] text-[#0A4A2E] text-xs sm:text-sm font-500 rounded-lg hover:bg-[#0A4A2E]/5 hover:border-[#0A4A2E]/50 transition-all duration-300"
          >
            Enquire
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
