import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function Botones({texto_boton, accionboton}) {


    return (
        <>
            <View>
                
                <TouchableOpacity 
                style={styles.button}
                onPress={accionboton}>
                    <Text style={styles.buttonText}>
                        {texto_boton}</Text>

                </TouchableOpacity>
            </View>
        </>

        

    ); 
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        width : 85,
        marginLeft : 200,
        transform : [{ translateY: -55 }] /* Movemos el boton hacia arriba */
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});