import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#cases', label: 'Cases de Sucesso' },
    { href: '#planos', label: 'Planos de Consultoria' },
    { href: '#como-funciona', label: 'Como Funciona' }
  ];

  const services = [
    'Chatbots Inteligentes',
    'Análise Preditiva',
    'Assistentes Virtuais',
    'Sites Inteligentes',
    'Geração de Conteúdo',
    'Business Intelligence'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/lumo.agencia/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/lumo-agencia/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/lumo_agencia', label: 'Twitter' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const phoneNumber = '558194534207';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Lumo.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/icone_lumo-removebg-preview.png" 
                alt="Lumo Logo" 
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold gradient-text">Lumo</h3>
            </div>
            <p className="text-muted-foreground">
              Transformamos negócios através de soluções inteligentes e personalizadas 
              de Inteligência Artificial.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:contato@lumoai.com.br" className="hover:text-purple-400 transition-colors">
                  lumoai.agencia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-purple-400" />
                <button onClick={handleContactClick} className="hover:text-purple-400 transition-colors">
                  +55 (81) 99453-4207
                </button>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Recife, PE - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => scrollToSection('#servicos')}
                    className="text-muted-foreground text-sm hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Entre em Contato</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Pronto para transformar seu negócio com IA? Vamos conversar!
            </p>
            <Button onClick={handleContactClick} className="gradient-purple w-full mb-4">
              Fale Conosco
            </Button>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Lumo - Agência de Soluções Criativas com IA. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}