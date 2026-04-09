import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Anitha Menon',
    role: 'Orthodontics Patient',
    text: 'The team at Cloud Nine Dental is absolutely wonderful. My Invisalign treatment was explained thoroughly and every appointment was smooth. My smile has never looked better!',
    rating: 5,
    initials: 'AM',
    color: 'bg-teal-500',
  },
  {
    name: 'Rahul Krishnan',
    role: 'Dental Implant Patient',
    text: 'I was very nervous about getting implants, but the dentist made me feel completely at ease. The procedure was painless and the results are incredible. Highly recommend!',
    rating: 5,
    initials: 'RK',
    color: 'bg-violet-500',
  },
  {
    name: 'Priya Thomas',
    role: 'Cosmetic Dentistry Patient',
    text: 'Professional, clean, and friendly clinic. My veneers look completely natural. The team genuinely cares about patient satisfaction. Best dental clinic in Kochi!',
    rating: 5,
    initials: 'PT',
    color: 'bg-amber-500',
  },
  {
    name: 'Sanjay Nair',
    role: 'Root Canal Patient',
    text: 'Had a root canal done here and contrary to what I expected, it was completely pain-free. The doctor was patient, explained every step, and the aftercare was excellent.',
    rating: 5,
    initials: 'SN',
    color: 'bg-sky-500',
  },
  {
    name: 'Deepa Varghese',
    role: 'General Dentistry Patient',
    text: 'Brought my 6-year-old for his first dental visit. The staff made it such a fun experience for him! We both left smiling. Wonderful pediatric care.',
    rating: 5,
    initials: 'DV',
    color: 'bg-rose-500',
  },
  {
    name: 'Arun George',
    role: 'Teeth Whitening Patient',
    text: 'The teeth whitening result was dramatic — multiple shades brighter in just one session. The clinic uses quality products and the price was very reasonable for Kochi.',
    rating: 5,
    initials: 'AG',
    color: 'bg-green-500',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} fill="currentColor" className="text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-4 py-1.5 rounded-full border border-teal-500/30 mb-4 tracking-wide uppercase">
            Patient Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Our Patients Say
          </h2>
          <p className="text-slate-400 text-[17px] max-w-lg mx-auto leading-relaxed">
            Real stories from real patients. Here's how we've helped families across Ernakulam smile with confidence.
          </p>
          {/* Aggregate rating badge */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className="text-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-slate-400 text-sm">from 180+ reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map(({ name, role, text, rating, initials, color }) => (
            <article
              key={name}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-200"
            >
              <div className="flex items-start justify-between">
                <StarRating count={rating} />
                <Quote size={20} className="text-teal-500/60 flex-shrink-0" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className={`w-9 h-9 ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{initials}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
