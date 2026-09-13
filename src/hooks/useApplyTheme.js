import { useEffect } from 'react';
import useThemeStore from '#store/theme';

const DARK_QUERY = '(prefers-color-scheme: dark)';

const useApplyTheme = () => {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    const root = document.documentElement;

    if (mode !== 'system') {
      root.classList.toggle('dark', mode === 'dark');
      return;
    }

    const mql = window.matchMedia(DARK_QUERY);
    root.classList.toggle('dark', mql.matches);

    const handleChange = (e) => root.classList.toggle('dark', e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [mode]);
};

export default useApplyTheme;
