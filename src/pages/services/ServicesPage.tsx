import {
  ArrowRightOutlined,
  CheckCircleFilled,
  DeploymentUnitOutlined,
  ProjectOutlined,
  SettingOutlined,
  TeamOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    title: 'Conception & Planification',
    description: 'De l’idée à la stratégie opérationnelle, nous cadrons vos ambitions.',
    icon: ProjectOutlined,
    color: 'bg-emerald-50 text-emerald-600',
    features: [
      'Études de faisabilité logistique',
      'Planification budgétaire'
    ]
  },
  {
    title: 'Production Technique',
    description: 'Le déploiement de solutions de pointe pour un impact maximal.',
    icon: SettingOutlined,
    color: 'bg-blue-50 text-blue-600',
    features: [
      'Scénographie & Design d’espace',
      'Sonorisation & Éclairage pro'
    ]
  },
  {
    title: 'Gestion de Patrimoine',
    description: 'Optimisation et maintenance des infrastructures événementielles.',
    icon: DeploymentUnitOutlined,
    color: 'bg-amber-50 text-amber-600',
    features: [
      'Maintenance préventive',
      'Exploitation des sites'
    ]
  },
  {
    title: 'Appui Institutionnel',
    description: 'L’excellence protocolaire au service de la République.',
    icon: TeamOutlined,
    color: 'bg-purple-50 text-purple-600',
    features: [
      'Stratégie protocolaire',
      'Visites d’État'
    ]
  }
];

export function ServicesPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>SoLE SA | Nos Services</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#012347] py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-sole-green/5 blur-[120px]" />
          <div className="absolute -right-1/4 -bottom-1/4 h-[800px] w-[800px] rounded-full bg-sole-blue/10 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-sole-green backdrop-blur-sm">
              Ingénierie de l’Excellence
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Missions <span className="text-sole-green">&</span> Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Introduction text before cards */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-3xl font-extrabold text-sole-blue sm:text-4xl lg:text-5xl tracking-tight">
              Une offre complète et <span className="text-sole-green">sur-mesure</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-3xl leading-relaxed">
              Des solutions logistiques intégrées pour répondre aux exigences les plus élevées.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div key={category.title} className="group flex bg-white rounded-[40px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color}`}>
                      <category.icon className="text-3xl" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.title}</h3>
                    <p className="text-base text-slate-500 leading-relaxed mb-8">
                      {category.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircleFilled className="text-sole-green/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-slate-50 text-sole-blue text-sm font-bold transition-all hover:bg-sole-blue hover:text-white group/btn"
                    >
                      <FileTextOutlined className="text-lg" />
                      Demander un devis
                      <ArrowRightOutlined className="text-xs transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Feature - Modern Layout */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-[50px] shadow-2xl">
                <img 
                  src="/palais des congrès .png" 
                  alt="Esplanade du Palais des Congrès"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-sole-green/10 rounded-full blur-3xl" />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight text-sole-blue">Garantir la réussite de chaque instant.</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                La SoLE SA déploie une expertise multidimensionnelle pour assurer la maîtrise totale de vos projets. De l’assistance à la maîtrise d’ouvrage jusqu’à l’exploitation technique, nous sommes votre partenaire de confiance.
              </p>
              <div className="flex gap-6">
                <div className="flex-1">
                   <p className="text-3xl font-black text-sole-blue">24/7</p>
                   <p className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.2em] mt-2">Disponibilité</p>
                </div>
                <div className="flex-1">
                   <p className="text-3xl font-black text-emerald-600">100%</p>
                   <p className="text-[11px] uppercase font-bold text-slate-400 tracking-[0.2em] mt-2">Institutionnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold text-sole-blue mb-8">Un projet d’envergure ?</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">Nos experts analysent vos besoins pour vous proposer une solution sur-mesure adaptée aux exigences protocolaires.</p>
          <Link to="/contact" className="inline-flex items-center gap-4 rounded-full bg-sole-green px-12 py-5 text-base font-bold text-white transition-all hover:scale-105 shadow-xl shadow-sole-green/20">
            Démarrer une collaboration
            <ArrowRightOutlined />
          </Link>
        </div>
      </section>
    </div>
  );
}