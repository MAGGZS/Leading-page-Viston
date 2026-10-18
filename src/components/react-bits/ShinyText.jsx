import React from 'react';

/**
 * TextBadge / Minimalist Text (Emil Kowalski Craft)
 * Substitui o shimmer animado por tipografia sólida, nítida e de alto contraste,
 * fiel à identidade técnica e séria de engenharia predial do Viston.
 */
export default function ShinyText({
  children,
  className = '',
  baseColor = '#F5C518',
  style = {},
  ...props
}) {
  return (
    <span
      className={`craft-text ${className}`}
      style={{
        color: baseColor,
        fontWeight: 600,
        display: 'inline-block',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
