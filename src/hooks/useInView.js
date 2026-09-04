import { useState, useEffect, useRef } from 'react';

/**
 * useInView - Hook de alto desempenho para animações de scroll baseadas em IntersectionObserver.
 * Respeita preferências de redução de movimento (prefers-reduced-motion) e desconecta o observer após ativação.
 */
export function useInView(options = {}) {
  const {
    threshold = 0.08,
    rootMargin = '0px 0px -20px 0px',
    triggerOnce = true
  } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Se o usuário prefere movimento reduzido, marca imediatamente como visível
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}
