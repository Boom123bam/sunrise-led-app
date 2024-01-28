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
import { gray400, gray500, gray600 } from "../constants";
import { usePage } from "../hooks/usePage";
import { useState } from "react";
import ColorPicker, {
  Panel3,
  Preview,
  BrightnessSlider,
} from "reanimated-color-picker";

export default function EditAdd() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [inDuration, setInDuration] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [tempColor, setTempColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
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
      return previousValue + "." + value[2];
    if (value.length === 3 && previousValue.length === 4)
      return value.substring(0, 2);
    return value;
  };

  const handleNewTempColor = ({ hex }) => {
    setTempColor(hex);
  };

  function handleNewColor() {
    setColor(tempColor);
    setShowColorPicker(false)
  }
  function handleCancelColor() {
    setShowColorPicker(false);
  }
  function handleColorCircleClick() {
    setShowColorPicker(true)
  }

  return (
    <View style={[styles.container, { marginBottom: 16 }]}>
      {showColorPicker && (
        <View style={[styles.colorPickerPopupContainer, globalStyles.shadow]}>
          <ColorPicker
            value={color}
            onComplete={handleNewTempColor}
            style={styles.colorPickerContainer}
          >
            <Preview />
            <Panel3 />
            <BrightnessSlider />
          </ColorPicker>

          <View style={styles.popupButtonsContainer}>
            <Pressable style={globalStyles.button} onPress={handleCancelColor}>
              <Text style={globalStyles.text}>
                /<Text style={globalStyles.textBlue}>..</Text>
              </Text>
            </Pressable>
            <Pressable
              style={[globalStyles.button, styles.popupOKButton]}
              onPress={handleNewColor}
            >
              <Text style={globalStyles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      )}

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
            <Pressable
              style={[styles.colorCircle, { backgroundColor: color }]}
              onPress={handleColorCircleClick}
            />
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
  colorPickerPopupContainer: {
    position: "absolute",
    width: 350,
    top: 50,
    backgroundColor: gray400,
    zIndex: 100,
    padding: 20,
    borderRadius: 10,
    gap: 30,
  },
  colorPickerContainer: {
    gap: 20,
  },
  popupButtonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  popupOKButton: {
    backgroundColor: gray600,
  },
});
