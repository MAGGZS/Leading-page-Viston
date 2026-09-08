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
      className="section-viewport-fit"
      style={{ background: '#FFFFFF', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className={`${headerInView ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(16px, 2.8vh, 36px)' }}
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
            A Resolução Concreta
          </span>

          <div className="text-mask-wrapper" style={{ marginBottom: 'clamp(6px, 1vh, 12px)' }}>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
              <span className="reveal-text-line line-delay-1">Do improviso manual </span>{' '}
              <span className="reveal-text-line line-delay-2">à governança técnica predial</span>
            </h2>
          </div>

          <p className="reveal-sub-text" style={{ fontSize: 'clamp(13px, 1vw, 15px)', color: 'var(--color-mute)', lineHeight: 1.5, margin: 0 }}>
            O Viston elimina as quatro maiores fontes de atrito na rotina de condomínios e administradoras:
          </p>
        </div>

        {/* Grade de Comparação 2x2 Clean Proporcional */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(10px, 1.6vh, 20px)'
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
                  padding: 'clamp(14px, 1.8vh, 22px) clamp(16px, 1.8vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 1.4vh, 14px)'
                }}
              >
                {/* O Cenário Antigo */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
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
                    <X size={13} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'clamp(13px, 0.95vw, 14px)', fontWeight: 600, color: '#991B1B', marginBottom: '2px' }}>
                      {item.beforeTitle}
                    </h4>
                    <p style={{ fontSize: 'clamp(12px, 0.85vw, 12.8px)', color: 'var(--color-mute)', lineHeight: 1.45 }}>
                      {item.beforeDesc}
                    </p>
                  </div>
                </div>

                {/* Divisor sutil */}
                <div style={{ height: '1px', background: 'var(--color-line)' }} />

                {/* A Resolução Viston */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div
                    className="icon-spring-pop"
                    style={{
                      width: '22px',
                      height: '22px',
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
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'clamp(13px, 0.95vw, 14px)', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '2px' }}>
                      {item.afterTitle}
                    </h4>
                    <p style={{ fontSize: 'clamp(12px, 0.85vw, 12.8px)', color: 'var(--color-ink)', opacity: 0.88, lineHeight: 1.45 }}>
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
