import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HandMockup3D from './HandMockup3D';

export default function Hero() {
  return (
    <section className="hero-viewport-fit">
    <section className="hero-stage">
      <div className="container-hero">
        
        {/* Grid do Hero: Texto Direto na Esquerda e Mão 3D na Direita */}
        <div className="hero-grid-fit">
          {/* Coluna de Texto */}
          <div style={{ maxWidth: '620px' }}>
        {/* Grid Principal do Hero */}
        <div className="hero-grid-layout">
          {/* Coluna de Conteúdo Editorial */}
          <div style={{ maxWidth: '640px' }}>
            
            {/* Pill Badge Minimalista */}
            {/* Pill Badge Minimalista de Alta Precisão */}
            <div
              className="hero-badge-enter"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-chip)',
                padding: '5px 14px',
                border: '1px solid var(--color-line)',
                padding: '6px 16px',
                borderRadius: '999px',
                marginBottom: 'clamp(8px, 1.6vh, 18px)'
                marginBottom: '24px'
              }}
            >
              <span
                className="sonar-beacon"
                style={{
                  width: '7px',
                  height: '7px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)'
                }}
              />
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink)' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)' }}>
                Viston
              </span>
              <span style={{ fontSize: '12.5px', color: 'var(--color-mute)' }}>
              <span style={{ fontSize: '13px', color: 'var(--color-mute)' }}>
                • Engenharia & Vistoria Predial
              </span>
            </div>

            {/* Headline Principal com Máscara de Revelação (Apple / Linear style) */}
            <div className="text-mask-wrapper" style={{ marginBottom: 'clamp(10px, 1.6vh, 18px)' }}>
            {/* Headline Monumental com Máscara de Revelação (Apple / Linear style) */}
            <div className="text-mask-wrapper" style={{ marginBottom: '20px' }}>
              <h1
                className="hero-headline-enter text-mask-child"
                style={{
                  fontSize: 'clamp(28px, 3.6vw, 52px)',
                  fontSize: 'clamp(34px, 4.4vw, 56px)',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  lineHeight: 1.14,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  letterSpacing: '-0.035em',
                  margin: 0
                }}
              >
                Vistorias prediais andar por andar. Sem papel, sem atrito.
              </h1>
            </div>

            {/* Subtítulo Direto com a Resolução */}
            {/* Subtítulo com Proporção Confortável e Autoridade Técnica */}
            <p
              className="hero-sub-enter"
              style={{
                fontSize: 'clamp(14px, 1.15vw, 16.5px)',
                color: 'var(--color-mute)',
                lineHeight: 1.55,
                maxWidth: '550px',
                marginBottom: 'clamp(16px, 2.2vh, 28px)'
                fontSize: 'clamp(16px, 1.3vw, 18px)',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.6,
                maxWidth: '580px',
                marginBottom: '32px'
              }}
            >
              O Viston substitui pranchetas manuais e mensagens perdidas no WhatsApp 
              por vistorias técnicas estruturadas no celular e um fluxo Kanban em tempo 
              real para administradoras, síndicos e manutenção.
            </p>

            {/* Ações / CTAs */}
            {/* Grupo de Ações Táteis com Feedback no Clique (:active scale 0.97) */}
            <div
              className="hero-cta-enter"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: 'clamp(16px, 2.2vh, 28px)'
                gap: '14px',
                marginBottom: '36px'
              }}
            >
              <a href="#demonstracao" className="btn-gold" style={{ padding: '11px 24px', fontSize: '14px' }}>
              <a href="#demonstracao" className="btn-gold" style={{ padding: '13px 28px', fontSize: '15px' }}>
                <span>Agendar Demonstração</span>
                <ArrowRight size={16} />
                <ArrowRight size={17} />
              </a>
              <a href="#resolucao" className="btn-ghost" style={{ padding: '11px 20px', fontSize: '14px' }}>
              <a href="#resolucao" className="btn-ghost" style={{ padding: '13px 24px', fontSize: '15px' }}>
                <span>Ver Como Resolve</span>
              </a>
            </div>

            {/* Bullet points de confirmação rápida */}
            {/* Bullets de Confirmação Rápida com Ícones de Precisão */}
            <div
              className="hero-bullets-enter"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(12px, 1.5vw, 20px)',
                fontSize: 'clamp(12px, 0.9vw, 13px)',
                gap: '24px',
                fontSize: '13.5px',
                fontWeight: 500,
                color: 'var(--color-mute)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={15} color="#101317" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#101317" />
                <span>Checklist por Pavimento</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={15} color="#101317" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#101317" />
                <span>Fila Kanban de Chamados</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <CheckCircle2 size={15} color="#101317" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#101317" />
                <span>Laudos em PDF Instantâneos</span>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Mockup 3D com Mão Realista em Perspectiva */}
          <div className="hero-mockup-enter hero-mockup-frame">
            <div className="hero-mockup-scaler">
              <HandMockup3D
                title="Vistoria Técnica de Campo"
                subtitle="Itens de inspeção de bombas, elevadores e áreas comuns"
                badge="App Mobile em Campo"
              />
            </div>
          {/* Coluna Direita: Mockup 3D em Dimensões Reais de Engenharia */}
          <div className="hero-mockup-enter" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HandMockup3D
              title="Vistoria Técnica de Campo"
              subtitle="Itens de inspeção de bombas, elevadores e áreas comuns"
              badge="App Mobile em Campo"
            />
          </div>
        </div>

        {/* Faixa de Confiança / Logos Minimalistas em Tons de Cinza */}
        {/* Faixa de Homologação e Confiança */}
        <div
          className="hero-social-enter"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            paddingTop: 'clamp(12px, 1.8vh, 22px)',
            borderTop: '1px solid var(--color-line)',
            marginTop: 'clamp(48px, 6vh, 64px)',
            paddingTop: '32px',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(10.5px, 0.8vw, 11.5px)',
              fontSize: '11.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#ADB5BD',
              marginBottom: 'clamp(8px, 1.2vh, 16px)'
              letterSpacing: '0.1em',
              color: 'var(--color-faint)',
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
              gap: 'clamp(16px, 3.2vw, 42px)',
              gap: 'clamp(24px, 4vw, 48px)',
              opacity: 0.55
            }}
          >
            <span style={{ fontSize: 'clamp(12.5px, 1.1vw, 15px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}>
              HABITAT GESTÃO
            </span>
            <span style={{ fontSize: 'clamp(12.5px, 1.1vw, 15px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}>
              VÉRTICE ENGENHARIA
            </span>
            <span style={{ fontSize: 'clamp(12.5px, 1.1vw, 15px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}>
              NEOCONDO
            </span>
            <span style={{ fontSize: 'clamp(12.5px, 1.1vw, 15px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}>
              ALIANÇA PREDIAL
            </span>
            <span style={{ fontSize: 'clamp(12.5px, 1.1vw, 15px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0B0B0B' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-ink)' }}>
              PRISMA VISTORIAS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
