import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  AlertTriangle,
  WifiOff,
  ArrowRight,
  FileSpreadsheet,
  FileText,
  Calendar,
  ShieldCheck,
  Camera,
  Check
} from 'lucide-react';
import SpotlightCard from './react-bits/SpotlightCard';

export default function BentoGridShowcase() {
  // Estado para o Simulador de Pavimentos
  const [activeFloor, setActiveFloor] = useState('subsolo');

  // Estado para o Mini-Kanban Interativo (0 = Novo, 1 = Em Andamento, 2 = Finalizado)
  const [kanbanStage, setKanbanStage] = useState(1);

  const floorsData = {
    cobertura: {
      name: 'Cobertura & Barrilete',
      desc: 'Caixas d’água, impermeabilização de laje e bombas de recalque.',
      statusText: '1 Inconformidade',
      issue: 'Fissura superficial na manta próxima ao ralo pluvial norte.',
      severity: 'Média',
      offline: false,
    },
    andar10: {
      name: '10º Pavimento Tipo',
      desc: 'Hall, portas corta-fogo, hidrantes e iluminação de emergência.',
      statusText: '100% Conforme',
      issue: 'Extintor com lacre intacto e luzes de emergência testadas.',
      severity: 'Conforme',
      offline: false,
    },
    terreo: {
      name: 'Térreo & Portaria',
      desc: 'Portões automáticos, interfonia, acessibilidade e gerador.',
      statusText: '100% Conforme',
      issue: 'Acessos regulados, baterias do gerador em nível nominal.',
      severity: 'Conforme',
      offline: false,
    },
    subsolo: {
      name: '2º Subsolo (Garagem)',
      desc: 'Bombas de drenagem, quadros de força, pilares e vigas.',
      statusText: '1 Chamado Aberto',
      issue: 'Infiltração ativa em junta de dilatação sobre a vaga 42.',
      severity: 'Urgente',
      offline: true,
    },
  };

  const currentFloor = floorsData[activeFloor];

  const kanbanStages = [
    {
      col: 'Novos',
      status: 'Aguardando Triagem',
      statusColor: '#F59E0B',
      detail: 'Infiltração na junta de dilatação (Subsolo 2 - Vaga 42)',
      responsible: 'Pendente de atribuição',
      time: 'Registrado há 5 min',
      nextAction: 'Despachar para Técnico',
    },
    {
      col: 'Em Atendimento',
      status: 'Técnico em Campo',
      statusColor: '#3B82F6',
      detail: 'Injeção de resina e impermeabilização da junta',
      responsible: 'Carlos Silva (Eng. Hidráulica)',
      time: 'SLA: 2h restantes',
      nextAction: 'Finalizar com Foto',
    },
    {
      col: 'Finalizados',
      status: 'Concluído e Validado',
      statusColor: '#10B981',
      detail: 'Estanqueidade testada + foto do reparo anexada',
      responsible: 'Carlos Silva (Aprovado pelo Gestor)',
      time: 'Finalizado hoje às 11:42',
      nextAction: 'Reiniciar Fluxo',
    },
  ];

  const currentKanban = kanbanStages[kanbanStage];

  // Grade simples do Heatmap (Setembro)
  const heatmapGrid = [
    [0, 1, 2, 4, 3, 1, 0],
    [2, 3, 4, 4, 2, 1, 1],
    [1, 2, 3, 4, 4, 3, 2],
    [3, 4, 4, 3, 2, 1, 0],
  ];

  const getHeatColor = (v) => {
    switch (v) {
      case 4: return '#F5C518';
      case 3: return '#A3840E';
      case 2: return '#5E4D09';
      case 1: return '#302805';
      default: return 'rgba(255, 255, 255, 0.05)';
    }
  };

  return (
    <section id="como-funciona" className="section-stage" style={{ background: '#0B0B0B', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        
        {/* Cabeçalho Minimalista e Direto */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(36px, 5vh, 56px)' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#F5C518',
              marginBottom: '12px',
            }}
          >
            Como Funciona o Sistema
          </span>

          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.18, margin: '0 0 14px 0' }}>
            O fluxo completo da vistoria ao laudo pericial
          </h2>

          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.55, margin: 0 }}>
            Uma rotina técnica padronizada em 4 etapas: campo sem internet, triagem em fila Kanban, execução técnica e emissão de laudo imediato.
          </p>
        </div>

        {/* Grade de Módulos (Bento Grid Sem Brilhos Artificiais) */}
        <div className="bento-grid-container">
          
          {/* Card 1: Vistoria Andar por Andar (Simulador Interativo) */}
          <SpotlightCard className="bento-card bento-card-large">
            <div style={{ padding: 'clamp(24px, 3vw, 32px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Layers size={16} color="#F5C518" />
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#F5C518', letterSpacing: '0.06em' }}>
                      Etapa 1 • No Smartphone
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                    Vistoria guiada andar por andar
                  </h3>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: currentFloor.offline ? 'rgba(245, 197, 24, 0.12)' : 'rgba(255, 255, 255, 0.06)',
                    border: currentFloor.offline ? '1px solid rgba(245, 197, 24, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '11.5px',
                    color: currentFloor.offline ? '#F5C518' : 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 500,
                  }}
                >
                  {currentFloor.offline ? <WifiOff size={12} /> : <CheckCircle2 size={12} />}
                  <span>{currentFloor.offline ? 'Modo Rascunho Offline' : 'Nuvem Conectada'}</span>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginBottom: '20px' }}>
                O inspetor percorre o prédio do topo ao subsolo. Sem sinal na garagem? Os checklists e fotos são gravados localmente no aparelho.
              </p>

              {/* Seletor de Pavimentos */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', marginBottom: '20px' }}>
                {Object.entries(floorsData).map(([key, data]) => {
                  const active = activeFloor === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveFloor(key)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: active ? '#F5C518' : 'rgba(255, 255, 255, 0.04)',
                        color: active ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                        border: active ? '1px solid #F5C518' : '1px solid rgba(255, 255, 255, 0.08)',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: active ? 600 : 500,
                        cursor: 'pointer',
                        transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background-color 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
                      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.name}</div>
                    </button>
                  );
                })}
              </div>

              {/* Detalhe do Pavimento Ativo */}
              <div style={{ background: '#0E0F12', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>{currentFloor.name}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: currentFloor.severity === 'Conforme' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 197, 24, 0.15)',
                      color: currentFloor.severity === 'Conforme' ? '#10B981' : '#F5C518',
                    }}
                  >
                    {currentFloor.statusText}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '8px' }}>
                  {currentFloor.issue}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.45)' }}>
                  <Camera size={13} color="#F5C518" />
                  <span>Foto com data/hora vinculada automaticamente</span>
                </div>
              </div>

            </div>
          </SpotlightCard>

          {/* Card 2: Fila Kanban de Triagem e Despacho */}
          <SpotlightCard className="bento-card">
            <div style={{ padding: 'clamp(24px, 3vw, 32px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#F5C518', letterSpacing: '0.06em' }}>
                  Etapa 2 • Triagem & Despacho
                </span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                Quadro Kanban com SLA
              </h3>

              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginBottom: '18px' }}>
                A inconformidade vira um chamado automático. O moderador despacha para o técnico responsável.
              </p>

              {/* Indicador de Estágio do Kanban */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                {kanbanStages.map((stg, i) => (
                  <button
                    key={i}
                    onClick={() => setKanbanStage(i)}
                    style={{
                      flex: 1,
                      padding: '6px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: kanbanStage === i ? 600 : 400,
                      background: kanbanStage === i ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      color: kanbanStage === i ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)',
                      border: kanbanStage === i ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  >
                    {stg.col}
                  </button>
                ))}
              </div>

              {/* Card de Chamado em Atendimento */}
              <div style={{ background: '#0E0F12', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '14px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 600, color: currentKanban.statusColor }}>
                    {currentKanban.status}
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)' }}>
                    {currentKanban.time}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500, marginBottom: '6px' }}>
                  {currentKanban.detail}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)' }}>
                  Atribuído: <strong style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{currentKanban.responsible}</strong>
                </div>
              </div>

              {/* Botão de Avanço do Kanban com Feedback Tátil */}
              <button
                onClick={() => setKanbanStage((prev) => (prev + 1) % 3)}
                className="btn-gold"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '11px 16px',
                  fontSize: '13px',
                  borderRadius: '8px',
                  marginTop: 'auto',
                }}
              >
                <span>{currentKanban.nextAction}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </SpotlightCard>

          {/* Card 3: Histórico e Heatmap Mensal */}
          <SpotlightCard className="bento-card">
            <div style={{ padding: 'clamp(24px, 3vw, 32px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Calendar size={16} color="#F5C518" />
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#F5C518', letterSpacing: '0.06em' }}>
                  Etapa 3 • Histórico & Governança
                </span>
              </div>

              <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                Heatmap de rotina preventiva
              </h3>

              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginBottom: '16px' }}>
                Calendário visual permanente. Comprova para moradores e seguradoras que a manutenção periódica foi executada.
              </p>

              <div style={{ background: '#0E0F12', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '14px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '8px' }}>
                  <span>Setembro 2026</span>
                  <span style={{ color: '#F5C518', fontWeight: 600 }}>18 Vistorias Realizadas</span>
                </div>

                <div style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gap: '5px' }}>
                  {heatmapGrid.map((row, r) => (
                    <div key={r} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
                      {row.map((val, c) => (
                        <div
                          key={c}
                          style={{
                            height: '16px',
                            borderRadius: '3px',
                            background: getHeatColor(val),
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', marginTop: 'auto' }}>
                <ShieldCheck size={15} color="#F5C518" />
                <span>Auditoria permanente sem perda de registros.</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 4: Dossiê e Planilha em 1 Clique */}
          <SpotlightCard className="bento-card">
            <div style={{ padding: 'clamp(24px, 3vw, 32px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <FileSpreadsheet size={16} color="#F5C518" />
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#F5C518', letterSpacing: '0.06em' }}>
                  Etapa 4 • Relatórios & Compliance
                </span>
              </div>

              <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                Laudo pericial e planilha imediata
              </h3>

              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, marginBottom: '16px' }}>
                Em vez de gastar horas compilando fotos, o sistema gera o laudo técnico formatado em PDF e a planilha consolidada em segundos.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', background: '#0E0F12', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={16} color="#F5C518" />
                    <span style={{ fontSize: '12.5px', color: '#FFFFFF' }}>Laudo_Tecnico_ABNT.pdf</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#10B981' }}>PDF Pronto</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', background: '#0E0F12', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileSpreadsheet size={16} color="#10B981" />
                    <span style={{ fontSize: '12.5px', color: '#FFFFFF' }}>Relatorio_Ocorrencias.xlsx</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#10B981' }}>Excel Pronto</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', marginTop: 'auto' }}>
                <Check size={14} color="#F5C518" />
                <span>Pronto para apresentação em assembleias de condomínio.</span>
              </div>
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
