import { StyleSheet } from "react-native";
import { gray500, text1, text2, textBase } from "./constants";

export default globalStyles = StyleSheet.create({
  text: {
    color: textBase,
    fontSize: 16,
    fontFamily: "JetBrains-Mono-bold",
  },
  textBlue: {
    color: text1,
  },
  textPurple: {
    color: text2,
  },
  button: {
    backgroundColor: gray500,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
