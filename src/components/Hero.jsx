import React from 'react';
import { ArrowRight } from 'lucide-react';
import HandMockup3D from './HandMockup3D';
import { SIGNUP_URL } from '../config';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow enter" style={{ '--enter-delay': '40ms' }}>
            Vistoria e manutenção predial
          </p>

          <h1 className="hero__title enter" style={{ '--enter-delay': '120ms' }}>
            Vistoria predial andar por andar, <span className="hero__title-soft">sem papel.</span>
          </h1>

          <p className="hero__sub enter" style={{ '--enter-delay': '220ms' }}>
            O inspetor registra as ocorrências de cada andar no celular. Cada uma vira um chamado, acompanhado até o fechamento.
          </p>

          <div className="hero__ctas enter" style={{ '--enter-delay': '320ms' }}>
            <a href={SIGNUP_URL} className="btn btn-primary">
              <span>Começar grátis</span>
              <ArrowRight size={16} strokeWidth={1.75} />
            </a>
            <a href="#como-funciona" className="btn btn-secondary">
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="hero__visual enter" style={{ '--enter-delay': '200ms' }}>
          <div className="mockup-fit">
            <HandMockup3D />
          </div>
        </div>
      </div>
    </section>
  );
}
