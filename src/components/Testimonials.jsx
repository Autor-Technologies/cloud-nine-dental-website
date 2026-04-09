import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Aji KJ',
    initials: 'AK',
    color: 'bg-[#4A5520]',
    text: 'Excellent service! The hospital is newly opened and well-maintained. The doctor is very professional and gave a good explanation of my dental issues. Highly recommended.',
  },
  {
    name: 'Amy Dileep',
    initials: 'AD',
    color: 'bg-[#6B7F2A]',
    text: 'Very good and welcoming clinic. Dr Swathy was very gentle and friendly. She took time and explained everything. Highly recommended 👍👍 Everything was well organised and clean and very affordable.',
  },
  {
    name: 'Sangeeth J Menon',
    initials: 'SJ',
    color: 'bg-[#3A4418]',
    text: 'I had a good experience at this clinic. Dr. Swathy and Dr. Jadeep were very professional and took time to explain everything clearly. The staff were polite and helpful. Overall, the experience was smooth and comfortable. Highly recommended.',
  },
  {
    name: 'Kavya S Panicker',
    initials: 'KP',
    color: 'bg-[#4A5520]',
    text: 'I had a great experience at this clinic. The entire team is highly professional, friendly, and attentive to patient comfort. Dr takes time to explain procedures clearly and ensures that the patient feel at ease throughout the visit. Highly recommended.',
  },
  {
    name: 'Raihanath C M',
    initials: 'RC',
    color: 'bg-[#6B7F2A]',
    text: 'I had a wonderful experience with Dr Swathy at Cloud Nine Dental. The staff was incredibly friendly and professional, making me feel comfortable through my treatment. The clinic is very clean, and I am very satisfied with the results. Highly recommended.',
  },
  {
    name: 'Keerthy PK',
    initials: 'KP',
    color: 'bg-[#3A4418]',
    text: "I had a wonderful experience at Cloud Nine Dental Clinic. True to the name, they really go above and beyond to make sure you're comfortable and stress-free. The clinic is modern, clean, and the staff is incredibly welcoming. If you're looking for a dentist who prioritizes patient care, this is the place.",
  },
]

function GoogleG({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="bg-white border border-gray-100 rounded-[20px] p-7 flex flex-col gap-4 shadow-sm h-full">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#C8A020" color="#C8A020" />
        ))}
      </div>
      {/* Text */}
      <p className="text-body text-[14.5px] leading-relaxed flex-1">"{review.text}"</p>
      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="font-urbanist font-bold text-[13px] text-white">{review.initials}</span>
        </div>
        <div>
          <div className="font-urbanist font-bold text-navy text-[14px]">{review.name}</div>
          <div className="flex items-center gap-1 text-body text-[11px] mt-0.5">
            <GoogleG size={11} />
            Google Review
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = REVIEWS.length
  const visible = 3 // cards shown at once

  const next = useCallback(() => setActive(a => (a + 1) % total), [total])
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [paused, next])

  // Build the 3 indices to show
  const indices = Array.from({ length: visible }, (_, i) => (active + i) % total)

  return (
    <section
      className="py-20 md:py-28 bg-[#F4F8EC]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Header — matches the design they showed */}
        <div className="text-center mb-14">
          <span className="section-label">Patient Reviews</span>
          <h2 className="section-title">What Our Patients Say<br />About Us</h2>
          <p className="section-sub mx-auto text-center mb-6">
            Real stories from real patients who trust Cloud Nine Dental with their smiles.
          </p>
          {/* Google aggregate badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-2xl px-5 py-2.5 shadow-sm">
            <GoogleG size={18} />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C8A020" color="#C8A020" />)}
            </div>
            <span className="font-urbanist font-bold text-navy text-[15px]">5.0</span>
            <span className="text-body text-sm">· Google Reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Cards — 3 visible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {indices.map((idx) => (
              <ReviewCard key={idx} review={REVIEWS[idx]} />
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors z-10"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors z-10"
            aria-label="Next reviews"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 h-2.5 bg-navy'
                  : 'w-2.5 h-2.5 bg-navy/20 hover:bg-navy/40'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
