import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiLeafLine,
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
  RiTimeLine,
  RiCheckLine,
} from "react-icons/ri";

const products = [
  "Toilet Cleaner", "Hand Wash", "Dish Wash Liquid",
  "Floor Cleaner", "Bathroom Cleaner", "Glass Cleaner", "Car Wash Shampoo", "General Inquiry",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", product: "", quantity: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

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
              <span className="text-xs font-600 tracking-widest uppercase text-[#C8E63C]">Get in Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-['Playfair_Display'] font-800 text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/60 max-w-xl text-lg">
              Have a product inquiry, want to place a bulk order, or need pricing? Reach out and we'll respond quickly.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1100 0 600 60 0 30L0 60Z" fill="#F7F9F4" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="font-['Playfair_Display'] font-700 text-2xl text-[#0D1A12] mb-6">
                Reach Out to Us
              </h2>

              {[
                { icon: RiPhoneLine, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
                { icon: RiWhatsappLine, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919999999999" },
                { icon: RiMailLine, label: "Email", value: "info@krithiventerprise.com", href: "mailto:info@krithiventerprise.com" },
                { icon: RiMapPinLine, label: "Location", value: "Krithiv Enterprise, Gujarat, India", href: null },
                { icon: RiTimeLine, label: "Business Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white border border-[#D4E2D8] rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-[#0A4A2E]/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#0A4A2E]" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-600 tracking-widest uppercase text-[#5A6B5F] mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[#1C2B21] hover:text-[#0A4A2E] transition-colors font-500">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-[#1C2B21] font-500">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0A4A2E] rounded-2xl p-12 text-center text-white h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C8E63C] flex items-center justify-center mb-5">
                  <RiCheckLine className="text-[#0A4A2E]" size={30} />
                </div>
                <h3 className="font-['Playfair_Display'] font-700 text-2xl mb-3">Message Sent</h3>
                <p className="text-white/70">We've received your inquiry and will be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
                onSubmit={submit}
                className="bg-white border border-[#D4E2D8] rounded-2xl p-8 space-y-5 shadow-sm"
              >
                <h3 className="font-['Playfair_Display'] font-700 text-xl text-[#0D1A12] mb-2">Send an Inquiry</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "Full name" },
                    { name: "company", label: "Company Name", type: "text", placeholder: "Optional" },
                    { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">{f.label}</label>
                      <input type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]}
                        onChange={handle} required={f.name !== "company"}
                        className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm placeholder-[#5A6B5F]/50 focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">Product Interest</label>
                    <select name="product" value={form.product} onChange={handle} required
                      className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors"
                    >
                      <option value="">Select product</option>
                      {products.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">Quantity Required</label>
                    <input type="text" name="quantity" placeholder="e.g. 100 units, 50 L" value={form.quantity}
                      onChange={handle}
                      className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm placeholder-[#5A6B5F]/50 focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-600 text-[#1C2B21] mb-1.5">Message</label>
                  <textarea name="message" rows={4} placeholder="Describe your requirement..." value={form.message}
                    onChange={handle} required
                    className="w-full px-4 py-3 bg-[#F7F9F4] border border-[#D4E2D8] rounded-xl text-sm placeholder-[#5A6B5F]/50 focus:outline-none focus:border-[#0A4A2E] focus:ring-2 focus:ring-[#0A4A2E]/10 transition-colors resize-none"
                  />
                </div>

                <button type="submit"
                  className="w-full py-4 bg-[#0A4A2E] text-white font-600 rounded-xl hover:bg-[#0d6b42] transition-colors text-sm"
                >
                  Send Inquiry
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
