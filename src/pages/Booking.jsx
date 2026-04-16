import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Phone, Clock, MessageCircle } from 'lucide-react'

const AGENT_ID = '2154f5b6-1803-4953-9f54-1901489d0532'
const IFRAME_SRC = `https://loquent-widget.vercel.app/iframe.html?agentId=${AGENT_ID}&mode=chat`

export default function Booking() {
  return (
    <>
      <Helmet>
        <title>Book Appointment | Cloud Nine Dental – Ernakulam, Kochi</title>
        <meta name="description" content="Book your dental appointment at Cloud Nine Dental, Padivattom, Ernakulam online. Available Monday–Saturday 9AM–8PM, Sunday 10AM–2PM." />
        <link rel="canonical" href="https://cloudninedental.in/booking" />
        <meta property="og:title" content="Book a Dental Appointment – Cloud Nine Dental" />
        <meta property="og:description" content="Schedule your dental visit at Cloud Nine Dental in Ernakulam, Kochi. Online booking available." />
        <meta property="og:url" content="https://cloudninedental.in/booking" />
      </Helmet>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">Schedule a Visit</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(32px,4vw,52px)] mt-2 mb-4">Book Your Appointment</h1>
          <p className="text-green-200/70 text-[16px] max-w-xl mx-auto leading-relaxed">
            Chat with Jess, our AI receptionist, to book instantly.
          </p>
          <nav className="text-[13px] text-green-200/50 mt-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Book Appointment</span>
          </nav>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-[#F4F8EC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Sidebar info */}
            <div className="flex flex-col gap-5">
              <div className="bg-navy rounded-[20px] p-7 text-white">
                <h3 className="font-urbanist font-extrabold text-[20px] mb-5">Clinic Information</h3>
                {[
                  { icon: Phone, text: '+91 90379 09046', href: 'tel:+919037909046' },
                  { icon: Clock, text: 'Mon–Sat: 10AM–8PM\nSun: 10AM–1PM', href: null },
                  { icon: Calendar, text: 'Same-day emergency appointments available', href: null },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex gap-3 mb-4 last:mb-0">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} />
                    </div>
                    {href ? (
                      <a href={href} className="text-green-200/80 text-sm leading-relaxed hover:text-white transition-colors">{text}</a>
                    ) : (
                      <p className="text-green-200/80 text-sm leading-relaxed whitespace-pre-line">{text}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-gray-100">
                <h3 className="font-urbanist font-bold text-navy text-[16px] mb-4">What to Expect</h3>
                {[
                  'Chat with Jess to book',
                  'We call to confirm your slot',
                  'Arrive 5 min before your time',
                  'Get world-class dental care!',
                ].map((step, i) => (
                  <div key={step} className="flex gap-3 mb-3 last:mb-0">
                    <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-urbanist font-bold text-white text-[10px]">{i+1}</span>
                    </div>
                    <span className="text-body text-[13.5px]">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content — Chat iframe */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-navy">
                  <div className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-urbanist font-bold text-white text-[15px] leading-none">Chat with Jess</div>
                    <div className="text-green-200/70 text-[11px] mt-0.5">AI Receptionist · Available 24/7</div>
                  </div>
                </div>
                <div className="w-full h-[600px] bg-[#1A1A1C]">
                  <iframe
                    src={IFRAME_SRC}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="microphone"
                    title="Book appointment with Jess — Cloud Nine Dental"
                    style={{ border: 'none' }}
                  />
                </div>
                <div className="px-6 py-3 bg-[#F4F8EC] border-t border-[#D6E2C4] text-center">
                  <p className="text-body text-[13px]">
                    Or call us directly at{' '}
                    <a href="tel:+919037909046" className="text-brand-blue font-semibold hover:underline">+91 90379 09046</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
