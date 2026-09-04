import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Pricing() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

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
      ref={sectionRef}
      id="planos"
      style={{ padding: '96px 0', background: 'var(--color-page)', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Cabeçalho */}
        <div
          className={`reveal-item ${isInView ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-mute)',
              marginBottom: '12px'
            }}
          >
            Planos & Licenças
          </span>

          <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', color: 'var(--color-ink)', fontWeight: 600, marginBottom: '14px' }}>
            A estrutura ideal para o tamanho da sua operação
          </h2>

          <p style={{ fontSize: '15.5px', color: 'var(--color-mute)', lineHeight: 1.6 }}>
            Escolha o plano que melhor atende suas rotinas de vistoria e gestão predial. 
            Sem fidelidade ou surpresas.
          </p>
        </div>

        {/* Grade com os 3 Cards Fictícios (Seguindo R.card = 12px e Superfície Chapada) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`reveal-item delay-${idx + 1} ${isInView ? 'is-visible' : ''}`}
              style={{ display: 'flex' }}
            >
              <div
                className="card-viston"
                style={{
                  width: '100%',
                  padding: '36px 30px',
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
                      top: '-12px',
                      left: '28px',
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
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                    {plan.name}
                  </h3>

                  <p style={{ fontSize: '13px', color: 'var(--color-mute)', lineHeight: 1.5, minHeight: '38px', marginBottom: '24px' }}>
                    {plan.tagline}
                  </p>

                  {/* Preço */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid var(--color-line)' }}>
                    <span style={{ fontSize: '34px', fontWeight: 600, color: 'var(--color-ink)', letterSpacing: '-0.03em' }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span style={{ fontSize: '14px', color: 'var(--color-mute)', fontWeight: 400 }}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Lista de Recursos */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--color-ink)', lineHeight: 1.45 }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
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
                          <Check size={12} strokeWidth={2.5} />
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
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight size={15} />
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Nota explicativa para o usuário */}
        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <p style={{ fontSize: '12.5px', color: 'var(--color-faint)' }}>
            * Valores e recursos fictícios para visualização. Podem ser customizados posteriormente conforme sua tabela comercial.
          </p>
        </div>

      </div>
    </section>
  );
}
