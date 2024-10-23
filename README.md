https://prod.liveshare.vsengsaas.visualstudio.com/join?D646459593879D6BD536407030533124318C


import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const recipes = [
  { id: '1', name: 'Receta 1' },
  { id: '2', name: 'Receta 2' },
  { id: '3', name: 'Receta 3' },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.recipeName}>{item.name}</Text>
      <Ionicons name="star" size={24} color="orange" />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

        <TextInput 
          style={styles.searchBar} 
          placeholder="Buscar receta" 
          placeholderTextColor="#ccc" 
        />

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Esta es la pantalla de perfil</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF5733',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFCCCB',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#FFA07A',
    borderRadius: 5,
    marginRight: 10,
  },
  recipeName: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
