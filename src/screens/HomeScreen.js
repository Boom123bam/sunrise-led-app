import { View, Text } from "react-native";
import { gray300 } from "../constants.js";
import TopBar from "../components/TopBar.js";

export default function HomeScreen({ navigation }) {
  navigation.setOptions(
    (screenOptions = {
      headerShown: false,
      contentStyle: {
        backgroundColor: gray300,
      },
    }),
  );
  console.log("navigation");
  return (
    <View>
      <TopBar text={"waves[3]"} />
      <Text>home screen</Text>
    </View>
  );
}
