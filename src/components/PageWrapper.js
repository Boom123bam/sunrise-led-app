import { View, Text, StyleSheet } from "react-native";
import { gray300, gray500 } from "../constants.js";
import TopBar from "../components/TopBar.js";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../globalStyles.js";

export default function PageWrapper({titleJsx, children }) {
  return (
    <SafeAreaView style={pageWrapperStyles.pageContainer}>
      <StatusBar style="light" />
      <View style={pageWrapperStyles.contentContainer}>
        <TopBar>
          <Text
            style={[globalStyles.defaultText, pageWrapperStyles.topBarText]}
          >
            {titleJsx}
          </Text>
        </TopBar>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
}

const pageWrapperStyles = StyleSheet.create({
  pageContainer: { backgroundColor: gray500, flex: 1 },
  contentContainer: { backgroundColor: gray300, flex: 1 },
  topBarText: { fontSize: 20 },
});