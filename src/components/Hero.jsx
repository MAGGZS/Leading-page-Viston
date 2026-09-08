import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HandMockup3D from './HandMockup3D';

export default function Hero() {
  return (
    <section className="hero-stage">
      <div className="container-hero">
        
        {/* Grid Principal do Hero */}
        <div className="hero-grid-layout">
          {/* Coluna de Conteúdo Editorial */}
          <div style={{ maxWidth: '640px' }}>
            
            {/* Pill Badge Minimalista de Alta Precisão */}
            <div
              className="hero-badge-enter"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-chip)',
                border: '1px solid var(--color-line)',
                padding: '6px 16px',
                borderRadius: '999px',
                marginBottom: '24px'
              }}
            >
              <span
                className="sonar-beacon"
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)'
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)' }}>
                Viston
              </span>
              <span style={{ fontSize: '13px', color: 'var(--color-mute)' }}>
                • Engenharia & Vistoria Predial
              </span>
            </div>

            {/* Headline Monumental com Máscara de Revelação */}
            <div className="text-mask-wrapper" style={{ marginBottom: '20px' }}>
              <h1
                className="hero-headline-enter"
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  lineHeight: 1.08,
                  fontWeight: 600,
                  margin: 0,
                  color: 'var(--color-ink)'
                }}
              >
                Vistorias prediais andar por andar, sem papel e sem improviso.
              </h1>
            </div>

            {/* Subtítulo com Ritmo e Contraste Nobre */}
            <p
              className="hero-sub-enter"
              style={{
                fontSize: 'clamp(16px, 1.2vw, 18.5px)',
                lineHeight: 1.55,
                color: 'var(--color-mute)',
                marginBottom: '36px'
              }}
            >
              A plataforma definitiva para técnicos, síndicos e administradoras realizarem 
              vistorias fotográficas com apontamento normativo e gestão de ocorrências em fila Kanban.
            </p>

            {/* Botões de Ação com Feedback Tátil */}
            <div
              className="hero-cta-enter"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '40px'
              }}
            >
              <a href="#demonstracao" className="btn-gold">
                <span>Agendar Demonstração de 15 Min</span>
                <ArrowRight size={17} />
              </a>
              <a href="#sistema" className="btn-ghost">
                <span>Ver Como Funciona</span>
              </a>
            </div>

            {/* Micro-Bullets de Autoridade */}
            <div
              className="hero-bullets-enter"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontSize: '13.5px',
                color: 'var(--color-ink)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#F5C518" />
                <span>Modo rascunho offline em subsolos</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#F5C518" />
                <span>Laudo fotográfico pericial em 1 clique</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual do Smartphone 3D */}
          <div
            className="hero-mockup-enter"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <HandMockup3D />
          </div>

        </div>

        {/* Barra de Prova Social e Parceiros */}
        <div
          className="hero-social-enter"
          style={{
            marginTop: 'clamp(48px, 8vh, 80px)',
            paddingTop: '28px',
            borderTop: '1px solid var(--color-line)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <span style={{ fontSize: '13px', color: 'var(--color-faint)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Confiado por administradoras e peritos de engenharia predial
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '36px', opacity: 0.55, filter: 'grayscale(1)' }}>
            <span style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-ink)' }}>EMBRACON</span>
            <span style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-ink)' }}>VERTEX ENG</span>
            <span style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-ink)' }}>LUMINA ADM</span>
            <span style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-ink)' }}>HABITTA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
