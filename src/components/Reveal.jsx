import React from 'react';
import { useInView } from '../hooks/useInView';

/**
 * Reveal - entrada suave (fade + 18px) quando o bloco entra na viewport.
 * Movimento motivado: guia a leitura na ordem do conteúdo. Respeita prefers-reduced-motion.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
