import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Where is Cloud Nine Dental located?',
    a: 'Cloud Nine Dental is located opposite Lenskart, Padivattom, Ernakulam, Kochi, Kerala – 682024. We are easily accessible from Edapally, Kakkanad, and the NH Bypass.',
  },
  {
    q: 'What are your clinic timings?',
    a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM and Sundays from 10:00 AM to 1:00 PM. We also accommodate same-day emergency appointments — call us to check availability.',
  },
  {
    q: 'Is dental implant surgery painful?',
    a: 'Dental implant surgery is performed under local anaesthesia, making the procedure virtually painless. Most patients are surprised at how comfortable it is. Any mild post-procedure soreness is managed with prescribed medication and resolves quickly.',
  },
  {
    q: 'How long does an Invisalign or braces treatment take?',
    a: 'Treatment duration varies based on complexity. Clear aligner (Invisalign-type) treatments typically take 6–18 months, while traditional braces may take 12–24 months. Our orthodontist will give you a personalised timeline at your consultation.',
  },
  {
    q: 'Do you offer dental treatments for children?',
    a: 'Yes! We have a dedicated pediatric dentistry programme. Our child-friendly clinic environment, gentle approach, and experienced team ensure children have a positive first experience that sets the foundation for lifelong oral health.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, all major credit and debit cards, UPI (GPay, PhonePe, Paytm), and net banking. EMI options may be available for select major treatments — ask us at reception.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50/80 transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900 text-[15px] leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`text-teal-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full border border-teal-100 mb-4 tracking-wide uppercase">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-slate-500 text-[17px] leading-relaxed">
            Got questions? We've got answers. If you don't see yours below, just{' '}
            <a href="#contact" className="text-teal-600 font-semibold hover:underline">contact us</a>.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
