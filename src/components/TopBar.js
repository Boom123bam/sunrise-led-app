import { View, Text } from "react-native";
import TopBarStyles from "./TopBar.styles";
import globalStyles from "../globalStyles";

export default function TopBar({ children }) {
  return (
    <View style={[TopBarStyles.topBarContainer, globalStyles.shadow]}>
      <View style={TopBarStyles.top} />
      <View style={TopBarStyles.middleBox}>
        <Text style={TopBarStyles.middleBoxText}>{children}</Text>
      </View>
    </View>
  );
}
