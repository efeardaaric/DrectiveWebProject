"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setScrollPosition(window.scrollY);
      setBgOpacity(Math.min(1, window.scrollY / 200));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed w-full top-0 z-50 transition-all duration-500"
      style={{
        background: `linear-gradient(
          90deg,
          rgba(39, 39, 42, ${bgOpacity * 0.8}) 0%,
          rgba(59, 59, 64, ${bgOpacity * 0.9}) 50%,
          rgba(39, 39, 42, ${bgOpacity * 0.8}) 100%
        )`,
        backdropFilter: 'blur(8px)',
        boxShadow: scrollPosition > 10 ? '0 2px 15px rgba(0,0,0,0.3)' : 'none',
        borderBottom: `1px solid rgba(255, 255, 255, ${0.05 + (bgOpacity * 0.1)})`,
        animation: 'pulse 8s infinite alternate',
      }}
    >
      <style jsx global>{`
        @keyframes pulse {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">
          <div className="absolute left-0 flex items-center gap-3" style={{ paddingTop: '0px' }}>
            <a href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="relative h-20 w-20">
                <Image 
                  src="/Logo.png" 
                  alt="D-RECTIVE Logo" 
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>
              <span className="font-bold text-xl" style={{ color: '#cc972b' }}>D-RECTIVE</span>
            </a>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <NavLink href="/">Ana Sayfa</NavLink>
            <NavLink href="/services">Hizmetler</NavLink>
            <NavLink href="/projects">Projeler</NavLink>
            <NavLink href="/about">Hakkımızda</NavLink>
            <NavLink href="/contact">İletişim</NavLink>
          </div>
          <div className="absolute right-0 flex items-center">
            <a
              href="/calis"
              className="px-5 py-2 font-semibold text-sm flex items-center justify-center"
              style={{
                background: 'linear-gradient(90deg, #cc972b 60%, #b88a2a 100%)',
                color: '#fff',
                borderRadius: '7px',
                boxShadow: '0 2px 8px 0 rgba(204,151,43,0.10)'
              }}
            >
              Bizimle Çalışın
            </a>
            <button
              className="md:hidden ml-2 p-2 rounded text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü Aç/Kapat"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  // Next.js'de pathname almak için
  // Eğer app router kullanıyorsan:
  // import { usePathname } from 'next/navigation';
  // const pathname = usePathname();
  let pathname = '';
  try {
    pathname = window.location.pathname;
  } catch (e) {}
  
  const isActive = pathname === href;
  
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
        isActive ? 'text-yellow-400' : 'text-gray-200'
      }`}
    >
      {children}
    </a>
  );
}

function MobileMenu({ isOpen, setIsMenuOpen }) {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-gray-900/95 backdrop-blur-sm pb-4 px-4 rounded-b-lg border-t border-gray-800">
      <div className="flex flex-col space-y-3 py-2">
        <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</NavLink>
        <NavLink href="/services" onClick={() => setIsMenuOpen(false)}>Hizmetler</NavLink>
        <NavLink href="/projects" onClick={() => setIsMenuOpen(false)}>Projeler</NavLink>
        <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>Hakkımızda</NavLink>
        <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>İletişim</NavLink>
      </div>
    </div>
  );
}