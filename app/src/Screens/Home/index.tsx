import {View , Text, TextInput} from 'react-native'
import { theme } from '../../global/styles'
import Logo from '../../assets/Logo.svg'

export function Home(){
    return(
        <View>
            <View>
                <Logo/>
            </View>
            <View>
                <TextInput/>
            </View>
            <Text style={{fontFamily: theme.fonts.InterBold}}> you achieve in Home component</Text>
        </View>
    )
}