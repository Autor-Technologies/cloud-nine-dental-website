import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Calendar, Phone, Clock, ArrowRight } from 'lucide-react'

const SERVICES = [
  'General Dentistry – Check-up & Cleaning',
  'Cosmetic Dentistry – Consultation',
  'Dental Implants – Consultation',
  'Orthodontics – Consultation (Braces / Aligners)',
  'Root Canal Treatment',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Gum Treatment (Scaling / Deep Cleaning)',
  'Crowns & Bridges',
  'Dental Emergency',
  'Other / Not Sure',
]

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' })
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
            Fill in the form below and our team will confirm your appointment within a few hours.
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
                  { icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
                  { icon: Clock, text: 'Mon–Sat: 9AM–8PM\nSun: 10AM–2PM', href: null },
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
                  'Submit the appointment form',
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

            {/* Booking form */}
            <div className="lg:col-span-2 bg-white rounded-[24px] border border-gray-100 shadow-sm p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-10">
                  <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center">
                    <CheckCircle size={36} className="text-brand-yellow" />
                  </div>
                  <h3 className="font-urbanist font-extrabold text-navy text-[26px]">Appointment Requested!</h3>
                  <p className="text-body text-[15px] leading-relaxed max-w-sm">
                    Thank you, <strong>{form.name}</strong>! Our team will call you at <strong>{form.phone}</strong> within a few hours to confirm your appointment.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', email:'', service:'', date:'', time:'', notes:'' }) }}
                    className="btn-outline mt-2"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-urbanist font-extrabold text-navy text-[24px] mb-2">Request an Appointment</h2>
                  <p className="text-body text-sm mb-8">Fill in the details below and we'll confirm your slot.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <BField label="Full Name" required>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Priya Nair" className="bk-input" />
                      </BField>
                      <BField label="Phone Number" required>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="bk-input" />
                      </BField>
                    </div>

                    <BField label="Email Address">
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="bk-input" />
                    </BField>

                    <BField label="Service Required" required>
                      <select name="service" required value={form.service} onChange={handleChange} className="bk-input">
                        <option value="">Select a service…</option>
                        {SERVICES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </BField>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <BField label="Preferred Date" required>
                        <input type="date" name="date" required value={form.date} onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]} className="bk-input" />
                      </BField>
                      <BField label="Preferred Time" required>
                        <select name="time" required value={form.time} onChange={handleChange} className="bk-input">
                          <option value="">Choose a time…</option>
                          {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </BField>
                    </div>

                    <BField label="Additional Notes">
                      <textarea name="notes" rows={3} value={form.notes} onChange={handleChange}
                        placeholder="Any concerns, allergies or special requirements…" className="bk-input resize-none" />
                    </BField>

                    <button type="submit" className="btn-primary justify-center mt-2 py-3.5 text-[15px]">
                      Confirm Appointment Request <ArrowRight size={16} />
                    </button>

                    <p className="text-center text-body text-xs">
                      Or call us directly at{' '}
                      <a href="tel:+91XXXXXXXXXX" className="text-brand-blue font-semibold hover:underline">+91 XXXXX XXXXX</a>
                    </p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .bk-input {
          width: 100%; padding: 12px 14px; border-radius: 10px;
          border: 1.5px solid #D6E2C4; font-size: 14px; font-family: inherit;
          color: #2D4A12; background: #F4F8EC; outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .bk-input:focus { border-color: #4F7A21; background: #fff; }
        .bk-input::placeholder { color: #8FA47A; }
      `}</style>
    </>
  )
}

function BField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-urbanist font-semibold text-navy text-[12px] uppercase tracking-wider">
        {label}{required && <span className="text-brand-blue ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
