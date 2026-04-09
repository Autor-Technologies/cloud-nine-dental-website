import { Shield, Sparkles, Zap, Smile, Activity, Sun, Heart, Leaf, Crown, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Shield,
    title: 'General Dentistry',
    desc: 'Regular check-ups, cleanings, fillings, and preventive care to keep your teeth healthy for life.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, bonding, and complete smile makeovers to help you achieve the confident smile you deserve.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements anchored in the jawbone for a lifetime of function and aesthetics.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    desc: 'Metal braces, ceramic braces, and clear aligners to straighten teeth and correct bite issues at any age.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Activity,
    title: 'Root Canal Treatment',
    desc: 'Pain-free endodontic therapy to save infected teeth, eliminate pain, and restore full function.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Sun,
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening treatments that deliver noticeably brighter results in a single session.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Heart,
    title: 'Pediatric Dentistry',
    desc: 'Child-friendly dental care in a calming, fun environment — building healthy habits from the very first visit.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Leaf,
    title: 'Gum Treatment',
    desc: 'Advanced periodontal therapy to treat gum disease, prevent bone loss, and maintain a healthy smile foundation.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Crown,
    title: 'Crowns & Bridges',
    desc: 'Custom-crafted porcelain crowns and bridges that restore damaged or missing teeth with precision and beauty.',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full border border-teal-100 mb-4 tracking-wide uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive<br className="hidden md:block" /> <span className="gradient-text">Dental Care</span>
          </h2>
          <p className="text-slate-500 text-[17px] max-w-xl mx-auto leading-relaxed">
            From your first check-up to your dream smile, we offer a full range of modern dental treatments — all under one roof.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, color }) => (
            <article
              key={title}
              className="service-card bg-white rounded-2xl p-7 border border-slate-100 flex flex-col gap-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-[17px] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-2.5 transition-all mt-auto"
                aria-label={`Book ${title} appointment`}
              >
                Book Now <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
