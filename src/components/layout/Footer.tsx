import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="relative bg-[#012347] pt-16 pb-12 text-white overflow-hidden">
      {/* Decorative traits/lines of primary colors */}
      <div className="absolute top-0 right-0 h-1 w-64 bg-sole-green opacity-80" />
      <div className="absolute top-4 right-0 h-1 w-48 bg-sole-yellow opacity-60" />
      <div className="absolute top-8 right-0 h-1 w-32 bg-sole-red opacity-40" />
      
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <Logo className="h-12 w-auto" color="white" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Société de la logistique des événements. Conception, coordination et exploitation des grands rendez-vous institutionnels au Bénin.
          </p>
          <div className="flex gap-4">
            <div className="h-1 w-8 bg-sole-green rounded-full" />
            <div className="h-1 w-8 bg-sole-yellow rounded-full" />
            <div className="h-1 w-8 bg-sole-red rounded-full" />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Navigation</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
            <Link to="/a-propos" className="transition-colors hover:text-sole-green">À propos de la SoLE</Link>
            <Link to="/services" className="transition-colors hover:text-sole-green">Nos missions & services</Link>
            <Link to="/espaces" className="transition-colors hover:text-sole-green">Espaces & infrastructures</Link>
            <Link to="/actualites" className="transition-colors hover:text-sole-green">Réalisations & actualités</Link>
            <Link to="/opportunites" className="transition-colors hover:text-sole-green">Marchés publics</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Contact info</p>
          <div className="mt-6 space-y-4 text-sm text-white/80">
            <p className="flex flex-col">
              <span className="text-white/40 text-[11px] uppercase tracking-wider mb-1">Localisation</span>
              Cotonou, Palais des Congrès, Bénin
            </p>
            <p className="flex flex-col">
              <span className="text-white/40 text-[11px] uppercase tracking-wider mb-1">Téléphone</span>
              +229 01 23 12 43 47
            </p>
            <p className="flex flex-col">
              <span className="text-white/40 text-[11px] uppercase tracking-wider mb-1">Email</span>
              contact@sole.bj
            </p>
          </div>
        </div>
        <div className="lg:pl-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Engagement</p>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            Une expertise publique dédiée à l'excellence opérationnelle et au rayonnement des institutions de la République.
          </p>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} SoLE SA. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
