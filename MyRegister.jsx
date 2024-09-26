import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const MyRegister = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.heading}>Formulario de Registro</Text>
            <TextInput style={styles.input} placeholder='Nombre'></TextInput>
            <TextInput style={styles.input} placeholder='E-Mail'></TextInput>
            <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Registrarse</Text></TouchableOpacity>
        </View>
      
    </View>
  )
}

export default MyRegister

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'red',
        shadowColor: 'red',
        shadowOffset:{
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8
    },
    card: {
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 22,
        marginBottom: 16,
        color: 'white'
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5, 
        backgroundColor: 'lightgreen',
        width: 200,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 30,
        padding: 10,
        marginTop: 10,
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})