import React from 'react';
import { Layers, Save, FileSpreadsheet, Ticket, CalendarClock, QrCode, Flame, Gift } from 'lucide-react';

// Capacidades reais do sistema (README do Viston). Única marquee da página.
const ITEMS = [
  { icon: Layers, strong: 'Andar por andar', text: 'do topo ao subsolo' },
  { icon: Save, strong: 'Rascunho salvo', text: 'no próprio aparelho' },
  { icon: Ticket, strong: 'Chamados', text: 'do aberto ao concluído' },
  { icon: CalendarClock, strong: 'Agenda', text: 'de vistorias com prazo' },
  { icon: FileSpreadsheet, strong: 'Relatório do dia', text: 'em Excel' },
  { icon: Flame, strong: 'Mapa de calor', text: 'das vistorias' },
  { icon: QrCode, strong: 'QR Code', text: 'para a equipe entrar no prédio' },
  { icon: Gift, strong: 'Plano Livre', text: 'sem prazo de expiração' },
];

function Row({ hidden = false }) {
  return (
    <ul className={`marquee__row ${hidden ? 'marquee__dup' : ''}`} aria-hidden={hidden || undefined}>
      {ITEMS.map(({ icon: Icon, strong, text }) => (
        <li key={strong} className="marquee__item">
          <Icon size={17} strokeWidth={1.75} />
          <span><strong>{strong}</strong> {text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SocialProofMarquee() {
  return (
    <div className="marquee" aria-label="O que o Viston faz">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
