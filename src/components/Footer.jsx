import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'

/* ── Cloud + Halo logo — matches clinic branding ────────── */
function CloudHaloLogo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#4F7A21" />
      {/* Halo ring above cloud */}
      <ellipse cx="20" cy="10" rx="6.5" ry="2.2" stroke="white" strokeWidth="1.8" fill="none" strokeOpacity="0.95" />
      {/* Cloud shape */}
      <path
        d="M7 28 Q7 23 12 23 Q12 17.5 17.5 17.5 Q18.5 13.5 23 14.5 Q27.5 13.5 28.5 18 Q33 18 33 23.5 Q33 29 27.5 29 L12 29 Q7 29 7 28 Z"
        fill="white"
      />
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

            <p className="text-green-200/70 text-sm leading-relaxed mb-6 max-w-[220px]">
              Expert, compassionate dental care in Padivattom, Ernakulam — transforming smiles across Kochi since 2022.
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
