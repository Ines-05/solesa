import { 
  CalendarOutlined, 
  EnvironmentOutlined, 
  FilterOutlined,
  RocketOutlined,
  TagOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const categories = ['Tous', 'Officiel', 'Culturel', 'Sportif'];

const realizations = [
  {
    title: 'Sommet International sur la Culture',
    description: 'Logistique complète pour l’accueil de 500 délégations internationales. Gestion des flux, sécurité, et aménagement des espaces.',
    category: 'Officiel',
    date: 'Mars 2025',
    location: 'Palais des Congrès, Cotonou',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['Protocole', 'Sécurité', 'Aménagement']
  },
  {
    title: 'Festival des Arts du Bénin',
    description: 'Régie générale, montage de la scène principale, sonorisation et éclairage pour 3 jours de festivités.',
    category: 'Culturel',
    date: 'Février 2025',
    location: 'Esplanade des Amazones',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    tags: ['Scénographie', 'Technique', 'Régie']
  },
  {
    title: 'Cérémonie de Remise des Prix Nationaux',
    description: 'Production exécutive d’une soirée de gala prestigieuse récompensant l’excellence béninoise.',
    category: 'Officiel',
    date: 'Janvier 2025',
    location: 'Palais des Congrès',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    tags: ['Événementiel', 'Gala', 'Prestige']
  },
  {
    title: 'Marathon International de Cotonou',
    description: 'Coordination logistique urbaine, signalétique et gestion des points de ravitaillement sur 42km.',
    category: 'Sportif',
    date: 'Décembre 2024',
    location: 'Cotonou',
    image: 'https://images.unsplash.com/photo-1452626012706-68018ed803a5?auto=format&fit=crop&w=800&q=80',
    tags: ['Sport', 'Logistique', 'Urbain']
  }
];

export function OpportunitiesPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredRealizations = activeCategory === 'Tous' 
    ? realizations 
    : realizations.filter(r => r.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>SoLE SA | Nos Réalisations</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#012347] py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-sole-green/5 blur-[120px]" />
          <div className="absolute -right-1/4 -bottom-1/4 h-[800px] w-[800px] rounded-full bg-sole-blue/10 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-sole-green backdrop-blur-sm mb-8">
              <RocketOutlined className="mr-2" /> Nos succès
            </span>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-8">
              Nos Réalisations
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
              Un aperçu de notre savoir-faire à travers les événements majeurs qui ont marqué le Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-slate-900 font-bold">
              <FilterOutlined className="text-sole-green" />
              Filtrer par catégorie :
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-sole-green text-white shadow-lg shadow-sole-green/30'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-sole-green hover:text-sole-green'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Realizations Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {filteredRealizations.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item.title}
                className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="px-5 py-2 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-black uppercase tracking-wider text-sole-blue shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 space-y-8">
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100">
                      <CalendarOutlined className="text-sole-green" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100">
                      <EnvironmentOutlined className="text-sole-green" />
                      {item.location}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-sole-blue group-hover:text-sole-green transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-50 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#012347]/60 bg-blue-50/50 px-3 py-1.5 rounded-lg border border-blue-100/30">
                        <TagOutlined className="text-[12px]" />
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white border-t border-slate-100 text-center px-4">
        <h2 className="text-4xl font-black text-sole-blue mb-6">Vous planifiez un événement ?</h2>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto">Mettez notre expertise au service de votre vision pour créer une expérience mémorable.</p>
        <button className="inline-flex items-center gap-3 rounded-full bg-sole-blue px-10 py-5 text-sm font-bold text-white transition-all hover:bg-sole-green hover:scale-105 shadow-xl shadow-sole-blue/20">
          Nous soumettre votre projet
        </button>
      </section>
    </div>
  );
}