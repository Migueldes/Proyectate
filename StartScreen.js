import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const StartLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: '' }} //Agregar una Imagen despues
        style={styles.image}
      />
      
      <Text style={styles.headerText}>Descubre tus Estilos de Aprendizaje</Text>
      
      <Text style={styles.description}>
        Haz el test de las Estilos de Aprendizaje para descubrir qué tipo de inteligencia tienes.
      </Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Cuestionario')} // Navegando a cuestionario
      >
        <Text style={styles.buttonText}>Comenzar Cuestionario</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StartLogin;