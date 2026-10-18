import { useEffect, useRef } from 'react';

/**
 * useMouseTilt - inclinação 3D amortecida (lerp) seguindo o cursor.
 * Escreve --tilt-x / --tilt-y direto no elemento (sem setState por frame),
 * então nenhuma re-renderização do React acontece durante o movimento.
 * Os filhos usam: rotateX(calc(11deg + var(--tilt-x, 0) * 1deg)).
 */
export function useMouseTilt(maxTilt = 6, lerpFactor = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let rafId = null;

    const write = () => {
      element.style.setProperty('--tilt-x', current.x.toFixed(2));
      element.style.setProperty('--tilt-y', current.y.toFixed(2));
    };

    const animate = () => {
      current.x += (target.x - current.x) * lerpFactor;
      current.y += (target.y - current.y) * lerpFactor;
      write();
      if (Math.abs(target.x - current.x) > 0.01 || Math.abs(target.y - current.y) > 0.01) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const kick = () => {
      if (rafId === null) rafId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      target.x = -yNorm * maxTilt;
      target.y = xNorm * maxTilt;
      kick();
    };

    const handleMouseLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, lerpFactor]);

  return [ref];
}
