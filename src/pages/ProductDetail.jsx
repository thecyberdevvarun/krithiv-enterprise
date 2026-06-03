import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowLeftLine,
  RiCheckLine,
  RiArrowRightLine,
  RiInformationLine,
  RiLeafLine,
} from "react-icons/ri";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <Navigate to="/products" />;

  const others = products.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F7F9F4]">
      {/* Header band */}
      <div
        className="pt-28 pb-16 relative overflow-hidden"
        style={{ backgroundColor: product?.colorAccent + "18" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-[#5A6B5F] hover:text-[#0A4A2E] mb-6 transition-colors"
          >
            <RiArrowLeftLine size={15} />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-xs font-600 tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: product?.colorAccent + "20", color: product?.colorAccent }}
              >
                {product?.category}
              </span>
              <h1 className="text-5xl font-['Playfair_Display'] font-800 text-[#0D1A12] mb-3">
                {product?.name}
              </h1>
              <p className="text-xl text-[#5A6B5F] mb-6">{product?.tagline}</p>
              <p className="text-[#5A6B5F] leading-relaxed mb-8">{product?.description}</p>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="text-xs font-600 tracking-widest uppercase text-[#5A6B5F] mb-3">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product?.sizes.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 bg-white border-2 rounded-lg text-sm font-600 text-[#0D1A12]"
                      style={{ borderColor: product?.colorAccent + "60" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 text-white font-600 rounded-xl text-sm transition-colors"
                  style={{ backgroundColor: product?.colorAccent }}
                >
                  Request a Quote
                  <RiArrowRightLine size={16} />
                </Link>
                <Link
                  to="/wholesale"
                  className="px-7 py-3.5 border-2 text-[#0A4A2E] font-500 rounded-xl text-sm hover:bg-[#0A4A2E]/5 transition-colors border-[#0A4A2E]/30"
                >
                  Bulk Order
                </Link>
              </div>
            </motion.div>

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                className="rounded-3xl p-8 sm:p-10 flex items-center justify-center min-h-64 relative overflow-hidden bg-gradient-to-br from-white to-[#F7F9F4]"
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${product?.colorAccent} 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-64 sm:h-80 object-contain relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Detail sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-[#D4E2D8] rounded-2xl p-6"
          >
            <h2 className="font-['Playfair_Display'] font-700 text-[#0D1A12] text-xl mb-5">
              Key Benefits
            </h2>
            <ul className="space-y-3">
              {product?.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: product?.colorAccent + "20" }}
                  >
                    <RiCheckLine style={{ color: product?.colorAccent }} size={13} />
                  </div>
                  <span className="text-sm text-[#1C2B21]">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Directions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border border-[#D4E2D8] rounded-2xl p-6"
          >
            <h2 className="font-['Playfair_Display'] font-700 text-[#0D1A12] text-xl mb-5">
              How to Use
            </h2>
            <p className="text-sm text-[#5A6B5F] leading-relaxed">{product?.directions}</p>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#0A4A2E] rounded-2xl p-6 text-white relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <RiInformationLine className="text-[#C8E63C] mb-4" size={28} />
              <h2 className="font-['Playfair_Display'] font-700 text-xl mb-3">
                Need Bulk Supply?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                We supply in bulk for wholesalers, retailers, hotels, hospitals,
                and commercial establishments at competitive prices.
              </p>
              <Link
                to="/wholesale"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8E63C] text-[#0A4A2E] font-600 text-sm rounded-lg hover:bg-[#d4f040] transition-colors"
              >
                Distributor Info
                <RiArrowRightLine size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Other products */}
        <div className="mt-16">
          <h2 className="font-['Playfair_Display'] font-700 text-[#0D1A12] text-2xl mb-8">
            Other Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((p, i) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="bg-white border border-[#D4E2D8] rounded-xl p-5 flex items-center gap-4 hover:border-[#0A4A2E]/30 hover:shadow-md transition-all group"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-[#F7F9F4] to-[#E8EFE8] overflow-hidden"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <div className="font-600 text-[#0D1A12] text-sm group-hover:text-[#0A4A2E] transition-colors">
                    {p.name}
                  </div>
                  <div className="text-xs text-[#5A6B5F] mt-0.5">{p.category}</div>
                </div>
                <RiArrowRightLine className="ml-auto text-[#5A6B5F] group-hover:text-[#0A4A2E] group-hover:translate-x-1 transition-all" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
