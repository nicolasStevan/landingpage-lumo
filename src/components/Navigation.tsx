import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigationItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#planos', label: 'Planos de Consultoria' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleCTAClick = () => {
    const phoneNumber = '558194534207';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Lumo.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-3">
              <img 
                src="/images/icone_lumo-removebg-preview.png" 
                alt="Lumo Logo" 
                className="w-10 h-10 hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold gradient-text">Lumo Ia Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button 
              onClick={handleCTAClick}
              className="gradient-purple text-white hover:scale-105 transition-transform"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <img 
                      src="/images/icone_lumo-removebg-preview.png" 
                      alt="Lumo Logo" 
                      className="w-10 h-10"
                    />
                    <span className="text-xl font-bold gradient-text">Lumo Ia Solutions</span>
                  </div>
                  
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-foreground/80 hover:text-primary px-4 py-3 rounded-lg transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="flex items-center justify-between px-4 py-3 border-t border-border mt-4 pt-6">
                    <span className="text-sm text-foreground/60">Tema</span>
                    <ThemeToggle />
                  </div>
                  
                  <Button 
                    onClick={handleCTAClick}
                    className="gradient-purple mt-6 w-full"
                  >
                    Fale Conosco
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}