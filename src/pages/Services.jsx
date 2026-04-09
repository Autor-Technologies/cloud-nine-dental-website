import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Sparkles, Zap, Smile, Activity, Sun, Heart, Leaf, Crown } from 'lucide-react'

const SERVICES = [
  {
    icon: Shield, title: 'General Dentistry', slug: 'general-dentistry', color: 'bg-[#F4F8EC] text-navy',
    img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Regular check-ups, cleanings, fillings, and preventive care to maintain optimal oral health for every member of your family.',
  },
  {
    icon: Sparkles, title: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry', color: 'bg-yellow-50 text-yellow-700',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Veneers, dental bonding, smile makeovers and aesthetic treatments to give you the confident, beautiful smile you deserve.',
  },
  {
    icon: Zap, title: 'Dental Implants', slug: 'dental-implants', color: 'bg-navy/5 text-navy',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Permanent, natural-looking tooth replacements anchored in the jawbone — for a lifetime of function and aesthetics.',
  },
  {
    icon: Smile, title: 'Orthodontics', slug: 'orthodontics', color: 'bg-sky-50 text-sky-700',
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Metal braces, ceramic braces, and clear aligners to straighten teeth and correct bite issues comfortably at any age.',
  },
  {
    icon: Activity, title: 'Root Canal Treatment', slug: 'root-canal', color: 'bg-rose-50 text-rose-700',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Pain-free endodontic therapy to save infected teeth, eliminate pain, and restore full function without extraction.',
  },
  {
    icon: Sun, title: 'Teeth Whitening', slug: 'teeth-whitening', color: 'bg-amber-50 text-amber-700',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Professional-grade whitening that delivers multiple shades brighter results in a single comfortable clinic session.',
  },
  {
    icon: Heart, title: 'Pediatric Dentistry', slug: 'pediatric-dentistry', color: 'bg-pink-50 text-pink-700',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Specialist child-friendly dental care in a calm, fun environment — building positive habits from the very first visit.',
  },
  {
    icon: Leaf, title: 'Gum Treatment', slug: 'gum-treatment', color: 'bg-green-50 text-green-700',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Advanced periodontal therapy to treat gum disease, prevent bone loss, and maintain a healthy smile foundation.',
  },
  {
    icon: Crown, title: 'Crowns & Bridges', slug: 'crowns-bridges', color: 'bg-orange-50 text-orange-700',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=480&h=260&fit=crop&auto=format&q=75',
    desc: 'Custom-crafted porcelain crowns and bridges that restore damaged or missing teeth with precision, strength and beauty.',
  },
]

export default function Services() {
  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-yellow">What We Offer</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(32px,4vw,52px)] mt-2 mb-4">
            Our Dental Services
          </h1>
          <p className="text-green-200/70 text-[16px] max-w-xl mx-auto leading-relaxed">
            From routine check-ups to advanced cosmetic and restorative procedures — all under one roof in Padivattom, Ernakulam.
          </p>
          <nav className="text-[13px] text-green-200/50 mt-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, slug, desc, color, img }) => (
              <article key={slug} className="card-hover group bg-white border border-gray-100 rounded-[20px] overflow-hidden flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-urbanist font-bold text-navy text-[17px] mb-2">{title}</h2>
                    <p className="text-body text-[13.5px] leading-relaxed">{desc}</p>
                  </div>
                  <Link
                    to={`/services/${slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-[13.5px] hover:gap-3 transition-all"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="relative py-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=400&fit=crop&auto=format&q=70"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-urbanist font-extrabold text-white text-[26px] mb-2">Not sure which treatment you need?</h2>
            <p className="text-green-200/70 text-sm">Book a free consultation and our dentist will guide you.</p>
          </div>
          <Link to="/booking" className="btn-white whitespace-nowrap">
            Book Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
