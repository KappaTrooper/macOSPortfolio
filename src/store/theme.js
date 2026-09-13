import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const BASE_URL = import.meta.env.BASE_URL;

export const WALLPAPERS = [
  { id: 'default', label: 'Default', path: `${BASE_URL}images/wallpaper.jpg` },
  { id: 'wallpaper2', label: 'Wallpaper 2', path: `${BASE_URL}images/wallpaper2.jpg` },
  { id: 'wallpaper3', label: 'Wallpaper 3', path: `${BASE_URL}images/1wallpaper.png` },
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
