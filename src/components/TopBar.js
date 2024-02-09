import { View, Text } from "react-native";
import TopBarStyles from "./TopBar.styles";
import globalStyles from "../globalStyles";
import { useEffect, useState } from "react";
import { usePage } from "../hooks/usePage";
import { useWaves } from "../hooks/useWaves";

export default function TopBar({ onPress }) {
  const [pageTitleJsx, setPageTitleJsx] = useState(<></>);
  const { title } = usePage();
  const { waves } = useWaves();

  useEffect(() => {
    switch (title) {
      case "home":
        setPageTitleJsx(
          <>
            waves
            <Text style={globalStyles.textPurple}>
              [<Text style={globalStyles.textBlue}>{waves.length}</Text>]
            </Text>
          </>,
        );
        break;

      case "edit":
      case "add":
        setPageTitleJsx(
          <>
            .<Text style={globalStyles.textBlue}>{title}</Text>
            <Text style={globalStyles.textPurple}>()</Text>
          </>,
        );
        break;

      default:
        setPageTitleJsx(<>{title}</>);
        break;
    }
  }, [title, waves]);

  return (
    <View style={[TopBarStyles.topBarContainer, globalStyles.shadow]}>
      <View style={TopBarStyles.top} />
      <View style={TopBarStyles.middleBox}>
        <Text style={TopBarStyles.middleBoxText} onPress={onPress}>
          {pageTitleJsx}
        </Text>
      </View>
    </View>
  );
}
