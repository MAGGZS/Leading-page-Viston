import React from 'react';
import { Plus, Smartphone } from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt';

/**
 * HandMockup3D - Inspirado nas referências Mubly e Track Everything
 * 
 * Renderiza uma composição 3D realista de uma mão segurando o smartphone
 * em perspectiva diagonal elegante, com resposta interativa ao cursor (mouse tilt)
 * e flutuação física sutil.
 */
export default function HandMockup3D({
  imageSrc = null,
  title = "Vistoria no Smartphone",
  subtitle = "Checklist técnico andar por andar",
  badge = "App Mobile em Campo"
}) {
  const [containerRef, tilt] = useMouseTilt(6);

  return (
    <div
      ref={containerRef}
      className="float-mockup-front"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        height: '560px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
    >

      {/* Container 3D em Perspectiva */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Smartphone em Rotação 3D com Tilt Interativo */}
        <div
          style={{
            width: '280px',
            height: '570px',
            borderRadius: '44px',
            background: 'linear-gradient(135deg, #2c2d30 0%, #151618 50%, #0d0e10 100%)',
            padding: '10px',
            position: 'relative',
            transform: `rotateY(${-14 + tilt.y}deg) rotateX(${12 + tilt.x}deg) rotateZ(3deg)`,
            boxShadow: '-25px 35px 65px -10px rgba(0, 0, 0, 0.28), -5px 10px 20px rgba(0,0,0,0.15)',
            border: '1.5px solid rgba(255, 255, 255, 0.18)',
            transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Botões laterais usinados */}
          <div style={{ position: 'absolute', left: '-3px', top: '95px', width: '3px', height: '36px', background: '#3A3B3E', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', left: '-3px', top: '145px', width: '3px', height: '36px', background: '#3A3B3E', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', right: '-3px', top: '115px', width: '3px', height: '58px', background: '#3A3B3E', borderRadius: '0 2px 2px 0' }} />

          {/* Tela Interna */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '34px',
              background: '#0B0B0B',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Dynamic Island */}
            <div
              style={{
                position: 'absolute',
                top: '11px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '84px',
                height: '24px',
                backgroundColor: '#000000',
                borderRadius: '20px',
                zIndex: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 8px',
                border: '0.5px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1E293B' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#1A1A1A' }} />
            </div>

            {/* Barra de Status */}
            <div
              style={{
                height: '40px',
                padding: '8px 20px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.85)',
                zIndex: 20
              }}
            >
              <span>9:41</span>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <span style={{ fontSize: '10px' }}>5G</span>
                <div style={{ width: '18px', height: '9px', border: '1px solid currentColor', borderRadius: '2.5px', padding: '1px' }}>
                  <div style={{ width: '75%', height: '100%', background: '#F5C518', borderRadius: '1px' }} />
                </div>
              </div>
            </div>

            {/* Conteúdo da Tela: Imagem ou Espaço Vazio */}
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                style={{ width: '100%', height: 'calc(100% - 40px)', objectFit: 'cover' }}
              />
            ) : (
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px 18px',
                  textAlign: 'center',
                  background: 'radial-gradient(circle at 50% 35%, #181818 0%, #0B0B0B 100%)',
                  position: 'relative'
                }}
              >
                {/* Linha guia blueprint */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '14px',
                    border: '1.5px dashed rgba(245, 197, 24, 0.3)',
                    borderRadius: '22px',
                    pointerEvents: 'none'
                  }}
                />

                {badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      background: 'rgba(245, 197, 24, 0.12)',
                      color: '#F5C518',
                      border: '1px solid rgba(245, 197, 24, 0.3)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '9.5px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {badge}
                  </div>
                )}

                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(245, 197, 24, 0.12)',
                    border: '1px solid rgba(245, 197, 24, 0.4)',
                    color: '#F5C518',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px'
                  }}
                >
                  <Plus size={24} strokeWidth={2.5} />
                </div>

                <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  {title}
                </h4>

                <p style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.4, maxWidth: '175px', marginBottom: '14px' }}>
                  {subtitle}
                </p>

                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 600,
                    color: '#F5C518',
                    background: '#1A1A1A',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(245, 197, 24, 0.2)'
                  }}
                >
                  Mockup 3D Vazio
                </span>
              </div>
            )}

            {/* Home indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '999px'
              }}
            />
          </div>
        </div>

        {/* Silhueta da Mão 3D Segurando em Perspectiva (Inspirada em Track Everything & Mubly) */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-60px',
            width: '280px',
            height: '380px',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <svg viewBox="0 0 280 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="handSkin" x1="50" y1="100" x2="250" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E8BEA5" />
                <stop offset="0.5" stopColor="#C99B82" />
                <stop offset="1" stopColor="#9C6B52" />
              </linearGradient>
              <linearGradient id="thumbSkin" x1="10" y1="120" x2="90" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F1CBB2" />
                <stop offset="1" stopColor="#B8876E" />
              </linearGradient>
              <filter id="handShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="-8" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Braço e Palma da mão em perspectiva */}
            <path
              d="M120 220 C140 200, 190 210, 240 260 C260 280, 275 320, 280 380 L160 380 C150 340, 130 300, 110 260 Z"
              fill="url(#handSkin)"
              filter="url(#handShadow)"
            />

            {/* Dedos envolvendo a borda do celular (Lado direito) */}
            <g filter="url(#handShadow)">
              {/* Dedo indicador */}
              <rect x="18" y="195" width="28" height="48" rx="14" transform="rotate(-28 18 195)" fill="url(#thumbSkin)" />
              {/* Polegar apoiando a borda frontal */}
              <path
                d="M16 190 C6 185, 2 170, 8 158 C16 142, 38 152, 44 168 C48 178, 42 195, 28 198 Z"
                fill="url(#thumbSkin)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

