import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import globalStyles from "../globalStyles";
import { gray500 } from "../constants";

export default function EditAdd() {
  return (
    <View style={[styles.container, {marginBottom: 16}]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.waveInfo}>
            <TextInput
              style={[globalStyles.text, styles.waveName]}
              placeholder="name"
              placeholderTextColor={gray500}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <View style={styles.colorCircle} />
            <View style={styles.wavePropreties}>
              <View style={styles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>start_time</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="0.00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                />
                <Text style={globalStyles.text}>;</Text>
              </View>
              <View style={styles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>start_time</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="0.00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                />
                <Text style={globalStyles.text}>;</Text>
              </View>
              <View style={styles.propertyLine}>
                <Text style={globalStyles.text}>
                  .<Text style={globalStyles.textBlue}>start_time</Text> ={" "}
                </Text>
                <TextInput
                  style={[globalStyles.text, globalStyles.textPurple]}
                  placeholder="0.00"
                  placeholderTextColor={gray500}
                  inputMode="numeric"
                />
                <Text style={globalStyles.text}>;</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.actionButtons}>
        <Pressable style={[globalStyles.button, globalStyles.secondary]}>
          <Text style={globalStyles.text}>
            /<Text style={globalStyles.textBlue}>..</Text>
          </Text>
        </Pressable>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.text}>
            .<Text style={globalStyles.textPurple}>save</Text>()
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "lightblue",
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
});
