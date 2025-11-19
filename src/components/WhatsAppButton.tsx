import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de IA da Lumo.');
    const phoneNumber = '558194534207';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
}