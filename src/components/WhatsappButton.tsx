import { WhatsappIcon } from './SocialIcons';

const WhatsAppButton = () => {
  const message = encodeURIComponent('Hello, I would like to inquire about your services.'); // Predefined message for WhatsApp
  const href = `https://wa.me/0756243447?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <span className="relative flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 px-4 py-4 hover:bg-[#1da851] transition-all duration-300 hover:scale-105">
        <WhatsappIcon className="w-6 h-6" />
        <span className="hidden sm:inline font-semibold text-sm pr-1">Chat with us</span>
      </span>
    </a>
  );
}

export default WhatsAppButton;
