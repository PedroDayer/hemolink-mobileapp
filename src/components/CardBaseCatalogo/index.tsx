import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./style";
import { Hospital } from "../../util/tipagemDadosApi";

interface PropsCardBase {
  // OBS: ANY POR ENQUANTO
  source?: any;
  percentage?: number;
  state?: string;
  city?: string;
  name?: string;
  nameStyleAdd?: TextStyle;
  cityStyleAdd?: TextStyle;
  stateStyleAdd?: TextStyle;
  sourceStyleAdd?: ImageStyle;
  cardStyleView?: ViewStyle;
  tipoCritico?: string;
}

export const CardBaseCatalogo = ({
  source,
  state,
  city,
  name,
  percentage,
  tipoCritico,
  sourceStyleAdd,
  cityStyleAdd,
  nameStyleAdd,
  stateStyleAdd,
  cardStyleView,
}: PropsCardBase) => {
  return (
    <View style={[styles.container, cardStyleView]}>
      <View style={[styles.containerImagem]}>
        {source && (
          <Image
            style={[styles.imagem, sourceStyleAdd]}
            source={{ uri: source }}
          />
        )}
      </View>
      {name && <Text style={[nameStyleAdd]}>{name}</Text>}
      <View style={styles.containerEndereco}>
        {city && <Text style={[cityStyleAdd]}>{city}</Text>}
        {state && <Text style={[stateStyleAdd]}>{state}</Text>}
      </View>
      <View>
        <Text>{percentage}</Text>
      </View>
      <View>
        <Text>{tipoCritico}</Text>
      </View>
    </View>
  );
};
