import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function Inputs({texto_label}) {


    return (
        <>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={texto_label}
                />
                
            </View>
        </>

        

    );

    
}

const styles = StyleSheet.create({


    input: {
        backgroundColor: 'white',
        color: 'black',
        width: 210,
        padding: 10,
        marginBottom : 10,
        marginRight : 120,
        fontSize: 20,
        fontWeight: '900',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
    },

});