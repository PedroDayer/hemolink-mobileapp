import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    infoPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    infoTexto: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 12,
        color: theme.colors.textMuted,
    },
    infoValor: {
        fontSize: 15,
        color: theme.colors.textTitle,
    },
});