import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HandMockup3D from './HandMockup3D';

export default function Hero() {
  return (
    <section
      className="hero-scroll-section"
      style={{
        paddingTop: '130px',
        paddingBottom: '70px',
        background: 'var(--color-page)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-hero">
        
        {/* Grid do Hero: Texto Direto na Esquerda e Mão 3D na Direita */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            marginBottom: '56px'
          }}
        >
          {/* Coluna de Texto */}
          <div style={{ maxWidth: '620px' }}>
            
            {/* Pill Badge Minimalista */}
            <div
              className="hero-badge-enter"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-chip)',
                padding: '5px 14px',
                borderRadius: '999px',
                marginBottom: '22px'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)'
                }}
              />
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink)' }}>
                Viston
              </span>
              <span style={{ fontSize: '12.5px', color: 'var(--color-mute)' }}>
                • Engenharia & Vistoria Predial
              </span>
            </div>

            {/* Headline Principal com Máscara de Revelação (Apple / Linear style) */}
            <div className="text-mask-wrapper" style={{ marginBottom: '20px' }}>
              <h1
                className="hero-headline-enter text-mask-child"
                style={{
                  fontSize: 'clamp(34px, 4.8vw, 56px)',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  margin: 0
                }}
              >
                Vistorias prediais andar por andar. Sem papel, sem atrito.
              </h1>
            </div>

            {/* Subtítulo Direto com a Resolução */}
            <p
              className="hero-sub-enter"
              style={{
                fontSize: 'clamp(15px, 1.6vw, 17.5px)',
                color: 'var(--color-mute)',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}
            >
              O Viston substitui pranchetas manuais e mensagens perdidas no WhatsApp 
              por vistorias técnicas estruturadas no celular e um fluxo Kanban em tempo 
              real para administradoras, síndicos e manutenção.
            </p>

            {/* Ações / CTAs */}
            <div
              className="hero-cta-enter"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '36px'
              }}
            >
              <a href="#demonstracao" className="btn-gold" style={{ padding: '12px 26px', fontSize: '14.5px' }}>
                <span>Agendar Demonstração</span>
                <ArrowRight size={16} />
              </a>
              <a href="#resolucao" className="btn-ghost" style={{ padding: '12px 22px', fontSize: '14.5px' }}>
                <span>Ver Como Resolve</span>
              </a>
            </div>

            {/* Bullet points de confirmação rápida */}
            <div
              className="hero-bullets-enter"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-mute)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={15} color="#101317" />
                <span>Checklist por Pavimento</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={15} color="#101317" />
                <span>Fila Kanban de Chamados</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={15} color="#101317" />
                <span>Laudos em PDF Instantâneos</span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Mockup 3D com Mão Realista em Perspectiva */}
          <div className="hero-mockup-enter hand-mockup-scroll" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HandMockup3D
              title="Vistoria Técnica de Campo"
              subtitle="Itens de inspeção de bombas, elevadores e áreas comuns"
              badge="App Mobile em Campo"
            />
          </div>
        </div>

        {/* Faixa de Confiança / Logos Minimalistas em Tons de Cinza */}
        <div
          className="hero-social-enter"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            paddingTop: '36px',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: '11.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#ADB5BD',
              marginBottom: '22px'
            }}
          >
            Utilizado e homologado por administradoras, condomínios e engenharias
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '42px',
              opacity: 0.55
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
              HABITAT GESTÃO
            </span>
            <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
              VÉRTICE ENGENHARIA
            </span>
            <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
              NEOCONDO
            </span>
            <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
              ALIANÇA PREDIAL
            </span>
            <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
              PRISMA VISTORIAS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
