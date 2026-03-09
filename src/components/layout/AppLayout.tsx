import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { PageTransition } from '../animations/PageTransition';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f8f7f1] text-slate-900">
      <Header />
      <main className="pt-20">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
