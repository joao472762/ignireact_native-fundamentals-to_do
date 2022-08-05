import { View, Text, TouchableOpacity} from "react-native";
import {Trash} from 'phosphor-react-native'
import { styles } from "./styles";
import { theme } from "../../global/styles";
import Check from "../../assets/check.svg"
export function Task (){

    const isChecked= true

    return(
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.buttonCheck}>
                <View style={isChecked ? styles.chekced: styles.check}>
                    <Check/>
                </View>
            </TouchableOpacity>
            <Text style={styles.description}>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
            <TouchableOpacity style={styles.removeButton}>
                <Trash size={20} color={theme.colors.gray300}/>
            </TouchableOpacity>


        </View>
    )
}