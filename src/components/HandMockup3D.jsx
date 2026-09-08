import React from 'react';
import { CheckCircle2, AlertTriangle, Camera, ShieldCheck, Wifi, ArrowRight } from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

/**
 * HandMockup3D - Design Engineering Craft (Emil Kowalski / Apple Standards)
 * 
 * Smartphone 3D em perspectiva realista iPhone Pro Max com tilt interativo,
 * exibindo a interface nativa do aplicativo Viston em operação de campo.
 */
export default function HandMockup3D({ imageSrc = null }) {
  const [containerRef, tilt] = useMouseTilt(7);

  return (
    <div
      ref={containerRef}
      className="float-mockup-front"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        height: '600px',
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
            width: '290px',
            height: '590px',
            borderRadius: '46px',
            background: 'linear-gradient(145deg, #2f3238 0%, #17181c 45%, #0d0e10 100%)',
            padding: '11px',
            position: 'relative',
            transform: `rotateY(${-14 + tilt.y}deg) rotateX(${12 + tilt.x}deg) rotateZ(3deg)`,
            boxShadow: '-25px 35px 65px -10px rgba(0, 0, 0, 0.28), -5px 10px 20px rgba(0,0,0,0.15)',
            border: '1.5px solid rgba(255, 255, 255, 0.18)',
            transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Tela Interna OLED */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '36px',
              background: '#0F1216',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)',
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
                width: '88px',
                height: '24px',
                backgroundColor: '#000000',
                borderRadius: '20px',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '9px'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1c2230' }} />
            </div>

            {/* Status Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '11px 22px 6px',
                fontSize: '11.5px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.9)',
                zIndex: 15
              }}
            >
              <span>09:42</span>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <Wifi size={11} />
                <div style={{ width: '18px', height: '10px', border: '1px solid rgba(255,255,255,0.85)', borderRadius: '3px', padding: '1px' }}>
                  <div style={{ width: '80%', height: '100%', background: '#FFFFFF', borderRadius: '1.5px' }} />
                </div>
              </div>
            </div>

            {imageSrc ? (
              <img src={imageSrc} alt="Viston App Mobile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              /* Interface Realista do Viston Mobile */
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '14px 16px 18px',
                  background: 'linear-gradient(180deg, #111418 0%, #0c0e11 100%)',
                  gap: '12px'
                }}
              >
                {/* Header da Inspeção */}
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F5C518', fontWeight: 700 }}>
                      Vistoria em Andamento
                    </span>
                    <span style={{ fontSize: '10px', background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E', padding: '2px 7px', borderRadius: '999px', fontWeight: 600 }}>
                      Offline Ativo
                    </span>
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                    Edifício Horizon Prime
                  </h3>
                  <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.55)', margin: 0 }}>
                    Pavimento 14 • Barrilete & Bombas
                  </p>
                </div>

                {/* Card de Progresso */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '10px 12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Progresso do Andar</span>
                    <span style={{ color: '#F5C518', fontWeight: 600 }}>80% Concluído</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: '100%', background: '#F5C518', borderRadius: '999px' }} />
                  </div>
                </div>

                {/* Lista de Itens do Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  
                  {/* Item 1 - Conforme */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '11px',
                      padding: '9px 11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={13} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>Pressurizador de Incêndio</div>
                        <div style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.45)' }}>Pressão estática normal: 4.2 bar</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '9px', color: '#22C55E', background: 'rgba(34, 197, 94, 0.12)', padding: '2px 7px', borderRadius: '5px', fontWeight: 600 }}>
                      Conforme
                    </span>
                  </div>

                  {/* Item 2 - Inconforme com Foto */}
                  <div
                    style={{
                      background: 'rgba(245, 197, 24, 0.07)',
                      border: '1px solid rgba(245, 197, 24, 0.3)',
                      borderRadius: '11px',
                      padding: '9px 11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AlertTriangle size={13} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>Válvula de Retenção B2</div>
                        <div style={{ fontSize: '9px', color: '#F5C518', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Camera size={10} /> 1 Foto anexada • Avaria
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: '9px', color: '#EF4444', background: 'rgba(239, 68, 68, 0.15)', padding: '2px 7px', borderRadius: '5px', fontWeight: 600 }}>
                      Avaria
                    </span>
                  </div>

                  {/* Item 3 - Conforme */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '11px',
                      padding: '9px 11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={13} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>Quadro de Comando</div>
                        <div style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.45)' }}>Sem superaquecimento</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '9px', color: '#22C55E', background: 'rgba(34, 197, 94, 0.12)', padding: '2px 7px', borderRadius: '5px', fontWeight: 600 }}>
                      Conforme
                    </span>
                  </div>

                </div>

                {/* Botão de Encerramento do Pavimento */}
                <div
                  style={{
                    background: '#F5C518',
                    color: '#000000',
                    borderRadius: '12px',
                    padding: '11px',
                    fontWeight: 600,
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                    boxShadow: '0 3px 12px rgba(245, 197, 24, 0.35)'
                  }}
                >
                  <span>Gerar Laudo do Andar (PDF)</span>
                  <ArrowRight size={14} />
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
