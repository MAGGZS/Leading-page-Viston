import React from 'react';

/**
 * CraftCard (Emil Kowalski craft sensibility)
 * Superfície minimalista de engenharia: fundo fosco (#131416), borda nítida de 1px
 * e transição suave de elevação sem brilhos artificiais ou flares distrativos.
 */
export default function SpotlightCard({
  children,
  className = '',
  style = {},
  onClick = null,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`craft-card ${className}`}
      style={{
        position: 'relative',
        borderRadius: '16px',
        background: '#131416',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        transition: 'border-color 180ms cubic-bezier(0.23, 1, 0.32, 1), transform 180ms cubic-bezier(0.23, 1, 0.32, 1), background-color 180ms cubic-bezier(0.23, 1, 0.32, 1)',
        ...style,
      }}
      {...props}
    >
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
