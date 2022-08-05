import {View , Text, TextInput ,TouchableOpacity} from 'react-native'
import { theme } from '../../global/styles'
import Logo from '../../assets/Logo.svg'
import {AntDesign} from '@expo/vector-icons'
import { styles } from './styles'



export function Home(){
    return(
        <View style={styles.homeContainer}>

            <View style={styles.header}>
                <Logo/>
            </View>

            <View style={styles.content}>

                <View style={styles.form}>
                    <TextInput 
                        placeholder= 'Adicione uma nova tarefa'
                        placeholderTextColor={theme.colors.gray300}
                        style={styles.taskInput}
                    />
                    <TouchableOpacity style={styles.addButton}>
                        <AntDesign name='pluscircleo' style={styles.addIcon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.tasksInfo}>
                    <View  style={styles.taskInfo}>
                        <Text style={styles.title}>Criadas</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counter}>0</Text>
                        </View>
                    </View>

                    <View style={styles.taskInfo}>
                        <Text style={[styles.title, {color: theme.colors.purple300}]}>Concluídas</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counter}>0</Text>
                        </View>
                    </View>
                </View>


            </View>
    
        </View>
    )
}