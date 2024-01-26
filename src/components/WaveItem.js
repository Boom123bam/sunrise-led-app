import { Image, View, Text, Pressable, StyleSheet } from "react-native";
import globalStyles from "../globalStyles";
import { gray700 } from "../constants";

const editIcon = require("../assets/edit.png");

export default function WaveItem({ title,  color, timeRange }) {
  return (
    <Pressable style={WaveItemStyles.container} onPress={()=>console.log("press")}>
      <View style={WaveItemStyles.leftContainer}>
        <View
          style={[WaveItemStyles.colorCircle, { backgroundColor: color }]}
        />
        <View style={WaveItemStyles.leftTextContainer}>
          <Text style={globalStyles.text}>{title}</Text>
          <Text style={[globalStyles.text, WaveItemStyles.smallText]}>
            {timeRange}
          </Text>
        </View>
      </View>

      <Image source={editIcon} style={WaveItemStyles.editIcon} />
    </Pressable>
  );
}

const WaveItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 100,
  },
  leftTextContainer: {},
  smallText: {
    fontSize: 10,
    color: gray700,
  },
  editIcon: {
    marginTop: 4,
  }
});
