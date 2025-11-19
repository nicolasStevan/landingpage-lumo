import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Consultoria Inicial',
      description: 'Conversamos sobre seus objetivos e analisamos como a IA pode transformar seu negócio.',
      details: ['Análise das necessidades', 'Definição de objetivos', 'Proposta personalizada']
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Estratégia e Planejamento',
      description: 'Desenvolvemos uma estratégia detalhada e um cronograma para implementação.',
      details: ['Cronograma detalhado', 'Definição de métricas', 'Aprovação do projeto']
    },
    {
      number: '03',
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Nossa equipe desenvolve e testa a solução de IA personalizada para seu negócio.',
      details: ['Desenvolvimento ágil', 'Testes rigorosos', 'Iterações baseadas em feedback']
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Implementação e Treinamento',
      description: 'Implementamos a solução e treinamos sua equipe para obter os melhores resultados.',
      details: ['Deploy seguro', 'Treinamento da equipe', 'Suporte contínuo']
    }
  ];

  const handleCTAClick = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent('Olá! Gostaria de começar um projeto de IA com a Lumo. Vamos conversar?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20">
            Como Funciona
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Processo simples em 
            <span className="gradient-text block mt-2">4 etapas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa metodologia comprovada garante que você obtenha os melhores resultados 
            com transparência total em cada etapa do processo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={step.number} className="p-6 text-center bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              
              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm justify-center">
                    <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vamos começar com uma conversa sobre seus objetivos e como a IA pode ajudar 
            você a alcançá-los de forma mais eficiente.
          </p>
          <Button onClick={handleCTAClick} className="gradient-purple">
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}