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
import { Ionicons } from "@expo/vector-icons";

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
  percentage = 0,
  tipoCritico = "Nenhum",
  sourceStyleAdd,
  cityStyleAdd,
  nameStyleAdd,
  stateStyleAdd,
  cardStyleView,
}: PropsCardBase) => {
  
  const getStatusInfo = (percentage: number) => {
    if (percentage <= 30)
      return { color: "#DC2626", label: "Crítico", prefixo: "Urgência" };
    if (percentage <= 50)
      return { color: "#FF8C00", label: "Alerta", prefixo: "Necessita" };
    return { color: "#466585", label: "Regular", prefixo: "Necessita" };
  };

  // Extracao e renomeacao dos valores
  const {
    color: statusColor,
    label: statusLabel,
    prefixo,
  } = getStatusInfo(percentage);
  return (
    <View style={[styles.container, cardStyleView]}>
      <View style={[styles.containerImagem]}>
        {source && (
          <Image
            style={[styles.imagem, sourceStyleAdd]}
            source={{ uri: source }}
          />
        )}
        {tipoCritico !== "Nenhum" && (
          <View style={[styles.pilula, { backgroundColor: statusColor }]}>
            <Text style={styles.pilulaText}>
              {prefixo}: {tipoCritico}
            </Text>
          </View>
        )}
      </View>
      {name && <Text style={[nameStyleAdd]}>{name}</Text>}
      <View style={styles.containerEndereco}>
        {city && <Text style={[cityStyleAdd]}>{city}</Text>}
        {state && <Text style={[stateStyleAdd]}>{state}</Text>}
      </View>
    </View>
  );
};
