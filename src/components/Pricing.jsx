import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { SIGNUP_URL } from '../config';

// Espelha frontend/app/lib/planos.js do sistema. Se o preço mudar lá, mude aqui.
const PLANS = [
  {
    name: 'Livre',
    tagline: 'Para conhecer o Viston com um prédio.',
    monthly: 0,
    yearly: 0,
    features: ['1 prédio', '1 gestor por prédio', '1 inspetor, 1 responsável e 1 visualizador', '1 GB de fotos', '100 e-mails por mês'],
  },
  {
    name: 'Essencial',
    tagline: 'Para quem administra um prédio com equipe.',
    monthly: 79,
    yearly: 790,
    featured: true,
    features: [
      '1 prédio incluso, até 2 extras',
      'Pessoas ilimitadas em todos os papéis',
      '20 GB de fotos',
      '2.000 e-mails por mês',
      'Moderador de chamados',
      'Exportar para CSV',
      'Verificação em dois fatores',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Para administradoras com vários prédios.',
    monthly: 249,
    yearly: 2490,
    features: [
      '5 prédios inclusos, até 20 extras',
      'Pessoas ilimitadas em todos os papéis',
      '150 GB de fotos',
      '20.000 e-mails por mês',
      'Tudo do Essencial',
      'Marca própria nos relatórios',
      'Carteira de manutenção',
      'Acesso por API',
    ],
  },
];

const brl = (n) => n.toLocaleString('pt-BR');

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planos" className="section">
      <div className="container">
        <Reveal className="pricing__head">
          <div>
            <p className="eyebrow">Planos</p>
            <h2 className="h2">Quem administra paga. A equipe entra de graça.</h2>
          </div>

          <div className="billing" role="group" aria-label="Período de cobrança">
            <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>Mensal</button>
            <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>
              Anual <span className="billing__off">2 meses grátis</span>
            </button>
          </div>
        </Reveal>

        <div className="plans">
          {PLANS.map((plan, i) => {
            const free = plan.monthly === 0;
            const amount = annual ? plan.yearly : plan.monthly;
            return (
              <Reveal key={plan.name} className={`plan ${plan.featured ? 'plan--featured' : ''}`} delay={i * 80}>
                <div className="plan__top">
                  <h3>{plan.name}</h3>
                  {plan.featured && <span className="plan__badge">Mais escolhido</span>}
                </div>
                <p className="plan__tagline">{plan.tagline}</p>

                <p className="plan__price">
                  <span className="plan__amount">{free ? 'Grátis' : `R$ ${brl(amount)}`}</span>
                  <span className="plan__period">{free ? 'sem prazo de expiração' : annual ? '/ano' : '/mês'}</span>
                </p>

                <a href={SIGNUP_URL} className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                  <span>Começar grátis</span>
                  {plan.featured && <ArrowRight size={16} strokeWidth={1.75} />}
                </a>

                <ul className="plan__features">
                  {plan.features.map((f) => (
                    <li key={f}><Check size={15} strokeWidth={2} /><span>{f}</span></li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <p className="plans__note">Toda conta começa no Livre. Você assina o Essencial ou o Pro de dentro do app, quando precisar.</p>
      </div>
    </section>
  );
}
