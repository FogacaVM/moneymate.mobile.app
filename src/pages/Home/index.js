import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();
    
    return (
    <View>
        <View style={styles.containerLogo}>
            <Image source={require('../../assets/fundo5.png')} style={{position:'absolute'}}/>
        </View>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
                <Image source={require('../../assets/seta3.png')} style={{}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')} >
                <Text style={styles.tittleSaldo}>Saldo R$ 00,00</Text>
            </TouchableOpacity>
        </View>
        <Animatable.View style={styles.containerForm}>
            <Text style={styles.tittle}>Olá, Victor!</Text>
            <View style={styles.containerCards}>
                <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('')} >
                    <Text style={styles.buttonTextCard}>Cartões</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('')} >
                    <Text style={styles.buttonTextCard}>Poupança</Text>
                </TouchableOpacity>
            </View>   
            <View style={styles.containerCards2}>
                <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('')} >
                    <Text style={styles.buttonTextCard}>Aplicações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('')} >
                    <Text style={styles.buttonTextCard}>Despesas</Text>
                </TouchableOpacity>
            </View>   
        </Animatable.View>
    </View>
    );
}

const styles = StyleSheet.create ({
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '40%',
        marginTop: '25%',
        marginLeft: '10%',
        marginBottom: '50%',
        color: '#FFF',
        // backgroundColor: 'red'
    },
    container: {
        flexDirection: 'row',
        marginTop: '25%',
        marginLeft: '8%',
        justifyContent: 'space-between',
    },
    tittleSaldo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    text: {
        color: '#a1a1a1'
    },
    containerCards: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'red',
        bottom: '30%',
    },
    containerCards2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'red',
        bottom: '30%',
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCard: {
        // backgroundColor: '#33C7DB',
        backgroundColor: '#FFF',
        borderRadius: 25.3,
        marginEnd: '-20%',
        borderTopRightRadius: 120,
        paddingVertical: 65,
        width: '50%',
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#528288',
        shadowOffset: {
            width: 0.5,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    buttonTextCard: {
        fontSize: 18,
        color: '#00509D',
        fontWeight: 'bold',
    },
})