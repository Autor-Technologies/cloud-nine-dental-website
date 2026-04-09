import { Link } from 'react-router-dom'
import {
  ArrowRight, Phone, Star, CheckCircle,
  Shield, Sparkles, Zap, Smile, Activity,
  Sun, Heart, Leaf, Crown
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative bg-white pt-[150px] pb-20 md:pb-0 overflow-hidden min-h-[92vh] flex items-center">
      {/* BG slice */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F4F8EC] hidden lg:block" style={{clipPath:'polygon(8% 0, 100% 0, 100% 100%, 0 100%)'}} />
      <div className="absolute top-24 right-16 w-72 h-72 rounded-full border-[40px] border-navy/5 hidden lg:block" />
      <div className="absolute bottom-20 right-40 w-40 h-40 rounded-full border-[24px] border-brand-yellow/20 hidden lg:block" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F4F8EC] border border-[#D6E2C4] px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="font-urbanist font-semibold text-brand-blue text-[13px]">Best Dental Care in Ernakulam, Kochi</span>
            </div>
            <h1 className="section-title text-[clamp(36px,4.5vw,58px)] mb-5">
              Expert Dental Care<br />
              <span className="text-brand-blue">for Your Family</span>
            </h1>
            <p className="section-sub text-[17px] leading-[1.75] mb-8">
              Elevating smiles with expert care and a gentle touch.
              Your trusted dental clinic in Padivattom, Ernakulam —
              offering comprehensive dental solutions for every member of your family.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/booking" className="btn-primary">Book Appointment <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#E07B35" color="#E07B35" />)}
                  </div>
                  <div className="text-[12px] text-gray-400 font-medium">4.9 · 180+ Reviews</div>
                </div>
                <div className="font-urbanist font-bold text-navy text-[13px]">Google Rating</div>
              </div>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 bg-navy text-white rounded-2xl px-4 py-3 hover:bg-navy-mid transition-colors">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[11px] text-green-200/70 font-medium">Call us now</div>
                  <div className="font-urbanist font-bold text-[13px]">+91 XXXXX XXXXX</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Clinic image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-[440px] h-[520px]">
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=880&h=1040&fit=crop&auto=format&q=80"
                  alt="Dentist with patient at Cloud Nine Dental Ernakulam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10" />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -left-10 top-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[150px]">
                <div className="text-3xl font-urbanist font-extrabold text-navy mb-0.5">500+</div>
                <div className="text-[12px] text-body font-medium">Happy Patients</div>
                <div className="mt-2 flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#E07B35" color="#E07B35" />)}
                </div>
              </div>
              <div className="absolute -right-8 bottom-24 bg-navy rounded-2xl shadow-xl p-4 w-[155px]">
                <div className="text-3xl font-urbanist font-extrabold text-white mb-0.5">10+</div>
                <div className="text-[12px] text-green-200/70 font-medium">Years of Expert Care</div>
              </div>
              <div className="absolute -left-6 bottom-12 bg-brand-yellow rounded-xl shadow-lg p-3 flex items-center gap-2">
                <CheckCircle size={16} className="text-white" />
                <span className="font-urbanist font-bold text-white text-[13px]">Free First Check-up</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════ */
function StatsBar() {
  const stats = [
    { value: '500+', label: 'Happy Patients' },
    { value: '10+',  label: 'Years of Excellence' },
    { value: '9+',   label: 'Dental Treatments' },
    { value: '4.9★', label: 'Patient Rating' },
  ]
  return (
    <section className="bg-navy py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <div key={i} className={`text-center ${i < 3 ? 'md:border-r md:border-white/10' : ''}`}>
              <div className="font-urbanist font-extrabold text-[46px] text-white leading-none mb-2">{value}</div>
              <div className="text-green-200/70 text-sm font-medium tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SERVICES OVERVIEW — cards with images
═══════════════════════════════════════════════════════ */
const HOME_SERVICES = [
  {
    icon: Shield, title: 'General Dentistry', to: '/services/general-dentistry', color: 'bg-[#F4F8EC] text-navy',
    img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Regular check-ups, cleanings, fillings and preventive care for a lifetime of healthy teeth.',
  },
  {
    icon: Sparkles, title: 'Cosmetic Dentistry', to: '/services/cosmetic-dentistry', color: 'bg-yellow-50 text-yellow-700',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Veneers, bonding and complete smile makeovers to give you the confidence you deserve.',
  },
  {
    icon: Zap, title: 'Dental Implants', to: '/services/dental-implants', color: 'bg-navy/5 text-navy',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Permanent, natural-looking tooth replacements for a lasting functional and aesthetic result.',
  },
  {
    icon: Smile, title: 'Orthodontics', to: '/services/orthodontics', color: 'bg-sky-50 text-sky-700',
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Braces and clear aligners to align teeth and correct bite issues at any age.',
  },
  {
    icon: Activity, title: 'Root Canal', to: '/services/root-canal', color: 'bg-rose-50 text-rose-700',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Pain-free endodontic therapy to save infected teeth and restore full function.',
  },
  {
    icon: Crown, title: 'Crowns & Bridges', to: '/services/crowns-bridges', color: 'bg-orange-50 text-orange-700',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Custom-crafted restorations that repair damaged or missing teeth with precision and beauty.',
  },
]

function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Comprehensive Dental<br />Services in Kochi</h2>
          </div>
          <Link to="/services" className="btn-outline self-start md:self-auto whitespace-nowrap">
            All Services <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_SERVICES.map(({ icon: Icon, title, desc, to, color, img }) => (
            <article key={title} className="card-hover group bg-white border border-gray-100 rounded-[20px] overflow-hidden flex flex-col">
              {/* Service image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <h3 className="font-urbanist font-bold text-navy text-[17px] mb-2">{title}</h3>
                  <p className="text-body text-[13.5px] leading-relaxed">{desc}</p>
                </div>
                <Link to={to} className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-[13.5px] hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   WHY CHOOSE US — photo left, features right
═══════════════════════════════════════════════════════ */
const WHY_FEATURES = [
  { title: 'Experienced Specialists', desc: 'Our qualified dentists bring over a decade of clinical expertise and continual specialist training.' },
  { title: 'State-of-the-Art Technology', desc: 'Digital X-rays, 3D imaging and modern sterilisation for precise, safer treatments.' },
  { title: 'Pain-Free Procedures', desc: 'Advanced anaesthesia and a genuinely gentle approach so every visit is comfortable.' },
  { title: 'Flexible Appointments', desc: 'Open 7 days a week with evening slots and same-day emergency care available.' },
]

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F8EC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo with overlaid stats */}
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden h-[500px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=600&fit=crop&auto=format&q=80"
                alt="Expert dental team at Cloud Nine Dental"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for readability of bottom stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
            </div>
            {/* Overlaid stat pills at bottom */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {[
                { val: '500+', lbl: 'Happy Patients' },
                { val: '4.9★', lbl: 'Google Rating' },
                { val: '10+',  lbl: 'Years Experience' },
                { val: '7',    lbl: 'Days a Week' },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white">
                  <div className="font-urbanist font-extrabold text-[22px] leading-none">{val}</div>
                  <div className="text-white/70 text-[11px] font-medium mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
            {/* Floating trust badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-3 flex items-center gap-3 whitespace-nowrap">
              <CheckCircle size={18} className="text-brand-blue" />
              <span className="font-urbanist font-bold text-navy text-sm">Trusted by families across Kochi</span>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Dental Care You Can<br />Trust & Rely On</h2>
            <p className="section-sub mb-10">
              At Cloud Nine Dental, your oral health and comfort are our top priority.
              Here's what makes us Ernakulam's preferred dental clinic.
            </p>
            <div className="flex flex-col gap-6">
              {WHY_FEATURES.map(({ title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-urbanist font-bold text-white text-[12px]">{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <div>
                    <h3 className="font-urbanist font-bold text-navy text-[15px] mb-1">{title}</h3>
                    <p className="text-body text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary mt-10 inline-flex">
              Learn About Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TEAM TEASER
═══════════════════════════════════════════════════════ */
const TEAM = [
  { name: 'Dr. Priya Nair',   role: 'Cosmetic Dentist & Implantologist', initials: 'PN', bg: 'from-[#7AB340] to-[#3A5A18]', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=420&fit=crop&auto=format&q=80' },
  { name: 'Dr. Arjun Menon',  role: 'Orthodontist & Dental Surgeon',     initials: 'AM', bg: 'from-[#4F7A21] to-[#2D4A12]', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=420&fit=crop&auto=format&q=80' },
  { name: 'Dr. Divya Thomas', role: 'Pediatric Dentist & Periodontist',  initials: 'DT', bg: 'from-[#7AB340] to-[#4F7A21]', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=420&fit=crop&auto=format&q=80' },
]

function TeamTeaser() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-label">Our Specialists</span>
          <h2 className="section-title">Meet Our Expert<br />Dental Team</h2>
          <p className="section-sub mx-auto text-center">
            Our experienced, caring dental professionals are dedicated to making every visit positive and every smile healthier.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TEAM.map(({ name, role, initials, bg, img }) => (
            <article key={name} className="card-hover group bg-white border border-gray-100 rounded-[20px] overflow-hidden text-center">
              <div className={`h-64 bg-gradient-to-br ${bg} overflow-hidden relative`}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                />
                <div className="absolute inset-0 items-center justify-center hidden">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-urbanist font-extrabold text-white text-2xl">{initials}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-bold text-navy text-[17px] mb-1">{name}</h3>
                <p className="text-body text-sm mb-4">{role}</p>
                <Link to="/dentists" className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-[13px] hover:gap-3 transition-all">
                  View Profile <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/dentists" className="btn-outline">Meet All Dentists <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CLINIC GALLERY — explicit grid, no broken images
═══════════════════════════════════════════════════════ */
function ClinicGallery() {
  return (
    <section className="py-20 md:py-24 bg-[#F4F8EC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="section-label">Our Clinic</span>
          <h2 className="section-title">A Modern Space Built<br />for Your Comfort</h2>
          <p className="section-sub mx-auto text-center">Step inside Cloud Nine Dental — designed to make every visit relaxing, safe, and professional.</p>
        </div>

        {/* Top row: 1 large + 2 stacked small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2 h-[320px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=420&fit=crop&auto=format&q=80"
              alt="Dentist consultation – Cloud Nine Dental"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 h-[150px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=200&fit=crop&auto=format&q=80"
                alt="Dental treatment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 h-[150px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=200&fit=crop&auto=format&q=80"
                alt="Dental imaging technology"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: 3 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-[220px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=500&h=280&fit=crop&auto=format&q=80"
              alt="Modern dental clinic"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="h-[220px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=280&fit=crop&auto=format&q=80"
              alt="Dental procedure"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="h-[220px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=280&fit=crop&auto=format&q=80"
              alt="Our dental team"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { name: 'Anitha Menon',  role: 'Orthodontics Patient',        text: 'The team at Cloud Nine Dental is absolutely wonderful. My aligner treatment was thoroughly explained and every appointment was smooth. My smile has never looked better!', rating: 5, initials: 'AM', bg: 'bg-navy' },
  { name: 'Rahul Krishnan', role: 'Dental Implant Patient',     text: 'I was nervous about getting implants, but the dentist made me feel completely at ease. The procedure was painless and the results are incredible. Highly recommended!', rating: 5, initials: 'RK', bg: 'bg-brand-blue' },
  { name: 'Priya Thomas',  role: 'Cosmetic Dentistry Patient',  text: 'Professional, clean, and friendly clinic. My veneers look completely natural. The team genuinely cares about patient satisfaction. Best dental clinic in Kochi!', rating: 5, initials: 'PT', bg: 'bg-brand-yellow' },
]

function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-label">Patient Reviews</span>
          <h2 className="section-title">What Our Patients Say<br />About Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, text, rating, initials, bg }) => (
            <article key={name} className="card-hover bg-white rounded-[20px] border border-gray-100 p-7 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="#E07B35" color="#E07B35" />)}
              </div>
              <p className="text-body text-[14.5px] leading-relaxed flex-1">"{text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="font-urbanist font-bold text-[13px] text-white">{initials}</span>
                </div>
                <div>
                  <div className="font-urbanist font-bold text-navy text-[14px]">{name}</div>
                  <div className="text-body text-[12px]">{role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   BOOKING CTA — full-width image background
═══════════════════════════════════════════════════════ */
function BookingCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=600&fit=crop&auto=format&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark olive overlay */}
      <div className="absolute inset-0 bg-navy-dark/85" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
        <span className="section-label text-brand-yellow">Get Started Today</span>
        <h2 className="font-urbanist font-extrabold text-white text-[clamp(28px,3.5vw,44px)] mb-5 mt-2">
          Ready for a Healthier,<br />Brighter Smile?
        </h2>
        <p className="text-green-200/70 text-[16px] leading-relaxed max-w-lg mx-auto mb-8">
          Book your appointment today and take the first step toward the confident, healthy smile you deserve.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/booking" className="btn-white">
            Book Appointment <ArrowRight size={15} />
          </Link>
          <a href="tel:+91XXXXXXXXXX" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
            <Phone size={15} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <WhyChooseUs />
      <TeamTeaser />
      <ClinicGallery />
      <Testimonials />
      <BookingCTA />
    </>
  )
}
