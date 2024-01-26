import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PageWrapper from "./src/screens/PageWrapper";

export default function App() {
  const [fontsLoaded] = useFonts({
    "JetBrains-Mono-regular": require("./src/assets/fonts/jetbrains-mono-regular.ttf"),
    "JetBrains-Mono-bold": require("./src/assets/fonts/jetbrains-mono-bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <PageWrapper />
    </SafeAreaProvider>
  );
}
