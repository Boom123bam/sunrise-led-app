import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
  "JetBrains-Mono-regular": require('./src/assets/fonts/jetbrains-mono-regular.ttf'),
  "JetBrains-Mono-bold": require("./src/assets/fonts/jetbrains-mono-bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    // <View><Text style={{color: "red", fontFamily: "JetBrains-Mono-regular"}}>hello</Text></View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
