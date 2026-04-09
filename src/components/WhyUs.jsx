import { CheckCircle, Award, Clock, Smile, ShieldCheck, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: 'Experienced Specialists',
    desc: 'Our highly qualified dentists bring over a decade of clinical excellence and ongoing specialist training.',
  },
  {
    icon: ShieldCheck,
    title: 'State-of-the-Art Technology',
    desc: 'Digital X-rays, 3D imaging, and modern sterilisation protocols for safer, more accurate treatment.',
  },
  {
    icon: Smile,
    title: 'Pain-Free Procedures',
    desc: 'We use advanced anaesthesia techniques and a gentle approach so you feel comfortable throughout every visit.',
  },
  {
    icon: Clock,
    title: 'Flexible Appointments',
    desc: 'Open 7 days a week with evening slots and same-day emergency appointments to fit around your life.',
  },
]

const WHY_STATS = [
  { value: '500+', label: 'Satisfied Patients' },
  { value: '10+', label: 'Years of Service' },
  { value: '9+', label: 'Treatments Offered' },
  { value: '7', label: 'Days a Week Open' },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Stats visual */}
          <div className="relative">
            {/* Decorative bg blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-50 rounded-full opacity-70 pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-4">
              {WHY_STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`rounded-2xl p-7 flex flex-col ${
                    i === 0
                      ? 'bg-teal-600 text-white'
                      : i === 3
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 border border-slate-100'
                  }`}
                >
                  <div
                    className={`text-4xl font-extrabold mb-1 ${
                      i === 0 || i === 3 ? 'text-white' : 'text-teal-600'
                    }`}
                  >
                    {value}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      i === 0 ? 'text-teal-100' : i === 3 ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-slate-100 px-5 py-3 flex items-center gap-3 whitespace-nowrap">
              <div className="w-9 h-9 bg-teal-50 rounded-full flex items-center justify-center">
                <Users size={17} className="text-teal-600" />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-sm">Trusted & Loved</div>
                <div className="text-slate-400 text-xs">by families across Kochi</div>
              </div>
            </div>
          </div>

          {/* Right: Features list */}
          <div>
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full border border-teal-100 mb-5 tracking-wide uppercase">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
              Dental Care You Can <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed mb-10 max-w-md">
              At Cloud Nine Dental, your oral health and comfort are our top priority. Here's what sets us apart:
            </p>

            <div className="flex flex-col gap-7">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-teal-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-[15px] mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-teal-500/25 hover:-translate-y-0.5"
            >
              <CheckCircle size={15} />
              Book a Free Consultation
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
