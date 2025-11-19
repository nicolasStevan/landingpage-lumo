import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

export function PlansSection() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'R$ 375,90',
      period: 'por projeto',
      description: 'Ideal para pequenas empresas que querem experimentar IA',
      features: [
        'Consultoria inicial gratuita',
        '1 solução de IA implementada',
        'Suporte por 3 meses',
        'Treinamento básico da equipe',
        'Documentação completa'
      ],
      popular: false,
      cta: 'Começar Projeto'
    },
    {
      name: 'Professional',
      icon: Star,
      price: 'R$ 699,90',
      period: 'por projeto',
      description: 'Para empresas que querem soluções mais robustas',
      features: [
        'Consultoria estratégica completa',
        'Até 3 soluções de IA integradas',
        'Suporte por 6 meses',
        'Treinamento avançado da equipe',
        'Manutenção e atualizações',
        'Dashboard de métricas',
        'Integração com sistemas existentes'
      ],
      popular: true,
      cta: 'Escolher Professional'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Sob consulta',
      period: 'personalizado',
      description: 'Soluções enterprise para grandes organizações',
      features: [
        'Consultoria C-Level dedicada',
        'Soluções de IA ilimitadas',
        'Suporte 24/7 prioritário',
        'Gerente de projeto dedicado',
        'SLA garantido',
        'Treinamento executivo',
        'Integração complexa',
        'Compliance e segurança',
        'Relatórios executivos'
      ],
      popular: false,
      cta: 'Falar com Especialista'
    }
  ];

  const handlePlanClick = (planName: string) => {
    const phoneNumber = '558194534207';
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName}. Gostaria de saber mais detalhes.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="planos" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20">
            Planos de Consultoria
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha o plano ideal 
            <span className="gradient-text block mt-2">para seu negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos planos flexíveis para atender empresas de todos os tamanhos, 
            desde startups até grandes corporações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`p-8 h-full ${
                plan.popular 
                  ? 'bg-gradient-to-b from-purple-500/10 to-purple-600/10 border-purple-500/40 shadow-lg shadow-purple-500/20' 
                  : 'bg-card/50 backdrop-blur-sm border-purple-500/20'
              } hover:border-purple-500/40 transition-all duration-300 hover:scale-105`}>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-purple-500/10'
                  }`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular ? 'text-white' : 'text-purple-400'}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <p className={`text-sm text-muted-foreground mb-1 ${plan.name === 'Enterprise' ? 'hidden' : ''}`}>
                    a partir de
                  </p>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.period}</p>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full ${
                    plan.popular 
                      ? 'gradient-purple animate-glow hover:scale-105' 
                      : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  } transition-all duration-300`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Não tem certeza de qual plano escolher?</h3>
          <p className="text-muted-foreground mb-6">
            Agende uma consultoria gratuita e vamos ajudar você a encontrar a solução perfeita 
            para as necessidades do seu negócio.
          </p>
          <Button 
            className="gradient-purple"
            onClick={() => {
              const phoneNumber = '558194534207';
              const message = encodeURIComponent('Olá! Gostaria de agendar uma consultoria gratuita para entender qual plano é ideal para mim.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
          >
            Consultoria Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}