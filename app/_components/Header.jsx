'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShimmerButton } from '/components/magicui/shimmer-button';
import GlassSurface from '/components/magicui/GlassSurface';
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

  return (
    <header className="fixed top-2 left-2 md:left-1/2 md:transform md:-translate-x-1/2 z-50 w-auto max-w-[90%] md:max-w-none">
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={40}
        displace={6}
        distortionScale={-80}
        redOffset={2}
        greenOffset={6}
        blueOffset={10}
        brightness={70}
        opacity={0.9}
        mixBlendMode="normal"
        className="backdrop-blur-lg bg-white/15 border border-white/25 shadow-2xl px-4 py-2 md:px-8 md:py-2"
      >
        <nav className="relative flex items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center relative z-10">
            <Image
              alt="Logo"
              src="/images/logo2.png"
              width={75}
              height={30}
              className="drop-shadow-2xl brightness-125 contrast-110"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8)) drop-shadow(0 1px 2px rgba(0,0,0,0.4)) brightness(1.25) contrast(1.1)'
              }}
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white drop-shadow-lg hover:text-white/90 transition-colors duration-300 text-sm font-medium whitespace-nowrap font-semibold"
              >
                {label}
              </a>
            ))}
            <a href='#request-visit'>
              <ShimmerButton
                shimmerColor="#ffffff"
                shimmerDuration="1.2s"
                shimmerSize="0.15em"
                className="bg-white/25 backdrop-blur-sm text-white font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-white/35 text-sm whitespace-nowrap border border-white/30 shadow-lg"
              >
                Request Appointment
              </ShimmerButton>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-white drop-shadow-lg hover:text-white/90 transition-colors rounded-lg hover:bg-white/15 border border-white/20"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </GlassSurface>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200/50">
            <Image alt="Logo" src="/images/logo2.png" width={80} height={32} className="object-contain" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/50">
              <div className="space-y-2 py-6">
                {navItems.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href='#request-visit'
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Appointment
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
