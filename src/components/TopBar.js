import { View } from "react-native";
import TopBarStyles from "./TopBar.styles";

export default function TopBar({ children }) {
  return (
    <View style={TopBarStyles.topBarContainer}>
      <View style={TopBarStyles.smallBar} />
      <View style={TopBarStyles.middleBox}>{children}</View>
      <View style={TopBarStyles.smallBar} />
    </View>
  );
}
