import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const WALLPAPERS = [
  { id: 'default', label: 'Default', path: '/images/wallpaper.jpg' },
  { id: 'wallpaper2', label: 'Wallpaper 2', path: '/images/wallpaper2.jpg' },
  { id: 'wallpaper3', label: 'Wallpaper 3', path: '/images/1wallpaper.png' },
];

const useThemeStore = create(
  persist(
    (set) => ({
      mode: 'system',
      setMode: (mode) => set({ mode }),
      wallpaper: WALLPAPERS[0].path,
      setWallpaper: (wallpaper) => set({ wallpaper }),
    }),
    { name: 'theme' }
  )
);

export default useThemeStore;
