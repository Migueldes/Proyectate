import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./img/Portada.jpg')} //Agregar una Imagen despues
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
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;