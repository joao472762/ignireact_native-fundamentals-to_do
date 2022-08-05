import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const {colors,fonts} = theme
export const styles = StyleSheet.create({
    taskContainer:{
        alignItems: 'center',
        flexDirection: 'row',

        marginBottom: 8,
        backgroundColor: colors.gray500,
        borderRadius: 8,
        padding: 12,
    },
    description:{
        flex: 1,
        fontFamily: fonts.InterRegular,
        fontSize: 14,
        textAlign: 'center',
        color: colors.gray100,
        marginHorizontal: 8
    },
    buttonCheck:{
        height: 18,
        width: 18,
        borderColor: colors.blue300,
        borderWidth: 1,
        borderRadius: 9,
    },
    buttonChecked: {
  
    

        overflow: "hidden",
        height: 18,
        width: 18,
        borderColor: colors.blue300,
        borderWidth: 2,
        borderRadius: 9,
    },
    removeButton:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        width: 32,
    },
    check:{
       display: 'none'
    },

    chekced:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 9,
        backgroundColor: colors.purple300,
    }

   
})

