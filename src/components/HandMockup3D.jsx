import React from 'react';
import {
  Wifi,
  ClipboardCheck,
  ClipboardList,
  Building2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Home,
  Wrench,
  User,
  Bell
} from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

/**
 * HandMockup3D - Pixel-Perfect Replica of Real Viston Mobile Home (`/home`)
 *
 * Replicando exatamente os tokens e componentes do design system do Viston:
 * - Tema: T.bg (#0B0B0B), T.card (#171717), T.chip (#232323), T.accent (#F5C518)
 * - MTopBar: Saudação "Olá, Inspetor", Avatar circular, Notificação com badge e Histórico
 * - MCard (Dourado Primário): "Nova vistoria - Andar por andar, do topo ao subsolo"
 * - MSectionHead: "Edifício Horizon Prime" com seletor de prédio
 * - MStats: Contadores de Vistorias (18), Dias (12) e Inspetores (4)
 * - CalendarHeatmap: Grade mensal com células graduadas na escala de calor real (--heat-0 a --heat-4)
 * - BottomNav: Barra inferior de navegação nativa com abas Início, Chamados, Histórico e Perfil
 */
export default function HandMockup3D({ imageSrc = null }) {
  const [containerRef, tilt] = useMouseTilt(7);

  // Matriz de dados reais para o CalendarHeatmap de Setembro (4 semanas representativas)
  const heatmapDays = [
    // Dom, Seg, Ter, Qua, Qui, Sex, Sáb
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
  ];

  // Níveis de calor (0 a 4) idênticos ao app/lib/theme.js do Viston
  const getHeatColor = (day) => {
    if (!day) return 'transparent';
    if (day === 8) return '#F5C518'; // Dia atual com 4+ vistorias (saturado)
    if (day === 2 || day === 15 || day === 22) return '#A88A00'; // Nível 3
    if (day === 4 || day === 11 || day === 18) return '#6B5A00'; // Nível 2
    if (day === 3 || day === 9 || day === 24) return '#2E2A12'; // Nível 1
    return '#232323'; // Nível 0 (vazio)
  };

  return (
    <div
      ref={containerRef}
      className="float-mockup-front"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        height: '620px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        userSelect: 'none'
      }}
    >
      {/* Container 3D em Perspectiva */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          perspective: '1400px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Smartphone em Rotação 3D com Tilt Interativo */}
        <div
          style={{
            width: '292px',
            height: '600px',
            borderRadius: '46px',
            background: 'linear-gradient(145deg, #2f3238 0%, #17181c 45%, #0d0e10 100%)',
            padding: '10px',
            position: 'relative',
            transform: `rotateY(${-13 + tilt.y}deg) rotateX(${11 + tilt.x}deg) rotateZ(2.5deg)`,
            boxShadow: '-25px 35px 65px -10px rgba(0, 0, 0, 0.45), -5px 10px 20px rgba(0,0,0,0.25)',
            border: '1.5px solid rgba(255, 255, 255, 0.18)',
            transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Tela Interna OLED (Fundo Oficial do Viston: #0B0B0B) */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '36px',
              background: '#0B0B0B',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.9)',
              color: 'rgba(255, 255, 255, 0.96)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            {/* Dynamic Island Apple iPhone */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '84px',
                height: '22px',
                backgroundColor: '#000000',
                borderRadius: '20px',
                zIndex: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px'
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#1c2230' }} />
            </div>

            {/* Status Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '9px 18px 4px',
                fontSize: '11px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.9)',
                zIndex: 25
              }}
            >
              <span>09:42</span>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, opacity: 0.8 }}>5G</span>
                <Wifi size={11} />
                <div style={{ width: '17px', height: '9px', border: '1px solid rgba(255,255,255,0.85)', borderRadius: '3px', padding: '1px' }}>
                  <div style={{ width: '85%', height: '100%', background: '#FFFFFF', borderRadius: '1px' }} />
                </div>
              </div>
            </div>

            {imageSrc ? (
              <img src={imageSrc} alt="Viston App Mobile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              /* Interface Realista do Viston Mobile - Tela Home Oficial */
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflowY: 'hidden',
                  padding: '4px 12px 0'
                }}
              >
                {/* 1. MTopBar Oficial */}
                <header
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '6px 0 10px'
                  }}
                >
                  {/* Avatar Circular */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#171717',
                      border: '1.5px solid rgba(245, 197, 24, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 700,
                      fontSize: '12px',
                      color: '#F5C518'
                    }}
                  >
                    CE
                  </div>

                  {/* Eyebrow & Título com Destaque Dourado */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: 'rgba(255, 255, 255, 0.52)', fontSize: '10px', margin: 0, lineHeight: 1.1 }}>
                      terça-feira, 8 de setembro
                    </p>
                    <h1
                      style={{
                        margin: '1px 0 0',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: 'rgba(255, 255, 255, 0.96)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.15
                      }}
                    >
                      Olá, <span style={{ color: '#F5C518' }}>Carlos</span>
                    </h1>
                  </div>

                  {/* Ações Topo: Sino com notificação e Histórico */}
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#232323',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}
                    >
                      <Bell size={14} color="rgba(255, 255, 255, 0.9)" />
                      {/* Badge vermelho de 2 chamados */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '2px',
                          right: '2px',
                          width: '6px',
                          height: '6px',
                          background: '#F87171',
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#232323',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ClipboardList size={14} color="rgba(255, 255, 255, 0.9)" />
                    </div>
                  </div>
                </header>

                {/* 2. MCard Dourado Primário: "Nova Vistoria" */}
                <div
                  style={{
                    background: '#F5C518',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 4px 16px rgba(245, 197, 24, 0.28)',
                    marginBottom: '10px'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: 'rgba(0, 0, 0, 0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <ClipboardCheck size={20} color="#000000" strokeWidth={2.4} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#000000', lineHeight: 1.15 }}>
                      Nova vistoria
                    </p>
                    <p style={{ margin: '2px 0 0', fontSize: '11px', color: 'rgba(0, 0, 0, 0.68)', lineHeight: 1.2 }}>
                      Andar por andar, do topo ao subsolo
                    </p>
                  </div>
                </div>

                {/* 3. MSectionHead: Prédio Ativo & Seletor */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginBottom: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Building2 size={13} color="#F5C518" />
                    <span style={{ fontWeight: 600, fontSize: '12px', color: 'rgba(255, 255, 255, 0.96)' }}>
                      Edifício Horizon Prime
                    </span>
                  </div>
                  <div
                    style={{
                      background: '#232323',
                      color: 'rgba(255, 255, 255, 0.68)',
                      borderRadius: '12px',
                      padding: '4px 8px',
                      fontSize: '10px',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Trocar</span>
                    <ChevronDown size={11} />
                  </div>
                </div>

                {/* 4. MCard: Métricas e Calendário Heatmap Oficial */}
                <div
                  style={{
                    background: '#171717',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '10px'
                  }}
                >
                  {/* MStats Oficial (Trio de Números) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                    {[
                      { val: '18', label: 'Vistorias' },
                      { val: '12', label: 'Dias' },
                      { val: '4', label: 'Inspetores' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: '#232323',
                          borderRadius: '10px',
                          padding: '7px 4px',
                          textAlign: 'center'
                        }}
                      >
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#FFFFFF', lineHeight: 1.1 }}>
                          {item.val}
                        </p>
                        <p style={{ margin: '2px 0 0', color: 'rgba(255, 255, 255, 0.68)', fontSize: '9.5px' }}>
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Cabeçalho do Mês */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <ChevronLeft size={13} color="rgba(255, 255, 255, 0.52)" />
                    <span style={{ fontWeight: 600, fontSize: '11px', color: '#FFFFFF', textTransform: 'capitalize' }}>
                      Setembro 2026
                    </span>
                    <ChevronRight size={13} color="rgba(255, 255, 255, 0.52)" />
                  </div>

                  {/* CalendarHeatmap Grid */}
                  <div>
                    {/* Linha dos Dias da Semana */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px', marginBottom: '4px' }}>
                      {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                        <div key={i} style={{ textAlign: 'center', fontSize: '9px', color: 'rgba(255, 255, 255, 0.52)' }}>
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Matriz 4 Semanas com Cores de Calor Reais */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      {heatmapDays.map((week, wi) => (
                        <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
                          {week.map((day, di) => {
                            if (!day) return <div key={di} style={{ aspectRatio: '1' }} />;
                            const bg = getHeatColor(day);
                            const isToday = day === 8;
                            return (
                              <div
                                key={di}
                                style={{
                                  aspectRatio: '1',
                                  borderRadius: '4px',
                                  background: bg,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '9.5px',
                                  fontWeight: isToday ? 700 : 500,
                                  color: isToday ? '#000000' : 'rgba(255, 255, 255, 0.75)',
                                  border: isToday ? '1px solid #FFFFFF' : 'none'
                                }}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. BottomNav Oficial do Viston */}
                <nav
                  aria-label="Navegação principal"
                  style={{
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    background: '#0B0B0B',
                    padding: '7px 4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                  }}
                >
                  {/* Aba 1: Início (Ativa - Dourada) */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: '#F5C518' }}>
                    <Home size={17} strokeWidth={2.4} />
                    <span style={{ fontSize: '9.5px', fontWeight: 600 }}>Início</span>
                  </div>

                  {/* Aba 2: Chamados (com badge de 3) */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: 'rgba(255, 255, 255, 0.52)', position: 'relative' }}>
                    <Wrench size={17} strokeWidth={1.8} />
                    <span style={{ fontSize: '9.5px', fontWeight: 500 }}>Chamados</span>
                    <span
                      style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '8px',
                        background: '#F5C518',
                        color: '#000000',
                        fontSize: '8px',
                        fontWeight: 700,
                        padding: '1px 3px',
                        borderRadius: '6px'
                      }}
                    >
                      3
                    </span>
                  </div>

                  {/* Aba 3: Histórico */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: 'rgba(255, 255, 255, 0.52)' }}>
                    <ClipboardList size={17} strokeWidth={1.8} />
                    <span style={{ fontSize: '9.5px', fontWeight: 500 }}>Histórico</span>
                  </div>

                  {/* Aba 4: Perfil */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: 'rgba(255, 255, 255, 0.52)' }}>
                    <User size={17} strokeWidth={1.8} />
                    <span style={{ fontSize: '9.5px', fontWeight: 500 }}>Perfil</span>
                  </div>
                </nav>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
