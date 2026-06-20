import { TouchableOpacity, View, Text, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type PropsBotaoAtalho = {
  label?: string;
  icon: IconName;
  onPress: () => void;
  sizeIcone?: number;
  corIcone?: string;
  estiloLabelAdd?: TextStyle;
};

export const BotaoAtalho = ({
  label,
  icon,
  onPress,
  sizeIcone = 30,
  estiloLabelAdd,
  corIcone = "black",
}: PropsBotaoAtalho) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={sizeIcone} color={corIcone} />
      </View>

      {label && <Text style={[styles.label, estiloLabelAdd]}>{label}</Text>}
    </TouchableOpacity>
  );
};
