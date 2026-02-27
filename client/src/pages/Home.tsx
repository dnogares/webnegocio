import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Network, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  ChevronRight,
  Code2,
  TerminalSquare
} from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg";
import itSupportImg from "@/assets/images/it-support.jpg";
import consultingImg from "@/assets/images/consulting.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-display tracking-tight">TechNexus</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
            <a href="#n8n" className="text-muted-foreground hover:text-foreground transition-colors">n8n</a>
            <a href="#soporte" className="text-muted-foreground hover:text-foreground transition-colors">Soporte IT</a>
          </nav>
          <Button variant="default" className="font-semibold shadow-md tech-glow">
            Contactar
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Technology Background" 
              className="w-full h-full object-cover opacity-[0.03] dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
            <div className="absolute inset-0 tech-grid"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <Workflow className="mr-2 h-4 w-4" />
                Expertos en automatización y soporte IT
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Potencia tu empresa con <span className="tech-gradient">tecnología inteligente</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Transformamos negocios a través de la automatización con n8n, soporte informático especializado y consultoría tecnológica de alto nivel.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg tech-glow">
                  Descubrir Soluciones <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5">
                  Hablar con un experto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="servicios" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Integrales para Empresas</h2>
              <p className="text-muted-foreground text-lg">
                Cubrimos todas las necesidades tecnológicas de tu negocio, desde la infraestructura hasta la optimización de procesos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Network className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">Automatización n8n</h3>
                  <p className="text-muted-foreground mb-6">
                    Conectamos tus aplicaciones y automatizamos flujos de trabajo complejos para ahorrar tiempo y reducir errores operativos.
                  </p>
                  <a href="#n8n" className="text-primary font-medium flex items-center hover:underline">
                    Saber más <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border border-border/50 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-md bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Server className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">Infraestructura IT</h3>
                  <p className="text-muted-foreground mb-6">
                    Diseño, implementación y mantenimiento de redes, servidores y sistemas críticos para garantizar la continuidad del negocio.
                  </p>
                  <a href="#soporte" className="text-accent font-medium flex items-center hover:underline">
                    Saber más <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border border-border/50 hover:border-foreground/30 transition-all duration-300 shadow-sm hover:shadow-md bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <ShieldCheck className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">Ciberseguridad</h3>
                  <p className="text-muted-foreground mb-6">
                    Protegemos los datos sensibles de tu empresa con soluciones avanzadas de seguridad, auditorías y copias de respaldo.
                  </p>
                  <a href="#contacto" className="text-foreground font-medium flex items-center hover:underline">
                    Saber más <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* n8n Focus Section */}
        <section id="n8n" className="py-20 md:py-28 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                  <img src={consultingImg} alt="Equipo analizando automatizaciones" className="w-full h-auto object-cover" />
                  
                  {/* Floating UI Element */}
                  <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border/50 flex items-center gap-4">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <Workflow className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Flujo de Ventas CRM</div>
                      <div className="text-xs text-muted-foreground">Automatizado correctamente</div>
                    </div>
                    <div className="text-green-500 font-medium text-sm">Activo</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center text-primary font-semibold tracking-wider text-sm uppercase">
                  <TerminalSquare className="mr-2 h-4 w-4" />
                  Especialistas en n8n
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display">
                  Multiplica tu productividad sin escribir código
                </h2>
                <p className="text-lg text-muted-foreground">
                  Desarrollamos flujos de trabajo personalizados con n8n que conectan tus herramientas empresariales (CRM, ERP, Email, bases de datos) para que trabajen solas.
                </p>
                
                <ul className="space-y-4 pt-4">
                  {[
                    "Sincronización de datos entre plataformas en tiempo real",
                    "Automatización de onboarding de clientes y empleados",
                    "Notificaciones inteligentes y alertas del sistema",
                    "Procesamiento masivo de documentos y facturas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 bg-primary/10 rounded-full p-1 mr-3">
                        <Code2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6">
                  <Button className="tech-glow">Solicitar Demo de Automatización</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Support Section */}
        <section id="soporte" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display">
                  Soporte IT que nunca te deja colgado
                </h2>
                <p className="text-lg text-muted-foreground">
                  Actuamos como tu departamento de sistemas externalizado. Resolvemos incidencias rápido para que tu equipo no pierda tiempo productivo.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Asistencia Remota</h4>
                    <p className="text-sm text-muted-foreground">Resolución inmediata de problemas de software y configuraciones a distancia.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Soporte In-Situ</h4>
                    <p className="text-sm text-muted-foreground">Técnicos desplazados a tus oficinas para problemas de hardware y red.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Mantenimiento Preventivo</h4>
                    <p className="text-sm text-muted-foreground">Revisiones periódicas para evitar caídas del sistema antes de que ocurran.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">Consultoría Estratégica</h4>
                    <p className="text-sm text-muted-foreground">Asesoramiento en la compra de equipos y licencias de software.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-accent/5 rounded-3xl transform -rotate-3"></div>
                <img 
                  src={itSupportImg} 
                  alt="Soporte IT Profesional" 
                  className="relative rounded-2xl shadow-xl border border-border/50 object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">¿Listo para modernizar tu infraestructura?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contacta con nosotros para una auditoría gratuita de tus sistemas y descubre cómo la automatización puede transformar tu rentabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold text-primary h-14 px-8 text-base">
                Hablar con un consultor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-display tracking-tight">TechNexus</span>
          </div>
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} TechNexus Soluciones Informáticas. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
