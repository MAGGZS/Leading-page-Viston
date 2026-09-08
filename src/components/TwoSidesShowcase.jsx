import React from 'react';
import { Smartphone, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import IsometricMockup3D from './IsometricMockup3D';
import { useInView } from '../hooks/useInView';

export default function TwoSidesShowcase() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -30px 0px' });
  const [headerRef, headerInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
  const [contentRef, contentInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  return (
    <section
      id="sistema"
      className="section-viewport-fit"
      className="section-stage"
      style={{ background: 'var(--color-page)', borderTop: '1px solid var(--color-line)' }}
    >
      <div className="container">
        
        {/* Cabeçalho */}
        {/* Cabeçalho Editorial */}
        <div
          ref={headerRef}
          className={`${headerInView ? 'is-visible' : ''}`}
          style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto clamp(16px, 2.8vh, 36px)' }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(36px, 5vh, 56px)' }}
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
            Os Dois Lados da Solução
          </span>

          <div className="text-mask-wrapper" style={{ marginBottom: 'clamp(6px, 1vh, 12px)' }}>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
          <div className="text-mask-wrapper" style={{ marginBottom: '14px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', color: 'var(--color-ink)', fontWeight: 600, margin: 0, lineHeight: 1.15 }}>
              <span className="reveal-text-line line-delay-1">Agilidade na mão de quem inspeciona, </span>{' '}
              <span className="reveal-text-line line-delay-2">controle na tela de quem gerencia</span>
            </h2>
          </div>

          <p className="reveal-sub-text" style={{ fontSize: 'clamp(13px, 1vw, 15px)', color: 'var(--color-mute)', lineHeight: 1.5, margin: 0 }}>
            O Viston une a operação de campo à inteligência de gestão em um único ecossistema integrado:
          <p className="reveal-sub-text" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', color: 'var(--color-mute)', lineHeight: 1.55, margin: 0 }}>
            O Viston une a agilidade de campo à inteligência de governança em um ecossistema único e sincronizado:
          </p>
        </div>

        {/* Bloco Integrado com Mockups Isométricos 3D e os Dois Pilares */}
        {/* Grade Integrada: Cards Operacionais + Mockups Isométricos 3D */}
        <div
          ref={contentRef}
          className="two-sides-grid-fit"
          className="two-sides-layout"
        >
          {/* Lado Esquerdo: Os 2 Pilares em Cards 12px */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.8vh, 18px)' }}>
          {/* Lado Esquerdo: Os 2 Pilares em Cards Nobres */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Pilar 1: Mobile de Campo */}
            <div className={`reveal-slide-left delay-1 ${contentInView ? 'is-visible' : ''}`}>
              <div
                className="card-viston"
                style={{
                  padding: 'clamp(18px, 2.2vh, 26px) clamp(18px, 2vw, 24px)',
                  padding: 'clamp(24px, 3vh, 32px) clamp(20px, 2vw, 28px)',
                  background: 'var(--color-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(8px, 1.4vh, 12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--color-chip)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-ink)'
                    }}
                  >
                    <Smartphone size={17} />
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(15px, 1.1vw, 16.5px)', fontWeight: 600, color: 'var(--color-ink)' }}>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                      1. Em Campo no Smartphone
                    </h3>
                    <span style={{ fontSize: '11.5px', color: 'var(--color-mute)' }}>
                      Para Inspetores e Técnicos Responsáveis
                    <span style={{ fontSize: '12px', color: 'var(--color-mute)' }}>
                      Para Inspetores, Zeladores e Técnicos de Manutenção
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 'clamp(12px, 0.88vw, 13px)', color: 'var(--color-mute)', lineHeight: 1.48, marginBottom: 'clamp(10px, 1.4vh, 14px)' }}>
                  Checklists estruturados por pavimento e área comum. Apontamento de inconformidade 
                  com fotos obrigatórias, modo rascunho offline em garagens e encerramento com foto de comprovação.
                <p style={{ fontSize: '13.5px', color: 'var(--color-mute)', lineHeight: 1.5, marginBottom: '16px' }}>
                  Checklists normativos organizados por pavimento e área comum. Apontamento imediato de inconformidades 
                  com fotos comprobatórias, funcionamento offline garantido em subsolos e sincronização automática.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.8vh, 8px)', fontSize: 'clamp(11.5px, 0.85vw, 12.5px)', color: 'var(--color-ink)', fontWeight: 400 }}>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={13} color="#F5C518" />
                    <span>Vistoria guiada andar por andar</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13px', color: 'var(--color-ink)' }}>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} color="#F5C518" />
                    <span>Vistoria guiada andar por andar com padronização pericial</span>
                  </div>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={13} color="#F5C518" />
                    <span>Funcionamento offline com sincronização automática</span>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} color="#F5C518" />
                    <span>Modo rascunho offline em garagens e barriletes sem sinal</span>
                  </div>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} color="#F5C518" />
                    <span>Fotos com carimbo temporal e apontamento do nível de gravidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilar 2: Desktop de Gestão */}
            <div className={`reveal-slide-left delay-2 ${contentInView ? 'is-visible' : ''}`}>
              <div
                className="card-viston"
                style={{
                  padding: 'clamp(18px, 2.2vh, 26px) clamp(18px, 2vw, 24px)',
                  padding: 'clamp(24px, 3vh, 32px) clamp(20px, 2vw, 28px)',
                  background: 'var(--color-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(8px, 1.4vh, 12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--color-accent-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-ink)'
                    }}
                  >
                    <LayoutDashboard size={17} />
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(15px, 1.1vw, 16.5px)', fontWeight: 600, color: 'var(--color-ink)' }}>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                      2. Na Gestão no Desktop
                    </h3>
                    <span style={{ fontSize: '11.5px', color: 'var(--color-mute)' }}>
                      Para Administradoras, Gestores e Moderadores
                    <span style={{ fontSize: '12px', color: 'var(--color-mute)' }}>
                      Para Administradoras, Gestores Prediais e Síndicos
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 'clamp(12px, 0.88vw, 13px)', color: 'var(--color-mute)', lineHeight: 1.48, marginBottom: 'clamp(10px, 1.4vh, 14px)' }}>
                  Fila Kanban de chamados (Novos, Em Processamento, Finalizados). Despacho rápido por 
                <p style={{ fontSize: '13.5px', color: 'var(--color-mute)', lineHeight: 1.5, marginBottom: '16px' }}>
                  Fila Kanban de ocorrências (Novos, Em Processamento, Finalizados). Despacho rápido por 
                  especialidade, governança de múltiplos edifícios e emissão de laudos técnicos em PDF em 1 clique.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.8vh, 8px)', fontSize: 'clamp(11.5px, 0.85vw, 12.5px)', color: 'var(--color-ink)', fontWeight: 400 }}>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={13} color="#F5C518" />
                    <span>Quadro Kanban com controle de SLA</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '13px', color: 'var(--color-ink)' }}>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} color="#F5C518" />
                    <span>Quadro Kanban com controle de SLA e triagem de prioridades</span>
                  </div>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={13} color="#F5C518" />
                    <span>Chaves de compartilhamento de prédio para novos membros</span>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} color="#F5C518" />
                    <span>Chaves de compartilhamento de condomínio para novos operadores</span>
                  </div>
                  <div className="reveal-item-stagger" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <CheckCircle2 size={15} color="#F5C518" />
                    <span>Dossiês periciais em PDF prontos para prestação de contas em assembleias</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Lado Direito: Os Mockups 3D Isométricos */}
          {/* Lado Direito: Os Mockups 3D Isométricos em Tamanho Natural */}
          <div className={`reveal-isometric-dock delay-3 ${contentInView ? 'is-visible' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="isometric-scaler">
              <IsometricMockup3D />
            </div>
            <IsometricMockup3D />
          </div>

        </div>

      </div>
    </section>
  );
}

