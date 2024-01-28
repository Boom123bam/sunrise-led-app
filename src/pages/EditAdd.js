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
import { useState } from "react";
import ColorPicker, {
  Panel3,
  Preview,
  BrightnessSlider,
} from "reanimated-color-picker";
import EditAddStyles from "./EditAdd.styles";
import { useWaves } from "../hooks/useWaves";

export default function EditAdd() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [inDuration, setInDuration] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [tempColor, setTempColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { setTitle } = usePage();
  const { addWave } = useWaves();

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
    setShowColorPicker(false);
  }
  function handleCancelColor() {
    setShowColorPicker(false);
  }
  function handleColorCircleClick() {
    setShowColorPicker(true);
  }
  function handleSave() {
    addWave({
      name,
      color,
      startHour: startTime.substring(0,2),
      startMinute: startTime.substring(3),
      endHour: endTime.substring(0,2),
      endMinute: endTime.substring(3),
      endTime,
      inDuration,
    });
    setTitle("home")
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
