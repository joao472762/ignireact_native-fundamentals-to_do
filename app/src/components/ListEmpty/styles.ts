import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
    listEmptyContainer:{
        paddingHorizontal: 20,
        paddingVertical: 48,
        alignItems: 'center'

    },

    StrongParagraph: {
        marginTop: 16,
        fontSize: 14,
        fontFamily: theme.fonts.InterBold,
        color: theme.colors.gray300

    },

    Paragraph:{
        fontFamily: theme.fonts.InterRegular,
        color: theme.colors.gray300,

    }

    
})