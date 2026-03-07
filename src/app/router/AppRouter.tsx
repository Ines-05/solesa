import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '../../components/layout/AppLayout';
import { AboutPage } from '../../pages/about/AboutPage';
import { ContactPage } from '../../pages/contact/ContactPage';
import { HomePage } from '../../pages/home/HomePage';
import { NewsPage } from '../../pages/news/NewsPage';
import { OpportunitiesPage } from '../../pages/opportunities/OpportunitiesPage';
import { ServicesPage } from '../../pages/services/ServicesPage';
import { SpacesPage } from '../../pages/spaces/SpacesPage';
import { CareersPage } from '../../pages/careers/CareersPage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        
        {/* Redirections legacy and localized */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        
        <Route path="/services" element={<ServicesPage />} />
        
        {/* NewsPage contains Actualites & Appels d'offres (Marches Publics) */}
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/marches-publics" element={<NewsPage />} />
        
        {/* OpportunitiesPage contains Nos Realisations */}
        <Route path="/realisations" element={<OpportunitiesPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        
        <Route path="/spaces" element={<SpacesPage />} />
        <Route path="/espaces" element={<SpacesPage />} />
        
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/carrieres" element={<CareersPage />} />
        
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}