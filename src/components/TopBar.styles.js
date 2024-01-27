import { StyleSheet } from "react-native";
import { gray500, textBase } from "../constants";

export default TopBarStyles = StyleSheet.create({
  topBarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -100,
    zIndex: 100,

  },
  top: {
    backgroundColor: gray500,
    height: 130,
    flex: 1,
  },
  middleBox: {
    backgroundColor: gray500,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 28,
    alignSelf: "center",
  },
  middleBoxText: {
    color: textBase,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "JetBrains-Mono-bold",
    lineHeight: 28,
    transform: [{ translateY: -12 }],
  },
});
