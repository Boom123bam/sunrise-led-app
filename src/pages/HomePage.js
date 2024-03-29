import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../globalStyles";
import WaveItem from "../components/WaveItem";
import { gray500 } from "../constants";
import { usePage } from "../hooks/usePage";
import { useWaves } from "../hooks/useWaves";
import { formatTime } from "../utils/time";

export default function HomePage() {
  const { setTitle, setCurrentlyEditingWaveIndex } = usePage();
  const { waves } = useWaves();

  return (
    <View style={styles.homePage}>
      <ScrollView
        style={styles.waveListScrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.waveListContainer}>
          {waves.map((wave, i) => (
            <View key={i}>
              {i !== 0 && <View style={styles.separator} />}
              <WaveItem
                title={wave.name}
                timeRange={`${formatTime(wave.startHour, wave.startMinute)} - ${formatTime(wave.endHour, wave.endMinute)}`}
                color={wave.color}
                handlePress={() => {
                  setCurrentlyEditingWaveIndex(i);
                  setTitle("edit");
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[globalStyles.button, globalStyles.shadow]}
          onPress={() => setTitle("add")}
        >
          <Text style={globalStyles.text}>
            <Text style={globalStyles.textPurple}>new </Text>
            <Text style={globalStyles.textBlue}>Wave</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 24,
  },
  waveListScrollContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  waveListContainer: {
    marginTop: 50,
  },
  separator: {
    height: 16,
    borderColor: gray500,
    borderLeftWidth: 1,
    marginLeft: 17,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
  },
});
