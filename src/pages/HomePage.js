import { Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "../globalStyles";
import WaveItem from "../components/WaveItem";
import { gray500 } from "../constants";

const waves = [
  {
    title: "wave1",
    timeRange: "7:30 - 8:00",
    color: "lightblue",
  },
  {
    title: "wave2",
    timeRange: "7:30 - 8:00",
    color: "pink",
  },
  {
    title: "wave1",
    timeRange: "7:30 - 8:00",
    color: "lightgreen",
  },
];

export default function HomePage() {
  return (
    <View style={styles.homePage}>
      <View style={styles.waveListContainer}>
        {waves.map((wave, i) => (
          <>
            {i !== 0 && <View style={styles.separator} />}
            <WaveItem
              title={wave.title}
              timeRange={wave.timeRange}
              color={wave.color}
            />
          </>
        ))}
      </View>

      <Pressable style={globalStyles.button}>
        <Text style={globalStyles.text}>
          <Text style={globalStyles.textBlue}>new </Text>
          <Text style={globalStyles.textPurple}>Wave</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: "center",
    flex: 1,
    padding: 24,
  },
  waveListContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  separator: {
    height: 16,
    borderColor: gray500,
    borderLeftWidth: 1,
    marginLeft: 17,
  },
});
