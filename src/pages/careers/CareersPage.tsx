import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  RocketOutlined,
  TeamOutlined,
  TrophyOutlined,
  BulbOutlined,
  FileTextOutlined,
  BellOutlined,
  LinkOutlined
} from '@ant-design/icons';
import { ScrollReveal } from '../../components/animations/ScrollReveal';

export const CareersPage: React.FC = () => {
  const values = [
    {
      icon: <TrophyOutlined />,
      title: "Excellence",
      desc: "Nous visons l'exceptionnel dans chaque projet que nous accompagnons."
    },
    {
      icon: <TeamOutlined />,
      title: "Engagement",
      desc: "Au service de la République et du rayonnement de notre pays."
    },
    {
      icon: <BulbOutlined />,
      title: "Innovation",
      desc: "Des solutions techniques de pointe pour des événements mémorables."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>SoLE SA | Carrières & Recrutements</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#012347] py-16 lg:py-20 text-center">
        <div className="absolute inset-0 pointer-events-none">
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-sole-green backdrop-blur-sm mb-6">
              <RocketOutlined className="mr-2" /> Rejoignez l'équipe
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Carrières <span className="text-sole-green">&</span> <br />Recrutements
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Contribuez au rayonnement du Bénin à travers des projets institutionnels, culturels et logistiques d'envergure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <h2 className="text-3xl font-extrabold text-sole-blue sm:text-4xl">
                Pourquoi rejoindre la <span className="text-sole-green">SoLE SA</span> ?
              </h2>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Rejoindre la Société de la Logistique des Événements, c'est intégrer une équipe dynamique, passionnée et dédiée à l'excellence opérationnelle.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal direction="up" delay={i * 0.15} key={v.title}>
                <div className="bg-slate-50 rounded-[40px] p-10 text-center border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="h-20 w-20 mx-auto bg-white rounded-3xl flex items-center justify-center text-4xl text-sole-green shadow-sm mb-8">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sole-blue mb-4">{v.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Links */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-black text-sole-blue mb-4">Recrutements & Carrières</h2>
            <p className="text-slate-500 font-sans text-lg">Retrouvez nos offres sur les portails officiels du Gouvernement du Bénin.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <ScrollReveal direction="up" delay={0.1}>
              <a
                href="https://www.gouv.bj/opportunite/110/avis-recrutement-multi-postes-societe-logitique-evenements-sole-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full gap-6 p-10 bg-white rounded-[40px] border border-slate-100 hover:border-sole-green hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-16 w-16 shrink-0 bg-slate-50 rounded-[20px] flex items-center justify-center text-3xl text-sole-blue group-hover:bg-sole-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:-rotate-3">
                  <RocketOutlined />
                </div>
                <div>
                  <h4 className="font-black text-sole-blue mb-2 text-xl">Avis multi-postes</h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">Consulter l’avis de recrutement officiel pour divers postes au sein de la SoLE.</p>
                </div>
                <div className="mt-auto pt-6 flex items-center gap-2 text-sole-green text-xs font-bold uppercase tracking-widest">
                  Postuler <LinkOutlined className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <a
                href="https://www.gouv.bj/opportunite/147/recrutement-comptable-societe-logistique-evenements-sole-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full gap-6 p-10 bg-white rounded-[40px] border border-slate-100 hover:border-sole-green hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-16 w-16 shrink-0 bg-slate-50 rounded-[20px] flex items-center justify-center text-3xl text-sole-blue group-hover:bg-sole-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:-rotate-3">
                  <FileTextOutlined />
                </div>
                <div>
                  <h4 className="font-black text-sole-blue mb-2 text-xl">Recrutement Comptable</h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">Offre disponible pour un poste de comptable expérimenté sur le portail gouv.bj.</p>
                </div>
                <div className="mt-auto pt-6 flex items-center gap-2 text-sole-green text-xs font-bold uppercase tracking-widest">
                  Postuler <LinkOutlined className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <a
                href="https://www.nasuba.info/sport-culture/benin-la-sole-sa-recrute-un-charge-de-communication/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full gap-6 p-10 bg-white rounded-[40px] border border-slate-100 hover:border-sole-green hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-16 w-16 shrink-0 bg-slate-50 rounded-[20px] flex items-center justify-center text-3xl text-sole-blue group-hover:bg-sole-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:-rotate-3">
                  <BellOutlined />
                </div>
                <div>
                  <h4 className="font-black text-sole-blue mb-2 text-xl">Chargé de Com'</h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">Offre archivée - Information relative au recrutement d`un Chargé de Communication.</p>
                </div>
                <div className="mt-auto pt-6 flex items-center gap-2 text-sole-green text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-sole-green transition-colors">
                  Détails <LinkOutlined className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

