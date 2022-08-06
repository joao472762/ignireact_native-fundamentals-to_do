import { View, Text} from "react-native";
import { styles } from "./styles";
import Clipboard from "../../assets/clipboard.svg"

export function ListEmpty(){
    return(
        <View style={styles.listEmptyContainer}>
            <Clipboard/>
            <Text style={styles.StrongParagraph}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.Paragraph}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}