import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Foco em pequenas e médias empresas e governo",
  "Especialização em infraestruturas híbridas",
  "Da consultoria estratégica à implementação técnica",
  "Profissionais dedicados por contrato",
  "Parceria de longo prazo com nossos clientes",
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre a Valoriam
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Somos uma consultoria em TI especializada em transformar a infraestrutura tecnológica de empresas de pequeno e médio porte e órgãos governamentais.
              </p>
              <p>
                Nossa expertise em <span className="text-primary font-semibold">DevOps, SecOps</span> e{" "}
                <span className="text-primary font-semibold">Arquitetura de Soluções</span> nos permite entregar projetos que vão desde a apresentação de estratégias até a implementação completa de features e sistemas.
              </p>
              <p>
                Trabalhamos com ambientes <span className="text-primary font-semibold">híbridos</span>, combinando o melhor do on-premise com soluções cloud, garantindo flexibilidade, segurança e performance.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nossos Diferenciais
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
