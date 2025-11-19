import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Bot, 
  Palette, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  Database,
  ArrowRight
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: 'Chatbots Inteligentes',
      description: 'Desenvolvemos chatbots personalizados para automatizar o atendimento ao cliente e melhorar a experiência do usuário.',
      features: ['Processamento de linguagem natural', 'Integração com sistemas existentes', 'Aprendizado contínuo']
    },
    {
      icon: BarChart3,
      title: 'Análise Preditiva',
      description: 'Utilizamos algoritmos de machine learning para analisar dados e prever tendências futuras do seu negócio.',
      features: ['Previsão de vendas', 'Análise de mercado', 'Otimização de processos']
    },
    {
      icon: MessageSquare,
      title: 'Assistentes Virtuais',
      description: 'Criamos assistentes virtuais personalizados para automatizar tarefas e melhorar a produtividade.',
      features: ['Automação de tarefas', 'Agendamento inteligente', 'Gestão de informações']
    },
    {
      icon: Globe,
      title: 'Sites Inteligentes',
      description: 'Desenvolvemos websites com recursos de IA para personalizar a experiência do usuário.',
      features: ['Personalização de conteúdo', 'Recomendações automáticas', 'Análise comportamental']
    },
    {
      icon: Palette,
      title: 'Geração de Conteúdo',
      description: 'Utilizamos IA para criar conteúdo personalizado e relevante para sua audiência.',
      features: ['Criação de textos', 'Geração de imagens', 'Otimização para SEO']
    },
    {
      icon: Database,
      title: 'Business Intelligence',
      description: 'Transformamos seus dados em insights valiosos com ferramentas de BI powered by AI.',
      features: ['Dashboards inteligentes', 'Relatórios automatizados', 'Análise em tempo real']
    }
  ];

  const handleServiceClick = () => {
    const phoneNumber = '558194534207';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de IA da Lumo.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções completas em 
            <span className="gradient-text block mt-2">Inteligência Artificial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de IA para transformar 
            seu negócio e impulsionar seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="p-6 h-full bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                onClick={handleServiceClick}
                className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 justify-between"
              >
                Saiba Mais
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que precisa? Vamos conversar sobre uma solução personalizada.
          </p>
          <Button 
            onClick={handleServiceClick}
            className="gradient-purple"
          >
            Solicitar Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
}