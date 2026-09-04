import React from 'react';
import { Smartphone, LayoutDashboard, CheckCircle2, ArrowRight } from 'lucide-react';
import IsometricMockup3D from './IsometricMockup3D';

export default function TwoSidesShowcase() {
  return (
    <section id="sistema" style={{ padding: '96px 0', background: 'var(--color-page)', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
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
            Os Dois Lados da Solução
          </span>

          <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', color: 'var(--color-ink)', fontWeight: 600, marginBottom: '14px' }}>
            Agilidade na mão de quem inspeciona, controle na tela de quem gerencia
          </h2>

          <p style={{ fontSize: '15.5px', color: 'var(--color-mute)', lineHeight: 1.6 }}>
            O Viston une a operação de campo à inteligência de gestão em um único ecossistema integrado:
          </p>
        </div>

        {/* Bloco Integrado com Mockups Isométricos 3D e os Dois Pilares */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Lado Esquerdo: Os 2 Pilares em Cards 12px */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Pilar 1: Mobile de Campo */}
            <div
              className="card-viston"
              style={{
                padding: '30px 26px',
                background: 'var(--color-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--color-chip)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-ink)'
                  }}
                >
                  <Smartphone size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--color-ink)' }}>
                    1. Em Campo no Smartphone
                  </h3>
                  <span style={{ fontSize: '12px', color: 'var(--color-mute)' }}>
                    Para Inspetores e Técnicos Responsáveis
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--color-mute)', lineHeight: 1.55, marginBottom: '16px' }}>
                Checklists estruturados por pavimento e área comum. Apontamento de inconformidade 
                com fotos obrigatórias, modo rascunho offline em garagens e encerramento com foto de comprovação.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--color-ink)', fontWeight: 400 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#F5C518" />
                  <span>Vistoria guiada andar por andar</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#F5C518" />
                  <span>Funcionamento offline com sincronização automática</span>
                </div>
              </div>
            </div>

            {/* Pilar 2: Desktop de Gestão */}
            <div
              className="card-viston"
              style={{
                padding: '30px 26px',
                background: 'var(--color-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--color-accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-ink)'
                  }}
                >
                  <LayoutDashboard size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--color-ink)' }}>
                    2. Na Gestão no Desktop
                  </h3>
                  <span style={{ fontSize: '12px', color: 'var(--color-mute)' }}>
                    Para Administradoras, Gestores e Moderadores
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--color-mute)', lineHeight: 1.55, marginBottom: '16px' }}>
                Fila Kanban de chamados (Novos, Em Processamento, Finalizados). Despacho rápido por 
                especialidade, governança de múltiplos edifícios e emissão de laudos técnicos em PDF em 1 clique.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--color-ink)', fontWeight: 400 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#F5C518" />
                  <span>Quadro Kanban com controle de SLA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#F5C518" />
                  <span>Chaves de compartilhamento de prédio para novos membros</span>
                </div>
              </div>
            </div>

          </div>

          {/* Lado Direito: Os Mockups 3D Isométricos */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IsometricMockup3D />
          </div>

        </div>

      </div>
    </section>
  );
}

