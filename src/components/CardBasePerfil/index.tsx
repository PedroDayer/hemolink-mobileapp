import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./style";

type CardProps = {
    children: ReactNode;
    cor?: string;
};

export const CardBasePerfil = ({ children, cor }: CardProps) => {
    return (
        <View style={[styles.card, cor && { backgroundColor: cor }]}>
            {children}
        </View>
    );  
};

