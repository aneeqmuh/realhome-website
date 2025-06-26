'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShimmerButton } from '/components/magicui/shimmer-button';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us?', href: '#chooseus' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('header');
      if (window.scrollY > 10) {
        nav.classList.add('shadow-lg');
      } else {
        nav.classList.remove('shadow-lg');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-shadow bg-gradient-to-r from-[red] via-[red] to-[red] text-white rounded-b-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            alt="Logo"
            src="/images/logo2.png"
            width={140}
            height={60}
            className="animate-fade-in rounded scale-150 drop-shadow-xl ml-4"
          />
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-white"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-10 font-medium tracking-wide ml-50">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white/90"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA section */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="relative">
            <span className="absolute inset-0 animate-ping bg-white/20 rounded-full"></span>
            <a href='#request-visit'>
              <ShimmerButton
                shimmerColor="#ffffff"
                shimmerDuration="1.2s"
                shimmerSize="0.15em"
                className="relative z-10 bg-white text-[white] font-semibold px-4 py-2 rounded-full transition hover:scale-105"
              >
                Request Appointment
              </ShimmerButton>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image alt="Logo" src="/images/logo2.png" width={120} height={60} className="w-full h-auto object-contain" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navItems.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
