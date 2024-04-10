import React from 'react';
import { View,Text, StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Cadastrar() {
    return (
            <View style={styles.container}>
                <Image source={require('../../assets/fundo.png')} style={{position:'absolute', bottom: '60%'}}/>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Cadastro</Text>
                </Animatable.View>
        
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.tittle}>Email</Text>
                    <TextInput placeholder='Digite um email...' style={styles.input}/>

                    <Text style={styles.tittle}>Usuário</Text>
                    <TextInput placeholder='Digite um usuário...' style={styles.input}/>
        
                    <Text style={styles.tittle}>Senha</Text>
                    <TextInput placeholder='Digite uma senha...' style={styles.input}/>

                    <Text style={styles.tittle}></Text>
                    <TextInput placeholder='Confirme sua senha...' style={styles.input}/>
        
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </Animatable.View>
        
            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#33C7DB'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
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
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#33C7DB',
        width: '100%',
        borderRadius: 4,
        borderTopRightRadius: 200,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
})