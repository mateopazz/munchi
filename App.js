import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyRegister from './componentes/fornulario/MyRegister'

const App = () => {
  return (
    <View style={styles.container}>
      <MyRegister></MyRegister>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#7c2008',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})