import { Phone } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4'

/* ─── Clipped-corner button shape ───────────────────────────────────────────
   Diagonal 11px cut: top-right and bottom-left corners               */
const CLIP = 'polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px))'

function ClippedButton({ children, variant = 'red', className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 font-rubik font-700 uppercase tracking-wide text-sm cursor-pointer border-0 outline-none transition-opacity hover:opacity-80 active:opacity-60'
  const colors =
    variant === 'red'
      ? 'bg-[#EE3F2C] text-white'
      : 'bg-white text-black'

  return (
    <button
      style={{ clipPath: CLIP }}
      className={`${base} ${colors} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function NavLink({ children }) {
  return (
    <a
      href="#"
      className="text-white/80 hover:text-white font-rubik font-medium text-sm uppercase tracking-wide transition-colors"
    >
      {children}
    </a>
  )
}

/* ─── Logo SVG ───────────────────────────────────────────────────────────── */
function TargoLogo() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract symbol — bold geometric arrow/shield mark */}
      <path d="M4 4 L14 4 L18 16 L14 28 L4 28 L8 16 Z" fill="white" />
      <path d="M10 4 L20 4 L24 16 L20 28 L10 28" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Wordmark */}
      <text
        x="30"
        y="22"
        fill="white"
        fontFamily="Rubik, sans-serif"
        fontWeight="700"
        fontSize="18"
        letterSpacing="-0.5"
        textAnchor="start"
        style={{ textTransform: 'uppercase' }}
      >
        targo
      </text>
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-rubik">
      {/* ── Video Background ─────────────────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: 1 }}
      />

      {/* ── Content layer ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full px-8 md:px-16 py-8 md:py-10">

        {/* ── Navbar ───────────────────────────────────────────────────── */}
        <nav className="flex items-center justify-between w-full">
          <TargoLogo />

          <div className="hidden md:flex items-center gap-8">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact Us</NavLink>
          </div>

          <ClippedButton
            variant="red"
            className="px-5 py-2 text-xs"
          >
            Contact Us
          </ClippedButton>
        </nav>

        {/* ── Hero Copy ────────────────────────────────────────────────── */}
        <div className="mt-10 md:mt-14 max-w-xl">
          <p className="text-[#EE3F2C] font-semibold uppercase tracking-widest text-xs md:text-sm mb-3">
            Logistics Reimagined
          </p>
          <h1
            className="text-white font-black uppercase leading-[0.95] mb-6"
            style={{
              fontSize: 'clamp(42px, 5.5vw, 64px)',
              letterSpacing: '-0.04em',
            }}
          >
            Swift and<br />Simple<br />Transport
          </h1>

          <ClippedButton variant="red" className="px-7 py-3 text-sm font-bold tracking-widest">
            Get Started
          </ClippedButton>
        </div>

        {/* ── Spacer ───────────────────────────────────────────────────── */}
        <div className="flex-1" />

        {/* ── Consultation Card ────────────────────────────────────────── */}
        <div className="mb-2 w-full max-w-xs">
          <div
            className="relative overflow-hidden rounded-2xl p-5"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            {/* Diagonal shine overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 40%, transparent 60%)',
              }}
            />

            <div className="relative z-10">
              <p className="text-white/50 uppercase tracking-widest text-[10px] font-semibold mb-1">
                Free offer
              </p>
              <p className="text-white font-bold text-base leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Book a Free<br />Consultation
              </p>

              <ClippedButton
                variant="white"
                className="w-full justify-center px-4 py-2.5 text-xs font-bold tracking-widest"
              >
                <Phone size={14} strokeWidth={2.5} />
                Book a Call
              </ClippedButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
