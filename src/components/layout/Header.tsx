import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { navItems } from '../../data/siteContent';
import { Logo } from '../ui/Logo';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-[#f8f7f1]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center">
          <Logo className="h-10 w-auto sm:h-12" color="#012347" />
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                clsx(
                  'nav-link relative text-sm font-medium transition hover:text-sole-green',
                  isActive ? 'text-sole-green is-active' : 'text-slate-600'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-sole-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-sole-green"
          >
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-sole-blue lg:hidden"
          aria-label="Ouvrir la navigation"
        >
          <MenuOutlined />
        </button>
      </div>

      <Drawer placement="right" open={open} onClose={() => setOpen(false)} title="Navigation">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-700"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
