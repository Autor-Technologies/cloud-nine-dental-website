import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

/* ── Cloud Nine Dental Logo ── */
function CloudHaloLogo({ size = 44 }) {
  return (
    <img
      src="/images/logo.png"
      alt="Cloud Nine Dental"
      style={{ width: size, height: size, objectFit: 'cover', borderRadius: 10 }}
    />
  )
}
function CloudHaloLogoUnused({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cloud Nine Dental">
      {/* Dark olive green square background */}
      <rect width="100" height="100" rx="18" fill="#4A5520" />

      {/* ── Gold halo ring ── */}
      <ellipse cx="50" cy="18" rx="16" ry="5.5"
        stroke="url(#haloGrad)" strokeWidth="3.8" fill="none" />

      {/* ── White glowing cloud ── */}
      {/* Cloud glow/shadow */}
      <ellipse cx="50" cy="68" rx="34" ry="18" fill="white" fillOpacity="0.18" />
      {/* Main cloud shape — multi-bump, matches logo */}
      <path d="
        M18 78
        Q17 66 25 64
        Q24 53 33 50
        Q34 40 44 40
        Q48 34 54 36
        Q62 33 66 41
        Q75 41 76 52
        Q84 54 83 65
        Q83 79 74 80
        L26 80
        Q18 80 18 78 Z
      " fill="white" />

      {/* ── Gold tooth outline inside cloud ── */}
      {/* Crown of tooth */}
      <path d="
        M38 72
        Q37 63 39 58
        Q40 51 44 48
        Q46 44 50 44
        Q54 44 56 48
        Q60 51 61 58
        Q63 63 62 72
        Q61 77 58 77
        Q56 77 55 73
        Q53 69 50 69
        Q47 69 45 73
        Q44 77 42 77
        Q39 77 38 72 Z
      " fill="none" stroke="url(#toothGrad)" strokeWidth="2.6" strokeLinejoin="round" />

      {/* Tooth shine mark */}
      <path d="M44 51 Q46 47 49 49" stroke="url(#toothGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ── Gradients ── */}
      <defs>
        <linearGradient id="haloGrad" x1="34" y1="12" x2="66" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0C840" />
          <stop offset="50%" stopColor="#C8A020" />
          <stop offset="100%" stopColor="#E8B830" />
        </linearGradient>
        <linearGradient id="toothGrad" x1="38" y1="44" x2="62" y2="77" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8C040" />
          <stop offset="100%" stopColor="#C08018" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Services dropdown items ────────────────────────────── */
const SERVICE_LINKS = [
  { label: 'General Dentistry',   to: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry',  to: '/services/cosmetic-dentistry' },
  { label: 'Dental Implants',     to: '/services/dental-implants' },
  { label: 'Orthodontics',        to: '/services/orthodontics' },
  { label: 'Root Canal Treatment',to: '/services/root-canal' },
  { label: 'Teeth Whitening',     to: '/services/teeth-whitening' },
  { label: 'Pediatric Dentistry', to: '/services/pediatric-dentistry' },
  { label: 'Gum Treatment',       to: '/services/gum-treatment' },
  { label: 'Crowns & Bridges',    to: '/services/crowns-bridges' },
]

function ServicesDropdown({ isActive, onClose, dark }) {
  if (!isActive) return null
  return (
    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
      {SERVICE_LINKS.map(({ label, to }) => (
        <Link key={to} to={to} onClick={onClose}
          className="block px-4 py-2.5 text-[13.5px] text-gray-600 hover:text-navy hover:bg-[#F4F8EC] font-inter transition-colors">
          {label}
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [servicesOpen, setServicesOpen]     = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location    = useLocation()

  const isHome = location.pathname === '/'
  /* Dark mode: inner pages before scroll — blends with page-banner */
  const isDark = !isHome && !scrolled

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false); setServicesOpen(false) }, [location])

  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const isActive = (path) => location.pathname === path

  /* ── Header background ──────────────────────────────────── */
  const headerBg = isDark
    ? 'bg-navy-dark'
    : scrolled
      ? 'bg-white shadow-lg shadow-navy/5'
      : 'bg-white/98 backdrop-blur-sm'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}>

      {/* Top info bar */}
      <div className="bg-navy-dark py-2 hidden md:block border-b border-white/5">
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[13px] text-green-200/80">
            <span>📍 Opp. Lenskart, Padivattom, Ernakulam, Kochi</span>
            <span>⏰ Mon–Sat: 9AM–8PM &nbsp;|&nbsp; Sun: 10AM–2PM</span>
          </div>
          <a href="tel:+919037909046"
            className="flex items-center gap-1.5 text-[13px] text-brand-yellow font-semibold hover:text-white transition-colors">
            <Phone size={13} />
            +91 90379 09046
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="Cloud Nine Dental – Home">
            <CloudHaloLogo size={52} />
            <div className="leading-tight">
              <div className={`font-urbanist font-extrabold text-[16px] tracking-tight leading-none transition-colors ${isDark ? 'text-white' : 'text-navy-mid'}`}>
                Cloud Nine
              </div>
              <div className="font-urbanist text-brand-yellow text-[9px] font-bold tracking-[0.15em] uppercase">Discovering Heavenly Smiles</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <NavLink to="/" label="Home" active={isActive('/')} dark={isDark} />
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`flex items-center gap-1 px-3 py-2 text-[14px] font-semibold font-urbanist rounded-lg transition-colors ${
                  location.pathname.startsWith('/services')
                    ? isDark ? 'text-white bg-white/15' : 'text-navy bg-[#F4F8EC]'
                    : isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-navy hover:bg-[#F4F8EC]'
                }`}
              >
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <ServicesDropdown isActive={servicesOpen} onClose={() => setServicesOpen(false)} dark={isDark} />
            </div>
            <NavLink to="/about"    label="About"    active={isActive('/about')}    dark={isDark} />
            <NavLink to="/dentists" label="Dentists" active={isActive('/dentists')} dark={isDark} />
            <NavLink to="/blog"     label="Blog"     active={location.pathname.startsWith('/blog')} dark={isDark} />
            <NavLink to="/faq"      label="FAQ"      active={isActive('/faq')}      dark={isDark} />
            <NavLink to="/contact"  label="Contact"  active={isActive('/contact')}  dark={isDark} />
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/booking" className={isDark ? 'btn-outline border-white text-white hover:bg-white hover:text-navy text-sm py-2.5 px-5' : 'btn-primary text-sm py-2.5 px-5'}>
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(v => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-[#F4F8EC]'}`}
            aria-label="Toggle menu" aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1">
            <MobileNavLink to="/"        label="Home"     onClick={() => setMobileOpen(false)} />
            <div>
              <button onClick={() => setMobileServicesOpen(v => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-semibold text-gray-700 hover:bg-[#F4F8EC] hover:text-navy rounded-lg transition-colors">
                Services
                <ChevronDown size={15} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-[#D6E2C4] pl-3">
                  {SERVICE_LINKS.map(({ label, to }) => (
                    <Link key={to} to={to} onClick={() => setMobileOpen(false)}
                      className="py-2 px-2 text-[13px] text-gray-600 hover:text-navy transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <MobileNavLink to="/about"    label="About"    onClick={() => setMobileOpen(false)} />
            <MobileNavLink to="/dentists" label="Dentists" onClick={() => setMobileOpen(false)} />
            <MobileNavLink to="/blog"     label="Blog"     onClick={() => setMobileOpen(false)} />
            <MobileNavLink to="/faq"      label="FAQ"      onClick={() => setMobileOpen(false)} />
            <MobileNavLink to="/contact"  label="Contact"  onClick={() => setMobileOpen(false)} />
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link to="/booking" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, label, active, dark }) {
  return (
    <Link to={to}
      className={`px-3 py-2 text-[14px] font-semibold font-urbanist rounded-lg transition-colors ${
        dark
          ? active ? 'text-white bg-white/15' : 'text-white/80 hover:text-white hover:bg-white/10'
          : active ? 'text-navy bg-[#F4F8EC]' : 'text-gray-600 hover:text-navy hover:bg-[#F4F8EC]'
      }`}>
      {label}
    </Link>
  )
}

function MobileNavLink({ to, label, onClick }) {
  return (
    <Link to={to} onClick={onClick}
      className="px-4 py-3 text-[14px] font-semibold text-gray-700 hover:bg-[#F4F8EC] hover:text-navy rounded-lg transition-colors">
      {label}
    </Link>
  )
}
