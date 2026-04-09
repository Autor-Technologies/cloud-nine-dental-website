import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Star, Award, BookOpen } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const DENTISTS = [
  {
    name: 'Dr. Swathy J Menon',
    title: 'BDS – General & Preventive Dentistry',
    role: 'Dental Surgeon',
    initials: 'SM',
    bg: 'from-[#6B7F2A] to-[#3A4418]',
    img: '/images/dr-swathy.jpg',
    exp: '5+ years',
    specialties: ['Restorative Dentistry', 'Cosmetic Treatments', 'Preventive Care', 'Pain-Free Procedures'],
    bio: 'Dr. Swathy J Menon is a dedicated and compassionate dental professional known for her gentle approach and commitment to making every patient feel comfortable and confident during their treatment. She specialises in restorative dentistry, cosmetic treatments, and minimally invasive procedures.',
    detail: 'She completed her Bachelor of Dental Surgery (BDS) from a reputed institution and regularly participates in continuing education programs to stay at the forefront of modern dentistry.',
  },
  {
    name: 'Dr. Jadeep R K A',
    title: 'BDS, MDS – Conservative Dentistry & Endodontics',
    role: 'Lead Dentist & Endodontist',
    initials: 'JR',
    bg: 'from-[#4A5520] to-[#2E3614]',
    img: '/images/dr-jadeep.jpg',
    exp: '10+ years',
    specialties: ['Root Canal Treatment', 'Aesthetic Restorations', 'RCT Re-treatment', 'Conservative Dentistry'],
    bio: 'Dr. Jadeep R K A is a highly skilled dental professional with over 10 years of clinical expertise in advanced, patient-focused dental care. He specialises in Conservative Dentistry and Endodontics, with a strong emphasis on precision, excellence, and preservation of natural teeth.',
    detail: 'His expertise includes aesthetic restorations, root canal treatments (RCT), complex re-treatment cases, and evidence-based conservative techniques using the latest technology.',
  },
]

export default function Dentists() {
  return (
    <>
      <Helmet>
        <title>Our Dentists | Dr. Jadeep & Dr. Swathy – Cloud Nine Dental Ernakulam</title>
        <meta name="description" content="Meet Dr. Jadeep R K A (MDS Endodontist) and Dr. Swathy J Menon (BDS) at Cloud Nine Dental, Padivattom, Ernakulam – experienced, gentle dental specialists in Kochi." />
        <link rel="canonical" href="https://cloudninedental.in/dentists" />
        <meta property="og:title" content="Meet Our Dentists – Cloud Nine Dental Ernakulam" />
        <meta property="og:description" content="Dr. Jadeep R K A and Dr. Swathy J Menon – expert dental care with 10+ years combined experience in Ernakulam, Kochi." />
        <meta property="og:url" content="https://cloudninedental.in/dentists" />
      </Helmet>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">Our Specialists</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(32px,4vw,52px)] mt-2 mb-4">
            Meet Our Dental Team
          </h1>
          <p className="text-green-200/70 text-[16px] max-w-xl mx-auto leading-relaxed">
            Qualified, experienced, and caring — our dental specialists are dedicated to your smile and your comfort.
          </p>
          <nav className="text-[13px] text-green-200/50 mt-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Dentists</span>
          </nav>
        </div>
      </div>

      {/* Dentist cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-12">
            {DENTISTS.map(({ name, title, role, initials, bg, img, exp, specialties, bio, detail }, idx) => (
              <article
                key={name}
                className={`card-hover bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Doctor photo */}
                <div className={`lg:w-[380px] h-[380px] lg:h-auto bg-gradient-to-br ${bg} flex-shrink-0 overflow-hidden relative`}>
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 items-center justify-center hidden">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="font-urbanist font-extrabold text-white text-3xl">{initials}</span>
                    </div>
                  </div>
                  {/* Exp badge */}
                  <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white">
                    <div className="font-urbanist font-extrabold text-[22px] leading-none">{exp}</div>
                    <div className="text-white/70 text-[11px] font-medium mt-0.5">Experience</div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center flex-1">
                  <span className="text-[11px] font-urbanist font-bold text-brand-blue uppercase tracking-widest mb-2">{role}</span>
                  <h2 className="font-urbanist font-extrabold text-navy text-[30px] mb-1">{name}</h2>
                  <p className="text-body text-[13px] mb-4 font-medium">{title}</p>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C8A020" color="#C8A020" />)}
                    <span className="text-body text-[12px] ml-2">5.0 · Google Reviews</span>
                  </div>

                  <p className="text-body text-[14.5px] leading-relaxed mb-3">{bio}</p>
                  <p className="text-body text-[13.5px] leading-relaxed mb-6 text-gray-400">{detail}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={14} className="text-brand-blue" />
                      <span className="font-urbanist font-bold text-navy text-[13px] uppercase tracking-wider">Areas of Expertise</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map(s => (
                        <span key={s} className="bg-[#F4F8EC] border border-[#D6E2C4] text-navy text-[12px] font-urbanist font-semibold px-3 py-1.5 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education badge */}
                  <div className="flex items-center gap-2 bg-[#F4F8EC] rounded-xl px-4 py-3 border border-[#D6E2C4] w-fit">
                    <BookOpen size={14} className="text-navy flex-shrink-0" />
                    <span className="text-navy text-[12.5px] font-urbanist font-semibold">Bachelor of Dental Surgery (BDS) – Accredited Institution</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4F8EC] border-t border-[#D6E2C4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-urbanist font-extrabold text-navy text-[26px] mb-2">Book an Appointment with Our Team</h2>
            <p className="text-body text-sm">Our specialists are available Monday – Saturday, 9 AM to 8 PM.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link to="/booking" className="btn-primary whitespace-nowrap">Book Now <ArrowRight size={15} /></Link>
            <a href="tel:+919037909046" className="btn-outline whitespace-nowrap"><Phone size={15} /> Call Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
