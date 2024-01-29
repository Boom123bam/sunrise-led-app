import {
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
import { useEffect, useState } from "react";
import ColorPicker, {
  Panel3,
  Preview,
  BrightnessSlider,
} from "reanimated-color-picker";
import EditAddStyles from "./EditAdd.styles";
import { useWaves } from "../hooks/useWaves";
import { formatTime } from "../utils/time";

export default function EditAdd() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [inDurationStr, setInDurationStr] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [tempColor, setTempColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { title, setTitle, currentlyEditingWaveIndex } = usePage();
  const { waves, addWave } = useWaves();

  useEffect(() => {
    if (title === "edit") {
      const w = waves[currentlyEditingWaveIndex];
      if (!w) return;
      setName(w.name);
      setStartTime(formatTime(w.startHour, w.startMinute));
      setEndTime(formatTime(w.endHour, w.endMinute));
      setInDurationStr(String(w.inDuration));
      setColor(w.color);
    }
  }, [waves]);

  function handleStartTimeChange(newTime) {
    setStartTime(normalizeTimeInput(newTime, startTime));
  }
  function handleEndTimeChange(newTime) {
    setEndTime(normalizeTimeInput(newTime, endTime));
  }
  function handleDurationChange(newDuration) {
    setInDurationStr(newDuration);
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
    setShowColorPicker(false);
  }
  function handleCancelColor() {
    setShowColorPicker(false);
  }
  function handleColorCircleClick() {
    setShowColorPicker(true);
  }
  function handleSave() {
    try {
      const [startHour, startMinute] = convertTimeStringToNumber(
        startTime,
        "start",
      );
      const [endHour, endMinute] = convertTimeStringToNumber(endTime, "end");
      if (isNaN(inDurationStr)) throw new Error("in_duration must be a number");
      const inDuration = Number(inDurationStr);
      if (inDuration < 0) throw new Error("invalid property in_duration");
      const newWave = {
        name,
        color,
        startHour,
        startMinute,
        endHour,
        endMinute,
        endTime,
        inDuration,
      };
      // validate wave
      validateWave(newWave);

      addWave(newWave);
      setTitle("home");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    }
  }

  function convertTimeStringToNumber(timeString, timeName) {
    const timeRegex = /^(\d{1,2})\.(\d{2})$/;
    const match = timeString.match(timeRegex);

    if (!match) {
      throw new Error(`invalid property ${timeName}_time`);
    }

    const [, hours, minutes] = match;
    const hoursInt = parseInt(hours, 10);
    const minutesInt = parseInt(minutes, 10);

    if (hoursInt < 0 || hoursInt > 23 || minutesInt < 0 || minutesInt > 59) {
      throw new Error(`invalid property ${timeName}_time`);
    }

    return [hoursInt, minutesInt];
  }

  function validateWave(newWave) {
    // check if end > start
    if (newWave.endHour < newWave.startHour)
      throw new Error("end_time must be after start_time");

    if (
      newWave.endHour === newWave.startHour &&
      newWave.endMinute < newWave.startMinute
    )
      throw new Error("end_time must be after start_time");

    if (!newWave.name) throw new Error("wave must have a name");
    // check if name taken
    for (const wave of waves) {
      if (wave.name === newWave.name) throw new Error("name already exists");
    }
  }

  return (
    <View style={[EditAddStyles.container, { marginBottom: 16 }]}>
      {showColorPicker && (
        <View
          style={[EditAddStyles.colorPickerPopupContainer, globalStyles.shadow]}
        >
          <ColorPicker
            value={color}
            onComplete={handleNewTempColor}
            style={EditAddStyles.colorPickerContainer}
          >
            <Preview />
            <Panel3 />
            <BrightnessSlider />
          </ColorPicker>

          <View style={EditAddStyles.popupButtonsContainer}>
            <Pressable style={globalStyles.button} onPress={handleCancelColor}>
              <Text style={globalStyles.text}>
                /<Text style={globalStyles.textBlue}>..</Text>
              </Text>
            </Pressable>
            <Pressable
              style={[globalStyles.button, EditAddStyles.popupOKButton]}
              onPress={handleNewColor}
            >
              <Text style={globalStyles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      )}

      <KeyboardAvoidingView
        style={EditAddStyles.container}
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={EditAddStyles.waveInfo}>
            <TextInput
              style={[globalStyles.text, EditAddStyles.waveName]}
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
              style={[EditAddStyles.colorCircle, { backgroundColor: color }]}
              onPress={handleColorCircleClick}
            />
            <View style={EditAddStyles.wavePropreties}>
              <View style={EditAddStyles.propertyLine}>
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
              <View style={EditAddStyles.propertyLine}>
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
              <View style={EditAddStyles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>in_duration</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                  returnKeyType="done"
                  value={inDurationStr}
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
      {errorMessage && (
        <View style={EditAddStyles.errorMessageContainer}>
          <Text style={[globalStyles.text, EditAddStyles.errorMessageText]}>
            <Text style={globalStyles.bold}>Error: </Text>
            {errorMessage}
          </Text>
        </View>
      )}
      <View style={EditAddStyles.actionButtons}>
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
        <Pressable
          style={[globalStyles.button, globalStyles.shadow]}
          onPress={handleSave}
        >
          <Text style={globalStyles.text}>
            .<Text style={globalStyles.textPurple}>save</Text>()
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
