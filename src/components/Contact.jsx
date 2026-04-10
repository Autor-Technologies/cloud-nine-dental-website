import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 1:00 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full border border-teal-100 mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-slate-500 text-[17px] max-w-lg mx-auto leading-relaxed">
            Ready for a healthier, brighter smile? Fill in the form and our team will get back to you within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Clinic info + map */}
          <div className="flex flex-col gap-6">

            {/* Info cards */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col gap-5">
              <InfoRow icon={MapPin} label="Address" value="Opp. Lenskart, Padivattom, Ernakulam, Kochi – Kerala 682024" />
              <InfoRow icon={Phone} label="Phone" value="+91 90379 09046" href="tel:+919037909046" />
              <InfoRow icon={Mail} label="Email" value="info@cloudninedental.in" href="mailto:info@cloudninedental.in" />
            </div>

            {/* Hours */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <div className="flex items-center gap-2.5 mb-5">
                <Clock size={17} className="text-teal-600" />
                <h3 className="font-bold text-slate-900 text-[15px]">Clinic Hours</h3>
              </div>
              <div className="flex flex-col gap-3">
                {HOURS.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">{day}</span>
                    <span className="text-teal-600 font-semibold bg-teal-50 px-3 py-1 rounded-full text-xs">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-52">
              <iframe
                title="Cloud Nine Dental location map"
                src="https://www.google.com/maps?q=Padivattom,+Ernakulam,+Kerala&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right: Booking form */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
                  <Send size={28} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Thank You!</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  We've received your request. Our team will call you back within a few hours to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }) }}
                  className="text-teal-600 font-semibold text-sm hover:underline mt-2"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">Request an Appointment</h3>
                  <p className="text-slate-400 text-sm">We'll confirm your slot within a few hours.</p>
                </div>

                <Field label="Full Name" required>
                  <input
                    type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="e.g. Priya Nair"
                    className="field-input"
                  />
                </Field>

                <Field label="Phone Number" required>
                  <input
                    type="tel" name="phone" required
                    value={form.phone} onChange={handleChange}
                    placeholder="+91 90379 09046"
                    className="field-input"
                  />
                </Field>

                <Field label="Service Needed">
                  <select
                    name="service"
                    value={form.service} onChange={handleChange}
                    className="field-input"
                  >
                    <option value="">Select a service…</option>
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                    <option>Root Canal Treatment</option>
                    <option>Teeth Whitening</option>
                    <option>Pediatric Dentistry</option>
                    <option>Gum Treatment</option>
                    <option>Crowns &amp; Bridges</option>
                    <option>Other / Not Sure</option>
                  </select>
                </Field>

                <Field label="Message (optional)">
                  <textarea
                    name="message" rows={3}
                    value={form.message} onChange={handleChange}
                    placeholder="Any specific concern or preferred appointment time…"
                    className="field-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-3.5 rounded-full font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/25 hover:-translate-y-0.5 mt-1"
                >
                  <Send size={15} />
                  Send Appointment Request
                </button>

                <p className="text-center text-slate-400 text-xs">
                  Or call us directly at{' '}
                  <a href="tel:+919037909046" className="text-teal-600 font-semibold hover:underline">
                    +91 90379 09046
                  </a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Field styles via Tailwind @layer won't work at runtime, so we use inline style tag */}
      <style>{`
        .field-input {
          width: 100%;
          padding: 0.65rem 0.9rem;
          border-radius: 0.75rem;
          border: 1.5px solid #e2e8f0;
          font-size: 0.875rem;
          font-family: inherit;
          color: #1e293b;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s;
        }
        .field-input:focus {
          border-color: #14b8a6;
          background: #fff;
        }
        .field-input::placeholder { color: #94a3b8; }
      `}</style>
    </section>
  )
}

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-slate-700 font-semibold text-xs uppercase tracking-wide">
        {label}{required && <span className="text-teal-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function InfoRow({ icon: Icon, label, value, href }) {
  return (
    <div className="flex gap-3.5">
      <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={16} className="text-teal-600" />
      </div>
      <div>
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</div>
        {href ? (
          <a href={href} className="text-slate-800 font-medium text-sm hover:text-teal-600 transition-colors">{value}</a>
        ) : (
          <div className="text-slate-800 font-medium text-sm">{value}</div>
        )}
      </div>
    </div>
  )
}
