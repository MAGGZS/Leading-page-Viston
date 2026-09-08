import { useState, useEffect, useRef } from 'react';

/**
 * useMouseTilt - Física de inclinação 3D com amortecimento elástico (lerp)
 * Seguindo as diretrizes de movimento do Emil Kowalski:
 * - Sem paradas bruscas: amortecimento contínuo por interpolação linear
 * - Respeito a prefers-reduced-motion
 * - Cancelamento seguro de requestAnimationFrame
 */
export function useMouseTilt(maxTilt = 6, lerpFactor = 0.08) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    let rafId = null;

    const animate = () => {
      const dx = targetTilt.current.x - currentTilt.current.x;
      const dy = targetTilt.current.y - currentTilt.current.y;

      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01 || isHovered.current) {
        currentTilt.current.x += dx * lerpFactor;
        currentTilt.current.y += dy * lerpFactor;
        setTilt({
          x: Math.round(currentTilt.current.x * 100) / 100,
          y: Math.round(currentTilt.current.y * 100) / 100
        });
        rafId = requestAnimationFrame(animate);
      } else {
        currentTilt.current.x = targetTilt.current.x;
        currentTilt.current.y = targetTilt.current.y;
        setTilt({ ...targetTilt.current });
      }
    };

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const xNorm = (clientX / rect.width) - 0.5; // -0.5 a 0.5
      const yNorm = (clientY / rect.height) - 0.5;

      targetTilt.current = {
        x: -yNorm * maxTilt,
        y: xNorm * maxTilt
      };

      if (!isHovered.current) {
        isHovered.current = true;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
      targetTilt.current = { x: 0, y: 0 };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, lerpFactor]);

  return [ref, tilt];
}

