import { useRef, useState } from 'react';
import {
  ArrowRightOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  NotificationOutlined,
  PlusOutlined,
  RightOutlined,
  SafetyCertificateOutlined,
  ToolOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { HeroScene } from '../../components/home/HeroScene';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { differentiators, faqItems, newsItems, serviceDomains, tenders } from '../../data/siteContent';
import { ScrollReveal } from '../../components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const domainIcons = [FileTextOutlined, NotificationOutlined, TrophyOutlined, EnvironmentOutlined];
const featureIcons = [SafetyCertificateOutlined, ToolOutlined, EnvironmentOutlined];
const thumbnailTones = ['bg-[#4ea6a3]', 'bg-[#f1efe7]'];

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTimeline
        .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.45 })
        .from('.hero-title-line', { opacity: 0, y: 36, duration: 0.6, stagger: 0.1 }, '-=0.15')
        .from('.hero-text', { opacity: 0, y: 24, duration: 0.55 }, '-=0.2')
        .from('.hero-actions > *', { opacity: 0, y: 16, duration: 0.45, stagger: 0.1 }, '-=0.2')
        .from('.hero-card', { opacity: 0, x: 42, duration: 0.75 }, '-=0.45');

      gsap.to('.hero-parallax', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-shell',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="bg-[#f7f4ea]">
      <Helmet>
        <title>SoLE SA | La logistique des grands événements</title>
      </Helmet>

      <section className="hero-shell relative min-h-[85vh] flex items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/public/palais des congrès .png"
            alt="Palais des Congrès de Cotonou"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012347]/95 via-[#012347]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ea] via-transparent to-transparent opacity-40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="hero-eyebrow text-[10px] font-semibold uppercase tracking-[0.28em] text-sole-green">
              Logistique de l'événementiel public et privé
            </p>
            <div className="mt-5 space-y-2 text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[4.5rem]">
              <div className="hero-title-line">La logistique des</div>
              <div className="hero-title-line italic text-sole-green">grands</div>
              <div className="hero-title-line">événements</div>
            </div>
            <p className="hero-text mt-6 max-w-lg text-[15px] leading-relaxed text-white/80 sm:text-[16px]">
              SoLE SA coordonne les dispositifs logistiques des manifestations officielles et accompagne les grands événements culturels et institutionnels du Bénin.
            </p>
            <div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-sole-green px-8 py-4 text-[13px] font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                Decouvrir nos services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-[13px] font-bold text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
              >
                Demander un accompagnement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" distance={20}>
            <SectionHeading
              align="center"
              eyebrow="Notre institution"
              title="Qui sommes-nous ?"
              description="La SoLE est la logistique des événements d'État. SoLE SA est une structure d'État créée pour assurer la logistique événementielle efficace et durable du Bénin."
            />
          </ScrollReveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = featureIcons[index];
              return (
                <ScrollReveal key={item.title} direction="up" delay={index * 0.1} distance={30}>
                  <div className="group h-full rounded-[24px] border border-slate-100 bg-[#f8f9fb] p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sole-green/10 text-sole-green transition-colors group-hover:bg-sole-green group-hover:text-white">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-sole-blue">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ec] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="right" className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              title="Domaines d'intervention"
              description="Une expertise multisectorielle pour répondre aux exigences des plus grands événements."
            />
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sole-green shadow-sm transition-all hover:bg-sole-green hover:text-white"
            >
              Voir tous nos services
              <ArrowRightOutlined className="text-[10px]" />
            </Link>
          </ScrollReveal>

          <div className="services-grid mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 [perspective:1200px]">
            {serviceDomains.map((domain, index) => {
              const Icon = domainIcons[index];
              const tones = [
                'bg-[#dde6f3] text-[#1d4072]',
                'bg-[#dff4e6] text-sole-green',
                'bg-[#f6f0cf] text-[#d0a400]',
                'bg-[#f8e6e8] text-sole-red'
              ];
              return (
                <ScrollReveal key={domain.title} direction="up" delay={index * 0.1}>
                  <motion.article
                    whileHover={{ rotateX: -6, rotateY: index % 2 === 0 ? 6 : -6, y: -8 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="service-card h-full rounded-[32px] border border-[#e8e3d8] bg-[#f8f5ef] px-7 py-8 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className={`grid h-14 w-14 place-items-center rounded-[20px] ${tones[index]}`}>
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="mt-8 text-xl font-bold leading-tight text-slate-900">{domain.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{domain.description}</p>
                  </motion.article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" className="mb-10 flex items-center justify-between gap-6 border-b border-white/5 pb-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sole-green">Realisations</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Actualites recentes</h2>
            </div>
            <Link to="/actualites" className="group flex items-center gap-2 text-[13px] font-medium text-sole-green transition-all hover:gap-3">
              Tout voir <ArrowRightOutlined className="text-[11px]" />
            </Link>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <ScrollReveal key={item.title} direction="right" delay={index * 0.15}>
                  <article className="group relative flex flex-col gap-6 rounded-[24px] bg-white/5 p-6 transition-all hover:bg-white/[0.08] sm:flex-row">
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[18px] sm:h-auto sm:w-64">
                      <img
                        src={
                          index === 0
                            ? 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
                            : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
                        }
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-sole-green/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sole-green">
                          {index === 0 ? 'INSTITUTIONNEL' : 'SPORT'}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[1.4rem] font-bold leading-tight text-white transition-colors group-hover:text-sole-green">
                        {item.title}
                      </h3>
                      <p className="mt-4 line-clamp-2 text-[14px] leading-relaxed text-slate-400">{item.excerpt}</p>
                      <div className="mt-6 flex items-center gap-4 text-[12px] text-slate-500">
                        <span>{item.date}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-700" />
                        <span>Lecture: {index === 0 ? '3 min' : '2 min'}</span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="left" delay={0.3} className="relative flex flex-col overflow-hidden rounded-[32px] bg-[#1e293b] p-8 shadow-2xl">
              <div className="absolute -mr-16 -mt-16 h-32 w-32 bg-sole-blue/20 blur-[80px]" />
              <h3 className="relative mb-8 text-[1.6rem] font-bold text-white">Marches & Offres</h3>

              <div className="relative space-y-6">
                <div className="rounded-[20px] border border-white/5 bg-white/5 p-5 transition-colors hover:border-white/10">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="rounded bg-sole-green px-2 py-0.5 text-[10px] font-black uppercase text-white">Nouveau</span>
                    <span className="text-[11px] text-slate-400">15 Jan 2025</span>
                  </div>
                  <h4 className="text-[14px] font-bold leading-snug text-white">
                    Recrutement d'un Chef du Service Technique et Logistique (H/F)
                  </h4>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-sole-blue">CDI - COTONOU</p>
                </div>

                <div className="rounded-[20px] border border-white/5 bg-white/5 p-5 transition-colors hover:border-white/10">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="rounded bg-sole-green px-2 py-0.5 text-[10px] font-black uppercase text-white">Nouveau</span>
                    <span className="text-[11px] text-slate-400">12 Jan 2025</span>
                  </div>
                  <h4 className="text-[14px] font-bold leading-snug text-white">
                    Acquisition de logiciels de gestion comptable et licences Office 365
                  </h4>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-sole-blue">APPEL D'OFFRES - SOLE-023</p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-slate-500">08 Jan 2025</span>
                  <h4 className="mt-2 text-[14px] font-bold text-slate-400">
                    Fourniture de mobiliers de bureau au profit de la SoLE S.A.
                  </h4>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">TERMINE</p>
                </div>
              </div>

              <div className="mt-auto pt-10 text-center">
                <Link
                  to="/marches-publics"
                  className="group flex w-full items-center justify-center gap-3 rounded-[16px] bg-white py-4 text-[13px] font-bold text-[#0f172a] transition-all hover:bg-sole-green hover:text-white"
                >
                  Voir toutes les opportunites
                  <ArrowRightOutlined className="text-[11px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ec] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <SectionHeading
              title="Foire Aux Questions"
              description="Trouvez rapidement des reponses a vos questions les plus frequentes."
              align="center"
            />
          </ScrollReveal>
          <div className="mx-auto mt-10 max-w-5xl space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <ScrollReveal key={item.question} direction="up" delay={index * 0.05}>
                  <div
                    className={`rounded-[20px] border bg-white px-6 py-2 shadow-[0_6px_16px_rgba(15,23,42,0.04)] transition-all duration-300 ${isOpen ? 'border-sole-green/35 shadow-lg' : 'border-[#e6e2d8]'
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <p className={`text-[15px] font-semibold leading-7 ${isOpen ? 'text-sole-green' : 'text-slate-800'}`}>
                        {item.question}
                      </p>
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? 'bg-sole-green/15 text-sole-green' : 'bg-slate-100 text-slate-400'
                          }`}
                      >
                        <PlusOutlined className={`text-[14px] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-14 text-[14px] leading-8 text-slate-500">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


