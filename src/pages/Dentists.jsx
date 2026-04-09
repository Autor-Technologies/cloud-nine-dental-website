import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Star } from 'lucide-react'

const DENTISTS = [
  {
    name: 'Dr. Priya Nair',
    title: 'BDS, MDS – Prosthodontics',
    role: 'Lead Dentist & Implantologist',
    initials: 'PN',
    bg: 'from-[#7AB340] to-[#3A5A18]',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=320&h=380&fit=crop&auto=format&q=80',
    exp: '12+ years',
    specialties: ['Dental Implants', 'Cosmetic Dentistry', 'Crowns & Bridges', 'Smile Design'],
    bio: 'Dr. Priya Nair is our lead clinician specialising in implantology and cosmetic dentistry. With over 12 years of experience, she is known for her gentle approach, precision, and ability to transform smiles naturally.',
  },
  {
    name: 'Dr. Arjun Menon',
    title: 'BDS, MDS – Orthodontics',
    role: 'Senior Orthodontist',
    initials: 'AM',
    bg: 'from-[#4F7A21] to-[#2D4A12]',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=320&h=380&fit=crop&auto=format&q=80',
    exp: '10+ years',
    specialties: ['Braces', 'Clear Aligners', 'Dentofacial Orthopaedics', 'Retainers'],
    bio: 'Dr. Arjun Menon brings a decade of expertise in orthodontics to Cloud Nine Dental. He is passionate about achieving precise, lasting results with both conventional and clear aligner systems.',
  },
  {
    name: 'Dr. Divya Thomas',
    title: 'BDS, MDS – Pedodontics',
    role: 'Pediatric Dentist & Periodontist',
    initials: 'DT',
    bg: 'from-[#7AB340] to-[#4F7A21]',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=320&h=380&fit=crop&auto=format&q=80',
    exp: '8+ years',
    specialties: ['Pediatric Dentistry', 'Gum Treatment', 'Root Canal', 'Preventive Care'],
    bio: 'Dr. Divya Thomas specialises in treating children and managing periodontal conditions. Her warm, playful approach makes dental visits a positive experience for even the most anxious young patients.',
  },
  {
    name: 'Dr. Rahul Varghese',
    title: 'BDS, MDS – Oral Surgery',
    role: 'Oral & Maxillofacial Surgeon',
    initials: 'RV',
    bg: 'from-[#3A5A18] to-[#2D4A12]',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=320&h=380&fit=crop&auto=format&q=80',
    exp: '9+ years',
    specialties: ['Tooth Extractions', 'Wisdom Teeth', 'Oral Surgery', 'Bone Grafting'],
    bio: 'Dr. Rahul Varghese handles complex surgical cases with calm precision. His expertise ensures even the most challenging extractions and surgical procedures are safe and comfortable.',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DENTISTS.map(({ name, title, role, initials, bg, img, exp, specialties, bio }) => (
              <article key={name} className="card-hover bg-white border border-gray-100 rounded-[24px] overflow-hidden flex flex-col sm:flex-row">
                {/* Doctor photo */}
                <div className={`sm:w-48 h-56 sm:h-auto bg-gradient-to-br ${bg} flex-shrink-0 overflow-hidden relative`}>
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 items-center justify-center hidden">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="font-urbanist font-extrabold text-white text-2xl">{initials}</span>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-7 flex flex-col">
                  <div className="mb-1">
                    <span className="text-[11px] font-urbanist font-bold text-brand-blue uppercase tracking-widest">{role}</span>
                  </div>
                  <h2 className="font-urbanist font-extrabold text-navy text-[20px] mb-0.5">{name}</h2>
                  <p className="text-body text-[12.5px] mb-1">{title}</p>
                  <div className="flex items-center gap-1.5 mb-3">
                    <Star size={12} fill="#E07B35" color="#E07B35" />
                    <span className="text-[12px] text-body font-medium">{exp} experience</span>
                  </div>
                  <p className="text-body text-[13.5px] leading-relaxed mb-4 flex-1">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map(s => (
                      <span key={s} className="bg-[#F4F8EC] border border-[#D6E2C4] text-navy text-[11px] font-urbanist font-semibold px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
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
            <p className="text-body text-sm">Our specialists are available 7 days a week.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/booking" className="btn-primary whitespace-nowrap">Book Now <ArrowRight size={15} /></Link>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline whitespace-nowrap"><Phone size={15} /> Call Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
