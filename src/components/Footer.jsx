import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--color-page)', color: 'var(--color-mute)', padding: 'clamp(56px, 8vh, 80px) 0 clamp(24px, 4vh, 36px)', borderTop: '1px solid var(--color-line)' }}>
      <div className="container">
        
        {/* Grade de Colunas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(32px, 4vw, 56px)',
            marginBottom: 'clamp(40px, 6vh, 56px)'
          }}
        >
          {/* Coluna 1: Marca & Propósito */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/brand/viston-logo-dark.svg"
                alt="Viston"
                style={{ height: '28px', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--color-mute)', marginBottom: '18px' }}>
              A plataforma definitiva de vistorias técnicas e gestão de ocorrências para condomínios, 
              administradoras e empresas de engenharia predial.
            </p>
            <span style={{ fontSize: '12px', color: 'var(--color-ink)', fontWeight: 600, letterSpacing: '0.04em' }}>
              Viston • Engenharia & Gestão Predial
            </span>
          </div>

          {/* Coluna 2: Navegação Direta */}
          <div>
            <h4 style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li>
                <a href="#resolucao" style={{ color: 'var(--color-mute)', transition: 'color 0.15s ease', textDecoration: 'none' }}>
                  A Resolução
                </a>
              </li>
              <li>
                <a href="#sistema" style={{ color: 'var(--color-mute)', transition: 'color 0.15s ease', textDecoration: 'none' }}>
                  Campo & Gestão
                </a>
              </li>
              <li>
                <a href="#planos" style={{ color: 'var(--color-mute)', transition: 'color 0.15s ease', textDecoration: 'none' }}>
                  Planos & Licenças
                </a>
              </li>
              <li>
                <a href="#demonstracao" style={{ color: 'var(--color-mute)', transition: 'color 0.15s ease', textDecoration: 'none' }}>
                  Agendar Demonstração
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Recursos da Plataforma */}
          <div>
            <h4 style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Recursos
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
              <li>Vistoria Andar por Andar</li>
              <li>Quadro Kanban com SLA</li>
              <li>Modo Rascunho Offline</li>
              <li>Laudos Fotográficos em PDF</li>
            </ul>
          </div>

          {/* Coluna 4: Perfis de Acesso */}
          <div>
            <h4 style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Perfis de Acesso
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--color-ink-secondary)' }}>
              <li>Gestor Predial & Síndico</li>
              <li>Inspetor de Campo</li>
              <li>Moderador de Fila</li>
              <li>Técnico Responsável</li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div
          style={{
            borderTop: '1px solid var(--color-line)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px'
          }}
        >
          <span>© {new Date().getFullYear()} Viston. Todos os direitos reservados.</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Tecnologia para Vistorias e Governança Predial</span>
            <button
              onClick={scrollToTop}
              className="btn-ghost"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Voltar ao topo"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
