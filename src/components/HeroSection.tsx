import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';

export function HeroSection() {
  const handleGetStarted = () => {
    const phoneNumber = '558194534207';
    const message = encodeURIComponent('Olá! Tenho interesse nos serviços de IA da Lumo. Gostaria de saber mais.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 bg-purple-500/10 text-purple-300 border-purple-500/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Agência de Soluções Criativas com IA
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme seu negócio com
            <span className="gradient-text block mt-3">Inteligência Artificial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Automatize processos, aumente a eficiência e impulsione seus resultados 
            com soluções personalizadas de Inteligência Artificial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleGetStarted}
              className="gradient-purple animate-glow px-8 py-4 h-auto hover:scale-105 transition-all duration-300"
            >
              <Zap className="h-5 w-5 mr-2" />
              Começar Agora
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 h-auto border-purple-500/30 hover:bg-purple-500/10"
              onClick={scrollToAbout}
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-3">100+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-3">50+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-3">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Suporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - only on mobile */}
        <button
          onClick={scrollToAbout}
          className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}