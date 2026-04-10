import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 1:00 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

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

            {/* Contact Form */}
            <div>
              <span className="section-label">Send a Message</span>
              <h2 className="section-title mb-8">We'd Love to Hear From You</h2>

              {submitted ? (
                <div className="bg-[#F4F8EC] rounded-[20px] p-10 text-center border border-[#D6E2C4]">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="font-urbanist font-extrabold text-navy text-[22px] mb-2">Message Sent!</h3>
                  <p className="text-body text-sm mb-5">Thank you for reaching out. We'll get back to you within a few hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', email:'', message:'' }) }}
                    className="text-brand-blue font-semibold text-sm hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <CField label="Full Name" required>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className="cf-input" />
                    </CField>
                    <CField label="Phone Number" required>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 90379 09046" className="cf-input" />
                    </CField>
                  </div>
                  <CField label="Email Address">
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="cf-input" />
                  </CField>
                  <CField label="Message" required>
                    <textarea name="message" rows={5} required value={form.message} onChange={handleChange}
                      placeholder="How can we help you?" className="cf-input resize-none" />
                  </CField>
                  <button type="submit" className="btn-primary justify-center">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
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

      <style>{`
        .cf-input {
          width: 100%; padding: 12px 14px; border-radius: 10px;
          border: 1.5px solid #D6E2C4; font-size: 14px; font-family: inherit;
          color: #2D4A12; background: #F4F8EC; outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .cf-input:focus { border-color: #4F7A21; background: #fff; }
        .cf-input::placeholder { color: #8FA47A; }
      `}</style>
    </>
  )
}

function CField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-urbanist font-semibold text-navy text-[12px] uppercase tracking-wider">
        {label}{required && <span className="text-brand-blue ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
