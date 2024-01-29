import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

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
      updatedWaves.sort((a, b)=>(a.startHour*60 + a.startMinute) - (b.startHour*60 + b.startMinute))
      await AsyncStorage.setItem("waves", JSON.stringify(updatedWaves));
      setWaves(updatedWaves);
    } catch (error) {
      console.error("Error adding wave to AsyncStorage:", error);
    }
  };

  useEffect(() => {
    fetchWaves();
  }, []); // Fetch waves on component mount

  return { waves, addWave };
}