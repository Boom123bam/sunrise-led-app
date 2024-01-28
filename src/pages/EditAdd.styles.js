import { StyleSheet } from "react-native";
import { gray400, gray600 } from "../constants";

export default EditAddStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  waveInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 80,
  },
  waveName: {
    fontSize: 24,
    fontFamily: "JetBrains-Mono-bold",
  },
  colorCircle: {
    width: 220,
    height: 220,
    borderRadius: 1000,
    marginBottom: 30,
  },
  wavePropreties: {
    width: 270,
    alignItems: "flex-start",
    gap: 24,
  },
  propertyLine: {
    flexDirection: "row",
  },
  propertyInput: {},
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  colorPickerPopupContainer: {
    position: "absolute",
    width: 350,
    top: 50,
    backgroundColor: gray400,
    zIndex: 100,
    padding: 20,
    borderRadius: 10,
    gap: 30,
  },
  colorPickerContainer: {
    gap: 20,
  },
  popupButtonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  popupOKButton: {
    backgroundColor: gray600,
  },
});