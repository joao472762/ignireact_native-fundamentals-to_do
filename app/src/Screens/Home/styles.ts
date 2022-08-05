import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

import { theme } from "../../global/styles";

const {colors,fonts}  = theme
export const styles = StyleSheet.create({
    homeContainer:{
        flex: 1,
        backgroundColor: colors.background
    },

    header:{
        height: 173,
       
        backgroundColor: colors.gray700,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    content: {
        paddingHorizontal: 24,
    },

    form: {
        justifyContent: 'center',
        marginTop: -27,
        flexDirection: 'row'
    },

    taskInput: {
        flex: 1,
        fontSize: 16,
        borderRadius: 8,
        height: 54,
        
        color: colors.gray100,
        lineHeight: 140,
        fontFamily: fonts.InterRegular,
        backgroundColor: colors.gray500,
        paddingHorizontal: 24,
        
    },

    addButton: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 52,
        width:  52,
        marginLeft: 4,
        borderRadius: 8,
        backgroundColor: colors.blue600,
    
    },
    addIcon:{
        fontSize: 16,
        color: colors.gray100,
    },

    tasksInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 33,
    },
    taskInfo:{
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    title:{
        fontSize: 16,
        color: colors.blue300,
        fontFamily: fonts.InterBold,
    },
    counterContainer:{
        alignItems: 'center',
    

        width: 25,
        height: 19,
        marginLeft: 8,
        backgroundColor: colors.gray400,
        borderRadius: 12.5
      
    },

    counter :{
        
        fontSize: 12,
        fontFamily: fonts.InterBold,
        color: colors.gray100
    }
})