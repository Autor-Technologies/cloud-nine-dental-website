import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Heart, Users, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const VALUES = [
  { icon: Heart, title: 'Patient-First Care', desc: 'Every decision we make is centred on your comfort, safety, and satisfaction.' },
  { icon: Award, title: 'Clinical Excellence', desc: 'We adhere to the highest clinical standards and pursue continuous professional development.' },
  { icon: Zap, title: 'Innovation', desc: 'We invest in cutting-edge technology to deliver faster, safer, and more effective treatments.' },
  { icon: Users, title: 'Community', desc: 'We are proud members of the Ernakulam community, serving families with dedication.' },
]

const MILESTONES = [
  { year: '2022', event: 'Cloud Nine Dental opened in Padivattom, Ernakulam' },
  { year: '2023', event: 'Expanded to offer advanced implantology and orthodontics' },
  { year: '2024', event: 'Reached 300+ satisfied patients; introduced pediatric dental care' },
  { year: '2025', event: '500+ happy patients; rated 5.0★ across Google & JustDial' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Cloud Nine Dental – Padivattom, Ernakulam</title>
        <meta name="description" content="Learn about Cloud Nine Dental in Padivattom, Ernakulam – our story, our modern clinic, and our commitment to gentle, expert dental care in Kochi." />
        <link rel="canonical" href="https://cloudninedental.in/about" />
        <meta property="og:title" content="About Cloud Nine Dental | Ernakulam, Kochi" />
        <meta property="og:description" content="Modern dental clinic in Padivattom, Ernakulam. Meet our team and learn about our patient-first philosophy." />
        <meta property="og:url" content="https://cloudninedental.in/about" />
      </Helmet>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">Who We Are</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(32px,4vw,52px)] mt-2 mb-4">About Cloud Nine Dental</h1>
          <p className="text-brand-yellow text-[11px] font-bold tracking-[0.2em] uppercase mb-2 italic">Discovering Heavenly Smiles</p>
          <p className="text-green-200/70 text-[16px] max-w-xl mx-auto leading-relaxed">
            A modern dental clinic in the heart of Ernakulam — committed to excellence, compassion, and heavenly smiles.
          </p>
          <nav className="text-[13px] text-green-200/50 mt-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="rounded-[24px] h-[420px] overflow-hidden shadow-xl">
                <img
                  src="/images/reception.jpg"
                  alt="Cloud Nine Dental reception – Padivattom, Ernakulam"
                  className="w-full h-full object-cover object-center"
                  onError={e => { e.currentTarget.src = 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=700&h=500&fit=crop&auto=format&q=80' }}
                />
                <div className="absolute inset-0 bg-navy/10 rounded-[24px]" />
              </div>
              {/* Badges */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow rounded-2xl shadow-lg px-5 py-3">
                <div className="font-urbanist font-extrabold text-white text-2xl">2022</div>
                <div className="text-white/70 text-xs font-medium">Established</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy rounded-2xl shadow-lg px-5 py-3 text-white">
                <div className="font-urbanist font-extrabold text-2xl">500+</div>
                <div className="text-green-200/70 text-xs">Happy Patients</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">We're Passionate About<br />Healthy, Beautiful Smiles</h2>
              <p className="text-body text-[15px] leading-[1.8] mb-5">
                Cloud Nine Dental was founded in 2022 with a single mission: to deliver world-class dental care to the residents of Ernakulam and Kochi in a warm, welcoming environment. Located opposite Lenskart in Padivattom, we are conveniently accessible from across the district.
              </p>
              <p className="text-body text-[15px] leading-[1.8] mb-8">
                From our very first day, we have combined the latest dental technology with a genuinely personal approach — because we believe every patient deserves to feel heard, respected, and confident in their care.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {['Modern, fully equipped dental clinic', 'Experienced and caring dental team', 'Comprehensive range of dental services', 'Affordable treatments with flexible payment options'].map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-brand-blue flex-shrink-0" />
                    <span className="text-body text-[14px]">{p}</span>
                  </div>
                ))}
              </div>
              <Link to="/booking" className="btn-primary">
                Book a Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#F4F8EC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: image */}
            <div className="rounded-[24px] overflow-hidden h-[380px] shadow-xl">
              <img
                src="/images/treatment-room-2.jpg"
                alt="Caring dental team at Cloud Nine Dental"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: values grid */}
            <div>
              <span className="section-label">Our Values</span>
              <h2 className="section-title mb-8">The Principles We Practice Every Day</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {VALUES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-[18px] p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-3">
                      <Icon size={22} className="text-navy" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-urbanist font-bold text-navy text-[15px] mb-1.5">{title}</h3>
                    <p className="text-body text-[13px] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones That Define Us</h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#D6E2C4]" />
            {MILESTONES.map(({ year, event }, i) => (
              <div key={year} className="relative pl-16 pb-10 last:pb-0">
                <div className="absolute left-0 top-1 w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-urbanist font-bold text-white text-[11px]">{year}</span>
                </div>
                <div className="bg-[#F4F8EC] rounded-2xl p-5 border border-[#D6E2C4]">
                  <p className="font-urbanist font-semibold text-navy text-[15px]">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
