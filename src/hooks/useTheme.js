import { useCallback, useState } from 'react';

/**
 * useTheme - tema claro por padrão; escuro é um atalho escondido (duplo clique na logo).
 *
 * Fonte da verdade: atributo data-theme no <html>. O script inline do index.html
 * aplica o valor salvo antes da primeira pintura, evitando piscar o tema errado.
 * A troca usa View Transitions (crossfade) quando disponível e sem movimento reduzido.
 */
const STORAGE_KEY = 'viston-theme';

const readTheme = () =>
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  const toggle = useCallback(() => {
    const next = readTheme() === 'dark' ? 'light' : 'dark';

    const apply = () => {
      if (next === 'dark') document.documentElement.dataset.theme = 'dark';
      else delete document.documentElement.dataset.theme;
      setTheme(next);
    };

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* armazenamento bloqueado: o tema vale só para esta visita */
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !reduce) {
      // Se a aba não estiver pintando, a transição expira; o tema já foi aplicado no callback.
      const t = document.startViewTransition(apply);
      t.ready.catch(() => {});
      t.finished.catch(() => {});
    } else {
      apply();
    }
  }, []);

  return { theme, toggle };
}
