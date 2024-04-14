import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Balance({saldo, despesas}) {
 return (
  <Animatable.View delay={300} animation="flipInX" duration={800} style={styles.container}>

    <View style={styles.item}>
      <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
    </View>

    <View style={styles.item}>
      <Text style={styles.itemTitle}>Despesas</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{despesas}</Text>
        </View>
    </View> 

  </Animatable.View>
  
   
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255,255,255, 1)',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 5,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,
    },
    itemTitle: {
      fontSize: 20,
      color: '#B7B7B7'
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    currencySymbol: {
      color: '#B7B7B7',
      marginRight: 6,
    },
    balance: {
      fontSize: 22,
      color: '#2ecc71'
    },
    expenses: {
      fontSize: 22,
      color: '#e74c3c'
    }
})