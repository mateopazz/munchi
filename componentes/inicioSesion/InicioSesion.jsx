import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({ onPress, title }) => (
    <>
    
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title} Iniciar sesion</Text>
  </TouchableOpacity>
    </>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B02499',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Bordes redondeados en los costados
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RoundedButton;

















