import { useState } from 'react'
import uuid from 'react-native-uuid'
import {AntDesign} from '@expo/vector-icons'
import {View , Text, TextInput ,TouchableOpacity, FlatList} from 'react-native'


import { styles } from './styles'
import Logo from '../../assets/Logo.svg'
import { theme } from '../../global/styles'
import { Task } from '../../components/Task'
import { ListEmpty } from '../../components/ListEmpty'

export interface TaskProps {
    id: string 
    description: string,
    hasFinished: boolean,
}

export function Home(){
    const [tasks, setTasks] =  useState<TaskProps[]>([])
    const [taskDecription, setTaskDescription] = useState('')

    const taksDone = tasks.filter(task => {
      return task.hasFinished === true
    })

    function handleCreateNewTask(){
        if (!taskDecription){
            return
        }
        const newTask: TaskProps = {
            id: uuid.v4() as string,
            hasFinished: false,
            description: taskDecription,
        }
        setTaskDescription(() => '')
        setTasks(state => [...state,newTask])
       
    }

    function checkOneTask(id: string){
        const taskWithCheckedChanged = tasks.map(task =>{
            if(task.id ===  id){
                if(task.hasFinished){
                    return {...task,hasFinished: false}
                }
                return {...task,hasFinished: true}   
            }
            return task
        })

        setTasks(taskWithCheckedChanged)
    }

    function deleteOneTask(id: string){
        const taskWitoutOne = tasks.filter(task => task.id !== id)
        setTasks(taskWitoutOne)
    }



    return(
        <View style={styles.homeContainer}>

            <View style={styles.header}>
                <Logo/>
            </View>

            <View style={styles.content}>   

                <View style={styles.form}>
                    <TextInput  
                        value= {taskDecription}
                        style = {styles.taskInput}
                        onChangeText = {setTaskDescription}
                        placeholder= 'Adicione uma nova tarefa'
                        placeholderTextColor={theme.colors.gray300}
                    />
                    <TouchableOpacity 
                        style={styles.addButton}
                        onPress = {handleCreateNewTask}
                    >
                        <AntDesign name='pluscircleo' style={styles.addIcon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.tasksInfo}>
                    <View  style={styles.taskInfo}>
                        <Text style={styles.title}>Criadas</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counter}>{tasks.length}</Text>
                        </View>
                    </View>

                    <View style={styles.taskInfo}>
                        <Text style={[styles.title, {color: theme.colors.purple300}]}>Concluídas</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counter}>{taksDone.length}</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                
                    data={tasks}
                    keyExtractor = {item => item.id}
                    ListEmptyComponent = {() => <ListEmpty/>}
                    renderItem = {({item}) => (
                        <Task
                            task={item}
                            deleteOneTask={deleteOneTask}
                            checkOneTask = {checkOneTask}
                        />
                    )}
                    contentContainerStyle={{marginTop: 20}}
                />
                


            </View>
    
        </View>
    )
}