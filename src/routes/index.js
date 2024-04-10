import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Signin from '../pages/Signin'
import Intro from '../pages/Intro'
import Cadastrar from '../pages/Cadastrar'
import EsqueciSenha from '../pages/EsqueciSenha'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator();

export default function Routes (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
            <Stack.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false}}/>
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}