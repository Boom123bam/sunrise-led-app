import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import globalStyles from "../globalStyles";
import { gray500 } from "../constants";
import { usePage } from "../hooks/usePage";
import { useState } from "react";

export default function EditAdd() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [inDuration, setInDuration] = useState("");
  const { setTitle } = usePage();

  function handleStartTimeChange(newTime) {
    setStartTime(normalizeTimeInput(newTime, startTime));
  }
  function handleEndTimeChange(newTime) {
    setEndTime(normalizeTimeInput(newTime, endTime));
  }
  function handleDurationChange(newDuration) {
    setInDuration(newDuration);
  }

  const normalizeTimeInput = (value, previousValue) => {
    if (value.length === 3 && previousValue.length === 2)
    return previousValue + "." + value[2]
    if (value.length === 3 && previousValue.length === 4)
    return value.substring(0,2)
    return value
  };

  return (
    <View style={[styles.container, { marginBottom: 16 }]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.waveInfo}>
            <TextInput
              style={[globalStyles.text, styles.waveName]}
              placeholder="name"
              placeholderTextColor={gray500}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="done"
              value={name}
              onChangeText={setName}
              maxLength={24}
            />
            <View style={styles.colorCircle} />
            <View style={styles.wavePropreties}>
              <View style={styles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>start_time</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="00.00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                  returnKeyType="done"
                  value={startTime}
                  onChangeText={handleStartTimeChange}
                  maxLength={5}
                />
                <Text style={globalStyles.text}>;</Text>
              </View>
              <View style={styles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>end_time</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="00.00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                  returnKeyType="done"
                  value={endTime}
                  onChangeText={handleEndTimeChange}
                  maxLength={5}
                />
                <Text style={globalStyles.text}>;</Text>
              </View>
              <View style={styles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>in_duration</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                  returnKeyType="done"
                  value={inDuration}
                  onChangeText={handleDurationChange}
                  maxLength={2}
                />
                <Text style={globalStyles.text}>
                  ;<Text style={globalStyles.textDark}>{" // mins"}</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.actionButtons}>
        <Pressable
          onPress={() => setTitle("home")}
          style={[
            globalStyles.button,
            globalStyles.secondary,
            globalStyles.shadow,
          ]}
        >
          <Text style={globalStyles.text}>
            /<Text style={globalStyles.textBlue}>..</Text>
          </Text>
        </Pressable>
        <Pressable style={[globalStyles.button, globalStyles.shadow]}>
          <Text style={globalStyles.text}>
            .<Text style={globalStyles.textPurple}>save</Text>()
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  waveInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 80,
  },
  waveName: {
    fontSize: 24,
    fontFamily: "JetBrains-Mono-bold",
  },
  colorCircle: {
    width: 220,
    height: 220,
    backgroundColor: "lightblue",
    borderRadius: 1000,
    marginBottom: 30,
  },
  wavePropreties: {
    width: 270,
    alignItems: "flex-start",
    gap: 24,
  },
  propertyLine: {
    flexDirection: "row",
  },
  propertyInput: {},
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
});
