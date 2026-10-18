import React from 'react';
import { ArrowRight, Gift, Users, QrCode } from 'lucide-react';
import Reveal from './Reveal';
import { SIGNUP_URL } from '../config';

export default function CTA() {
  return (
    <section id="comecar" className="section">
      <div className="container">
        <div className="cta-panel theme-closing">
          <img
            className="cta-panel__bg"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=60"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="cta">
            <Reveal className="cta__copy">
              <h2 className="h2">Comece com um prédio, de graça.</h2>
              <p className="lead">
                Cadastre o prédio e os andares, chame a equipe pela chave ou pelo QR Code e faça a primeira vistoria hoje.
              </p>
              <div className="cta__actions">
                <a href={SIGNUP_URL} className="btn btn-primary">
                  <span>Começar grátis</span>
                  <ArrowRight size={16} strokeWidth={1.75} />
                </a>
                <a href="#planos" className="btn btn-secondary">Ver planos</a>
              </div>
            </Reveal>

            <Reveal as="ul" className="cta__facts" delay={100}>
              <li>
                <Gift size={20} strokeWidth={1.75} />
                <span><strong>Plano Livre sem prazo.</strong> 1 prédio, com inspetor, responsável e visualizador.</span>
              </li>
              <li>
                <Users size={20} strokeWidth={1.75} />
                <span><strong>Equipe não paga.</strong> Só a conta de quem administra o prédio assina.</span>
              </li>
              <li>
                <QrCode size={20} strokeWidth={1.75} />
                <span><strong>Entrada rápida.</strong> Chave, QR Code ou link direto para a equipe pedir acesso.</span>
              </li>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
