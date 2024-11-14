import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';

const preguntas = [
  { id: '1', pregunta: 'Preferiría hacer este ejercicio:', opciones: ['a) Por escrito', 'b) Oralmente', 'c) Realizando tareas'] },
  { id: '2', pregunta: 'Me gustaría que me regalaran algo que fuera:', opciones: ['a) Bonito', 'b) Sonoro', 'c) Útil'] },
  { id: '3', pregunta: 'Lo que me cuesta menos recordar de las personas es:', opciones: ['a) La fisonomía', 'b) La voz', 'c) Los gestos'] },
  { id: '4', pregunta: 'Aprendo más fácilmente:', opciones: ['a) Leyendo', 'b) Escuchando', 'c) Haciendo'] },
  { id: '5', pregunta: 'Actividades que más me motivan:', opciones: ['a) Fotografía, pintura', 'b) Música, charlas', 'c) Escultura, danza'] },
  { id: '6', pregunta: 'La mayoría de las veces prefiero:', opciones: ['a) Observar', 'b) Oír', 'c) Hacer'] },
  { id: '7', pregunta: 'Al pensar en una película recuerdo:', opciones: ['a) Escenas', 'b) Diálogos', 'c) Sensaciones'] },
  { id: '8', pregunta: 'En vacaciones, lo que más me gusta es:', opciones: ['a) Conocer nuevos lugares', 'b) Descansar', 'c) Participar en actividades'] },
  { id: '9', pregunta: 'Lo que más valoro en las personas es:', opciones: ['a) La apariencia', 'b) Lo que dicen', 'c) Lo que hacen'] },
  { id: '10', pregunta: 'Me doy cuenta de que le gusto a alguien:', opciones: ['a) Por la manera en que me mira', 'b) Por la manera en que me habla', 'c) Por sus actitudes'] },
  { id: '11', pregunta: 'Mi automóvil preferido tiene que ser, sobre todo lindo:', opciones: ['a) Bonito', 'b) Silencioso', 'c) Cómodo'] },
  { id: '12', pregunta: 'Cuando voy a comprar algo, procuro:', opciones: ['a) Observar bien el producto', 'b) Escuchar al vendedor', 'c) Probarlo'] },
  { id: '13', pregunta: 'Tomo decisiones, básicamente, según:', opciones: ['a) Lo que veo', 'b) Lo que oigo', 'c) Lo que siento'] },
  { id: '14', pregunta: 'En exceso, lo que más me molesta es:', opciones: ['a) La luz', 'b) El ruido', 'c) Las aglomeraciones'] },
  { id: '15', pregunta: 'Lo que más me gusta en un restaurante es:', opciones: ['a) El ambiente', 'b) La conversación', 'c) La comida'] },
  { id: '16', pregunta: 'En un espectáculo, valoro más:', opciones: ['a) La iluminación', 'b) La música', 'c) La interpretación'] },
  { id: '17', pregunta: 'Mientras espero a alguien:', opciones: ['a) Observo el ambiente', 'b) Escucho las conversaciones', 'c) Me pongo a andar, moviendo las manos'] },
  { id: '18', pregunta: 'Me entusiasma que:', opciones: ['a) Me muestren cosas', 'b) Me hablen', 'c) Me inviten a participar'] },
  { id: '19', pregunta: 'Cuando consuelo a alguien procuro:', opciones: ['a) Señalarle un camino', 'b) Darle palabras de ánimo', 'c) Abrazarlo'] },
  { id: '20', pregunta: 'Lo que más me gusta es:', opciones: ['a) Ir al cine', 'b) Asistir a una conferencia', 'c) Practicar deportes'] },
];


const Cuestionario = ({ navigation }) => {
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(''));

  const handleGuardarRespuestas = () => {
    const allAnswered = respuestas.every(option => option !== '');
    if (!allAnswered) {
      Alert.alert("Debes de llenar todo el cuestionario");
      return;
    }

    console.log('Respuestas guardadas:', respuestas);
    navigation.navigate('Resultado');
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{index + 1}. {item.pregunta}</Text>
      <RadioButton.Group
        onValueChange={(value) => {
          const newRespuestas = [...respuestas];
          newRespuestas[index] = value;
          setRespuestas(newRespuestas);
        }}
        value={respuestas[index]}
      >
        {item.opciones.map((opcion, opcionIndex) => (
          <RadioButton.Item
            key={opcionIndex}
            label={opcion}
            value={opcion[0]} // Solo escoge a, b ,c
          />
        ))}
      </RadioButton.Group>
    </View>
  );

  return (
    
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Autoevaluación del Estilo de Aprendizaje</Text>
        <Text style={styles.subtitle}>
          Por favor, seleccione la opción que mejor describa su preferencia.
        </Text>
        {preguntas.map((item, index) => renderItem({ item, index }))}
        <TouchableOpacity style={styles.button} onPress={handleGuardarRespuestas}>
          <Text style={styles.buttonText}>Ver qué soy</Text>
        </TouchableOpacity>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F9FB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  questionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 2,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cuestionario;