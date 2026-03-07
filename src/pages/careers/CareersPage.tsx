import React from 'react';

import { SectionHeading } from '../../components/ui/SectionHeading';

export const CareersPage: React.FC = () => {
  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Carrieres"
          description="Rejoignez la Societe de la Logistique des Evenements et contribuez au rayonnement du Benin a travers des projets institutionnels, culturels et logistiques structurants."
          titleAs="h1"
        />
        <p className="mt-10 max-w-3xl text-base leading-8 text-slate-600">
          La page sera enrichie avec les offres, les profils recherches et le processus de candidature.
        </p>
      </div>
    </div>
  );
};
