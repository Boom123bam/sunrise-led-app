import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { postWaves } from "../utils/post";
import Toast from "react-native-root-toast";
import { errorRed } from "../constants";

export function useWaves() {
  const [waves, setWaves] = useState([]);

  const fetchWaves = async () => {
    try {
      const storedWaves = await AsyncStorage.getItem("waves");
      if (storedWaves) {
        setWaves(JSON.parse(storedWaves));
      }
    } catch (error) {
      console.error("Error fetching waves from AsyncStorage:", error);
    }
  };

  const addWave = async (newWave) => {
    try {
      const updatedWaves = [...waves, newWave];
      updatedWaves.sort(
        (a, b) =>
          a.startHour * 60 + a.startMinute - (b.startHour * 60 + b.startMinute),
      );
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      const ip = await AsyncStorage.getItem("ip");
      await postWaves(updatedWaves, ip);
      setWaves(updatedWaves);
      Toast.show("Waves uploaded", {
        duration: Toast.durations.LONG,
        backgroundColor: "green",
      });
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: errorRed,
      });
      console.error("Error adding wave to AsyncStorage:", error);
    }
  };

  const editWave = async (waveIndex, newWave) => {
    try {
      const updatedWaves = [...waves];
      updatedWaves[waveIndex] = newWave;
      updatedWaves.sort(
        (a, b) =>
          a.startHour * 60 + a.startMinute - (b.startHour * 60 + b.startMinute),
      );
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      const ip = await AsyncStorage.getItem("ip");
      await postWaves(updatedWaves, ip);
      setWaves(updatedWaves);
      Toast.show("Waves uploaded", {
        duration: Toast.durations.LONG,
        backgroundColor: "green",
      });
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: errorRed,
      });
      console.error("Error adding wave to AsyncStorage:", error);
    }
  };

  const removeWave = async (waveIndex) => {
    try {
      const updatedWaves = [...waves];
      updatedWaves.splice(waveIndex, 1);
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      const ip = await AsyncStorage.getItem("ip");
      await postWaves(updatedWaves, ip);
      setWaves(updatedWaves);
      Toast.show("Waves uploaded", {
        duration: Toast.durations.LONG,
        backgroundColor: "green",
      });
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        backgroundColor: errorRed,
      });
      console.error("Error adding wave to AsyncStorage:", error);
    }
  };

  useEffect(() => {
    fetchWaves();
  }, []); // Fetch waves on component mount

  return { waves, addWave, editWave, removeWave };
}
