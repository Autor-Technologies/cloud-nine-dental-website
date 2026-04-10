import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, MessageCircle, Phone } from 'lucide-react'

const FAQS = [
  {
    category: 'General',
    items: [
      { q: 'Where is Cloud Nine Dental located?', a: 'Cloud Nine Dental is located opposite Lenskart, Padivattom, Ernakulam, Kochi, Kerala – 682024. We are easily accessible from Edapally, Kakkanad, and the NH Bypass.' },
      { q: 'What are your clinic timings?', a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM and on Sundays from 10:00 AM to 1:00 PM. Same-day emergency appointments are also available — call us to check availability.' },
      { q: 'Do I need to book an appointment in advance?', a: 'While walk-ins are welcome for emergency cases, we strongly recommend booking in advance to minimise waiting time. You can book online via our booking page or call us directly.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash, all major credit and debit cards, UPI (GPay, PhonePe, Paytm), and net banking. EMI options may be available for select major treatments — ask our reception team.' },
    ]
  },
  {
    category: 'Treatments',
    items: [
      { q: 'Is dental implant surgery painful?', a: 'Dental implant surgery is performed under local anaesthesia, making the procedure virtually painless. Most patients report minimal post-procedure discomfort, which is well-managed with prescribed medication.' },
      { q: 'How long does orthodontic treatment (braces/aligners) take?', a: 'Treatment duration depends on complexity. Clear aligner treatments typically take 6–18 months, while traditional braces may take 12–24 months. Your orthodontist will provide a personalised timeline at your initial consultation.' },
      { q: 'How many sittings does a root canal take?', a: 'Most root canal treatments at Cloud Nine Dental are completed in 1–2 sittings, depending on the tooth and severity of infection. Modern rotary endodontics makes the procedure faster and more comfortable.' },
      { q: 'How much does professional teeth whitening cost?', a: 'The cost of teeth whitening varies by treatment type (in-clinic vs take-home). Contact us directly for the most up-to-date pricing and any ongoing offers we may have.' },
    ]
  },
  {
    category: 'Children & Family',
    items: [
      { q: 'At what age should my child first visit a dentist?', a: "We recommend your child's first dental visit within 6 months of their first tooth appearing, or by their first birthday — whichever comes first. Early visits help establish good habits and detect issues early." },
      { q: 'Do you offer treatment for anxious patients?', a: 'Absolutely. We specialise in gentle, patient-centred care and have experience managing dental anxiety in both adults and children. We take time to explain every step and ensure you feel comfortable before proceeding.' },
    ]
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-[16px] overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F4F8EC]/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-urbanist font-semibold text-navy text-[15px] leading-snug">{q}</span>
        <ChevronDown size={18} className={`text-brand-blue flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-body text-[14px] leading-[1.75]">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState('General-0')

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">FAQs</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(32px,4vw,52px)] mt-2 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-green-200/70 text-[16px] max-w-xl mx-auto leading-relaxed">
            Find answers to the most common questions about our clinic, treatments, and appointments.
          </p>
          <nav className="text-[13px] text-green-200/50 mt-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Visual intro strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="h-[300px] lg:h-[380px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&auto=format&q=80"
                alt="Friendly dental team at Cloud Nine Dental"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="bg-[#F4F8EC] flex flex-col justify-center px-10 py-12">
              <span className="section-label mb-3">Here to Help</span>
              <h2 className="font-urbanist font-extrabold text-navy text-[28px] leading-snug mb-4">
                Got Questions?<br />We've Got Answers.
              </h2>
              <p className="text-body text-[14.5px] leading-relaxed mb-6">
                We understand that dental visits can raise a lot of questions. Browse through our most frequently asked questions below — or reach out to our friendly team directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/booking" className="btn-primary">Book Appointment <ArrowRight size={14} /></Link>
                <a href="tel:+91XXXXXXXXXX" className="btn-outline"><Phone size={14} /> Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-28 bg-[#F4F8EC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {FAQS.map(({ category, items }) => (
            <div key={category} className="mb-10">
              <h2 className="font-urbanist font-extrabold text-navy text-[20px] mb-4 pb-3 border-b border-[#D6E2C4]">
                {category}
              </h2>
              <div className="flex flex-col gap-3">
                {items.map((item, i) => {
                  const key = `${category}-${i}`
                  return (
                    <FAQItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  )
                })}
              </div>
            </div>
          ))}

          {/* Still have questions — image CTA */}
          <div className="relative rounded-[20px] overflow-hidden mt-8">
            <img
              src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&h=300&fit=crop&auto=format&q=70"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="relative p-10 text-center">
              <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="font-urbanist font-extrabold text-white text-[22px] mb-3">Still Have Questions?</h3>
              <p className="text-green-200/70 text-sm mb-6">Our team is happy to help. Reach out and we'll get back to you promptly.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-white">Contact Us <ArrowRight size={14} /></Link>
                <Link to="/booking" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
