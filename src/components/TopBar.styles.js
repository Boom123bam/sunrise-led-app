import { StyleSheet } from "react-native";
import { gray500, textBase } from "../constants";

export default TopBarStyles = StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
  },
  smallBar: {
    backgroundColor: gray500,
    height: 24,
    flex: 1,
  },
  middleBox: {
    backgroundColor: gray500,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
  middleBoxText: {
    color: textBase,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "JetBrains-Mono-bold",
    lineHeight: 28,
  },
});
