import React, { useEffect, useState, useRef } from 'react';

/**
 * CountUpTicker - Inspirado no React Bits
 * Animação fluida de contagem numérica com easing suave (out-expo)
 * ativada automaticamente quando o componente entra na visão do usuário.
 */
export default function CountUpTicker({
  to = 100,
  from = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  style = {}
}) {
  const [count, setCount] = useState(from);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = from + (to - from) * easeOutExpo(progress);

            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [from, to, duration]);

  const formattedValue = count.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={`count-up-ticker ${className}`} style={style}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
