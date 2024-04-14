import React from 'react'
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, Image} from 'react-native'

import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}) {
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/fundo3.png')} style={{position:'absolute', bottom: '-50%'}}/>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF"/>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#33C7DB',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        gap: 10,
    },
    username: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold', 
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})