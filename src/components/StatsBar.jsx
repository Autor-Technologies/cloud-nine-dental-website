const STATS = [
  { value: '500+', label: 'Patients Treated' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '9+', label: 'Expert Services' },
  { value: '5.0★', label: 'Patient Rating' },
]

export default function StatsBar() {
  return (
    <section aria-label="Key statistics" className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-white font-extrabold text-4xl md:text-5xl leading-none mb-2">
                {value}
              </div>
              <div className="text-teal-200 font-medium text-sm tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
