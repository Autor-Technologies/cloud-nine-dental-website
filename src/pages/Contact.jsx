import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 1:00 PM' },
]

const AGENT_ID = '2154f5b6-1803-4953-9f54-1901489d0532'
const IFRAME_SRC = `https://loquent-widget.vercel.app/iframe.html?agentId=${AGENT_ID}&mode=chat`

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Cloud Nine Dental – Padivattom, Ernakulam</title>
        <meta name="description" content="Contact Cloud Nine Dental in Padivattom, Ernakulam, Kochi. Call +91 90379 09046, email info@cloudninedental.in, or book an appointment online." />
        <link rel="canonical" href="https://cloudninedental.in/contact" />
        <meta property="og:title" content="Contact Cloud Nine Dental | Ernakulam" />
        <meta property="og:description" content="Get in touch with Cloud Nine Dental – call, email, or visit us opposite Lenskart, Padivattom, Ernakulam, Kochi." />
        <meta property="og:url" content="https://cloudninedental.in/contact" />
      </Helmet>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">Get In Touch</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(32px,4vw,52px)] mt-2 mb-4">Contact Us</h1>
          <p className="text-green-200/70 text-[16px] max-w-xl mx-auto leading-relaxed">
            Have questions or want to book an appointment? We'd love to hear from you.
          </p>
          <nav className="text-[13px] text-green-200/50 mt-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </div>

      {/* Info cards */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, label: 'Our Location', value: 'Opp. Lenskart, Padivattom, Ernakulam, Kochi – 682024', href: null },
              { icon: Phone, label: 'Phone', value: '+91 90379 09046', href: 'tel:+919037909046' },
              { icon: Mail, label: 'Email', value: 'info@cloudninedental.in', href: 'mailto:info@cloudninedental.in' },
              { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 10AM–8PM\nSun: 10AM–1PM', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="bg-[#F4F8EC] border border-[#D6E2C4] rounded-[20px] p-6 flex gap-4">
                <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-urbanist font-bold text-navy text-[14px] mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-body text-[13px] hover:text-navy transition-colors">{value}</a>
                  ) : (
                    <p className="text-body text-[13px] whitespace-pre-line">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual image strip */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pb-4">
          <div className="grid grid-cols-3 gap-3 h-[220px] rounded-[20px] overflow-hidden">
            <div className="col-span-2 overflow-hidden">
              <img
                src="/images/reception.jpg"
                alt="Cloud Nine Dental clinic interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex-1 overflow-hidden rounded-tr-[20px]">
                <img
                  src="/images/treatment-room-1.jpg"
                  alt="Modern dental equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-br-[20px]">
                <img
                  src="/images/treatment-room-2.jpg"
                  alt="Dentist with patient"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Chat with Jess + Contact Form toggle */}
            <div className="flex flex-col gap-6">
              {/* Loquent Chat Iframe */}
              <div>
                <span className="section-label">Send a Message</span>
                <h2 className="section-title mb-6">Chat with Jess</h2>
                <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-navy">
                    <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center">
                      <MessageCircle size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="font-urbanist font-bold text-white text-[14px] leading-none">Jess</div>
                      <div className="text-green-200/70 text-[11px] mt-0.5">AI Receptionist · Available 24/7</div>
                    </div>
                  </div>
                  <div className="w-full h-[500px] bg-[#1A1A1C]">
                    <iframe
                      src={IFRAME_SRC}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="microphone"
                      title="Chat with Jess — Cloud Nine Dental"
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Map + Hours */}
            <div className="flex flex-col gap-6">
              {/* Map */}
              <div className="rounded-[20px] overflow-hidden border border-gray-100 shadow-sm h-64">
                <iframe
                  title="Cloud Nine Dental on Google Maps"
                  src="https://www.google.com/maps?q=Padivattom,+Ernakulam,+Kerala&output=embed"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Hours */}
              <div className="bg-[#F4F8EC] rounded-[20px] p-7 border border-[#D6E2C4]">
                <h3 className="font-urbanist font-bold text-navy text-[17px] mb-5">Clinic Hours</h3>
                {HOURS.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-3 border-b border-[#D6E2C4] last:border-0">
                    <span className="text-body text-[14px] font-medium">{day}</span>
                    <span className="font-urbanist font-semibold text-navy text-[13px] bg-navy/5 px-3 py-1 rounded-full">{time}</span>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="bg-navy rounded-[20px] p-6 text-center text-white">
                <p className="text-green-200/70 text-sm mb-3">Prefer to book directly?</p>
                <Link to="/booking" className="btn-white">Book Appointment Online</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
