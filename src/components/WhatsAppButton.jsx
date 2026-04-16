import { useState, useEffect } from 'react'

const PHONE = '919037909046'
const MESSAGE = "Hi, I would like to book an appointment at Cloud Nine Dental."
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-[998] w-14 h-14 bg-[#25D366] hover:bg-[#1fb855] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.93a13.16 13.16 0 0 0 1.792 6.636L2.667 29.333l7.005-1.837A13.2 13.2 0 0 0 16.004 29.2 13.27 13.27 0 0 0 29.333 15.93 13.27 13.27 0 0 0 16.004 2.667Zm0 24.267a10.93 10.93 0 0 1-5.576-1.524l-.4-.237-4.149 1.088 1.107-4.05-.26-.414a10.88 10.88 0 0 1-1.672-5.867A10.99 10.99 0 0 1 16.004 4.94 10.99 10.99 0 0 1 26.96 15.93a10.99 10.99 0 0 1-10.956 10.99v.014Zm6.02-8.225c-.33-.165-1.956-.965-2.26-1.075-.303-.11-.524-.165-.744.165s-.854 1.075-1.047 1.296-.386.248-.715.083a9.01 9.01 0 0 1-2.653-1.637 9.95 9.95 0 0 1-1.836-2.285c-.192-.33-.02-.51.145-.674.148-.148.33-.386.496-.578.165-.193.22-.33.33-.552.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.02-2.453-.268-.645-.54-.557-.744-.567l-.633-.01a1.214 1.214 0 0 0-.88.413 3.7 3.7 0 0 0-1.154 2.75c0 1.62 1.18 3.186 1.344 3.406.165.22 2.322 3.544 5.625 4.97.786.34 1.4.543 1.878.694a4.52 4.52 0 0 0 2.076.13c.633-.094 1.956-.8 2.232-1.573.275-.772.275-1.434.192-1.572-.083-.138-.303-.22-.633-.386Z" />
      </svg>
    </a>
  )
}
