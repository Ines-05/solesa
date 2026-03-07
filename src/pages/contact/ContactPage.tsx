import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

import { SectionHeading } from '../../components/ui/SectionHeading';

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
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <Helmet>
        <title>SoLE SA | Contact et devis</title>
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact institutionnel"
          title="Contact & demande de devis"
          description="Partagez votre besoin, votre calendrier et le contexte de votre projet. Nos equipes reviendront vers vous pour cadrer l accompagnement et les moyens a mobiliser."
          titleAs="h1"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-sole-blue p-10 text-white shadow-panel">
            <div className="space-y-4 text-base text-white/80">
              <p>Palais des Congres, Cotonou, Benin</p>
              <p>contact@sole.bj</p>
              <p>+229 01 23 12 43 47</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(() => undefined)}
            className="grid gap-4 rounded-[2rem] bg-white p-8 shadow-sm md:grid-cols-2"
          >
            <input
              {...register('name')}
              placeholder="Nom complet"
              className="h-12 rounded-2xl border border-slate-200 px-4 md:col-span-1"
            />
            <input
              {...register('organization')}
              placeholder="Structure"
              className="h-12 rounded-2xl border border-slate-200 px-4 md:col-span-1"
            />
            <input
              {...register('eventType')}
              placeholder="Type d evenement"
              className="h-12 rounded-2xl border border-slate-200 px-4 md:col-span-1"
            />
            <input
              {...register('date')}
              type="date"
              className="h-12 rounded-2xl border border-slate-200 px-4 md:col-span-1"
            />
            <input
              {...register('participants')}
              placeholder="Nombre de participants"
              className="h-12 rounded-2xl border border-slate-200 px-4 md:col-span-1"
            />
            <input
              {...register('budget')}
              placeholder="Budget indicatif"
              className="h-12 rounded-2xl border border-slate-200 px-4 md:col-span-1"
            />
            <textarea
              {...register('message')}
              placeholder="Contexte du projet"
              rows={6}
              className="rounded-[1.5rem] border border-slate-200 px-4 py-4 md:col-span-2"
            />
            <button
              type="submit"
              className="h-12 rounded-2xl bg-sole-green px-5 text-sm font-semibold text-white md:col-span-2"
            >
              Envoyer la demande
            </button>
            {formState.isSubmitSuccessful ? <p className="text-sm text-sole-green md:col-span-2">Formulaire envoye.</p> : null}
          </form>
        </div>
      </div>
    </div>
  );
}
