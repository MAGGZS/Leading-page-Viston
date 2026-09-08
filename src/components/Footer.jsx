import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#F8F9FA', color: '#6C757D', padding: 'clamp(44px, 6vh, 68px) 0 clamp(20px, 3vh, 32px)', borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
      <div className="container">
        
        {/* Grade de Colunas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(24px, 3vw, 44px)',
            marginBottom: 'clamp(28px, 4vh, 48px)'
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
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#6C757D', marginBottom: '20px' }}>
              A plataforma definitiva de vistorias técnicas e gestão de ocorrências para condomínios, 
              administradoras e empresas de engenharia predial.
            </p>
            <span style={{ fontSize: '12px', color: '#0B0B0B', fontWeight: 700, letterSpacing: '0.04em' }}>
              Viston • Engenharia & Gestão Predial
            </span>
          </div>

          {/* Coluna 2: Navegação Direta */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li>
                <a href="#resolucao" style={{ color: 'var(--color-mute)', transition: 'color 0.15s ease', textDecoration: 'none' }}>
                  O Que Resolve
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
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0B0B0B', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Recursos
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              <li style={{ color: '#495057' }}>Vistoria Andar por Andar</li>
              <li style={{ color: '#495057' }}>Quadro Kanban de Ocorrências</li>
              <li style={{ color: '#495057' }}>Modo Rascunho Offline</li>
              <li style={{ color: '#495057' }}>Relatórios Técnicos em PDF</li>
            </ul>
          </div>

          {/* Coluna 4: Papéis Integrados */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0B0B0B', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Perfis de Acesso
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              <li style={{ color: '#495057' }}>Gestor Predial & Síndico</li>
              <li style={{ color: '#495057' }}>Inspetor de Campo</li>
              <li style={{ color: '#495057' }}>Moderador de Fila</li>
              <li style={{ color: '#495057' }}>Técnico Responsável</li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
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
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                color: '#0B0B0B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
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
