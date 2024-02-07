import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { gray500, gray600 } from "../constants";
import { useEffect, useState } from "react";
import globalStyles from "../globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ipDotPos = [3, 7, 9];

function insertDots(str) {
  ipDotPos.forEach(
    (i) =>
      (str = i >= str.length ? str : str.substr(0, i) + "." + str.substr(i)),
  );
  return str;
}

export default function SettingsPopup({ setShowSettings }) {
  const [ip, setIp] = useState("");

  useEffect(() => {
    loadIp();
  }, []);
  async function loadIp() {
    const ip = await AsyncStorage.getItem("ip");
    setIp(ip);
  }
  function handleCancel() {
    setShowSettings(false);
  }
  async function handleSave() {
    await AsyncStorage.setItem("ip", ip);
    setShowSettings(false);
  }
  function handleTest() {}
  function handleIpChange(newIp) {
    newIp = newIp.replaceAll(".", "");
    newIp = insertDots(newIp);
    setIp(newIp);
  }

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
            placeholder="192.168.0.00"
            placeholderTextColor={gray500}
            inputMode="numeric"
            returnKeyType="done"
            value={ip}
            onChangeText={handleIpChange}
            maxLength={12}
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
