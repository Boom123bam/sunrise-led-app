import { Text } from "react-native";
import { create } from "zustand";

export const usePage = create((set) => ({
  title: "page title",
  setTitle: (newTitle) => set({ title: newTitle , titleJsx: <Text>{newTitle}</Text>}),
  titleJsx: null,
}));
