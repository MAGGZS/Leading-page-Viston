import React from 'react';
import { Smartphone, LayoutDashboard, Check } from 'lucide-react';
import IsometricMockup3D from './IsometricMockup3D';
import Reveal from './Reveal';

const SIDES = [
  {
    icon: Smartphone,
    title: 'No celular, em campo',
    who: 'Inspetores e responsáveis técnicos',
    points: ['Vistoria andar por andar, enviada de uma vez', 'Rascunho que sobrevive a ligação ou tela fechada', 'Chamados do responsável com fotos do andamento'],
  },
  {
    icon: LayoutDashboard,
    title: 'No computador, na gestão',
    who: 'Gestores, moderadores e visualizadores',
    points: ['Mesa de chamados com triagem e fechamento', 'Painel com prazos, custos e ocorrências por tipo', 'Agenda, histórico e mapa de calor do prédio'],
  },
];

export default function TwoSidesShowcase() {
  return (
    <section id="sistema" className="section">
      <div className="container sides">
        <Reveal className="sides__visual">
          <div className="mockup-fit">
            <IsometricMockup3D />
          </div>
        </Reveal>

        <div className="sides__copy">
          <Reveal>
            <h2 className="h2">Quem está no andar e quem está na mesa veem o mesmo chamado.</h2>
            <p className="lead">O app do celular é feito para andar pelo prédio. O do computador, para decidir o que fazer com o que foi encontrado.</p>
          </Reveal>

          <div className="sides__list">
            {SIDES.map((side, i) => {
              const Icon = side.icon;
              return (
                <Reveal key={side.title} className="sides__item" delay={100 + i * 80}>
                  <div className="sides__item-head">
                    <span className="sides__icon"><Icon size={19} strokeWidth={1.75} /></span>
                    <div>
                      <h3>{side.title}</h3>
                      <p>{side.who}</p>
                    </div>
                  </div>
                  <ul>
                    {side.points.map((pt) => (
                      <li key={pt}><Check size={15} strokeWidth={2} /><span>{pt}</span></li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
