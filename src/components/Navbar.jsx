import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { SIGNUP_URL, LOGIN_URL } from '../config';

const LINKS = [
  { label: 'O que resolve', href: '#resolucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Perfis', href: '#perfis' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef(null);
  const { toggle } = useTheme();

  // Estado "rolado" via IntersectionObserver num sentinela no topo da página (sem listener de scroll).
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 24 }} />

      <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
        <div className="container">
          <div className="site-header__bar">
            {/* Atalho escondido: duplo clique na logo alterna tema claro/escuro */}
            <a
              href="#top"
              className="site-header__logo"
              aria-label="Viston, início"
              onDoubleClick={(e) => {
                e.preventDefault();
                window.getSelection()?.removeAllRanges();
                toggle();
              }}
            >
              <img className="logo-on-light" src="/brand/viston-logo-dark.svg" alt="Viston" width="94" height="24" />
              <img className="logo-on-dark" src="/brand/viston-logo.svg" alt="" aria-hidden="true" width="94" height="24" />
            </a>

            <nav className="site-header__nav" aria-label="Seções">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>

            <div className="site-header__actions">
              <a href={LOGIN_URL} className="site-header__login">Entrar</a>
              <a href={SIGNUP_URL} className="btn btn-primary btn-sm site-header__cta">
                <span>Começar grátis</span>
                <ArrowRight size={15} strokeWidth={1.75} />
              </a>
              <button
                type="button"
                className="site-header__toggle"
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={open}
                aria-controls="menu-mobile"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
              </button>
            </div>
          </div>

          {open && (
            <div id="menu-mobile" className="site-header__sheet">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              ))}
              <a href={LOGIN_URL}>Entrar</a>
              <a href={SIGNUP_URL} className="btn btn-primary btn-block">
                <span>Começar grátis</span>
                <ArrowRight size={15} strokeWidth={1.75} />
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
