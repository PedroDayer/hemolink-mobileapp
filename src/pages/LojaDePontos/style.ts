import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 30
    },
    pointsContainer: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    heroSquare: {
        width: '100%',
        height: 800,
        backgroundColor: `${theme.colors.primary}`,
        position: 'absolute',
        top: 0,
    },
    gifIcon: {
        position: 'absolute',
        right: 16,
        top: 10,
        transform: [
            { rotate: '10deg' } 
        ]

    },
    textWhite: {
        color: `${theme.colors.terciary}`,
    },
    points: {
        fontSize: 22,
        marginTop:-8,
        fontWeight:'600'
    },
        fullWidthSection: {
        marginHorizontal: -30,
    },
    categoriesContainer:{
        margin:0
    }

})