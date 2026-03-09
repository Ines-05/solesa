import {
  AppstoreOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../components/animations/ScrollReveal';

const serviceCategories = [
  {
    title: 'Conception & Planification',
    description: "Nous transformons vos visions en plans opérationnels concrets, en anticipant chaque défi logistique.",
    icon: AppstoreOutlined,
    colorBg: 'bg-[#00A651]/10',
    colorIcon: 'text-[#00A651]',
    colorCheck: 'text-[#00A651]',
    buttonStyle: 'border-[#00A651] text-[#00A651] bg-white hover:bg-[#00A651] hover:text-white',
    features: [
      "Études de faisabilité logistique et budgétisation.",
      "Élaboration de plans de masse et schémas d'implantation.",
      "Coordination des intervenants et gestion de planning."
    ]
  },
  {
    title: 'Production & Exploitation',
    description: "La mise en œuvre technique de pointe pour une expérience spectateur et officielle sans faille.",
    icon: SettingOutlined,
    colorBg: 'bg-[#1A365D]/10',
    colorIcon: 'text-[#1A365D]',
    colorCheck: 'text-[#1A365D]',
    buttonStyle: 'border-[#1A365D] text-[#1A365D] bg-white hover:bg-[#1A365D] hover:text-white',
    features: [
      "Scénographie, sonorisation, éclairage et vidéo HD.",
      "Gestion de la sécurité incendie et contrôle d'accès.",
      "Maintenance technique et régie générale en temps réel."
    ]
  },
  {
    title: 'Gestion de Patrimoine',
    description: "Optimisation et maintenance des infrastructures événementielles pour garantir leur pérennité et fonctionnalité.",
    icon: DeploymentUnitOutlined,
    colorBg: 'bg-[#D4A017]/10',
    colorIcon: 'text-[#D4A017]',
    colorCheck: 'text-[#D4A017]',
    buttonStyle: 'border-[#D4A017] text-[#D4A017] bg-white hover:bg-[#D4A017] hover:text-white',
    features: [
      "Maintenance préventive et curative des sites.",
      "Exploitation quotidienne et gestion des fluides.",
      "Mise à niveau des équipements techniques."
    ]
  },
  {
    title: 'Appui Institutionnel',
    description: "L’excellence protocolaire au service de la République pour les événements officiels et visites d'État.",
    icon: TeamOutlined,
    colorBg: 'bg-[#E30613]/10',
    colorIcon: 'text-[#E30613]',
    colorCheck: 'text-[#E30613]',
    buttonStyle: 'border-[#E30613] text-[#E30613] bg-white hover:bg-[#E30613] hover:text-white',
    features: [
      "Élaboration de stratégies protocolaires.",
      "Gestion personnalisée des VIP et délégations.",
      "Coordination avec les services de sécurité de l'État."
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-sole-green/5 blur-[120px]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="absolute -right-1/4 -bottom-1/4 h-[800px] w-[800px] rounded-full bg-sole-blue/10 blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Introduction text before cards */}
          <ScrollReveal direction="up" className="mb-16 lg:mb-20 text-center">
            <h2 className="text-3xl font-extrabold text-sole-blue sm:text-4xl lg:text-5xl tracking-tight">
              Une offre complète et <span className="text-sole-green">sur-mesure</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-3xl leading-relaxed mx-auto">
              Des solutions logistiques intégrées pour répondre aux exigences les plus élevées.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category, i) => (
              <ScrollReveal direction="up" delay={i * 0.1} key={category.title}>
                <div className="flex flex-col h-full bg-[#fdfcf9] rounded-[24px] border border-[#f0eae1] p-8 md:p-10 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${category.colorBg} ${category.colorIcon}`}>
                    <category.icon className="text-2xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1a2b49] mb-4">{category.title}</h3>
                  <p className="text-[#5c697a] leading-relaxed mb-8 text-[15px]">
                    {category.description}
                  </p>

                  <ul className="flex-1 space-y-4 mb-10">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[14.5px] text-[#4a5568]">
                        <CheckCircleOutlined className={`mt-1 shrink-0 text-lg ${category.colorCheck}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl border py-4 text-[15px] font-bold transition-colors ${category.buttonStyle}`}
                  >
                    Demander un devis
                    <ArrowRightOutlined />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Feature - Modern Layout */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right" className="relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-[50px] shadow-2xl">
                <img
                  src="/palais des congrès .png"
                  alt="Esplanade du Palais des Congrès"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-sole-green/10 rounded-full blur-3xl animate-pulse" />
            </ScrollReveal>

            <ScrollReveal direction="left" className="space-y-8">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-sole-blue mb-8">Un projet d’envergure ?</h2>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">Nos experts analysent vos besoins pour vous proposer une solution sur-mesure adaptée aux exigences protocolaires.</p>
            <Link to="/contact" className="inline-flex items-center gap-4 rounded-full bg-sole-green px-12 py-5 text-base font-bold text-white transition-all hover:scale-105 shadow-xl shadow-sole-green/20 group">
              Démarrer une collaboration
              <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}