import { View, StyleSheet } from "react-native";
import TopBar from "../components/TopBar.js";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SettingsPopup from "./SettingsPopup.js";

export default function PageWrapper({ children }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <SafeAreaView style={pageWrapperStyles.background}>
      <StatusBar style="light" />
      <View style={pageWrapperStyles.pageContainer}>
        <TopBar onPress={() => setShowSettings((s) => !s)} />
        {showSettings && <SettingsPopup setShowSettings={setShowSettings} />}
        <View style={pageWrapperStyles.contentContainer}>{children}</View>
      </View>
    </SafeAreaView>
  );
}

const pageWrapperStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 24,
  },
});
