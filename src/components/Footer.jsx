import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SIGNUP_URL, LOGIN_URL } from '../config';

const NAV = [
  { label: 'O que resolve', href: '#resolucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Perfis de acesso', href: '#perfis' },
  { label: 'Planos', href: '#planos' },
  { label: 'Perguntas frequentes', href: '#faq' },
];

const PLATFORM = [
  'Agenda de vistorias',
  'Vistoria andar por andar',
  'Mesa de chamados',
  'Relatório do dia em Excel',
  'Relatório de chamados em Word e CSV',
  'Histórico e mapa de calor',
];

const ACCOUNT = [
  { label: 'Começar grátis', href: SIGNUP_URL },
  { label: 'Entrar', href: LOGIN_URL },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img className="logo-on-light" src="/brand/viston-logo-dark.svg" alt="Viston" width="110" height="28" />
            <img className="logo-on-dark" src="/brand/viston-logo.svg" alt="" aria-hidden="true" width="110" height="28" />
            <p>Vistoria e manutenção predial: ocorrências por andar, chamados acompanhados até o fechamento e relatório do dia.</p>
          </div>

          <nav aria-label="Rodapé">
            <h2>Navegação</h2>
            <ul>{NAV.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
          </nav>

          <div>
            <h2>Plataforma</h2>
            <ul>{PLATFORM.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>

          <div>
            <h2>Conta</h2>
            <ul>{ACCOUNT.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Viston. Todos os direitos reservados.</p>
          <a href="#top" className="footer__top" aria-label="Voltar ao topo">
            <ArrowUp size={16} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
