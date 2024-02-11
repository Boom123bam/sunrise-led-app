import AsyncStorage from "@react-native-async-storage/async-storage";
import { postWaves } from "../utils/post";
import Toast from "react-native-root-toast";
import { errorRed, successGreen } from "../constants";
import { create } from "zustand";

export const useWaves = create((set, get) => ({
  waves: [],
  setWaves: (newWaves) => set({ waves: newWaves }),

  fetchWaves: async () => {
    try {
      const storedWaves = await AsyncStorage.getItem("waves");
      if (storedWaves) {
        set({ waves: JSON.parse(storedWaves) });
      }
    } catch (error) {
      console.error("Error fetching waves from AsyncStorage:", error);
    }
  },

  addWave: async (newWave) => {
    try {
      const updatedWaves = [...get().waves, newWave];
      updatedWaves.sort(
        (a, b) =>
          a.startHour * 60 + a.startMinute - (b.startHour * 60 + b.startMinute),
      );
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      const ip = await AsyncStorage.getItem("ip");
      set({ waves: updatedWaves });
      await postWaves(updatedWaves, ip);
      Toast.show("Waves uploaded", {
        duration: Toast.durations.LONG,
        backgroundColor: successGreen,
      });
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: errorRed,
      });
      console.error("Error adding waves:", error);
    }
  },

  editWave: async (waveIndex, newWave) => {
    try {
      const updatedWaves = [...get().waves];
      updatedWaves[waveIndex] = newWave;
      updatedWaves.sort(
        (a, b) =>
          a.startHour * 60 + a.startMinute - (b.startHour * 60 + b.startMinute),
      );
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      const ip = await AsyncStorage.getItem("ip");
      set({ waves: updatedWaves });
      await postWaves(updatedWaves, ip);
      Toast.show("Waves uploaded", {
        duration: Toast.durations.LONG,
        backgroundColor: successGreen,
      });
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: errorRed,
      });
      console.error("Error adding waves:", error);
    }
  },

  removeWave: async (waveIndex) => {
    try {
      const updatedWaves = [...get().waves];
      updatedWaves.splice(waveIndex, 1);
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      const ip = await AsyncStorage.getItem("ip");
      set({ waves: updatedWaves });
      await postWaves(updatedWaves, ip);
      Toast.show("Waves uploaded", {
        duration: Toast.durations.LONG,
        backgroundColor: successGreen,
      });
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: errorRed,
      });
      console.error("Error adding waves:", error);
    }
  },
}));
