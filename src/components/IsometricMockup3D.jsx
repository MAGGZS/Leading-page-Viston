import React from 'react';
import {
  Wifi,
  Home,
  Wrench,
  ClipboardList,
  User,
  Inbox,
  ChevronRight,
  ChevronLeft,
  UserRound,
  CalendarDays,
  ArrowRight,
  Clock,
  SlidersHorizontal,
  Trash2
} from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

/**
 * IsometricMockup3D - Pixel-Perfect Replica of Real Viston Mobile Screens
 * 
 * Renderiza em perspectiva 3D realista os dois lados da operação no smartphone:
 * 1. Celular de Trás (Esquerda): Fila de Chamados e Triagem do Responsável (`/responsavel`)
 *    - SeletorFila autêntico: "A receber (3)", "Em andamento (5)", "Concluídos (24)"
 *    - Cartão de chamado com borda dourada (#F5C518), tempo desde o encaminhamento e Prioridade ALTA
 *    - Botão oficial de ação: MButton "Receber" com ícone Inbox
 *    - Barra inferior BottomNav oficial com a aba Chamados ativa
 * 
 * 2. Celular da Frente (Direita): Formulário de Vistoria em Andamento (`/inspecao` - FloorForm)
 *    - Cabeçalho de inspeção: "Pavimento 14 (Andar 3 de 18)", Edifício Horizon Prime
 *    - Card do Inspetor (Carlos Eduardo) e Data da vistoria com ícones dourados
 *    - Cartão de Ocorrência 1 com campos reais: Tipo, Categoria, Prioridade, Descrição e Responsável
 *    - Ações oficiais MButton: "Avançar para Pavimento 13" e MButtonSoft "+ Adicionar ocorrência"
 *    - Barra inferior BottomNav oficial
 */
export default function IsometricMockup3D({ frontImage = null, backImage = null }) {
  const [containerRef] = useMouseTilt(7);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        height: '580px',
        margin: '0 auto',
        perspective: '1400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        userSelect: 'none'
      }}
    >

      {/* =========================================================================
          CELULAR DE TRÁS (Secundário / Esquerda) - FILA DE CHAMADOS & SLA (/responsavel)
          ========================================================================= */}
      <div
        className="float-mockup-back"
        style={{
          position: 'absolute',
          top: '20px',
          left: '18px',
          width: '264px',
          height: '515px',
          borderRadius: '42px',
          background: 'linear-gradient(135deg, #2E3035 0%, #151618 100%)',
          padding: '8px',
          border: '1.5px solid rgba(255, 255, 255, 0.16)',
          transform: 'rotateX(calc(20deg + var(--tilt-x, 0) * 0.7deg)) rotateY(calc(-18deg + var(--tilt-y, 0) * 0.7deg)) rotateZ(7.5deg)',
          boxShadow: '-24px 30px 60px rgba(0, 0, 0, 0.35)',
          zIndex: 2,
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '34px',
            background: '#0B0B0B',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            color: 'rgba(255, 255, 255, 0.96)',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '7px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '74px',
              height: '19px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 25
            }}
          />

          {/* Status Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 16px 4px',
              fontSize: '10.5px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.85)',
              zIndex: 20
            }}
          >
            <span>09:42</span>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: '8.5px', fontWeight: 700, opacity: 0.75 }}>5G</span>
              <div style={{ width: '15px', height: '8px', border: '1px solid rgba(255,255,255,0.7)', borderRadius: '2px', padding: '1px' }}>
                <div style={{ width: '80%', height: '100%', background: '#FFFFFF', borderRadius: '1px' }} />
              </div>
            </div>
          </div>

          {backImage ? (
            <img src={backImage} alt="Tela de Fundo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            /* Interface Hiper-Realista: /responsavel do Viston */
            <div
              style={{
                flex: 1,
                padding: '4px 10px 0',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'hidden'
              }}
            >
              {/* Header: Gestão de Ocorrências */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', padding: '2px 2px 0' }}>
                <div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.52)', fontSize: '9px', margin: 0 }}>
                    Gestão de Ocorrências
                  </p>
                  <h4 style={{ margin: '1px 0 0', fontWeight: 600, fontSize: '14px', color: '#FFFFFF' }}>
                    Chamados <span style={{ color: '#F5C518' }}>(16)</span>
                  </h4>
                </div>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#232323',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <SlidersHorizontal size={12} color="rgba(255, 255, 255, 0.75)" />
                </div>
              </div>

              {/* SeletorFila Oficial com Trilho Deslizante */}
              <div
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridAutoColumns: '1fr',
                  background: '#171717',
                  borderRadius: '999px',
                  padding: '3px',
                  marginBottom: '10px'
                }}
              >
                {/* Aba 1: A receber (Ativa com pílula dourada #F5C518) */}
                <div
                  style={{
                    background: '#F5C518',
                    borderRadius: '999px',
                    padding: '5px 4px',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: '9.5px',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <span>A receber</span>
                  <span style={{ fontSize: '8.5px', opacity: 0.85 }}>3</span>
                </div>

                {/* Aba 2: Em andamento */}
                <div
                  style={{
                    padding: '5px 4px',
                    textAlign: 'center',
                    fontWeight: 500,
                    fontSize: '9.5px',
                    color: 'rgba(255, 255, 255, 0.68)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Andamento</span>
                  <span style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.45)' }}>5</span>
                </div>

                {/* Aba 3: Concluídos */}
                <div
                  style={{
                    padding: '5px 4px',
                    textAlign: 'center',
                    fontWeight: 500,
                    fontSize: '9.5px',
                    color: 'rgba(255, 255, 255, 0.68)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Concluídos</span>
                </div>
              </div>

              {/* TicketCard 1: Chamado Pendente de Recebimento (Borda Dourada Oficial) */}
              <div
                style={{
                  background: '#171717',
                  borderRadius: '12px',
                  border: '1px solid #F5C518',
                  padding: '9px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '7px',
                  marginBottom: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '11px', color: '#FFFFFF', lineHeight: 1.2 }}>
                      14º Pavimento · Corretiva
                    </p>
                    <p style={{ margin: '2px 0 0', fontSize: '9px', color: 'rgba(255, 255, 255, 0.68)' }}>
                      Edifício Horizon · Barrilete
                    </p>
                    <p style={{ margin: '1px 0 0', fontSize: '8px', color: 'rgba(255, 255, 255, 0.45)' }}>
                      Relatado hoje às 08:45
                    </p>
                  </div>
                  <ChevronRight size={14} color="rgba(255, 255, 255, 0.4)" />
                </div>

                {/* Badges de Status & SLA */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  <span
                    style={{
                      background: 'rgba(248, 113, 113, 0.15)',
                      color: '#F87171',
                      fontSize: '8px',
                      fontWeight: 700,
                      padding: '2px 5px',
                      borderRadius: '4px'
                    }}
                  >
                    ALTA
                  </span>
                  <span
                    style={{
                      background: 'rgba(245, 197, 24, 0.15)',
                      color: '#F5C518',
                      fontSize: '8px',
                      fontWeight: 600,
                      padding: '2px 5px',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}
                  >
                    <Clock size={8} /> Encaminhado há 2h
                  </span>
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '8px',
                      fontWeight: 600,
                      padding: '2px 5px',
                      borderRadius: '4px'
                    }}
                  >
                    ENCAMINHADO
                  </span>
                </div>

                {/* Botão Oficial: Receber Chamado */}
                <div
                  style={{
                    background: '#F5C518',
                    color: '#000000',
                    borderRadius: '10px',
                    padding: '6px 8px',
                    fontWeight: 700,
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    marginTop: '2px'
                  }}
                >
                  <Inbox size={11} strokeWidth={2.4} />
                  <span>Receber chamado</span>
                </div>
              </div>

              {/* TicketCard 2: Chamado em Andamento */}
              <div
                style={{
                  background: '#171717',
                  borderRadius: '12px',
                  padding: '9px 10px',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  marginBottom: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.95)' }}>
                      2º Subsolo (G2) · Preventiva
                    </p>
                    <p style={{ margin: '1px 0 0', fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.6)' }}>
                      Bomba de Recalque 01 · Téc. Marcelo
                    </p>
                  </div>
                  <ChevronRight size={13} color="rgba(255, 255, 255, 0.35)" />
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ background: 'rgba(245, 197, 24, 0.12)', color: '#F5C518', fontSize: '8px', padding: '1px 5px', borderRadius: '4px', fontWeight: 600 }}>
                    MÉDIA
                  </span>
                  <span style={{ background: 'rgba(74, 222, 128, 0.12)', color: '#4ADE80', fontSize: '8px', padding: '1px 5px', borderRadius: '4px', fontWeight: 600 }}>
                    EM ANDAMENTO
                  </span>
                </div>
              </div>

              {/* BottomNav Oficial com Chamados Ativo */}
              <nav
                style={{
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#0B0B0B',
                  padding: '6px 4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: 'rgba(255, 255, 255, 0.52)' }}>
                  <Home size={15} strokeWidth={1.8} />
                  <span style={{ fontSize: '8.5px' }}>Início</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: '#F5C518' }}>
                  <Wrench size={15} strokeWidth={2.4} />
                  <span style={{ fontSize: '8.5px', fontWeight: 600 }}>Chamados</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: 'rgba(255, 255, 255, 0.52)' }}>
                  <ClipboardList size={15} strokeWidth={1.8} />
                  <span style={{ fontSize: '8.5px' }}>Histórico</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: 'rgba(255, 255, 255, 0.52)' }}>
                  <User size={15} strokeWidth={1.8} />
                  <span style={{ fontSize: '8.5px' }}>Perfil</span>
                </div>
              </nav>

            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          CELULAR DA FRENTE (Principal / Direita) - APP DE CAMPO & FLOORFORM (/inspecao)
          ========================================================================= */}
      <div
        className="float-mockup-front"
        style={{
          position: 'absolute',
          top: '46px',
          right: '16px',
          width: '278px',
          height: '535px',
          borderRadius: '44px',
          background: 'linear-gradient(135deg, #32353A 0%, #17181B 100%)',
          padding: '9px',
          border: '1.5px solid rgba(255, 255, 255, 0.24)',
          transform: 'rotateX(calc(17deg + var(--tilt-x, 0) * 1.1deg)) rotateY(calc(-13deg + var(--tilt-y, 0) * 1.1deg)) rotateZ(5.5deg)',
          boxShadow: '-30px 40px 75px rgba(0, 0, 0, 0.42)',
          zIndex: 5,
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '35px',
            background: '#0B0B0B',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            color: 'rgba(255, 255, 255, 0.96)',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '21px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 25
            }}
          />

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
              zIndex: 20
            }}
          >
            <span>09:42</span>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, opacity: 0.8 }}>5G</span>
              <Wifi size={11} />
              <div style={{ width: '16px', height: '9px', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '2px', padding: '1px' }}>
                <div style={{ width: '85%', height: '100%', background: '#FFFFFF', borderRadius: '1px' }} />
              </div>
            </div>
          </div>

          {frontImage ? (
            <img src={frontImage} alt="Tela Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            /* Interface Hiper-Realista: /inspecao FloorForm do Viston */
            <div
              style={{
                flex: 1,
                padding: '4px 12px 0',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'hidden'
              }}
            >
              {/* Header com Navegação de Andar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', padding: '2px 0' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#232323',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ChevronLeft size={16} color="rgba(255, 255, 255, 0.85)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>
                      Pavimento 14
                    </h3>
                    <span style={{ fontSize: '9px', color: '#F5C518', fontWeight: 600 }}>
                      (Andar 3 de 18)
                    </span>
                  </div>
                  <p style={{ margin: '1px 0 0', fontSize: '9px', color: 'rgba(255, 255, 255, 0.52)' }}>
                    Edifício Horizon Prime
                  </p>
                </div>
              </div>

              {/* Barra de Progresso Fina */}
              <div style={{ width: '100%', height: '3px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '78%', height: '100%', background: '#F5C518', borderRadius: '999px' }} />
              </div>

              {/* MCard: Inspetor e Data Oficial */}
              <div
                style={{
                  background: '#171717',
                  borderRadius: '10px',
                  padding: '7px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <UserRound size={12} color="#F5C518" />
                  <span style={{ color: 'rgba(255, 255, 255, 0.68)', fontSize: '10px' }}>
                    Carlos Eduardo (Inspetor)
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CalendarDays size={12} color="#F5C518" />
                  <span style={{ color: 'rgba(255, 255, 255, 0.68)', fontSize: '10px' }}>
                    Hoje
                  </span>
                </div>
              </div>

              {/* MCard: Formulário de Ocorrência 1 (FloorForm Oficial) */}
              <div
                style={{
                  background: '#171717',
                  borderRadius: '12px',
                  padding: '9px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  marginBottom: '8px'
                }}
              >
                {/* Título da Ocorrência e Lixeira */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, fontSize: '11px', color: '#FFFFFF' }}>
                    Ocorrência 1
                  </span>
                  <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#232323', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trash2 size={10} color="rgba(255, 255, 255, 0.5)" />
                  </div>
                </div>

                {/* Campo 1: Tipo de Manutenção */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.52)' }}>Tipo de manutenção</span>
                  <div style={{ background: '#232323', borderRadius: '8px', padding: '5px 8px', fontSize: '9.5px', color: '#FFFFFF', fontWeight: 600 }}>
                    Vazamento
                  </div>
                </div>

                {/* Campo 2: Categoria & Prioridade */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.52)' }}>Categoria</span>
                    <div style={{ background: '#232323', borderRadius: '8px', padding: '5px 8px', fontSize: '9px', color: 'rgba(255, 255, 255, 0.9)' }}>
                      Corretiva
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.52)' }}>Prioridade</span>
                    <div style={{ background: 'rgba(248, 113, 113, 0.15)', color: '#F87171', borderRadius: '8px', padding: '5px 8px', fontSize: '9px', fontWeight: 700, textAlign: 'center' }}>
                      ALTA
                    </div>
                  </div>
                </div>

                {/* Campo 3: Descrição */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.52)' }}>Descrição do problema</span>
                  <div style={{ background: '#232323', borderRadius: '8px', padding: '5px 8px', fontSize: '9px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.25 }}>
                    Pressostato B2 descalibrado, oscilando pressão no barrilete.
                  </div>
                </div>

                {/* Responsável sugerido pelo inspetor (campo opcional do formulário) */}
                <div
                  style={{
                    background: 'rgba(245, 197, 24, 0.1)',
                    border: '1px solid rgba(245, 197, 24, 0.25)',
                    borderRadius: '8px',
                    padding: '4px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: '#F5C518',
                    fontSize: '8.5px',
                    fontWeight: 600
                  }}
                >
                  <UserRound size={10} />
                  <span>Responsável: Marcos Teixeira</span>
                </div>
              </div>

              {/* Ações Oficiais de Encerramento do Andar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: 'auto', marginBottom: '8px' }}>
                <div
                  style={{
                    background: '#F5C518',
                    color: '#000000',
                    borderRadius: '12px',
                    padding: '9px 12px',
                    fontWeight: 700,
                    fontSize: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 3px 12px rgba(245, 197, 24, 0.35)'
                  }}
                >
                  <span>Avançar para Pavimento 13</span>
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>

                <div
                  style={{
                    background: 'rgba(245, 197, 24, 0.13)',
                    color: '#F5C518',
                    borderRadius: '10px',
                    padding: '6px 8px',
                    fontWeight: 600,
                    fontSize: '9.5px',
                    textAlign: 'center'
                  }}
                >
                  + Adicionar ocorrência
                </div>
              </div>

              {/* BottomNav Oficial */}
              <nav
                style={{
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#0B0B0B',
                  padding: '6px 4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: '#F5C518' }}>
                  <Home size={15} strokeWidth={2.4} />
                  <span style={{ fontSize: '8.5px', fontWeight: 600 }}>Início</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: 'rgba(255, 255, 255, 0.52)' }}>
                  <Wrench size={15} strokeWidth={1.8} />
                  <span style={{ fontSize: '8.5px' }}>Chamados</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: 'rgba(255, 255, 255, 0.52)' }}>
                  <ClipboardList size={15} strokeWidth={1.8} />
                  <span style={{ fontSize: '8.5px' }}>Histórico</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: 'rgba(255, 255, 255, 0.52)' }}>
                  <User size={15} strokeWidth={1.8} />
                  <span style={{ fontSize: '8.5px' }}>Perfil</span>
                </div>
              </nav>

            </div>
          )}
        </div>
      </div>

    </div>
  );
}
