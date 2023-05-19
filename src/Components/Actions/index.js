import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} 
   showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areButton}>
            <AntDesign name='addfolder' size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areButton}>
            <AntDesign name='tagso' size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areButton}>
            <AntDesign name='barcode' size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areButton}>
            <AntDesign name='setting' size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areButton}>
            <AntDesign name='mobile1' size={26} color='#000'></AntDesign>
        </View>
        <Text style={styles.labelButton}>Internet</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,

    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32,
      

    },
    areButton:{
        backgroundColor: '#ecf0f1', 
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight:'bold'
    }
})