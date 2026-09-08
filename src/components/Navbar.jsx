import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 200ms var(--ease-out), border-color 200ms var(--ease-out)',
          background: scrolled ? 'rgba(245, 246, 248, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(16, 19, 23, 0.08)' : 'transparent',
        }}
      >
      <div className="container-hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        
        {/* Logo Oficial Viston */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/brand/viston-logo-dark.svg"
            alt="Viston"
            style={{ height: '28px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* Links Desktop Minimalistas (Hierarquia Viston) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          <a href="#resolucao" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-mute)', transition: 'color 160ms var(--ease-out)' }}>
            O Que Resolve
          </a>
          <a href="#sistema" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-mute)', transition: 'color 160ms var(--ease-out)' }}>
            Campo & Gestão
          </a>
          <a href="#planos" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-mute)', transition: 'color 160ms var(--ease-out)' }}>
            Planos
          </a>
          <a href="#demonstracao" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-mute)', transition: 'color 160ms var(--ease-out)' }}>
            Contato
          </a>
        </nav>

        {/* Botão Sign In */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#login"
            className="btn-dark"
            style={{
              padding: '9px 20px',
              fontSize: '13.5px'
            }}
          >
            <LogIn size={15} />
            <span>Sign In</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              padding: '8px',
              borderRadius: '8px',
              color: 'var(--color-ink)'
            }}
            className="mobile-toggle"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--color-card)',
            borderBottom: '1px solid var(--color-line)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <a href="#resolucao" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-ink)' }}>
            O Que Resolve
          </a>
          <a href="#sistema" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-ink)' }}>
            Campo & Gestão
          </a>
          <a href="#planos" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-ink)' }}>
            Planos
          </a>
          <a href="#demonstracao" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-ink)' }}>
            Contato
          </a>
          <a
            href="#login"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-dark"
            style={{ width: '100%', marginTop: '6px', justifyContent: 'center' }}
          >
            <LogIn size={16} />
            <span>Sign In</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .desktop-nav a:hover {
          color: var(--color-ink) !important;
        }
      `}</style>
      </header>
  );
}
