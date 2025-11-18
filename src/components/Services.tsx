import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Shield, Code, Building2 } from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "Consultoria DevOps",
    description: "Implementação de pipelines CI/CD, automação de infraestrutura, containerização com Docker e Kubernetes, e práticas GitOps para acelerar entregas.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "SecOps",
    description: "Segurança integrada ao desenvolvimento. SAST, DAST, gestão de vulnerabilidades e compliance para proteger sua infraestrutura desde o código.",
    highlight: false,
  },
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Soluções customizadas com arquiteturas modernas, microsserviços, APIs RESTful e desenvolvimento ágil focado em resultados de negócio.",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Arquitetura Híbrida",
    description: "Especialistas em soluções on-premise e cloud. AWS, Azure, GCP e ambientes híbridos otimizados para performance, custo e escalabilidade.",
    highlight: false,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de TI que vão da consultoria estratégica até a dedicação de profissionais especializados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                service.highlight
                  ? "border-primary border-2 bg-gradient-to-br from-primary/5 to-accent/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    service.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  } group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Precisa de profissionais dedicados?
                </h3>
                <p className="text-lg opacity-95">
                  Oferecemos alocação de especialistas por tempo de contrato para atender suas demandas específicas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
