import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Target, Users, Lightbulb } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Brain,
      title: 'IA Personalizada',
      description: 'Desenvolvemos soluções de inteligência artificial sob medida para as necessidades específicas do seu negócio.'
    },
    {
      icon: Target,
      title: 'Resultados Garantidos',
      description: 'Focamos em entregar resultados mensuráveis que impactem diretamente no crescimento da sua empresa.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Nossa equipe é formada por especialistas em IA com experiência em projetos de diversas indústrias.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Estamos sempre atualizados com as últimas tecnologias e tendências em Inteligência Artificial.'
    }
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20">
            Sobre a Lumo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Especialistas em 
            <span className="gradient-text block mt-2">Inteligência Artificial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Na Lumo, acreditamos que a Inteligência Artificial é o futuro dos negócios. 
            Nossa missão é tornar essa tecnologia acessível e eficaz para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="p-6 text-center bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Por que escolher a Lumo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Somos uma startup em crescimento acelerado, com um começo promissor e um time que transforma tecnologia em soluções reais. Nossa didática simples e clara torna a inteligência artificial acessível para qualquer negócio.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa abordagem combina conhecimento técnico avançado com uma compreensão profunda 
              das necessidades empresariais, garantindo soluções que realmente fazem a diferença.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Metodologia ágil e transparente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Suporte contínuo e treinamento</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Tecnologias de ponta</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-transparent rounded-3xl border border-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <Brain className="h-20 w-20 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold gradient-text">IA Inteligente</div>
                <div className="text-muted-foreground">Para o seu negócio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}