import React from 'react';
import MobileMockup from './MobileMockup';
import { Smartphone, Zap, CheckCircle2, Clock } from 'lucide-react';

export default function AppHighlights() {
  const steps = [
    {
      stepNumber: "01",
      title: "Vistoria no Pavimento",
      subtitle: "Inspeção guiada com checklists de subsistemas e fotos imediatas de qualquer anomalia encontrada.",
      mockupTitle: "Checklist Andar por Andar",
      mockupSub: "Seleção de torre, pavimento e itens de conformidade",
      badge: "Etapa 1"
    },
    {
      stepNumber: "02",
      title: "Triagem do Moderador",
      subtitle: "Abertura automática de chamado no quadro Kanban com definição de severidade e técnico responsável.",
      mockupTitle: "Kanban Operacional",
      mockupSub: "Fila de moderação: Novos, Processamento e Finalizados",
      badge: "Etapa 2"
    },
    {
      stepNumber: "03",
      title: "Comprovação & Laudo",
      subtitle: "O técnico atende o chamado, anexa a foto de resolução e o laudo fotográfico em PDF é gerado em 1 clique.",
      mockupTitle: "Resolução do Chamado",
      mockupSub: "Registro antes/depois e emissão de laudo técnico",
      badge: "Etapa 3"
    }
  ];

  return (
    <section id="app" style={{ padding: '110px 0', background: '#070707', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">

        {/* Cabeçalho da Seção */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 72px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#F5C518',
              background: 'rgba(245, 197, 24, 0.08)',
              border: '1px solid rgba(245, 197, 24, 0.25)',
              padding: '4px 16px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '18px'
            }}
          >
            A Experiência no Smartphone
          </div>

          <h2 style={{ fontSize: 'clamp(30px, 4.4vw, 46px)', color: '#FFFFFF', fontWeight: 800, marginBottom: '20px' }}>
            A Gestão do Seu Condomínio em 3 Etapas Conectadas
          </h2>

          <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
            Do momento em que a inconformidade é identificada na casa de máquinas até a emissão 
            do laudo comprobatório para a prestação de contas.
          </p>
        </div>

        {/* Grade de Cards com os Mockups Mobile Vazios */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {steps.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#111111',
                borderRadius: '28px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '38px 24px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 20px 45px rgba(0,0,0,0.6)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Número da Etapa em Dourado */}
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#F5C518',
                  letterSpacing: '-0.03em',
                  marginBottom: '10px'
                }}
              >
                {item.stepNumber}
              </span>

              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5, marginBottom: '32px', maxWidth: '300px' }}>
                {item.subtitle}
              </p>

              {/* Mockup Mobile Vazio estilizado */}
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                <MobileMockup
                  size="default"
                  title={item.mockupTitle}
                  subtitle={item.mockupSub}
                  badge={item.badge}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
