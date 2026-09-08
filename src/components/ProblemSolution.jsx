import React from 'react';
import { X, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ProblemSolution() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -30px 0px' });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const comparisons = [
    {
      beforeTitle: "Pranchetas de Papel & Planilhas Mortas",
      beforeDesc: "Rondas anotadas à mão que somem em arquivos. Sem fotos padronizadas e sem data auditável.",
      afterTitle: "Vistoria Técnica Andar por Andar",
      afterDesc: "Checklists normativos no smartphone, fotos diretas da anomalia e salvamento de rascunho offline."
    },
    {
      beforeTitle: "Cobranças Caóticas no WhatsApp",
      beforeDesc: "Moradores e equipes mandando fotos soltas em grupos. Demandas esquecidas e cobranças fora de hora.",
      afterTitle: "Fila Kanban com Controle de SLA",
      afterDesc: "Toda ocorrência vira um chamado rastreável (Novos, Em Processamento, Finalizados) com responsável claro."
    },
    {
      beforeTitle: "Manutenções Preventivas Esquecidas",
      beforeDesc: "Bombas, geradores e elevadores quebram de surpresa gerando custos emergenciais até 5x mais altos.",
      afterTitle: "Rotina Preventiva com Histórico Vitalício",
      afterDesc: "Calendário de atividade predial que antecipa falhas e resguarda garantias de construtoras."
    },
    {
      beforeTitle: "Assembleias Tensas sem Prestação de Contas",
      beforeDesc: "O gestor ou síndico não tem como provar o volume de manutenções realizadas.",
      afterTitle: "Dossiês Fotográficos em 1 Clique",
      afterDesc: "Laudo completo em PDF com fotos antes/depois, data, hora e responsável técnico."
    }
  ];

  return (
    <section
      id="resolucao"
      className="section-proportional"
      style={{ background: '#FFFFFF', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className={`${headerInView ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(32px, 5vh, 56px)' }}
        >
          <span
            className="reveal-badge-text"
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
            A Resolução Concreta
          </span>

          <div className="text-mask-wrapper" style={{ marginBottom: '14px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0 }}>
              <span className="reveal-text-line line-delay-1">Do improviso manual </span>{' '}
              <span className="reveal-text-line line-delay-2">à governança técnica predial</span>
            </h2>
          </div>

          <p className="reveal-sub-text" style={{ fontSize: '15.5px', color: 'var(--color-mute)', lineHeight: 1.6 }}>
            O Viston elimina as quatro maiores fontes de atrito na rotina de condomínios e administradoras:
          </p>
        </div>

        {/* Grade de Comparação 2x2 Clean */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)'
          }}
        >
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className={`${idx % 2 === 0 ? 'reveal-dock-left' : 'reveal-dock-right'} delay-${idx + 1} ${cardsInView ? 'is-visible' : ''}`}
              style={{ height: '100%' }}
            >
              <div
                className="card-viston"
                style={{
                  height: '100%',
                  padding: '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px'
                }}
              >
                {/* O Cenário Antigo */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#FEE2E2',
                      color: '#DC2626',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <X size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#991B1B', marginBottom: '3px' }}>
                      {item.beforeTitle}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-mute)', lineHeight: 1.5 }}>
                      {item.beforeDesc}
                    </p>
                  </div>
                </div>

                {/* Divisor sutil */}
                <div style={{ height: '1px', background: 'var(--color-line)', margin: '2px 0' }} />

                {/* A Resolução Viston */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    className="icon-spring-pop"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#DCFCE7',
                      color: '#16A34A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '3px' }}>
                      {item.afterTitle}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-ink)', opacity: 0.85, lineHeight: 1.5 }}>
                      {item.afterDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
