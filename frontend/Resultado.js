import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Resultado = ({ navigation }) => {
  const reiniciarApp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Bienvenido' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resultado</Text>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}></View>
      </View>

      <Text style={styles.intelligenceType}>Inteligencia Musical</Text>
      <Text style={styles.percentage}>71%</Text>
      <Text style={styles.description}>
        Has mostrado una fuerte inteligencia emocional. Eres sensible a los sonidos, ritmos y tonos.
      </Text>

      <Text style={styles.subheader}>Tus Inteligencias más próximas</Text>
      <View style={styles.additionalIntelligences}>
        <Text style={styles.additionalItem}>Lingüística</Text>
        <Text style={styles.percentage}>15%</Text>
      </View>
      <View style={styles.additionalIntelligences}>
        <Text style={styles.additionalItem}>Interpersonal</Text>
        <Text style={styles.percentage}>14%</Text>
      </View>

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
  progressBarContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  progressBar: {
    width: '71%',
    height: '100%',
    backgroundColor: '#6C63FF',
    borderRadius: 5,
  },
  intelligenceType: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  percentage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6C63FF',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  additionalIntelligences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  additionalItem: {
    fontSize: 16,
    color: '#555',
  },
  percentageSmall: {
    fontSize: 16,
    color: '#6C63FF',
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
