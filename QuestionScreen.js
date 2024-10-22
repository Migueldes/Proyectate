import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const QuestionScreen = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Autoevaluación de la inteligencia múltiple</Text>
      
      {/* Instrucciones */}
      <Text style={styles.subtitle}>
        Por favor, seleccione la opción que mejor describa su preferencia.
      </Text>

      {/* Pregunta 1 */}
      <Text style={styles.question}>1. Preferiría hacer este ejercicio:</Text>
      <RadioButton.Group onValueChange={value => setSelectedOption1(value)} value={selectedOption1}>
        <RadioButton.Item label="Por escrito" value="escrito" />
        <RadioButton.Item label="Oralmente" value="oral" />
        <RadioButton.Item label="Realizando tareas" value="tareas" />
      </RadioButton.Group>

      {/* Pregunta 2 */}
      <Text style={styles.question}>2. Me gustaría que me regalaran algo que fuera:</Text>
      <RadioButton.Group onValueChange={value => setSelectedOption2(value)} value={selectedOption2}>
        <RadioButton.Item label="Bonito" value="bonito" />
        <RadioButton.Item label="Sonoro" value="sonoro" />
        <RadioButton.Item label="Útil" value="util" />
      </RadioButton.Group>

      {/* Botón de enviar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver qué soy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QuestionScreen;
