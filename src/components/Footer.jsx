import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'

/* ── Cloud Nine Dental Logo SVG (faithful replica of clinic logo) ── */
function CloudHaloLogo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cloud Nine Dental">
      <rect width="100" height="100" rx="18" fill="#4A5520" />
      <ellipse cx="50" cy="18" rx="16" ry="5.5" stroke="url(#fHaloGrad)" strokeWidth="3.8" fill="none" />
      <ellipse cx="50" cy="68" rx="34" ry="18" fill="white" fillOpacity="0.18" />
      <path d="M18 78 Q17 66 25 64 Q24 53 33 50 Q34 40 44 40 Q48 34 54 36 Q62 33 66 41 Q75 41 76 52 Q84 54 83 65 Q83 79 74 80 L26 80 Q18 80 18 78 Z" fill="white" />
      <path d="M38 72 Q37 63 39 58 Q40 51 44 48 Q46 44 50 44 Q54 44 56 48 Q60 51 61 58 Q63 63 62 72 Q61 77 58 77 Q56 77 55 73 Q53 69 50 69 Q47 69 45 73 Q44 77 42 77 Q39 77 38 72 Z"
        fill="none" stroke="url(#fToothGrad)" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M44 51 Q46 47 49 49" stroke="url(#fToothGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id="fHaloGrad" x1="34" y1="12" x2="66" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0C840" />
          <stop offset="50%" stopColor="#C8A020" />
          <stop offset="100%" stopColor="#E8B830" />
        </linearGradient>
        <linearGradient id="fToothGrad" x1="38" y1="44" x2="62" y2="77" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8C040" />
          <stop offset="100%" stopColor="#C08018" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const SERVICES = [
  { label: 'General Dentistry', to: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', to: '/services/cosmetic-dentistry' },
  { label: 'Dental Implants', to: '/services/dental-implants' },
  { label: 'Orthodontics', to: '/services/orthodontics' },
  { label: 'Root Canal Treatment', to: '/services/root-canal' },
  { label: 'Teeth Whitening', to: '/services/teeth-whitening' },
  { label: 'Pediatric Dentistry', to: '/services/pediatric-dentistry' },
  { label: 'Gum Treatment', to: '/services/gum-treatment' },
  { label: 'Crowns & Bridges', to: '/services/crowns-bridges' },
]

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Meet the Dentists', to: '/dentists' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Book Appointment', to: '/booking' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <CloudHaloLogo size={38} />
              <div className="leading-tight">
                <div className="font-urbanist font-extrabold text-white text-[16px] tracking-tight">Cloud Nine</div>
                <div className="font-urbanist text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase">Dental</div>
              </div>
            </Link>

            <p className="text-brand-yellow text-[11px] font-bold tracking-[0.18em] uppercase mb-2 italic">
              Discovering Heavenly Smiles
            </p>
            <p className="text-green-200/70 text-sm leading-relaxed mb-6 max-w-[220px]">
              Expert, compassionate dental care in Padivattom, Ernakulam — serving Kochi since 2022.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={`Cloud Nine Dental on ${label}`}
                  className="w-9 h-9 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-urbanist font-bold text-[13px] uppercase tracking-[0.15em] text-white mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-green-200/70 hover:text-brand-yellow text-sm transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-urbanist font-bold text-[13px] uppercase tracking-[0.15em] text-white mb-5">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-green-200/70 hover:text-brand-yellow text-sm transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-urbanist font-bold text-[13px] uppercase tracking-[0.15em] text-white mb-5">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-green-200/70 text-sm leading-relaxed">
                  Opp. Lenskart, Padivattom,<br />Ernakulam, Kochi – 682024
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-brand-yellow flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-green-200/70 hover:text-brand-yellow text-sm transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-brand-yellow flex-shrink-0" />
                <a href="mailto:info@cloudninedental.in" className="text-green-200/70 hover:text-brand-yellow text-sm transition-colors">
                  info@cloudninedental.in
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={15} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <div className="text-green-200/70 text-sm">
                  Mon–Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-green-200/50">
          <span>© {new Date().getFullYear()} Cloud Nine Dental. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Created &amp; maintained by{' '}
            <a href="https://autor.ca" target="_blank" rel="noopener noreferrer"
              className="text-brand-yellow hover:text-white transition-colors font-semibold">
              Autor Technologies
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
