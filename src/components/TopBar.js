import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { gray500, gray700, textBase } from "../constants";

export default function TopBar({ text }) {
  return (
    <SafeAreaView style={styles.topBar}>
      <View style={styles.smallTopBar}></View>
      <View style={styles.middleBox}>
        <Text style={styles.middleBoxText}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignItems: "center",
  },
  smallTopBar: {
    backgroundColor: gray500,
    height: 20,
    alignSelf: 'stretch',
  },
  middleBoxText: {
    color: textBase,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "JetBrains-Mono-bold",
  },
  middleBox: {
    backgroundColor: gray500,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
});
