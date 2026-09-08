import React from 'react';
import { Smartphone, CheckCircle, AlertTriangle, Clock, Camera, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

/**
 * IsometricMockup3D - Design Engineering Emil Kowalski / Apple Standards
 * 
 * Dois smartphones flutuantes em perspectiva isométrica 3D com interfaces
 * hiper-realistas do Viston: o App de Campo do Inspetor e o Painel do Moderador.
 */
export default function IsometricMockup3D({ frontImage = null, backImage = null }) {
  const [containerRef, tilt] = useMouseTilt(7);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        height: '560px',
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
          CELULAR DE TRÁS (Secundário / Esquerda) - PAINEL DO MODERADOR & GESTÃO
          ========================================================================= */}
      <div
        className="float-mockup-back"
        style={{
          position: 'absolute',
          top: '24px',
          left: '20px',
          width: '260px',
          height: '500px',
          borderRadius: '40px',
          background: 'linear-gradient(135deg, #2E3035 0%, #151618 100%)',
          padding: '8px',
          border: '1.5px solid rgba(255, 255, 255, 0.16)',
          transform: `rotateX(${20 + tilt.x * 0.7}deg) rotateY(${-18 + tilt.y * 0.7}deg) rotateZ(8deg)`,
          boxShadow: '-24px 30px 60px rgba(0, 0, 0, 0.28)',
          zIndex: 2,
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '32px',
            background: '#0D0F12',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            color: '#FFFFFF'
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '74px',
              height: '20px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 20
            }}
          />

          {/* Status Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '9px 18px 6px',
              fontSize: '10.5px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.85)',
              zIndex: 15
            }}
          >
            <span>09:42</span>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', opacity: 0.75 }}>5G</span>
              <div style={{ width: '15px', height: '8px', border: '1px solid rgba(255,255,255,0.7)', borderRadius: '2px', padding: '1px' }}>
                <div style={{ width: '80%', height: '100%', background: '#FFFFFF', borderRadius: '1px' }} />
              </div>
            </div>
          </div>

          {backImage ? (
            <img src={backImage} alt="Tela de Fundo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            /* Interface Hiper-Realista do Painel do Moderador */
            <div style={{ flex: 1, padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Header do Moderador */}
              <div style={{ marginTop: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F5C518' }} />
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F5C518', fontWeight: 700 }}>
                    Fila de Triagem • SLA
                  </span>
                </div>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                  Gestão de Ocorrências
                </h4>
              </div>

              {/* Chips de Métricas Rápidas */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '6px 4px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', display: 'block' }}>12</span>
                  <span style={{ fontSize: '8px', color: 'rgba(255, 255, 255, 0.5)' }}>Novos</span>
                </div>
                <div style={{ background: 'rgba(245, 197, 24, 0.08)', borderRadius: '8px', padding: '6px 4px', textAlign: 'center', border: '1px solid rgba(245, 197, 24, 0.2)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#F5C518', display: 'block' }}>4</span>
                  <span style={{ fontSize: '8px', color: 'rgba(245, 197, 24, 0.8)' }}>Em Análise</span>
                </div>
                <div style={{ background: 'rgba(34, 197, 94, 0.08)', borderRadius: '8px', padding: '6px 4px', textAlign: 'center', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#22C55E', display: 'block' }}>98%</span>
                  <span style={{ fontSize: '8px', color: 'rgba(34, 197, 94, 0.8)' }}>No Prazo</span>
                </div>
              </div>

              {/* Card de Chamado 1 (Crítico) */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '12px',
                  padding: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', color: '#F5C518', fontWeight: 600 }}>#VST-2041</span>
                  <span style={{ fontSize: '8px', background: 'rgba(239, 68, 68, 0.2)', color: '#F87171', padding: '2px 6px', borderRadius: '999px', fontWeight: 600 }}>
                    Alta Prioridade
                  </span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.25 }}>
                  Pressostato descalibrado - Barrilete
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Clock size={10} color="#F5C518" /> Restam 2h 15m
                  </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Téc. Marcelo S.</span>
                </div>
              </div>

              {/* Card de Chamado 2 */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  padding: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>#VST-2039</span>
                  <span style={{ fontSize: '8px', background: 'rgba(245, 197, 24, 0.15)', color: '#F5C518', padding: '2px 6px', borderRadius: '999px', fontWeight: 600 }}>
                    Em Triagem
                  </span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.25 }}>
                  Infiltração em junta estrutural - G2
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(255, 255, 255, 0.55)' }}>
                  <span>Aguardando parecer</span>
                  <span>Eng. Marcos</span>
                </div>
              </div>

              {/* Ação Rápida */}
              <div
                style={{
                  marginTop: 'auto',
                  background: 'rgba(245, 197, 24, 0.12)',
                  border: '1px solid rgba(245, 197, 24, 0.25)',
                  borderRadius: '10px',
                  padding: '8px',
                  textAlign: 'center',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#F5C518',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px'
                }}
              >
                <span>Despachar Ordem de Serviço</span>
                <ArrowUpRight size={12} />
              </div>

            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          CELULAR DA FRENTE (Principal / Direita) - APP DE CAMPO DO INSPETOR
          ========================================================================= */}
      <div
        className="float-mockup-front"
        style={{
          position: 'absolute',
          top: '50px',
          right: '20px',
          width: '275px',
          height: '525px',
          borderRadius: '42px',
          background: 'linear-gradient(135deg, #32353A 0%, #17181B 100%)',
          padding: '9px',
          border: '1.5px solid rgba(255, 255, 255, 0.24)',
          transform: `rotateX(${18 + tilt.x * 1.1}deg) rotateY(${-14 + tilt.y * 1.1}deg) rotateZ(6deg)`,
          boxShadow: '-30px 40px 75px rgba(0, 0, 0, 0.35)',
          zIndex: 5,
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '34px',
            background: '#0F1216',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            color: '#FFFFFF'
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '9px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '82px',
              height: '22px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 20
            }}
          />

          {/* Status Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 20px 6px',
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.9)',
              zIndex: 15
            }}
          >
            <span>09:42</span>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <span style={{ fontSize: '9px', opacity: 0.8 }}>5G</span>
              <div style={{ width: '16px', height: '9px', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '2px', padding: '1px' }}>
                <div style={{ width: '85%', height: '100%', background: '#FFFFFF', borderRadius: '1px' }} />
              </div>
            </div>
          </div>

          {frontImage ? (
            <img src={frontImage} alt="Tela Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            /* Interface Hiper-Realista do App de Campo */
            <div style={{ flex: 1, padding: '12px 14px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Header da Vistoria */}
              <div style={{ marginTop: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#22C55E', fontWeight: 700 }}>
                      Vistoria em Andamento
                    </span>
                  </div>
                  <span style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.45)' }}>Modo Offline</span>
                </div>
                <h3 style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                  Torre Alvorada • G2 Subsolo
                </h3>
              </div>

              {/* Barra de Progresso do Pavimento */}
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', padding: '8px 10px', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '5px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Itens Normativos</span>
                  <span style={{ color: '#F5C518', fontWeight: 600 }}>7 / 10 checados</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', background: '#F5C518', borderRadius: '2px' }} />
                </div>
              </div>

              {/* Itens do Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', flex: 1 }}>
                
                {/* Item 1 - Conforme */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle size={12} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#FFFFFF' }}>Bomba de Recalque 01</div>
                      <div style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.45)' }}>Sem vazamentos aparentes</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '8.5px', color: '#22C55E', background: 'rgba(34, 197, 94, 0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    Conforme
                  </span>
                </div>

                {/* Item 2 - Inconforme com Foto Anexada */}
                <div
                  style={{
                    background: 'rgba(245, 197, 24, 0.06)',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(245, 197, 24, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <AlertTriangle size={12} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#FFFFFF' }}>Válvula de Retenção</div>
                      <div style={{ fontSize: '8.5px', color: '#F5C518', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Camera size={9} /> 2 fotos registradas
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '8.5px', color: '#EF4444', background: 'rgba(239, 68, 68, 0.15)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    Avaria
                  </span>
                </div>

                {/* Item 3 - Conforme */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle size={12} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#FFFFFF' }}>Porta Corta-Fogo G2</div>
                      <div style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.45)' }}>Vedação e mola OK</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '8.5px', color: '#22C55E', background: 'rgba(34, 197, 94, 0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    Conforme
                  </span>
                </div>

              </div>

              {/* Botão de Finalizar Pavimento */}
              <div
                style={{
                  background: '#F5C518',
                  borderRadius: '10px',
                  padding: '9px 12px',
                  color: '#000000',
                  fontSize: '11px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(245, 197, 24, 0.3)'
                }}
              >
                <span>Finalizar Pavimento</span>
                <ChevronRight size={13} strokeWidth={2.5} />
              </div>

            </div>
          )}
        </div>
      </div>

    </div>
  );
}
