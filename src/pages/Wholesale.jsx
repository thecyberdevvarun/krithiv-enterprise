import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiLeafLine,
  RiPriceTag3Line,
  RiTruckLine,
  RiCustomerServiceLine,
  RiMegaphoneLine,
  RiShieldCheckLine,
  RiCheckLine,
} from "react-icons/ri";

const benefits = [
  { icon: RiPriceTag3Line, title: "Attractive Margins", desc: "Competitive wholesale pricing with generous margins built for your profitability." },
  { icon: RiMegaphoneLine, title: "Marketing Support", desc: "Sales materials, product catalogues, and branding support for your retail channels." },
  { icon: RiTruckLine, title: "Reliable Supply", desc: "Consistent inventory levels with fast fulfillment so you never run out of stock." },
  { icon: RiCustomerServiceLine, title: "Dedicated Support", desc: "A dedicated point of contact for onboarding, orders, and after-sales support." },
  { icon: RiShieldCheckLine, title: "Quality Guarantee", desc: "Every batch tested for quality and consistency before dispatch." },
  { icon: RiLeafLine, title: "Custom Packaging", desc: "Private label and custom packaging options available for qualifying partners." },
];

const categories = ["Toilet Cleaner", "Hand Wash", "Dish Wash Liquid", "Floor Cleaner", "Bathroom Cleaner", "Glass Cleaner", "Car Wash Shampoo", "All Products"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Wholesale() {
  const [form, setForm] = useState({
    name: "", business: "", city: "", state: "", phone: "", email: "", category: "", monthly: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F9F4]">
      {/* Header */}
      <div className="bg-[#0D1A12] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C8E63C 1px, transparent 0)", backgroundSize: "36px 36px" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8E63C]/10 rounded-full mb-5">
              <RiLeafLine className="text-[#C8E63C]" size={12} />
              <span className="text-xs font-600 tracking-widest uppercase text-[#C8E63C]">Wholesale & Distribution</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-['Playfair_Display'] font-800 text-white mb-4">
              Become a Distributor
            </h1>
            <p className="text-white/60 max-w-xl text-lg">
              Partner with Krithiv Enterprise and build a profitable business supplying quality cleaning products to your market.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1100 0 600 60 0 30L0 60Z" fill="#F7F9F4" />
          </svg>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-['Playfair_Display'] font-700 text-[#0D1A12] mb-3">
              Why Partner with Us?
            </h2>
            <p className="text-[#5A6B5F] max-w-lg mx-auto">
              We built our distributor program to be straightforward, profitable, and well-supported.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} variants={fadeUp} initial="hidden" whileInView="show" custom={i} viewport={{ once: true }}
                className="bg-white border border-[#D4E2D8] rounded-2xl p-6 hover:shadow-md hover:border-[#0A4A2E]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A4A2E]/10 flex items-center justify-center mb-4 group-hover:bg-[#0A4A2E] transition-colors">
                  <b.icon className="text-[#0A4A2E] group-hover:text-[#C8E63C] transition-colors" size={22} />
                </div>
                <h3 className="font-['Playfair_Display'] font-600 text-[#0D1A12] text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-[#5A6B5F] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-4xl font-['Playfair_Display'] font-700 text-[#0D1A12] mb-3">
              Apply for Distributorship
            </h2>
            <p className="text-[#5A6B5F]">
              Fill in the form below and our team will reach out within 24-48 hours.
            </p>
          </motion.div>

          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0A4A2E] rounded-2xl p-12 text-center text-white"
            >
              <div className="w-16 h-16 rounded-full bg-[#C8E63C] flex items-center justify-center mx-auto mb-5">
                <RiCheckLine className="text-[#0A4A2E]" size={30} />
              </div>
              <h3 className="font-['Playfair_Display'] font-700 text-2xl mb-3">Application Received</h3>
              <p className="text-white/70">
                Thank you for your interest in becoming a distributor. Our team will get in touch within 24-48 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              onSubmit={submit}
              className="bg-white border border-[#D4E2D8] rounded-2xl p-8 space-y-5 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Full name" },
                  { name: "business", label: "Business Name", type: "text", placeholder: "Company / Shop name" },
                  { name: "city", label: "City", type: "text", placeholder: "City" },
                  { name: "state", label: "State", type: "text", placeholder: "State" },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">{f.label}</label>
                    <input
                      type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]}
                      onChange={handle} required
                      className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm text-[#1C2B21] placeholder-[#5A6B5F]/50 focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">Product Category</label>
                  <select name="category" value={form.category} onChange={handle} required
                    className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm text-[#1C2B21] focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors"
                  >
                    <option value="">Select category</option>
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">Monthly Requirement</label>
                  <input type="text" name="monthly" placeholder="e.g. 500 litres / month" value={form.monthly}
                    onChange={handle} required
                    className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm text-[#1C2B21] placeholder-[#5A6B5F]/50 focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">Additional Message</label>
                <textarea name="message" rows={4} placeholder="Tell us more about your business..." value={form.message}
                  onChange={handle}
                  className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm text-[#1C2B21] placeholder-[#5A6B5F]/50 focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors resize-none"
                />
              </div>

              <button type="submit"
                className="w-full py-4 bg-[#0A4A2E] text-white font-600 rounded-xl hover:bg-[#0d6b42] transition-colors text-sm"
              >
                Submit Application
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
