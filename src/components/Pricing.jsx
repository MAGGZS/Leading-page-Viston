import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Pricing() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -30px 0px' });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const plans = [
    {
      name: "Essencial",
      tagline: "Para condomínios individuais e gestão autônoma",
      price: "R$ 290",
      period: "/mês",
      popular: false,
      features: [
        "1 Edifício com pavimentos ilimitados",
        "Checklists de vistoria técnica em campo",
        "Modo rascunho offline no smartphone",
        "Até 3 usuários simultâneos (Inspetor e Gestor)",
        "Geração de laudos fotográficos em PDF",
        "Histórico permanente de inspeções"
      ],
      buttonText: "Começar no Essencial",
      buttonClass: "btn-ghost",
      href: "#demonstracao"
    },
    {
      name: "Profissional",
      tagline: "Para administradoras e condomínios de médio porte",
      price: "R$ 690",
      period: "/mês",
      popular: true,
      badge: "Mais Escolhido",
      features: [
        "Até 10 Edifícios gerenciados",
        "Quadro Kanban de ocorrências completo",
        "Triagem com papel de Moderador e Responsável",
        "Usuários ilimitados por edifício",
        "Chaves de compartilhamento de prédio",
        "Relatórios analíticos e controle de SLA",
        "Suporte técnico prioritário"
      ],
      buttonText: "Escolher Profissional",
      buttonClass: "btn-gold",
      href: "#demonstracao"
    },
    {
      name: "Corporativo",
      tagline: "Para grandes administradoras e empresas de engenharia",
      price: "Sob Consulta",
      period: "",
      popular: false,
      features: [
        "Edifícios e condomínios ilimitados",
        "Todos os 5 papéis de acesso do Viston",
        "Painel multi-administradora consolidado",
        "Exportação avançada e integração personalizada",
        "Treinamento dedicado para equipes de campo",
        "Gerente de conta exclusivo e SLA garantido"
      ],
      buttonText: "Falar com Especialista",
      buttonClass: "btn-dark",
      href: "#demonstracao"
    }
  ];

  return (
    <section
      id="planos"
      className="section-viewport-fit"
      style={{ background: 'var(--color-page)', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className={`${headerInView ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto clamp(14px, 2.5vh, 32px)' }}
        >
          <span
            className="reveal-badge-text"
            style={{
              display: 'inline-block',
              fontSize: 'clamp(11px, 0.8vw, 12px)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-mute)',
              marginBottom: 'clamp(6px, 1vh, 10px)'
            }}
          >
            Planos & Licenças
          </span>

          <div className="text-mask-wrapper" style={{ marginBottom: 'clamp(6px, 1vh, 12px)' }}>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
              <span className="reveal-text-line line-delay-1">Previsibilidade total e </span>{' '}
              <span className="reveal-text-line line-delay-2">sem surpresas no orçamento</span>
            </h2>
          </div>

          <p className="reveal-sub-text" style={{ fontSize: 'clamp(13px, 1vw, 15px)', color: 'var(--color-mute)', lineHeight: 1.5, margin: 0 }}>
            Planos dimensionados para o tamanho da sua operação predial, com ativação imediata:
          </p>
        </div>

        {/* 3 Cartões de Preço em Leque Proporcionais */}
        <div
          ref={cardsRef}
          className="pricing-grid-fit"
        >
          {plans.map((plan, idx) => {
            const fanClass = idx === 0 ? 'reveal-fan-left' : idx === 1 ? 'reveal-fan-center' : 'reveal-fan-right';
            return (
              <div
                key={idx}
                className={`${fanClass} delay-${idx + 1} ${cardsInView ? 'is-visible' : ''}`}
                style={{ display: 'flex' }}
              >
                <div
                  className={`card-viston ${plan.popular ? 'card-featured-glow' : ''}`}
                  style={{
                    width: '100%',
                    padding: 'clamp(20px, 2.4vh, 30px) clamp(16px, 1.6vw, 24px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    background: 'var(--color-card)',
                    boxShadow: plan.popular 
                      ? '0 0 0 2px var(--color-accent)' 
                      : 'var(--card-ring)',
                  }}
                >
                  {/* Badge Minimalista */}
                  {plan.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-11px',
                        left: '24px',
                        background: 'var(--color-accent)',
                        color: 'var(--color-onaccent)',
                        padding: '3px 12px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.02em'
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Nome do Plano */}
                    <h3 style={{ fontSize: 'clamp(17px, 1.2vw, 19px)', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '4px' }}>
                      {plan.name}
                    </h3>

                    <p style={{ fontSize: 'clamp(11.5px, 0.8vw, 12.5px)', color: 'var(--color-mute)', lineHeight: 1.45, minHeight: 'clamp(28px, 3vh, 36px)', marginBottom: 'clamp(12px, 1.6vh, 18px)' }}>
                      {plan.tagline}
                    </p>

                    {/* Preço */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: 'clamp(14px, 1.8vh, 20px)', paddingBottom: 'clamp(12px, 1.6vh, 18px)', borderBottom: '1px solid var(--color-line)' }}>
                      <span style={{ fontSize: 'clamp(28px, 2.2vw, 34px)', fontWeight: 600, color: 'var(--color-ink)', letterSpacing: '-0.03em' }}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span style={{ fontSize: '13px', color: 'var(--color-mute)', fontWeight: 400 }}>
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Lista de Recursos */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'clamp(7px, 1vh, 11px)', marginBottom: 'clamp(16px, 2.2vh, 26px)' }}>
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'clamp(11.5px, 0.82vw, 12.8px)', color: 'var(--color-ink)', lineHeight: 1.4 }}>
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              background: 'var(--color-chip)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                              color: 'var(--color-ink)'
                            }}
                          >
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botão de Ação */}
                  <a
                    href={plan.href}
                    className={plan.buttonClass}
                    style={{ width: '100%', justifyContent: 'center', padding: 'clamp(9px, 1.2vh, 11px) 18px', fontSize: 'clamp(12.5px, 0.88vw, 13.5px)' }}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight size={14} />
                  </a>

                </div>
              </div>
            );
          })}
        </div>

        {/* Nota explicativa para o usuário */}
        <div style={{ marginTop: 'clamp(12px, 1.8vh, 22px)', textAlign: 'center' }}>
          <p style={{ fontSize: '11.5px', color: 'var(--color-faint)' }}>
            * Valores e recursos fictícios para visualização. Podem ser customizados posteriormente conforme sua tabela comercial.
          </p>
        </div>

      </div>
    </section>
  );
}
