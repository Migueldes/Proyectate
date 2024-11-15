import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Pantalla que muestra los resultados. Recibe datos desde "Cuestionario.js".
const Resultado = ({ navigation, route }) => {
  const { resultado } = route.params; // Obtenemos los datos pasados desde la pantalla anterior.
  // Transformamos el objeto `resultado` en un array de objetos para ordenarlos dinámicamente.
const resultadosOrdenados = Object.entries(resultado)
  .map(([tipo, porcentaje]) => ({ tipo, porcentaje })) // Convertimos el objeto en un array de objetos
  .sort((a, b) => b.porcentaje - a.porcentaje); // Ordenamos de mayor a menor porcentaje

// Renderizamos cada resultado como una barra de progreso.
const renderResultados = () => {
  return resultadosOrdenados.map((res, index) => (
    <View key={index} style={styles.resultItem}>
      <Text style={styles.intelligenceType}>{res.tipo.charAt(0).toUpperCase() + res.tipo.slice(1)}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${res.porcentaje}%` }]}></View>
      </View>
      <Text style={styles.percentage}>{res.porcentaje.toFixed(2)}%</Text>
    </View>
  ));
};

const reiniciarApp = () => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'Bienvenido' }],
  });
};

return (
  <View style={styles.container}>
    <Text style={styles.header}>Tus Resultados</Text>

    {/* Renderizamos los resultados dinámicamente */}
    {renderResultados()}

    {/* Botón para reiniciar */}
    <TouchableOpacity style={styles.button} onPress={reiniciarApp}>
      <Text style={styles.buttonText}>Finalizar</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultItem: {
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6C63FF',
    borderRadius: 5,
  },
  intelligenceType: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Resultado;