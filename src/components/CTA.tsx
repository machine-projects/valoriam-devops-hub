import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-tech-blue-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pronto para Transformar sua Infraestrutura?
          </h2>
          <p className="text-xl text-blue-50 leading-relaxed">
            Entre em contato com nossos especialistas e descubra como podemos acelerar sua transformação digital com soluções DevOps de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              contato@valoriam.com.br
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 bg-transparent backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 9999-9999
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
