import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PageWrapper from "./src/components/PageWrapper";
import { usePage } from "./src/hooks/usePage";
import HomePage from "./src/pages/HomePage";
import EditAdd from "./src/pages/EditAdd";
import { View } from "react-native";
import { gray300 } from "./src/constants";
import { RootSiblingParent } from "react-native-root-siblings";
import { useWaves } from "./src/hooks/useWaves";
import { useEffect } from "react";

export default function App() {
  const { fetchWaves } = useWaves();
  const { titleJsx, title } = usePage();
  const [fontsLoaded] = useFonts({
    "JetBrains-Mono-regular": require("./src/assets/fonts/jetbrains-mono-regular.ttf"),
    "JetBrains-Mono-bold": require("./src/assets/fonts/jetbrains-mono-bold.ttf"),
  });

  useEffect(() => {
    fetchWaves();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <RootSiblingParent>
      <View style={{ backgroundColor: gray300, flex: 1 }}>
        <SafeAreaProvider>
          <PageWrapper titleJsx={titleJsx}>
            {title == "home" ? (
              <HomePage />
            ) : title == "add" ? (
              <EditAdd />
            ) : title == "edit" ? (
              <EditAdd />
            ) : (
              <></>
            )}
          </PageWrapper>
        </SafeAreaProvider>
      </View>
    </RootSiblingParent>
  );
}
