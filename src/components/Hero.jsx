import { Star, ArrowRight, CheckCircle, MapPin } from 'lucide-react'

function ToothIllustration() {
  return (
    <svg width="110" height="120" viewBox="0 0 110 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M33 17C22 20 13 29 13 42C13 53 17.5 70 22 83C25.5 92 29 103 36 103C43 103 44.5 93.5 46.5 84.5C48.5 75.5 51 66 55 66C59 66 61.5 75.5 63.5 84.5C65.5 93.5 67 103 74 103C81 103 84.5 92 88 83C92.5 70 97 53 97 42C97 29 88 20 77 17C71.5 15 64 15.5 55 15.5C46 15.5 38.5 15 33 17Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M36 33C30 35 26 40 26 47"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <circle cx="74" cy="30" r="5" fill="white" fillOpacity="0.3" />
    </svg>
  )
}

const STATS = [
  { value: '500+', label: 'Patients Treated' },
  { value: '10+', label: 'Years of Care' },
  { value: '4.9★', label: 'Patient Rating' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-white"
      aria-label="Cloud Nine Dental – hero"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-10 right-[-80px] w-[420px] h-[420px] bg-teal-100 opacity-50 animate-blob pointer-events-none"
        style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />
      <div
        className="absolute top-60 right-20 w-[280px] h-[280px] bg-cyan-100 opacity-40 animate-blob-delay pointer-events-none"
        style={{ borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-[320px] h-[320px] bg-teal-50 rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* ── Left: Copy ───────────────────────────────────── */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              Trusted by 500+ Happy Patients in Kochi
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(40px,5.5vw,64px)] font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-5">
              Your Smile,<br />
              <span className="gradient-text">Our Passion</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-500 text-[17px] leading-relaxed mb-8 max-w-[480px]">
              Expert, compassionate dental care in the heart of Ernakulam. From routine check-ups
              to advanced cosmetic procedures — we make every visit comfortable and effective.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5 hover:shadow-teal-500/50"
              >
                Book Appointment
                <ArrowRight size={15} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-teal-300 hover:bg-teal-50 text-slate-700 hover:text-teal-700 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200"
              >
                Explore Services
              </a>
            </div>

            {/* Stats pills */}
            <div className="flex flex-wrap gap-3">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5"
                >
                  <span className="font-extrabold text-teal-600 text-base">{value}</span>
                  <span className="text-slate-500 text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Visual card ───────────────────────────── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[400px]">

              {/* Shadow card behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-700 rounded-[2.5rem] rotate-3 opacity-15 scale-95" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-[2.5rem] p-10 border border-teal-100/80 shadow-xl shadow-teal-100/60">

                {/* Tooth illustration in gradient circle */}
                <div className="flex justify-center mb-7">
                  <div className="w-[180px] h-[180px] bg-gradient-to-br from-teal-500 to-teal-700 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-teal-500/30 animate-float">
                    <ToothIllustration />
                  </div>
                </div>

                {/* Mini stat cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50">
                    <div className="text-teal-600 text-2xl font-extrabold">500+</div>
                    <div className="text-slate-400 text-xs mt-0.5 font-medium">Happy Patients</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50">
                    <div className="text-teal-600 text-2xl font-extrabold">4.9★</div>
                    <div className="text-slate-400 text-xs mt-0.5 font-medium">Avg Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating badge – top right */}
              <div className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 max-w-[160px]">
                <div className="flex items-center gap-2 mb-0.5">
                  <CheckCircle size={14} className="text-teal-500 flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Free Check-up</span>
                </div>
                <div className="text-[11px] text-slate-400 pl-5">on first visit</div>
              </div>

              {/* Floating badge – bottom left */}
              <div className="absolute -bottom-5 -left-6 bg-teal-600 text-white rounded-2xl shadow-xl p-3.5 max-w-[180px]">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <MapPin size={12} className="flex-shrink-0" />
                  <span className="text-xs font-bold">Padivattom, Kochi</span>
                </div>
                <div className="text-teal-200 text-[11px] pl-4">Opp. Lenskart</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
