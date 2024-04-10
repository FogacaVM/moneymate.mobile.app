import React from 'react';
import { View,Text, StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Cadastrar() {
    return (
            <View style={styles.container}>
                <Image source={require('../../assets/fundo.png')} style={{position:'absolute', bottom: '60%'}}/>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Redefinição de Senha</Text>
                </Animatable.View>
        
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.tittle}>Senha Antiga</Text>
                    <TextInput placeholder='Digite sua senha antiga...' style={styles.input}/>

                    <Text style={styles.tittle}>Senha Nova</Text>
                    <TextInput placeholder='Digite sua senha nova...' style={styles.input}/>
        
                    <Text style={styles.tittle}>Confirmação de Senha Nova</Text>
                    <TextInput placeholder='Digite sua senha nova...' style={styles.input}/>

                    <View>
                        <Text style={styles.tittle}>Código de Confirmação</Text>
                        <View style= {{flexDirection: 'row'}}>
                            <TextInput placeholder='Digite seu Código de Confirmação' style={styles.inputCodigo}/>
                            <TouchableOpacity style={styles.buttonCodigo}>
                                <Text style={styles.codigoText}>Enviar Código</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
        
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Redefinir</Text>
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
    inputCodigo: {
        borderBottomWidth: 1,
        width: '75%',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonCodigo: {
        marginTop: 14,
        alignSelf: 'center',
        paddingBottom: 30,
    },
    codigoText: {
        color: '#4DD6F4'
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