import { Card } from "@/components/ui/card";

const clients = [
  {
    name: "Better Benefícios",
    description: "Desenvolvimento de sofware serveless e automação de infraestrutura",
  },
  {
    name: "Asilo São João Bosco",
    description: "Digitalização de processos e gestão de sistemas internos",
  },
  {
    name: "DataWay",
    description: "Arquitetura cloud híbrida e automação de operações",
  },
];

export const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Clientes que Confiam
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas e organizações que transformaram sua TI conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/50 bg-card"
            >
              <div className="space-y-4">
                <div className="h-20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-foreground text-center group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {client.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
           Assim como fizemos para outros, levamos a maturidade em DevOps para a sua operação. Automatizamos processos, integramos times e garantimos que seus softwares sejam entregues com mais velocidade, segurança e confiabilidade.
            Do desenvolvimento à infraestrutura híbrida, nós otimizamos o ciclo completo.
          </p>
        </div>
      </div>
    </section>
  );
};
