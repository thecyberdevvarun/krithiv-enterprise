import { Link } from "react-router-dom";
import { RiLeafLine, RiPhoneLine, RiMailLine, RiMapPinLine, RiWhatsappLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#0D1A12] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#C8E63C] flex items-center justify-center">
                <RiLeafLine className="text-[#0A4A2E] text-lg" />
              </div>
              <div>
                <span className="font-['Playfair_Display'] font-700 text-white text-lg leading-none block">Krithiv</span>
                <span className="text-[10px] font-500 tracking-[0.15em] text-[#C8E63C] uppercase leading-none block">Enterprise</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Manufacturer and supplier of premium cleaning and hygiene products for homes, businesses, and commercial establishments.
            </p>
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-500 rounded-lg hover:bg-[#20be5c] transition-colors"
            >
              <RiWhatsappLine size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-600 tracking-widest uppercase text-[#C8E63C] mb-5">Products</h4>
            <ul className="space-y-3">
              {["Toilet Cleaner", "Hand Wash", "Dish Wash Liquid", "Floor Cleaner", "Bathroom Cleaner", "Glass Cleaner", "Car Wash Shampoo"].map((p) => (
                <li key={p}>
                  <Link to={`/products`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-600 tracking-widest uppercase text-[#C8E63C] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Wholesale & Distributors", to: "/wholesale" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-600 tracking-widest uppercase text-[#C8E63C] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <RiMapPinLine className="text-[#C8E63C] mt-0.5 shrink-0" size={16} />
                <span className="text-sm text-white/60 leading-relaxed">
                  Krithiv Enterprise, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <RiPhoneLine className="text-[#C8E63C] shrink-0" size={16} />
                <a href="tel:+919999999999" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <RiMailLine className="text-[#C8E63C] shrink-0" size={16} />
                <a href="mailto:info@krithiventerprise.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@krithiventerprise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Krithiv Enterprise. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Manufacturer of Quality Cleaning Products
          </p>
        </div>
      </div>
    </footer>
  );
}
