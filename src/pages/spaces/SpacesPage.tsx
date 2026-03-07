import { 
  EnvironmentOutlined, 
  CheckCircleFilled, 
  BankOutlined,
  WifiOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  CoffeeOutlined,
  CarOutlined,
  AppstoreOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const infrastructures = [
  {
    name: "Le Palais des Congrès",
    location: "Boulevard de la Marina, Cotonou",
    description: "Édifice emblématique de la ville de Cotonou, le Palais des Congrès est le lieu privilégié pour l’organisation de sommets internationaux, de conférences majeures, de spectacles et d’expositions.",
    image: "/palais des congrès .png",
    features: [
      { icon: <AppstoreOutlined />, text: "Salles modulables (50 à 1500 places)" },
      { icon: <ThunderboltOutlined />, text: "Équipement audiovisuel de pointe" },
      { icon: <WifiOutlined />, text: "Connexion Très Haut Débit" },
      { icon: <CoffeeOutlined />, text: "Espaces restauration & VIP" },
      { icon: <SafetyCertificateOutlined />, text: "Sécurité renforcée 24/7" },
      { icon: <CarOutlined />, text: "Parking sécurisé (500 places)" }
    ]
  }
];

export function SpacesPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>SoLE SA | Espaces & Infrastructures</title>
      </Helmet>

      {/* Hero Section - Compact like Services/About */}
      <section className="relative overflow-hidden bg-[#012347] py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-sole-green/5 blur-[120px]" />
          <div className="absolute -right-1/4 -bottom-1/4 h-[800px] w-[800px] rounded-full bg-sole-blue/10 blur-[120px]" />
          {/* Subtle background pattern/image for context */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-sole-green backdrop-blur-sm mb-6">
              <BankOutlined className="mr-2" /> Lieux d’exception
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Espaces <span className="text-sole-green">&</span> Infrastructures
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              La gestion d’équipements de prestige pour accueillir vos événements dans les meilleures conditions au Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Venue Section - Inspired by the provided structure */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {infrastructures.map((infra, idx) => (
            <div key={idx} className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Info & Features */}
              <div className="space-y-10 order-2 lg:order-1">
                <div>
                  <h2 className="text-4xl font-black text-sole-blue sm:text-5xl mb-6">{infra.name}</h2>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-sole-green text-sm font-bold border border-emerald-100/50">
                    <EnvironmentOutlined />
                    {infra.location}
                  </div>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  {infra.description}
                </p>

                {/* Features Card - The central white box from user image */}
                <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-8 sm:p-12 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-110">
                    <BankOutlined className="text-8xl text-sole-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-sole-blue mb-10 flex items-center gap-3">
                    Équipements & Services
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                    {infra.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sole-blue shadow-sm border border-slate-100 text-xl transition-transform hover:scale-110">
                          {feature.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-700 leading-snug pt-1">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Image Gallery grid from user image */}
              <div className="order-1 lg:order-2 space-y-6">
                {/* Main Large Image */}
                <div className="relative group overflow-hidden rounded-[50px] shadow-2xl aspect-[16/11]">
                  <img 
                    src={infra.image} 
                    alt={infra.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sole-blue/40 to-transparent" />
                </div>
                
                {/* Secondary Images Sub-grid */}
                <div className="grid grid-cols-2 gap-6 h-[240px]">
                  <div className="rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=600&q=80" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      alt="Bureau"
                    />
                  </div>
                  <div className="rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      alt="Meeting"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Spaces Section - The "Espaces en cours d'intégration" part */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-extrabold text-sole-blue">Autres Espaces Culturels</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              La SoLE a vocation à gérer d’autres infrastructures culturelles et événementielles majeures sur le territoire national. Ces espaces seront bientôt disponibles à la location.
            </p>
            
            <div className="mt-16 bg-white border border-dashed border-slate-300 rounded-[50px] p-16 flex flex-col items-center gap-6 shadow-sm">
              <div className="h-20 w-20 flex items-center justify-center rounded-3xl bg-slate-50 text-slate-400 text-4xl">
                <BankOutlined />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Espaces en cours d’intégration</h3>
                <p className="text-slate-400">Revenez bientôt pour découvrir notre catalogue complet d’infrastructures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Footer Map/Address Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-sole-blue rounded-[50px] p-10 lg:p-14 text-white hover:shadow-2xl transition-all duration-500">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-sole-green text-sm font-bold uppercase tracking-widest">Nous Trouver</span>
              <h3 className="text-3xl font-bold leading-tight">Palais des Congrès - Cotonou</h3>
              <p className="text-slate-300 flex items-center justify-center md:justify-start gap-2">
                <EnvironmentOutlined />
                Boulevard de la Marina, Cotonou, Bénin
              </p>
            </div>
            <div className="shrink-0">
               <a 
                 href="https://www.google.com/maps/dir/?api=1&destination=Palais+des+Congr%C3%A8s+Cotonou+Benin" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block px-10 py-5 rounded-full bg-sole-green text-white font-bold hover:bg-white hover:text-sole-blue transition-all text-center"
               >
                  Y aller via Google Maps
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}