import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from '../Header';
import Balance from '../Balance';
import Movements from "../Movements";
import Actions from "../Actions";

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '17/02/2024',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Marcelo Amorim',
        value: '2.500,00',
        date: '19/02/2024',
        type: 1 // receita / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.100,00',
        date: '5/03/2024',
        type: 1 // receita / entradas
    }
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Victor Fogaça"/>
            <Balance saldo="9.250,90" despesas="-527,00"/>

            <Actions />
            
            <Text style={styles.title}>Transações</Text>
            <FlatList style={styles.list} data={list} keyExtractor={(item) => 
            String(item.id)} showsVerticalScrollIndicator={false} renderItem={({item}) => <Movements data={item}/>}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    title: {
       fontSize: 18,
       fontWeight: 'bold',
       margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,

    }
})