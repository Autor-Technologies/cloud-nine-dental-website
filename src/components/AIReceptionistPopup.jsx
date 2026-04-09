import { useState, useEffect } from 'react'
import { X, Phone, CalendarCheck, MessageCircle, Sparkles, Star } from 'lucide-react'

const SESSION_KEY = 'cn_ai_popup_seen'

const JESS_IMG  = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format&q=80'
const CLINIC_IMG = '/images/reception.jpg'
const CLINIC_FALLBACK = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=300&fit=crop&auto=format&q=80'

export default function AIReceptionistPopup() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const t = setTimeout(() => setVisible(true), 1800)
      return () => clearTimeout(t)
    }
  }, [])

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem(SESSION_KEY, '1')
    }, 300)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Centered popup */}
      <div
        className={`fixed z-[1000] inset-0 flex items-center justify-center p-4 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto w-full max-w-[560px] bg-white rounded-3xl shadow-2xl overflow-hidden
            transition-all duration-300
            ${closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          {/* Hero banner with clinic image */}
          <div className="relative h-[200px] overflow-hidden">
            <img
              src={CLINIC_IMG}
              alt="Cloud Nine Dental"
              className="w-full h-full object-cover"
              onError={e => { e.target.src = CLINIC_FALLBACK }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/30 via-navy-dark/50 to-navy-dark/90" />

            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X size={15} />
            </button>

            {/* Headline over image */}
            <div className="absolute bottom-0 left-0 right-0 px-7 pb-5">
              <div className="inline-flex items-center gap-1.5 bg-brand-yellow text-navy-dark text-[11px] font-urbanist font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                <Sparkles size={10} />
                Kerala's First
              </div>
              <h2 className="text-white font-bold text-[22px] leading-tight">
                AI Dental Receptionist<br />
                <span className="text-brand-yellow">at Cloud Nine Dental</span>
              </h2>
            </div>
          </div>

          {/* Jess intro row */}
          <div className="flex items-center gap-5 px-7 pt-6 pb-5 border-b border-gray-100">
            <div className="relative flex-shrink-0">
              <img
                src={JESS_IMG}
                alt="Jess – AI Receptionist"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
                style={{ border: '3px solid #C8A020' }}
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-[13px] text-body font-urbanist font-semibold uppercase tracking-wider mb-0.5">Meet your receptionist</p>
              <h3 className="text-navy-dark text-[26px] font-bold leading-none mb-1">Jess</h3>
              <p className="text-body text-[13px] leading-snug">
                Powered by AI · Available 24 / 7<br />
                <span className="text-brand-blue font-medium">Cloud Nine Dental, Ernakulam</span>
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="px-7 py-5">
            <p className="text-[12px] text-body font-urbanist font-bold uppercase tracking-wider mb-3">Jess can help you</p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: CalendarCheck, label: 'Book appointments instantly' },
                { icon: MessageCircle, label: 'Answer any dental question' },
                { icon: Phone,         label: 'Call or chat anytime, 24/7' },
                { icon: Star,          label: 'Recommend the right treatment' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-[#F4F8EC] rounded-xl px-4 py-3">
                  <Icon size={15} className="text-brand-blue flex-shrink-0" />
                  <span className="text-[13px] text-navy font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-7 pb-6 flex items-center justify-between gap-4">
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C8A020">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] text-body">5.0 · 200+ happy patients</p>
            </div>
            <div className="flex gap-3">
              <button onClick={dismiss} className="btn-outline text-[13px] py-2.5 px-5">
                Maybe later
              </button>
              <a href="/booking" onClick={dismiss} className="btn-primary text-[13px] py-2.5 px-5 whitespace-nowrap">
                Book Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
