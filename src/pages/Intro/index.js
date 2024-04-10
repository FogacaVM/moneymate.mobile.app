import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native'


const slides = [
    {
        key: '1',
        tittle: 'O jeito mais prático e pratico  de controlar suas contas',
        text: 'Cadastre-se e tenha total controle das suas contas e muito mais',
        image: require('../../assets/1.png')
    },
    {
        key: '2',
        tittle: 'Sincronize suas Contas e Cartões ',
        text: 'Você nunca mais vai precisar digitar suas contas novamente',
        image: require('../../assets/2.png')
    },
    {
        key: '3',
        tittle: 'Acesse todos os seus tipos de finanaças ',
        text: 'Tenha uma visão clara das suas finanças e economize muito dinheiro',
        image: require('../../assets/3.png')
    },
    {
        key: '4',
        tittle: 'Veja todas as suas operações',
        text: 'Saiba exatamente todos os seus saldos e limites',
        image: require('../../assets/4.png')
    },
    {
        key: '5',
        tittle: 'Estabeleça planos para ter resultados  financeiros',
        text: 'Acione seus gastos e consulte suas contas ',
        image: require('../../assets/5.png')
        
    },
];

export default function Intro () {
    const [showHome, setShowHome] = useState(false);
    const navigation = useNavigation();

    function renderSlides({item}) {
        return(
            <View style={{flex:1, backgroundColor: '#33C7DB'}} >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.tittle} >{item.tittle}</Text>
                <Text style={styles.text}>{item.text}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')} >
                    <Text style={styles.buttonText}>Conhecer</Text>
                </TouchableOpacity>
            </View>

        )
    }
    
    
    if(showHome){
        return <Text>ENTROU</Text>
    } else {
        return (
            <AppIntroSlider renderItem={renderSlides} data={slides} activeDotStyle={{backgroundColor: '#005069', width: 15}} renderNextButton={ () => {}} 
            renderDoneButton={ () => {}}/>
        );
    }
}

const styles = StyleSheet.create ({
    image: {
        resizeMode: 'contain', 
        height: '55%', 
        width: '100%', 
        marginTop: '15%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        
    },
    tittle: {
        paddingTop: '10%', 
        paddingBottom: 15, 
        fontSize: 20, 
        fontWeight: 'bold', 
        alignSelf: 'center', 
        paddingHorizontal: 50, 
        color: '#005069'
    },
    text: {
        textAlign: 'center', 
        color: '#413E3E', 
        paddingHorizontal: 50, 
        fontSize: 15,
    },
    button: {
        backgroundColor: '#B33C7D',
        width: '40%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#413E3E',
        fontWeight: 'bold',
    }
})