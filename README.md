https://prod.liveshare.vsengsaas.visualstudio.com/join?27C1E51C934BF6A59549920D28F17CA3235B

https://api.spoonacular.com/recipes/716429/information?apiKey=5a47319157a1482cbb4883ed489859a2&includeNutrition=true


  import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const recipes = [
  { id: '1', name: 'Receta 1' },
  { id: '2', name: 'Receta 2' },
  { id: '3', name: 'Receta 3' },
];

const SimpleRecipeScreen = () => {
  const showAlert = (message) => {
    Alert.alert(message); // Muestra una alerta con el mensaje
  };

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
        {/* Botón cerrar */}
        <TouchableOpacity onPress={() => showAlert('Cerrar presionado')}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

        {/* Barra de búsqueda */}
        <TextInput 
          style={styles.searchBar} 
          placeholder="Buscar receta" 
          placeholderTextColor="#ccc" 
        />

        {/* Botón de perfil */}
        <TouchableOpacity onPress={() => showAlert('Perfil presionado')}>
          <Ionicons name="person" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de recetas */}
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Estilos básicos
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

export default SimpleRecipeScreen;

pantalla que le sigue a los favoritos:


    import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const SearchHistoryScreen = () => {
  const data = [
    { id: '1', name: 'Receta 1' },
    { id: '2', name: 'Receta 2' },
    { id: '3', name: 'Receta 3' },
    { id: '4', name: 'Receta 4' },
    { id: '5', name: 'Receta 5' },
  ];

  const renderRecipe = ({ item }) => (
    <TouchableOpacity style={styles.recipeItem}>
      <Text style={styles.recipeText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Búsquedas - Historial</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#d32f2f',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  recipeItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  recipeText: {
    fontSize: 18,
  },
});

export default SearchHistoryScreen;
