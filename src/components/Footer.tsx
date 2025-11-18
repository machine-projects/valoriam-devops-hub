import { Linkedin, Mail, MapPin } from "lucide-react";
 
export const Footer = () => {
  return (
    <footer className="bg-tech-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Valoriam</h3>
            <p className="text-blue-100 leading-relaxed">
              Consultoria especializada em DevOps, SecOps e Arquitetura de Soluções para empresas e governo.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Consultoria DevOps</li>
              <li>SecOps</li>
              <li>Desenvolvimento de Software</li>
              <li>Arquitetura Híbrida</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@valoriam.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Campo Grande, MS</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/company/valoriam</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/20 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Valoriam. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
