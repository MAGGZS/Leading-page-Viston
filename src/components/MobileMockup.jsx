import React from 'react';
import { Plus, Smartphone, Image as ImageIcon, Sparkles } from 'lucide-react';

/**
 * MobileMockup - Modelo iPhone 16 Pro Premium (Tema Viston Industrial Dark & Gold)
 * 
 * Mantém os espaços vazios e prontos para inserção futura das telas do app Viston.
 * Para exibir uma imagem real, passe `imageSrc="/mockups/sua_tela.png"`.
 */
export default function MobileMockup({
  title = "Espaço para Mockup",
  subtitle = "Adicione a captura da tela aqui",
  imageSrc = null,
  size = "default", // 'sm', 'default', 'lg', 'hero-side', 'hero-center'
  variant = "flat", // 'flat', 'tilt-left', 'tilt-right', 'elevated'
  className = "",
  badge = null
}) {
  const sizeStyles = {
    sm: { width: '230px', height: '470px', borderRadius: '38px', borderWidth: '9px' },
    default: { width: '275px', height: '560px', borderRadius: '44px', borderWidth: '10px' },
    lg: { width: '315px', height: '640px', borderRadius: '48px', borderWidth: '11px' },
    'hero-side': { width: '265px', height: '540px', borderRadius: '42px', borderWidth: '10px' },
    'hero-center': { width: '305px', height: '620px', borderRadius: '48px', borderWidth: '11px' }
  };

  const currentSize = sizeStyles[size] || sizeStyles.default;

  const variantStyles = {
    flat: {
      transform: 'none',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)'
    },
    'tilt-left': {
      transform: 'rotate(-4deg) translateY(20px)',
      boxShadow: '-15px 35px 70px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)'
    },
    'tilt-right': {
      transform: 'rotate(4deg) translateY(20px)',
      boxShadow: '15px 35px 70px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)'
    },
    elevated: {
      transform: 'translateY(-16px) scale(1.03)',
      boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.9), 0 0 45px rgba(245, 197, 24, 0.18), 0 0 0 1px rgba(245, 197, 24, 0.25)',
      zIndex: 2
    }
  };

  const currentVariant = variantStyles[variant] || variantStyles.flat;

  return (
    <div
      className={`mobile-mockup-container ${className}`}
      style={{
        display: 'inline-block',
        transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        ...currentVariant
      }}
    >
      {/* Moldura Externa do Chassi em Titânio Escuro */}
      <div
        style={{
          width: currentSize.width,
          height: currentSize.height,
          borderRadius: currentSize.borderRadius,
          background: 'linear-gradient(145deg, #2A2A2A 0%, #121212 50%, #0A0A0A 100%)',
          padding: currentSize.borderWidth,
          position: 'relative',
          boxSizing: 'border-box',
          border: '1.5px solid rgba(255, 255, 255, 0.12)',
          boxShadow: 'inset 0 0 5px rgba(255, 255, 255, 0.15)'
        }}
      >
        {/* Botões laterais metálicos usinados */}
        <div style={{
          position: 'absolute',
          left: '-3.5px',
          top: '90px',
          width: '3.5px',
          height: '40px',
          background: '#333333',
          borderRadius: '2px 0 0 2px'
        }} />
        <div style={{
          position: 'absolute',
          left: '-3.5px',
          top: '142px',
          width: '3.5px',
          height: '40px',
          background: '#333333',
          borderRadius: '2px 0 0 2px'
        }} />
        <div style={{
          position: 'absolute',
          right: '-3.5px',
          top: '110px',
          width: '3.5px',
          height: '62px',
          background: '#333333',
          borderRadius: '0 2px 2px 0'
        }} />

        {/* Tela Interna com Moldura Curva OLED */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: `calc(${currentSize.borderRadius} - ${currentSize.borderWidth})`,
            background: '#0B0B0B',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Dynamic Island (Ilha Dinâmica Realista) */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '92px',
              height: '25px',
              backgroundColor: '#000000',
              borderRadius: '20px',
              zIndex: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 10px',
              border: '0.5px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#0F172A', border: '1px solid #1E293B' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#171717' }} />
          </div>

          {/* Barra de Status iOS (9:41, Sinal, WiFi, Bateria) */}
          <div
            style={{
              height: '42px',
              padding: '8px 22px 0 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11.5px',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.85)',
              zIndex: 20,
              userSelect: 'none'
            }}
          >
            <span>9:41</span>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1.5px', alignItems: 'flex-end', height: '9px' }}>
                <span style={{ width: '2px', height: '3px', background: 'currentColor', borderRadius: '0.5px' }} />
                <span style={{ width: '2px', height: '5px', background: 'currentColor', borderRadius: '0.5px' }} />
                <span style={{ width: '2px', height: '7px', background: 'currentColor', borderRadius: '0.5px' }} />
                <span style={{ width: '2px', height: '9px', background: 'currentColor', borderRadius: '0.5px' }} />
              </div>
              <div style={{
                width: '19px',
                height: '10px',
                border: '1.2px solid currentColor',
                borderRadius: '3px',
                padding: '1px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{ width: '75%', height: '100%', background: '#F5C518', borderRadius: '1.5px' }} />
              </div>
            </div>
          </div>

          {/* Tela: Imagem real OU Espaço Vazio com Blueprint Industrial Viston */}
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              style={{
                width: '100%',
                height: 'calc(100% - 42px)',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          ) : (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 20px',
                textAlign: 'center',
                background: 'radial-gradient(circle at 50% 30%, #1A1A1A 0%, #0D0D0D 100%)',
                position: 'relative'
              }}
            >
              {/* Linhas Blueprint Técnicas */}
              <div
                style={{
                  position: 'absolute',
                  inset: '16px',
                  border: '1.5px dashed rgba(245, 197, 24, 0.25)',
                  borderRadius: '22px',
                  pointerEvents: 'none'
                }}
              />

              {badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    background: 'rgba(245, 197, 24, 0.12)',
                    color: '#F5C518',
                    border: '1px solid rgba(245, 197, 24, 0.3)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  {badge}
                </div>
              )}

              {/* Botão central com ícone + */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(245, 197, 24, 0.12)',
                  border: '1px solid rgba(245, 197, 24, 0.35)',
                  color: '#F5C518',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: '0 0 20px rgba(245, 197, 24, 0.15)'
                }}
              >
                <Plus size={26} strokeWidth={2.4} />
              </div>

              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '6px',
                  lineHeight: 1.3
                }}
              >
                {title}
              </h4>

              <p
                style={{
                  fontSize: '11.5px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.45,
                  maxWidth: '190px',
                  marginBottom: '16px'
                }}
              >
                {subtitle}
              </p>

              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#F5C518',
                  background: '#1A1A1A',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(245, 197, 24, 0.2)'
                }}
              >
                Espaço Vazio para Mockup
              </span>
            </div>
          )}

          {/* Barra inferior Home Indicator (iOS) */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '115px',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.35)',
              borderRadius: '9999px',
              zIndex: 30
            }}
          />
        </div>
      </div>
    </div>
  );
}
