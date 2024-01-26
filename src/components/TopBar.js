import { StyleSheet, Text, View } from "react-native";
import { gray500, textBase } from "../constants";

export default function TopBar(props) {
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.smallBar} />
      <View style={styles.middleBox}>
        {props.children}
      </View>
      <View style={styles.smallBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
  },
  smallBar: {
    backgroundColor: gray500,
    height: 24,
    flex: 1,
  },
  middleBoxText: {
    color: textBase,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "JetBrains-Mono-bold",
    lineHeight: 28,
  },
  middleBox: {
    backgroundColor: gray500,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
});
