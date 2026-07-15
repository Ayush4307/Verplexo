import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../constants/brand'

/**
 * Floating WhatsApp CTA button — visible on all pages.
 * Opens a pre-filled WhatsApp chat in a new tab.
 * Uses E.164 number format (no + or spaces) in the wa.me URL.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to discuss a project with Verplexo.")}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap">Chat with us</span>
    </a>
  )
}
