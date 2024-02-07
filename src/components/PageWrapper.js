import { View, StyleSheet } from "react-native";
import TopBar from "../components/TopBar.js";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SettingsPopup from "./SettingsPopup.js";
import { usePage } from "../hooks/usePage.js";

export default function PageWrapper({ children }) {
  const [showSettings, setShowSettings] = useState(false);
  const { title } = usePage();

  return (
    <SafeAreaView style={pageWrapperStyles.background}>
      <StatusBar style="light" />
      <View style={pageWrapperStyles.pageContainer}>
        <TopBar
          onPress={() => {
            if (title == "home") setShowSettings((s) => !s);
          }}
        />
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
