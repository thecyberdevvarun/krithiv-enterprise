import { Link } from "react-router-dom";
import { RiLeafLine, RiPhoneLine, RiMailLine, RiMapPinLine, RiWhatsappLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#0D1A12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#C8E63C] to-[#d4f040] flex items-center justify-center shadow-lg shadow-[#C8E63C]/20">
                <RiLeafLine className="text-[#0A4A2E] text-lg sm:text-xl" />
              </div>
              <div>
                <span className="font-['Playfair_Display'] font-700 text-white text-base sm:text-lg leading-none block">Krithiv</span>
                <span className="text-[10px] sm:text-[11px] font-500 tracking-[0.15em] text-[#C8E63C] uppercase leading-none block">Enterprise</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4 sm:mb-6">
              Manufacturer and supplier of premium cleaning and hygiene products for homes, businesses, and commercial establishments.
            </p>
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#20be5c] text-white text-xs sm:text-sm font-500 rounded-lg hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
            >
              <RiWhatsappLine size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs sm:text-sm font-600 tracking-widest uppercase text-[#C8E63C] mb-4 sm:mb-5">Products</h4>
            <ul className="space-y-3">
              {["Toilet Cleaner", "Hand Wash", "Dish Wash Liquid", "Floor Cleaner", "Bathroom Cleaner", "Glass Cleaner", "Car Wash Shampoo"].map((p) => (
                <li key={p}>
                  <Link to={`/products`} className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm font-600 tracking-widest uppercase text-[#C8E63C] mb-4 sm:mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Wholesale & Distributors", to: "/wholesale" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-600 tracking-widest uppercase text-[#C8E63C] mb-4 sm:mb-5">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <RiMapPinLine className="text-[#C8E63C] mt-0.5 shrink-0" size={16} />
                <span className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Krithiv Enterprise, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <RiPhoneLine className="text-[#C8E63C] shrink-0" size={16} />
                <a href="tel:+919999999999" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <RiMailLine className="text-[#C8E63C] shrink-0" size={16} />
                <a href="mailto:info@krithiventerprise.com" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  info@krithiventerprise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-white/40">
            &copy; {new Date().getFullYear()} Krithiv Enterprise. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-white/40">
            Manufacturer of Quality Cleaning Products
          </p>
        </div>
      </div>
    </footer>
  );
}
