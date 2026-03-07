import { 
  CalendarOutlined, 
  ArrowRightOutlined, 
  SearchOutlined,
  TagOutlined,
  BellOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  LinkOutlined,
  RocketOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: "La SoLE SA au cœur de l'organisation du Gala de l'Excellence",
    excerpt: "Retour sur un événement prestigieux où savoir-faire protocolaire et logistique de pointe se sont rencontrés pour honorer la République.",
    category: "Événement",
    date: "15 Mai 2025",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Modernisation du Palais des Congrès : Les nouvelles infrastructures",
    excerpt: "Découvrez les récents investissements technologiques réalisés pour offrir une expérience audiovisuelle inégalée à nos partenaires.",
    category: "Infrastructure",
    date: "10 Mai 2025",
    image: "/palais des congrès .png",
    readTime: "3 min"
  }
];

const tenders = [
  { 
    title: "Plans de passation - SoLE SA (Exercice 2024)", 
    ref: "SoLE-925522", 
    deadline: "2024",
    link: "https://marches-publics.bj/plan-de-passation/SoLE-925522?annee=2024",
    status: "Consulter" 
  },
  { 
    title: "Appel d'offre public et dématérialisation", 
    ref: "E-Marches", 
    deadline: "Permanent",
    link: "https://www.e-marchespublics.com",
    status: "Portail" 
  }
];

export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>SoLE SA | Marchés Publics & Actualités</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#012347] py-16 lg:py-20 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-sole-green/5 blur-[120px]" />
          <div className="absolute -right-1/4 -bottom-1/4 h-[800px] w-[800px] rounded-full bg-sole-blue/10 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-sole-green backdrop-blur-sm mb-6">
              <SafetyCertificateOutlined className="mr-2" /> Transparence & Opportunités
            </span>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Marchés Publics <span className="text-sole-green">&</span> <br/>Actualités
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-slate-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 text-left">
            
            {/* News Stream */}
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-slate-100 pb-8">
                <h2 className="text-3xl font-black text-sole-blue">Dernières actualités</h2>
                <div className="relative hidden sm:block">
                  <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Rechercher..."
                    className="pl-11 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm outline-none focus:border-sole-green w-64 transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-8">
                {newsItems.map((item) => (
                  <motion.article 
                    layout
                    key={item.id}
                    className="group flex flex-col sm:flex-row gap-8 bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="sm:w-72 shrink-0 aspect-[4/3] sm:aspect-square overflow-hidden rounded-[30px]">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-5">
                      <div className="flex items-center gap-4">
                        <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-sole-green text-[10px] font-bold uppercase tracking-widest border border-emerald-100/50">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-sole-blue group-hover:text-sole-green transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {item.excerpt}
                      </p>
                      <div className="pt-4 flex items-center justify-between">
                        <Link to={`/news/${item.id}`} className="group/btn inline-flex items-center gap-2 text-sole-blue font-bold text-sm">
                          Lire la suite
                          <ArrowRightOutlined className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar: Official Tenders */}
            <aside className="space-y-8">
              <div className="bg-[#022c5a] rounded-[40px] p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <TagOutlined className="text-6xl -rotate-12" />
                </div>
                
                <h3 className="text-xl font-black mb-10 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sole-green animate-pulse" />
                  Portail Officiel
                </h3>
                
                <div className="space-y-8">
                  {tenders.map((tender) => (
                    <div key={tender.ref} className="group border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <p className="text-[10px] font-bold text-sole-green uppercase tracking-[0.2em] mb-2">{tender.ref}</p>
                      <a 
                        href={tender.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold leading-snug mb-3 block hover:text-sole-green transition-colors"
                      >
                        {tender.title}
                        <LinkOutlined className="ml-2 text-xs opacity-50" />
                      </a>
                      <div className="flex items-center justify-between">
                         <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-500/20">
                            {tender.status}
                         </span>
                         <span className="text-[11px] text-white/50">{tender.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://marches-publics.bj/plan-de-passation/SoLE-925522" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-10 py-5 bg-white text-[#012347] rounded-[24px] text-[10px] font-black uppercase tracking-widest hover:bg-sole-green hover:text-white transition-all inline-block text-center shadow-lg"
                >
                   Consulter les Appels d'Offres
                </a>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-[40px] p-8">
                <h4 className="text-lg font-black text-sole-blue mb-4 leading-tight">Suivi des Marchés</h4>
                <p className="text-[13px] text-slate-500 mb-6 font-sans">Accédez aux plans de passation officiels de la SoLE SA sur le portail national.</p>
                <a 
                  href="https://marches-publics.bj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-sole-blue text-white rounded-[20px] text-xs font-bold hover:bg-sole-green transition-all inline-block text-center font-sans tracking-wide"
                >
                  Aller sur marches-publics.bj
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Recruitment Links */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-sole-blue mb-4">Recrutements & Carrières</h2>
              <p className="text-slate-500 font-sans">Retrouvez nos offres sur les portails officiels du Gouvernement du Bénin.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <a 
                href="https://www.gouv.bj/opportunite/110/avis-recrutement-multi-postes-societe-logitique-evenements-sole-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col gap-6 p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-sole-green hover:bg-white hover:shadow-2xl transition-all group"
              >
                 <div className="h-16 w-16 shrink-0 bg-white rounded-[20px] flex items-center justify-center text-3xl text-sole-blue group-hover:bg-sole-blue group-hover:text-white transition-all shadow-sm">
                    <RocketOutlined />
                 </div>
                 <div>
                    <h4 className="font-black text-sole-blue mb-2 text-xl">Avis multi-postes</h4>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">Consulter l’avis de recrutement officiel pour divers postes au sein de la SoLE.</p>
                 </div>
                 <div className="mt-auto pt-6 flex items-center gap-2 text-sole-green text-xs font-bold uppercase tracking-widest">
                    Postuler <LinkOutlined />
                 </div>
              </a>

              <a 
                href="https://www.gouv.bj/opportunite/147/recrutement-comptable-societe-logistique-evenements-sole-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col gap-6 p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-sole-green hover:bg-white hover:shadow-2xl transition-all group"
              >
                 <div className="h-16 w-16 shrink-0 bg-white rounded-[20px] flex items-center justify-center text-3xl text-sole-blue group-hover:bg-sole-blue group-hover:text-white transition-all shadow-sm">
                    <FileTextOutlined />
                 </div>
                 <div>
                    <h4 className="font-black text-sole-blue mb-2 text-xl">Recrutement Comptable</h4>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">Offre disponible pour un poste de comptable expérimenté sur le portail gouv.bj.</p>
                 </div>
                 <div className="mt-auto pt-6 flex items-center gap-2 text-sole-green text-xs font-bold uppercase tracking-widest">
                    Postuler <LinkOutlined />
                 </div>
              </a>

              <a 
                href="https://www.nasuba.info/sport-culture/benin-la-sole-sa-recrute-un-charge-de-communication/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col gap-6 p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-sole-green hover:bg-white hover:shadow-2xl transition-all group"
              >
                 <div className="h-16 w-16 shrink-0 bg-white rounded-[20px] flex items-center justify-center text-3xl text-sole-blue group-hover:bg-sole-blue group-hover:text-white transition-all shadow-sm">
                    <BellOutlined />
                 </div>
                 <div>
                    <h4 className="font-black text-sole-blue mb-2 text-xl">Chargé de Com'</h4>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">Offre archivée - Information relative au recrutement d`un Chargé de Communication.</p>
                 </div>
                 <div className="mt-auto pt-6 flex items-center gap-2 text-sole-green text-xs font-bold uppercase tracking-widest text-slate-400">
                    Détails <LinkOutlined />
                 </div>
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}