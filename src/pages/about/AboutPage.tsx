import {
  ArrowRightOutlined,
  BankOutlined,
  CheckCircleFilled,
  CompassOutlined,
  DeploymentUnitOutlined,
  TeamOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../components/animations/ScrollReveal';

const missionCards = [
  {
    title: "Logistique d'Etat",
    description:
      "Prestataire privilégié pour l'organisation des manifestations officielles et grands événements de la République.",
    icon: CompassOutlined,
    color: "bg-sole-green/10 text-sole-green"
  },
  {
    title: "Gestion d'Edifices",
    description:
      "Exploitation et maintenance rigoureuse des infrastructures stratégiques comme le Palais des Congrès.",
    icon: BankOutlined,
    color: "bg-sole-blue/10 text-sole-blue"
  },
  {
    title: 'Evenements Tiers',
    description:
      "Expertise logistique mise au service des entités publiques et privées pour des événements d'envergure.",
    icon: TeamOutlined,
    color: "bg-amber-100 text-amber-600"
  }
];

const values = [
  { title: "Excellence", icon: TrophyOutlined },
  { title: "Rigueur", icon: CheckCircleFilled },
  { title: "Innovation", icon: DeploymentUnitOutlined },
  { title: "Impact", icon: TeamOutlined }
];

export function AboutPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>SoLE SA | À propos</title>
      </Helmet>

      {/* Hero Section - Refined & Minimal */}
      <section className="relative overflow-hidden bg-[#012347] py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-sole-green blur-[120px]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-sole-blue blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sole-green backdrop-blur-sm">
              Notre Institution
            </span>
            <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              L'excellence au service <br className="hidden lg:block" />
              <span className="text-sole-green underline decoration-white/20 underline-offset-8">de la République</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
              La Société de la Logistique des Événements (SoLE SA) est la structure d'État dédiée à l'ingénierie événementielle du Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right" className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-sole-blue sm:text-4xl">Qui sommes-nous ?</h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-6 h-1.5 bg-sole-green rounded-full"
                />
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Créée sous l'implusion du Gouvernement, la SoLE SA est une société d'État dotée de l'autonomie financière, placée sous la tutelle du Ministère du Tourisme, de la Culture et des Arts.
                </p>
                <p>
                  Notre rôle est de professionnaliser la gestion événementielle et de valoriser le patrimoine infrastructurel du Bénin à travers des standards de qualité internationaux.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {values.map((v, i) => (
                  <ScrollReveal key={v.title} delay={i * 0.1} direction="up" distance={20} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-sole-green shadow-sm transition-transform hover:scale-110">
                      <v.icon className="text-xl" />
                    </div>
                    <span className="font-bold text-slate-800 text-[15px]">{v.title}</span>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl relative z-10 border-8 border-white group">
                <img
                  src="/salle rouge.png"
                  alt="Salle Rouge du Palais des Congrès de Cotonou"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-10 -left-10 rounded-[32px] bg-sole-green p-10 text-white shadow-2xl z-20 hidden md:block border-4 border-white"
              >
                <p className="text-5xl font-black">100%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest opacity-90 text-nowrap">Capital d'État</p>
              </motion.div>
              <div className="absolute -top-12 -right-12 h-64 w-64 bg-slate-100 rounded-full -z-10" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Missions - Modern Grid */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-sole-blue sm:text-5xl">Nos Missions</h2>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Un mandat d'excellence pour le rayonnement du Bénin à l'échelle nationale et internationale.</p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {missionCards.map((card, i) => (
              <ScrollReveal
                key={card.title}
                direction="up"
                delay={i * 0.15}
                className="group relative rounded-[32px] border border-white bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className={`mb-10 inline-flex h-16 w-16 items-center justify-center rounded-[20px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${card.color}`}>
                  <card.icon className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sole-green transition-colors leading-tight">{card.title}</h3>
                <p className="mt-6 text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact Version */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="none" distance={0} className="rounded-[40px] bg-[#012347] p-10 lg:p-16 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sole-green/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white sm:text-4xl leading-tight">Prêt à collaborer <br className="sm:hidden" /> avec nous ?</h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto italic">Service d'ingénierie événementielle de référence au Bénin.</p>
              <div className="mt-10">
                <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-sole-green px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#012347] hover:scale-105">
                  Contactez notre équipe
                  <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

