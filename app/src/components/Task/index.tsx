import {Trash} from 'phosphor-react-native'
import { View, Text, TouchableOpacity, Alert} from "react-native";

import { styles } from "./styles";
import Check from "../../assets/check.svg"
import { theme } from "../../global/styles";
import { TaskProps } from "../../Screens/Home";

interface props {
    task: TaskProps,
    deleteOneTask: (id: string) => void
    checkOneTask: (id:string) => void
}

export function Task ({task,deleteOneTask,checkOneTask}: props){
    const {description,hasFinished,id}  = task

    function handleDeleteOneTask(){
        Alert.alert("Apagar tarefa", "Tem Certeza que quer Apagar Está Tarefa ?",[
            {
                text: 'não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'destructive',
                onPress: () => deleteOneTask(id)
            }
        ])
    }
    function handleCheckOneTask(){
        checkOneTask(id)
    }
    const isChecked= hasFinished

    return(
        <View style={styles.taskContainer}>
            <TouchableOpacity
                onPress={handleCheckOneTask} 
                style={styles.buttonCheck}
            >
                <View style={isChecked ? styles.chekced: styles.check}>
                    <Check/>
                </View>
            </TouchableOpacity>
            <Text style={styles.description}>
                {description}
            </Text>
            <TouchableOpacity
                onPress={handleDeleteOneTask}
                style={styles.removeButton}
            >
                <Trash size={20} color={theme.colors.gray300}/>
            </TouchableOpacity>


        </View>
    )
}