import { create } from "zustand";

export const usePage = create((set) => ({
  title: "home",
  setTitle: (newTitle) => set({ title: newTitle, titleJsx: <>{newTitle}</> }),
  titleJsx: <>home</>,
  currentlyEditingWaveIndex: -1,
  setCurrentlyEditingWaveIndex: (index) =>
    set({ currentlyEditingWaveIndex: index }),
}));
