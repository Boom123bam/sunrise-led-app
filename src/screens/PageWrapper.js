import { View, Text, StyleSheet } from "react-native";
import { gray300, gray500, textBase } from "../constants.js";
import TopBar from "../components/TopBar.js";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageWrapper({ children }) {
  return (
    <SafeAreaView style={{ backgroundColor: gray500, flex: 1 }}>
      <StatusBar style="light" />
      <View style={{ backgroundColor: gray300, flex: 1 }}>
        <TopBar>
          <Text style = {styles.topBarText}>Hi</Text>
        </TopBar>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBarText: {
    color: textBase,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "JetBrains-Mono-bold",
    lineHeight: 28,
  },
});
