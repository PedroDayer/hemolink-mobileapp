import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { styles } from "./style";
import { theme } from "../../theme";

type InfoPerfilProps = {
    icone: keyof typeof Ionicons.glyphMap;
    label: string;
    valor: string;
    semLinha?: boolean;
};

export const InfoPerfil = ({ icone, label, valor, semLinha }: InfoPerfilProps) => {
    return (
        <View style={[styles.infoPerfil, semLinha && {borderBottomWidth: 0}]}>
            <Ionicons name={icone} size={20} color={theme.colors.secondary} />
            <View style={styles.infoTexto}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValor}>{valor}</Text>
            </View>
        </View>
    )
}