import React from 'react';
import { Plus } from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

/**
 * IsometricMockup3D - Inspirado na referência Patungans
 * 
 * Dois smartphones flutuantes em perspectiva isométrica 3D com sombras projetadas,
 * mantendo as telas vazias e prontas para receber imagens via props.
 */
export default function IsometricMockup3D({
  frontImage = null,
  backImage = null
}) {
  const [containerRef, tilt] = useMouseTilt(6);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        height: '520px',
        margin: '0 auto',
        perspective: '1400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
    >

      {/* Celular de Trás (Secundário / Esquerda) */}
      <div
        className="float-mockup-back"
        style={{
          position: 'absolute',
          top: '30px',
          left: '40px',
          width: '230px',
          height: '470px',
          borderRadius: '38px',
          background: 'linear-gradient(135deg, #262729 0%, #131415 100%)',
          padding: '8px',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          transform: `rotateX(${20 + tilt.x * 0.7}deg) rotateY(${-18 + tilt.y * 0.7}deg) rotateZ(8deg)`,
          boxShadow: '-20px 25px 50px rgba(0, 0, 0, 0.2)',
          zIndex: 2,
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '30px',
            background: '#0B0B0B',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70px',
              height: '20px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 10
            }}
          />

          {backImage ? (
            <img src={backImage} alt="Tela de Fundo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
                background: 'radial-gradient(circle at 50% 30%, #1A1A1A 0%, #0B0B0B 100%)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', inset: '12px', border: '1px dashed rgba(245, 197, 24, 0.25)', borderRadius: '18px' }} />
              
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(245, 197, 24, 0.1)', color: '#F5C518', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <Plus size={20} strokeWidth={2.5} />
              </div>

              <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                Painel do Moderador
              </h5>
              <p style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.55)', maxWidth: '140px' }}>
                Fila de triagem e atribuição de chamados
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Celular da Frente (Principal / Direita) */}
      <div
        className="float-mockup-front"
        style={{
          position: 'absolute',
          top: '60px',
          right: '40px',
          width: '250px',
          height: '500px',
          borderRadius: '40px',
          background: 'linear-gradient(135deg, #2E2F32 0%, #161719 100%)',
          padding: '9px',
          border: '1.5px solid rgba(255, 255, 255, 0.22)',
          transform: `rotateX(${18 + tilt.x * 1.1}deg) rotateY(${-14 + tilt.y * 1.1}deg) rotateZ(6deg)`,
          boxShadow: '-25px 35px 65px rgba(0, 0, 0, 0.28)',
          zIndex: 5,
          transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '32px',
            background: '#0B0B0B',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '78px',
              height: '22px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 10
            }}
          />

          {frontImage ? (
            <img src={frontImage} alt="Tela Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '22px',
                textAlign: 'center',
                background: 'radial-gradient(circle at 50% 30%, #1F1F1F 0%, #0B0B0B 100%)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', inset: '12px', border: '1.5px dashed rgba(245, 197, 24, 0.35)', borderRadius: '20px' }} />

              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  background: 'rgba(245, 197, 24, 0.12)',
                  color: '#F5C518',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                App em Campo
              </div>

              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 197, 24, 0.12)', border: '1px solid rgba(245, 197, 24, 0.4)', color: '#F5C518', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Plus size={22} strokeWidth={2.5} />
              </div>

              <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                Vistoria por Pavimento
              </h4>
              <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '160px', lineHeight: 1.4 }}>
                Checklist técnico com fotos e apontamento de avarias
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

