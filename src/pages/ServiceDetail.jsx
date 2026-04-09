import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, Star, Phone, Shield } from 'lucide-react'

/* ── Per-service images (all confirmed-working Unsplash IDs) ── */
const IMG = {
  'general-dentistry': {
    hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'cosmetic-dentistry': {
    hero: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'dental-implants': {
    hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'orthodontics': {
    hero: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'root-canal': {
    hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'teeth-whitening': {
    hero: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'pediatric-dentistry': {
    hero: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'gum-treatment': {
    hero: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=380&fit=crop&auto=format&q=80',
  },
  'crowns-bridges': {
    hero: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1400&h=500&fit=crop&auto=format&q=80',
    g1:   'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=380&fit=crop&auto=format&q=80',
    g2:   'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=380&fit=crop&auto=format&q=80',
    g3:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop&auto=format&q=80',
  },
}

const SERVICE_DATA = {
  'general-dentistry': {
    title: 'General Dentistry',
    tagline: 'The Foundation of a Healthy Smile',
    desc: 'Our general dentistry services form the cornerstone of your oral health. Regular check-ups, professional cleanings, and early detection of dental issues prevent small problems from becoming big ones. Our experienced team provides thorough examinations and personalised preventive care plans.',
    desc2: 'We believe that prevention is always better than cure. Routine visits every 6 months allow us to catch early signs of decay, gum disease, and other conditions before they require more complex — and expensive — treatments.',
    benefits: ['Comprehensive dental examination', 'Professional teeth cleaning (scaling)', 'Cavity detection and fillings', 'Dental X-rays and diagnosis', 'Oral cancer screening', 'Personalised preventive care plan'],
    duration: '30–60 min',
    color: 'bg-[#F4F8EC] text-navy',
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry',
    tagline: 'Elevating Your Smile Aesthetics',
    desc: 'Transform your smile with our advanced cosmetic dentistry treatments. From porcelain veneers to composite bonding and complete smile makeovers, we combine artistry and precision to create naturally beautiful results that boost your confidence.',
    desc2: 'A smile makeover is a life-changing experience. Our cosmetic dentists take a detailed approach — considering your facial features, skin tone, and personal preferences — to design a smile that looks stunning and feels completely natural.',
    benefits: ['Porcelain veneers', 'Composite bonding', 'Smile makeover design', 'Tooth reshaping & contouring', 'Gum contouring', 'Complete aesthetic consultations'],
    duration: '1–3 sessions',
    color: 'bg-yellow-50 text-yellow-700',
  },
  'dental-implants': {
    title: 'Dental Implants',
    tagline: 'Permanent Tooth Replacement That Lasts a Lifetime',
    desc: 'Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed into the jawbone, acting as an artificial root onto which a natural-looking crown is attached. The result is a permanent, fully functional tooth indistinguishable from natural ones.',
    desc2: 'Unlike dentures or bridges, implants preserve jawbone structure and require no special cleaning routine — you simply brush and floss as normal. With proper care, dental implants can last a lifetime, making them the most cost-effective long-term solution.',
    benefits: ['Single & multiple implant placement', 'Full arch implants (All-on-4/6)', 'Bone grafting if required', 'Implant-supported dentures', 'Mini implants', 'Immediate loading implants'],
    duration: '3–6 months (total process)',
    color: 'bg-navy/5 text-navy',
  },
  'orthodontics': {
    title: 'Orthodontics',
    tagline: 'Straighten Your Teeth at Any Age',
    desc: 'Our orthodontic treatments correct misaligned teeth and bite issues using the latest technology. Whether you prefer traditional metal braces, discreet ceramic braces, or virtually invisible clear aligners, we create a customised treatment plan for perfect alignment.',
    desc2: 'Orthodontic treatment isn\'t just cosmetic — properly aligned teeth are easier to clean, reducing your risk of decay and gum disease. Our orthodontists treat patients of all ages, from early intervention in children to adult aligner therapy.',
    benefits: ['Metal braces', 'Ceramic braces', 'Clear aligners (Invisalign-type)', 'Retainers & post-treatment care', 'Early orthodontic intervention for children', 'Adult orthodontics'],
    duration: '6–24 months',
    color: 'bg-sky-50 text-sky-700',
  },
  'root-canal': {
    title: 'Root Canal Treatment',
    tagline: 'Save Your Tooth — Pain Free',
    desc: 'Root canal treatment is the most effective way to save a tooth that would otherwise need to be extracted due to infection or severe decay. Using modern techniques and effective anaesthesia, our endodontists make the procedure virtually painless and typically completed in one to two visits.',
    desc2: 'Modern root canal therapy has come a long way. With rotary endodontic equipment and advanced imaging, we can complete most treatments faster, more accurately, and with far less discomfort than patients expect. You can drive yourself home the same day.',
    benefits: ['Single & multi-rooted canal treatment', 'Re-treatment of failed root canals', 'Rotary endodontics for precision', 'Antibiotic therapy where needed', 'Crown placement post-treatment', 'Painless with advanced anaesthesia'],
    duration: '1–2 sessions',
    color: 'bg-rose-50 text-rose-700',
  },
  'teeth-whitening': {
    title: 'Teeth Whitening',
    tagline: 'A Brighter, Whiter Smile in One Visit',
    desc: 'Professional teeth whitening at Cloud Nine Dental uses high-grade bleaching agents that are safe, effective, and deliver dramatically brighter results in a single session. Say goodbye to stains from coffee, tea, tobacco, and ageing.',
    desc2: 'Our in-clinic whitening delivers results that over-the-counter products simply cannot match. We also offer custom take-home trays for patients who prefer gradual whitening at their own pace. Both options are safe for enamel when used as directed.',
    benefits: ['In-clinic professional whitening', 'Take-home whitening kits', 'Multiple shades improvement per session', 'Safe for enamel', 'Long-lasting results', 'Custom whitening trays'],
    duration: '60–90 min (in-clinic)',
    color: 'bg-amber-50 text-amber-700',
  },
  'pediatric-dentistry': {
    title: 'Pediatric Dentistry',
    tagline: "Gentle Care for Your Child's Smile",
    desc: "We understand that a child's first dental experience sets the tone for a lifetime of oral health habits. Our warm, child-friendly clinic and experienced pediatric team ensure that young patients feel safe, comfortable, and even excited about visiting the dentist.",
    desc2: 'Early dental care matters. We recommend your child\'s first visit by their first birthday. Our team uses age-appropriate language, visual demonstrations, and a patient approach to make every visit positive — laying the groundwork for lifelong dental health.',
    benefits: ['First dental visits & check-ups', 'Fluoride treatments', 'Dental sealants', 'Space maintainers', 'Child-friendly extractions', 'Early orthodontic assessment'],
    duration: '30–45 min',
    color: 'bg-pink-50 text-pink-700',
  },
  'gum-treatment': {
    title: 'Gum Treatment',
    tagline: 'Healthy Gums Are the Foundation of a Healthy Smile',
    desc: 'Gum disease (periodontitis) is one of the most common dental problems and, if left untreated, leads to bone loss and tooth loss. Our periodontists use advanced techniques to treat all stages of gum disease and restore a healthy oral environment.',
    desc2: 'Research links gum disease with systemic conditions including heart disease and diabetes. Treating gum disease is therefore not just about your oral health — it\'s about your overall wellbeing. Our comprehensive periodontal care can make a real difference to your quality of life.',
    benefits: ['Scaling & root planing (deep cleaning)', 'Gum flap surgery', 'Bone grafting', 'Antibiotic therapy', 'Gum recession treatment', 'Regular periodontal maintenance'],
    duration: '45–90 min per session',
    color: 'bg-green-50 text-green-700',
  },
  'crowns-bridges': {
    title: 'Crowns & Bridges',
    tagline: 'Restore Function and Aesthetics with Precision Restorations',
    desc: 'Dental crowns and bridges are custom-crafted restorations that repair damaged teeth and replace missing ones. Made from high-quality porcelain or zirconia, they look and feel completely natural while restoring full chewing function.',
    desc2: 'We use digital impressions and precision milling to ensure a perfect fit every time. Our metal-free ceramic crowns are matched to the exact shade of your surrounding teeth, delivering restorations so natural even you\'ll forget they\'re there.',
    benefits: ['Porcelain & zirconia crowns', 'Traditional dental bridges', 'Implant-supported crowns', 'Temporary crowns same-day', 'Metal-free restorations', 'Precision fit & natural aesthetics'],
    duration: '2–3 sessions',
    color: 'bg-orange-50 text-orange-700',
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICE_DATA[slug]
  const imgs = IMG[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="section-title mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    )
  }

  const { title, tagline, desc, desc2, benefits, duration, color } = service

  const metaDesc = `${desc.slice(0, 140)}... Book at Cloud Nine Dental, Padivattom, Ernakulam.`

  return (
    <>
      <Helmet>
        <title>{title} in Ernakulam | Cloud Nine Dental, Kochi</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://cloudninedental.in/services/${slug}`} />
        <meta property="og:title" content={`${title} – Cloud Nine Dental Ernakulam`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`https://cloudninedental.in/services/${slug}`} />
      </Helmet>
      {/* ── Page Banner ─────────────────────────────── */}
      <div className="page-banner">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-[13px] text-green-200/50 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </nav>
          <span className="section-label text-brand-yellow">Our Services</span>
          <h1 className="font-urbanist font-extrabold text-white text-[clamp(30px,4vw,50px)] mt-2 mb-3">{title}</h1>
          <p className="text-green-200/70 text-[16px]">{tagline}</p>
        </div>
      </div>

      {/* ── Full-width Hero Image ───────────────────── */}
      <div className="h-[320px] md:h-[420px] overflow-hidden relative">
        <img
          src={imgs.hero}
          alt={`${title} at Cloud Nine Dental Ernakulam`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/50 via-transparent to-transparent" />
        {/* Floating tag on image */}
        <div className="absolute bottom-6 left-6 md:left-12 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl">
          <Clock size={16} className="text-brand-blue" />
          <div>
            <div className="text-[11px] text-body uppercase tracking-wide font-semibold">Treatment Duration</div>
            <div className="font-urbanist font-bold text-navy text-[14px]">{duration}</div>
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: 2/3 content */}
            <div className="lg:col-span-2">

              {/* About section */}
              <h2 className="section-title mb-5">About {title}</h2>
              <p className="text-body text-[16px] leading-[1.85] mb-5">{desc}</p>
              <p className="text-body text-[15px] leading-[1.85] mb-10">{desc2}</p>

              {/* 2-image gallery */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
                  <img src={imgs.g1} alt={`${title} – Cloud Nine Dental`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
                  <img src={imgs.g2} alt={`${title} treatment`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-[#F4F8EC] rounded-[24px] p-8 border border-[#D6E2C4] mb-8">
                <h3 className="font-urbanist font-bold text-navy text-[20px] mb-6">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map(b => (
                    <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                      <CheckCircle size={17} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-body text-[14px] font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Third gallery image — wide */}
              <div className="h-[240px] rounded-2xl overflow-hidden mb-8">
                <img src={imgs.g3} alt={`${title} clinic`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Why Cloud Nine */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { val: '500+', lbl: 'Happy Patients' },
                  { val: '4.9★', lbl: 'Rating' },
                  { val: '10+',  lbl: 'Years Experience' },
                  { val: '7',    lbl: 'Days a Week' },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="bg-navy rounded-2xl p-5 text-center text-white">
                    <div className="font-urbanist font-extrabold text-[28px] leading-none mb-1">{val}</div>
                    <div className="text-green-200/70 text-[12px] font-medium">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="flex flex-col gap-5">

              {/* Book now card */}
              <div className="bg-navy rounded-[20px] overflow-hidden text-white sticky top-[110px]">
                <div className="h-36 overflow-hidden">
                  <img src={imgs.g1} alt="Book appointment"
                    className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="p-7">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#E07B35" color="#E07B35" />)}
                  </div>
                  <h3 className="font-urbanist font-extrabold text-[20px] mb-2">Book This Treatment</h3>
                  <p className="text-green-200/70 text-sm leading-relaxed mb-5">
                    Ready to get started? Book online and our team will confirm within a few hours.
                  </p>
                  <Link to="/booking" className="btn-white w-full justify-center mb-3">
                    Book Appointment <ArrowRight size={14} />
                  </Link>
                  <a href="tel:+91XXXXXXXXXX"
                    className="flex items-center justify-center gap-2 text-green-200/70 hover:text-white text-sm transition-colors py-2">
                    <Phone size={14} /> Or call: +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              {/* Why us */}
              <div className="bg-[#F4F8EC] rounded-[20px] p-6 border border-[#D6E2C4]">
                <h3 className="font-urbanist font-bold text-navy text-[16px] mb-4">Why Cloud Nine Dental?</h3>
                {['Experienced specialists', 'Modern equipment', 'Pain-free procedures', 'Affordable pricing', '7-day availability'].map(r => (
                  <div key={r} className="flex items-center gap-2.5 mb-3 last:mb-0">
                    <CheckCircle size={14} className="text-brand-blue flex-shrink-0" />
                    <span className="text-body text-sm">{r}</span>
                  </div>
                ))}
              </div>

              {/* Other services */}
              <div className="bg-[#F4F8EC] rounded-[20px] p-6 border border-[#D6E2C4]">
                <h3 className="font-urbanist font-bold text-navy text-[16px] mb-4">Explore More Services</h3>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-sm hover:gap-3 transition-all">
                  View All Services <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={imgs.g3}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-urbanist font-extrabold text-white text-[clamp(24px,3vw,38px)] mb-4">
            Ready to Book Your {title} Appointment?
          </h2>
          <p className="text-green-200/70 text-[15px] max-w-md mx-auto mb-8">
            Our specialists are available 7 days a week. Same-day emergency appointments available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="btn-white">Book Now <ArrowRight size={14} /></Link>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
              <Phone size={14} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
