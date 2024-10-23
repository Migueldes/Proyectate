import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Cuestionario = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');
  const [selectedOption7, setSelectedOption7] = useState('');
  const [selectedOption8, setSelectedOption8] = useState('');
  const [selectedOption9, setSelectedOption9] = useState('');
  const [selectedOption10, setSelectedOption10] = useState('');
  const [selectedOption11, setSelectedOption11] = useState('');
  const [selectedOption12, setSelectedOption12] = useState('');
  const [selectedOption13, setSelectedOption13] = useState('');
  const [selectedOption14, setSelectedOption14] = useState('');
  const [selectedOption15, setSelectedOption15] = useState('');
  const [selectedOption16, setSelectedOption16] = useState('');
  const [selectedOption17, setSelectedOption17] = useState('');
  const [selectedOption18, setSelectedOption18] = useState('');
  const [selectedOption19, setSelectedOption19] = useState('');
  const [selectedOption20, setSelectedOption20] = useState('');

    // Estado para almacenar las respuestas
  const [respuestas, setRespuestas] = useState([]);

  // Función para guardar todas las respuestas en un array
  const handleGuardarRespuestas = () => {
    const respuestasActuales = [
      selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5,
      selectedOption6, selectedOption7, selectedOption8, selectedOption9, selectedOption10,
      selectedOption11, selectedOption12, selectedOption13, selectedOption14, selectedOption15,
      selectedOption16, selectedOption17, selectedOption18, selectedOption19, selectedOption20,
    ];
    setRespuestas(respuestasActuales);
    console.log('Respuestas guardadas:', respuestasActuales);
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Autoevaluación del Estilo de Aprendizaje</Text>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>

        {/* Instrucciones */}
        <Text style={styles.subtitle}>
          Por favor, seleccione la opción que mejor describa su preferencia.
        </Text>

        {/* Pregunta 1 */}
        <Text style={styles.question}>1. Preferiría hacer este ejercicio:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption1(value)} value={selectedOption1}>
          <RadioButton.Item label="a) Por escrito" value="a" />
          <RadioButton.Item label="b) Oralmente" value="b" />
          <RadioButton.Item label="c) Realizando tareas" value="c" />
        </RadioButton.Group>

        {/* Pregunta 2 */}
        <Text style={styles.question}>2. Me gustaría que me regalaran algo que fuera:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption2(value)} value={selectedOption2}>
          <RadioButton.Item label="a) Bonito" value="a" />
          <RadioButton.Item label="b) Sonoro" value="b" />
          <RadioButton.Item label="c) Útil" value="c" />
        </RadioButton.Group>

        {/* Pregunta 3 */}
        <Text style={styles.question}>3. Lo que me cuesta menos recordar de las personas es:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption3(value)} value={selectedOption3}>
          <RadioButton.Item label="a) La fisonomía" value="a" />
          <RadioButton.Item label="b) La voz" value="b" />
          <RadioButton.Item label="c) Los gestos" value="c" />
        </RadioButton.Group>

        {/* Pregunta 4 */}
        <Text style={styles.question}>4. Aprendo más fácilmente:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption4(value)} value={selectedOption4}>
          <RadioButton.Item label="a) Leyendo" value="a" />
          <RadioButton.Item label="b) Escuchando" value="b" />
          <RadioButton.Item label="c) Haciendo" value="c" />
        </RadioButton.Group>

        {/* Pregunta 5 */}
        <Text style={styles.question}>5. Actividades que más me motivan:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption5(value)} value={selectedOption5}>
          <RadioButton.Item label="a) Fotografía, pintura" value="a" />
          <RadioButton.Item label="b) Música, charlas" value="b" />
          <RadioButton.Item label="c) Escultura, danza" value="c" />
        </RadioButton.Group>

        {/* Pregunta 6 */}
        <Text style={styles.question}>6. La mayoría de las veces prefiero:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption6(value)} value={selectedOption6}>
          <RadioButton.Item label="a) Observar" value="a" />
          <RadioButton.Item label="b) Oír" value="b" />
          <RadioButton.Item label="c) Hacer" value="c" />
        </RadioButton.Group>

        {/* Pregunta 7 */}
        <Text style={styles.question}>7. Al pensar en una película recuerdo:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption7(value)} value={selectedOption7}>
          <RadioButton.Item label="a) Escenas" value="a" />
          <RadioButton.Item label="b) Diálogos" value="b" />
          <RadioButton.Item label="c) Sensaciones" value="c" />
        </RadioButton.Group>

        {/* Pregunta 8 */}
        <Text style={styles.question}>8. En vacaciones, lo que más me gusta es:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption8(value)} value={selectedOption8}>
          <RadioButton.Item label="a) Conocer nuevos lugares" value="a" />
          <RadioButton.Item label="b) Descansar" value="b" />
          <RadioButton.Item label="c) Participar en actividades" value="c" />
        </RadioButton.Group>

        {/* Pregunta 9 */}
        <Text style={styles.question}>9. Lo que más valoro en las personas es:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption9(value)} value={selectedOption9}>
          <RadioButton.Item label="a) La apariencia" value="a" />
          <RadioButton.Item label="b) Lo que dicen" value="b" />
          <RadioButton.Item label="c) Lo que hacen" value="c" />
        </RadioButton.Group>

        {/* Pregunta 10 */}
        <Text style={styles.question}>10. Me doy cuenta de que le gusto a alguien:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption10(value)} value={selectedOption10}>
          <RadioButton.Item label="a) Por la manera en que me mira" value="a" />
          <RadioButton.Item label="b) Por la manera en que me habla" value="b" />
          <RadioButton.Item label="c) Por sus actitudes" value="c" />
        </RadioButton.Group>

        {/* Pregunta 11 */}
        <Text style={styles.question}>11. Mi automóvil preferido tiene que ser, sobre todo lindo:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption11(value)} value={selectedOption11}>
          <RadioButton.Item label="a) Bonito" value="a" />
          <RadioButton.Item label="b) Silencioso" value="b" />
          <RadioButton.Item label="c) Cómodo" value="c" />
        </RadioButton.Group>

        {/* Pregunta 12 */}
        <Text style={styles.question}>12. Cuando voy a comprar algo, procuro:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption12(value)} value={selectedOption12}>
          <RadioButton.Item label="a) Observar bien el producto" value="a" />
          <RadioButton.Item label="b) Escuchar al vendedor" value="b" />
          <RadioButton.Item label="c) Probarlo" value="c" />
        </RadioButton.Group>

        {/* Pregunta 13 */}
        <Text style={styles.question}>13. Tomo decisiones, básicamente, según:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption13(value)} value={selectedOption13}>
          <RadioButton.Item label="a) Lo que veo" value="a" />
          <RadioButton.Item label="b) Lo que oigo" value="b" />
          <RadioButton.Item label="c) Lo que siento" value="c" />
        </RadioButton.Group>

        {/* Pregunta 14 */}
        <Text style={styles.question}>14. En exceso, lo que más me molesta es:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption14(value)} value={selectedOption14}>
          <RadioButton.Item label="a) La luz" value="a" />
          <RadioButton.Item label="b) El ruido" value="b" />
          <RadioButton.Item label="c) Las aglomeraciones" value="c" />
        </RadioButton.Group>

        {/* Pregunta 15 */}
        <Text style={styles.question}>15. Lo que más me gusta en un restaurante es:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption15(value)} value={selectedOption15}>
          <RadioButton.Item label="a) El ambiente" value="a" />
          <RadioButton.Item label="b) La conversación" value="b" />
          <RadioButton.Item label="c) La comida" value="c" />
        </RadioButton.Group>

        {/* Pregunta 16 */}
        <Text style={styles.question}>16. En un espectáculo, valoro más:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption16(value)} value={selectedOption16}> 
          <RadioButton.Item label="a) La iluminación" value="a" /> 
          <RadioButton.Item label="b) La música" value="b" /> 
          <RadioButton.Item label="c) La interpretación" value="c" /> 
        </RadioButton.Group>

        {/* Pregunta 17 */}
        <Text style={styles.question}>17. Mientras espero a alguien:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption17(value)} value={selectedOption17}>
          <RadioButton.Item label="a) Observo el ambiente" value="a" />
          <RadioButton.Item label="b) Escucho las conversaciones" value="b" />
          <RadioButton.Item label="c) Me pongo a andar, moviendo las manos" value="c" />
        </RadioButton.Group>

        {/* Pregunta 18 */}
        <Text style={styles.question}>18. Me entusiasma que:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption18(value)} value={selectedOption18}>
          <RadioButton.Item label="a) Me muestren cosas" value="a" />
          <RadioButton.Item label="b) Me hablen" value="b" />
          <RadioButton.Item label="c) Me inviten a participar" value="c" />
        </RadioButton.Group>

        {/* Pregunta 19 */}
        <Text style={styles.question}>19. Cuando consuelo a alguien procuro:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption19(value)} value={selectedOption19}>
          <RadioButton.Item label="a) Señalarle un camino" value="a" />
          <RadioButton.Item label="b) Darle palabras de ánimo" value="b" />
          <RadioButton.Item label="c) Abrazarlo" value="c" />
        </RadioButton.Group>

        {/* Pregunta 20 */}
        <Text style={styles.question}>20. Lo que más me gusta es:</Text>
        <RadioButton.Group onValueChange={value => setSelectedOption20(value)} value={selectedOption20}>
          <RadioButton.Item label="a) Ir al cine" value="a" />
          <RadioButton.Item label="b) Asistir a una conferencia" value="b" />
          <RadioButton.Item label="c) Practicar deportes" value="c" />
        </RadioButton.Group>

      </ScrollView>

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

export default Cuestionario;
