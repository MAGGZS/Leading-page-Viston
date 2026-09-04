import { useState, useEffect, useRef } from 'react';

/**
 * useMouseTilt - Adiciona uma resposta física e tridimensional sutil aos movimentos do cursor
 * sobre o elemento (padrão de interação Apple / Linear para mockups e cartões).
 */
export function useMouseTilt(maxTilt = 5) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const xNorm = (clientX / rect.width) - 0.5; // -0.5 a 0.5
      const yNorm = (clientY / rect.height) - 0.5;

      const targetX = -yNorm * maxTilt;
      const targetY = xNorm * maxTilt;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setTilt({ x: targetX, y: targetY });
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      setTilt({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt]);

  return [ref, tilt];
}
