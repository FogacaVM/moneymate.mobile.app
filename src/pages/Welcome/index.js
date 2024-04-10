import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image source={require('../../assets/fundo.png')} style={{position:'absolute'}}/>
            <Image source={require('../../assets/logo.png')} style={{width:'100%'}} resizeMode='contain'/>
        </View>

        <Animatable.View delay={300} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.tittle}>Sincronize suas Contas e Cartões  </Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')} >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#33C7DB',
        //paddingTop: 30,
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#33C7DB',
        justifyContent: 'center',
        alignItems:'center',
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 8,
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#33C7DB',
        borderRadius: 50,
        borderTopRightRadius: 200,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
})