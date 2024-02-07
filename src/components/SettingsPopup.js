import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { gray500, gray600 } from "../constants";
import { useState } from "react";
import globalStyles from "../globalStyles";

export default function SettingsPopup({ setShowSettings }) {
  function handleCancel() {
    setShowSettings(false);
  }
  function handleSave() {}
  function handleTest() {}
  function handleIpChange() {}

  const [ip, setIp] = useState("");

  return (
    <View style={styles.popupContainerContainer}>
      <View
        style={[
          globalStyles.popupContainer,
          globalStyles.shadow,
          styles.popupContainer,
        ]}
      >
        <Text
          style={[globalStyles.text, globalStyles.bold, styles.settingsText]}
        >
          settings
        </Text>

        <View style={styles.propertyLine}>
          <Text style={globalStyles.text}>
            .<Text style={globalStyles.textBlue}>ip_address</Text> ={" "}
          </Text>
          <TextInput
            style={[globalStyles.text, globalStyles.textPurple]}
            placeholder="192.168.0.0"
            placeholderTextColor={gray500}
            inputMode="numeric"
            returnKeyType="done"
            value={ip}
            onChangeText={handleIpChange}
            maxLength={5}
          />
          <Text style={globalStyles.text}>;</Text>
        </View>

        <Pressable style={[globalStyles.button]} onPress={handleTest}>
          <Text style={globalStyles.text}>
            .<Text style={globalStyles.textPurple}>test</Text>
            <Text style={globalStyles.textBlue}>()</Text>
          </Text>
        </Pressable>

        <View style={EditAddStyles.popupButtonsContainer}>
          <Pressable onPress={handleCancel} style={[globalStyles.button]}>
            <Text style={globalStyles.text}>
              /<Text style={globalStyles.textBlue}>..</Text>
            </Text>
          </Pressable>
          <Pressable
            style={[globalStyles.button, styles.popupSaveButton]}
            onPress={handleSave}
          >
            <Text style={globalStyles.text}>
              .<Text style={globalStyles.textPurple}>save</Text>
              <Text style={globalStyles.textBlue}>()</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popupContainerContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    transform: [{ translateY: 150 }],
    zIndex: 1000,
  },
  popupContainer: {
    padding: 30,
  },
  settingsText: {
    alignSelf: "center",
  },
  propertyLine: {
    flexDirection: "row",
  },
  popupSaveButton: {
    backgroundColor: gray600,
  },
});
