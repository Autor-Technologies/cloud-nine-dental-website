import { useState } from 'react'
import { X } from 'lucide-react'
import { useChat } from '../context/ChatContext'

const AGENT_ID = '2154f5b6-1803-4953-9f54-1901489d0532'
const IFRAME_SRC = `https://loquent-widget.vercel.app/iframe.html?agentId=${AGENT_ID}&mode=chat`

export default function LoquentChatModal() {
  const { isOpen, closeChat } = useChat()
  const [closing, setClosing] = useState(false)

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      setClosing(false)
      closeChat()
    }, 300)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100] transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Centered modal */}
      <div className="fixed z-[1101] inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col
            transition-all duration-300
            ${closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-navy border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center">
                <span className="font-urbanist font-bold text-white text-[11px]">J</span>
              </div>
              <div>
                <div className="font-urbanist font-bold text-white text-[14px] leading-none">Jess</div>
                <div className="text-green-200/70 text-[11px] mt-0.5">AI Receptionist · Cloud Nine Dental</div>
              </div>
            </div>
            <button
              onClick={dismiss}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={14} />
            </button>
          </div>

          {/* Iframe */}
          <div className="w-full h-[70vh] max-h-[600px] bg-[#1A1A1C]">
            <iframe
              src={IFRAME_SRC}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="microphone"
              title="Chat with Jess — Cloud Nine Dental"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
