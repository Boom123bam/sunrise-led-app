import { StyleSheet } from "react-native";
import { gray400, gray500, gray700, text1, text2, textBase } from "./constants";

export default globalStyles = StyleSheet.create({
  text: {
    color: textBase,
    fontSize: 16,
    fontFamily: "JetBrains-Mono-regular",
  },
  bold: {
    fontFamily: "JetBrains-Mono-bold",
  },
  textPurple: {
    color: text1,
  },
  textBlue: {
    color: text2,
  },
  textLight: {
    color: gray700,
  },
  textDark: {
    color: gray500,
  },
  button: {
    backgroundColor: gray500,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: "center",
  },
  secondary: {
    backgroundColor: gray400,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  popupContainer: {
    position: "absolute",
    width: 350,
    top: 50,
    backgroundColor: gray400,
    zIndex: 100,
    padding: 20,
    borderRadius: 10,
    gap: 30,
  },
});
