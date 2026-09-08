import React from 'react';
import { X, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ProblemSolution() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -30px 0px' });
  const [headerRef, headerInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const comparisons = [
    {
      beforeTitle: "Pranchetas de Papel & Planilhas Mortas",
      beforeDesc: "Rondas anotadas à mão que somem em arquivos. Sem fotos padronizadas e sem data auditável.",
      beforeDesc: "Rondas anotadas à mão que somem em gavetas. Sem fotos padronizadas, sem data auditável e sem resguardo pericial.",
      afterTitle: "Vistoria Técnica Andar por Andar",
      afterDesc: "Checklists normativos no smartphone, fotos diretas da anomalia e salvamento de rascunho offline."
      afterDesc: "Checklists normativos no smartphone, fotos diretas da anomalia, histórico fotográfico e salvamento de rascunho offline em subsolos."
    },
    {
      beforeTitle: "Cobranças Caóticas no WhatsApp",
      beforeDesc: "Moradores e equipes mandando fotos soltas em grupos. Demandas esquecidas e cobranças fora de hora.",
      beforeDesc: "Moradores e equipes mandando fotos soltas em grupos. Demandas esquecidas, sem prazos de SLA e cobranças fora de hora.",
      afterTitle: "Fila Kanban com Controle de SLA",
      afterDesc: "Toda ocorrência vira um chamado rastreável (Novos, Em Processamento, Finalizados) com responsável claro."
      afterDesc: "Toda ocorrência vira um chamado rastreável (Novos, Em Processamento, Finalizados) com responsável técnico e prazo claro."
    },
    {
      beforeTitle: "Manutenções Preventivas Esquecidas",
      beforeDesc: "Bombas, geradores e elevadores quebram de surpresa gerando custos emergenciais até 5x mais altos.",
      beforeDesc: "Bombas, geradores e elevadores quebram de surpresa gerando paralisações críticas e custos emergenciais até 5x mais altos.",
      afterTitle: "Rotina Preventiva com Histórico Vitalício",
      afterDesc: "Calendário de atividade predial que antecipa falhas e resguarda garantias de construtoras."
      afterDesc: "Calendário de atividade predial que antecipa falhas graves, reduz despesas de emergência e resguarda garantias de construtoras."
    },
    {
      beforeTitle: "Assembleias Tensas sem Prestação de Contas",
      beforeDesc: "O gestor ou síndico não tem como provar o volume de manutenções realizadas.",
      beforeDesc: "O gestor ou síndico não tem como provar o volume de manutenções realizadas diante de questionamentos de condôminos.",
      afterTitle: "Dossiês Fotográficos em 1 Clique",
      afterDesc: "Laudo completo em PDF com fotos antes/depois, data, hora e responsável técnico."
      afterDesc: "Laudo completo em PDF com fotos antes/depois, data, hora, apontamentos normativos e responsável técnico."
    }
  ];

  return (
    <section
      id="resolucao"
      className="section-viewport-fit"
      className="section-stage"
      style={{ background: '#FFFFFF', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Cabeçalho */}
        {/* Cabeçalho Editorial Espaçoso */}
        <div
          ref={headerRef}
          className={`${headerInView ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(16px, 2.8vh, 36px)' }}
          style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto clamp(36px, 5vh, 56px)' }}
        >
          <span
            className="reveal-badge-text"
            style={{
              display: 'inline-block',
              fontSize: 'clamp(11px, 0.8vw, 12px)',
              fontSize: '11.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-mute)',
              marginBottom: 'clamp(6px, 1vh, 10px)'
              marginBottom: '12px'
            }}
          >
            A Resolução Concreta
          </span>

          <div className="text-mask-wrapper" style={{ marginBottom: 'clamp(6px, 1vh, 12px)' }}>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
          <div className="text-mask-wrapper" style={{ marginBottom: '14px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
              <span className="reveal-text-line line-delay-1">Do improviso manual </span>{' '}
              <span className="reveal-text-line line-delay-2">à governança técnica predial</span>
            </h2>
          </div>

          <p className="reveal-sub-text" style={{ fontSize: 'clamp(13px, 1vw, 15px)', color: 'var(--color-mute)', lineHeight: 1.5, margin: 0 }}>
            O Viston elimina as quatro maiores fontes de atrito na rotina de condomínios e administradoras:
          <p className="reveal-sub-text" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', color: 'var(--color-mute)', lineHeight: 1.55, margin: 0 }}>
            O Viston substitui o desgaste de processos informais por uma rotina de controle auditável, 
            resguardando síndicos, administradoras e condomínios:
          </p>
        </div>

        {/* Grade de Comparação 2x2 Clean Proporcional */}
        {/* Grade de Comparação 2x2 com Espaçamento e Superfícies Nítidas */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(10px, 1.6vh, 20px)'
          }}
          className="problem-solution-grid"
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
                  padding: 'clamp(24px, 3vh, 32px) clamp(20px, 2vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 1.4vh, 14px)'
                  gap: '20px'
                }}
              >
                {/* O Cenário Antigo */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                {/* O Cenário Crítico Anterior */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      width: '26px',
                      height: '26px',
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
                    <X size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'clamp(13px, 0.95vw, 14px)', fontWeight: 600, color: '#991B1B', marginBottom: '2px' }}>
                    <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#DC2626', fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                      Antes • Cenário Crítico
                    </span>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '4px', lineHeight: 1.3 }}>
                      {item.beforeTitle}
                    </h4>
                    <p style={{ fontSize: 'clamp(12px, 0.85vw, 12.8px)', color: 'var(--color-mute)', lineHeight: 1.45 }}>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-mute)', lineHeight: 1.5, margin: 0 }}>
                      {item.beforeDesc}
                    </p>
                  </div>
                </div>

                {/* Divisor sutil */}
                <div style={{ height: '1px', background: 'var(--color-line)' }} />
                {/* Linha Divisória com Conector Visual Suave */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '100%', height: '1px', background: 'var(--color-line)' }} />
                  <span
                    style={{
                      position: 'absolute',
                      background: 'var(--color-card)',
                      padding: '0 12px',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: 'var(--color-faint)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Transformação Viston
                  </span>
                </div>

                {/* A Resolução Viston */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    className="icon-spring-pop"
                    style={{
                      width: '22px',
                      height: '22px',
                      width: '26px',
                      height: '26px',
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
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'clamp(13px, 0.95vw, 14px)', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '2px' }}>
                    <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#16A34A', fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                      Com Viston • Governança Ativa
                    </span>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '4px', lineHeight: 1.3 }}>
                      {item.afterTitle}
                    </h4>
                    <p style={{ fontSize: 'clamp(12px, 0.85vw, 12.8px)', color: 'var(--color-ink)', opacity: 0.88, lineHeight: 1.45 }}>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-ink)', opacity: 0.88, lineHeight: 1.5, margin: 0 }}>
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
