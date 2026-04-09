import { useState, useEffect } from 'react'
import { X, Phone, CalendarCheck, MessageCircle, Sparkles, Star } from 'lucide-react'

const SESSION_KEY = 'cn_ai_popup_seen'

const JESS_IMG   = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format&q=80'
// Use Unsplash as primary; swapped to local once images branch is merged
const CLINIC_IMG = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=400&fit=crop&auto=format&q=80'

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
          <div className="relative h-[160px] sm:h-[200px] overflow-hidden">
            <img
              src={CLINIC_IMG}
              alt="Cloud Nine Dental"
              className="w-full h-full object-cover"
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
          <div className="flex items-center gap-4 px-5 sm:px-7 pt-5 pb-4 border-b border-gray-100">
            <div className="relative flex-shrink-0">
              <img
                src={JESS_IMG}
                alt="Jess – AI Receptionist"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg"
                style={{ border: '3px solid #C8A020' }}
              />
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-[11px] text-body font-urbanist font-semibold uppercase tracking-wider mb-0.5">Meet your receptionist</p>
              <h3 className="text-navy-dark text-[22px] sm:text-[26px] font-bold leading-none mb-1">Jess</h3>
              <p className="text-body text-[12px] leading-snug">
                Powered by AI · Available 24 / 7
              </p>
              <p className="text-brand-blue text-[12px] font-medium">Cloud Nine Dental, Ernakulam</p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="px-5 sm:px-7 py-4">
            <p className="text-[11px] text-body font-urbanist font-bold uppercase tracking-wider mb-2.5">Jess can help you</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: CalendarCheck, label: 'Book instantly' },
                { icon: MessageCircle, label: 'Answer queries' },
                { icon: Phone,         label: 'Available 24/7' },
                { icon: Star,          label: 'Suggest services' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-[#F4F8EC] rounded-xl px-3 py-2.5">
                  <Icon size={13} className="text-brand-blue flex-shrink-0" />
                  <span className="text-[12px] text-navy font-medium whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 sm:px-7 pb-5">
            <div className="flex gap-2 mb-3">
              <button onClick={dismiss} className="btn-outline text-[13px] py-2.5 flex-1 justify-center">
                Maybe later
              </button>
              <a href="/booking" onClick={dismiss} className="btn-primary text-[13px] py-2.5 flex-1 justify-center">
                Book Now
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C8A020">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="text-[11px] text-body">5.0 · 200+ happy patients on Google</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
