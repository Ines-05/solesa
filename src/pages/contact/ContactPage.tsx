import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { ScrollReveal } from '../../components/animations/ScrollReveal';

type ContactForm = {
  name: string;
  organization: string;
  eventType: string;
  date: string;
  participants: string;
  budget: string;
  message: string;
};

export function ContactPage() {
  const { register, handleSubmit, formState } = useForm<ContactForm>();

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>SoLE SA | Contact et devis</title>
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
              Contact Institutionnel
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Demander <span className="text-sole-green">un devis</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Partagez votre besoin, votre calendrier et le contexte de votre projet. Nos équipes reviendront vers vous pour cadrer l'accompagnement et les moyens à mobiliser.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">

            {/* Contact Info Sidebar */}
            <ScrollReveal direction="right" className="space-y-8">
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-black text-sole-blue mb-8">Informations</h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sole-green text-xl">
                      <EnvironmentOutlined />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Siège Social</p>
                      <p className="text-sm text-slate-500 leading-relaxed">Palais des Congrès<br />Boulevard de la Marina<br />Cotonou, Bénin</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-sole-blue text-xl">
                      <MailOutlined />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Email</p>
                      <a href="mailto:contact@sole.bj" className="text-sm text-slate-500 hover:text-sole-green transition-colors">contact@sole.bj</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 text-xl">
                      <PhoneOutlined />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Téléphone</p>
                      <a href="tel:+2290123124347" className="text-sm text-slate-500 hover:text-sole-green transition-colors">+229 01 23 12 43 47</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-sm text-slate-600 font-medium">Nos bureaux sont ouverts du Lundi au Vendredi de 08h00 à 18h00.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="left" delay={0.2} className="bg-white rounded-[40px] p-8 sm:p-12 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-black text-sole-blue mb-8">Formulaire de contact</h3>

              <form onSubmit={handleSubmit(() => undefined)} className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Nom complet *</label>
                  <input
                    {...register('name', { required: true })}
                    placeholder="Votre nom"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Structure *</label>
                  <input
                    {...register('organization', { required: true })}
                    placeholder="Organisation / Entreprise"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Type d'événement</label>
                  <input
                    {...register('eventType')}
                    placeholder="Sommet, Conférence, Spectacle..."
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Date estimée</label>
                  <input
                    {...register('date')}
                    type="date"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50 text-slate-500"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Participants</label>
                  <input
                    {...register('participants')}
                    placeholder="Nombre estimé"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Budget (FCFA)</label>
                  <input
                    {...register('budget')}
                    placeholder="Indicatif"
                    className="w-full h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Détails du projet *</label>
                  <textarea
                    {...register('message', { required: true })}
                    placeholder="Décrivez le contexte, les objectifs et vos besoins spécifiques..."
                    rows={6}
                    className="w-full rounded-2xl border border-slate-200 p-5 outline-none focus:border-sole-green focus:ring-4 focus:ring-sole-green/10 transition-all bg-slate-50/50 resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 h-14 rounded-full bg-sole-blue px-10 text-sm font-bold text-white transition-all hover:bg-sole-green hover:scale-105 shadow-xl shadow-sole-blue/20"
                  >
                    Envoyer la demande
                    <SendOutlined />
                  </button>

                  {formState.isSubmitSuccessful && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-bold flex items-center justify-center"
                    >
                      Votre demande a été envoyée avec succès. Nous vous contacterons sous 48h.
                    </motion.div>
                  )}
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

