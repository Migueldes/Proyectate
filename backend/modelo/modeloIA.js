//Codigo de la ia
// Datos globales
var etiqueta=str=""
var salida_x1=str=""

// Se esta usando el modulo de csv-parse para leer el archivo
const { readFileSync } = require('fs');
const { parse } = require('csv-parse/sync');

const dataset = readFileSync('./dataset_inteligencias.csv', 'utf8'); // Leer el archivo
const csvContenido = parse(dataset, {
    columns: true
});

// Imprimir cada fila en una línea horizontal
/* csvContenido.forEach((row, index) => {
    const filaHorizontal = Object.values(row).join(', '); // Convierte los valores a una cadena separada por comas
    console.log(`Registro ${index + 1}: ${filaHorizontal}`);
});
*/

// Paso 1.- sacar las probabilidades totales para cada etiqueta
function probabilidadesProc() {
// Definiendo variables para que ocupen un lugar de la memoria ram, son int
  let p_CinestecicoTotal = 0;
  let p_VisualTotal = 0;
  let p_AuditivoTotal = 0;

  // Establecemos el ciclo for que va a recorrer toda la etiqueta tal que
  for (let i = 0; i < csvContenido.length; i++) {
      const salida = csvContenido[i].etiqueta;

      if (salida === "cinestecico") {
          p_CinestecicoTotal += 1;
      } else if (salida === "visual") {
          p_VisualTotal += 1;
      } else if (salida === "auditivo") {
          p_AuditivoTotal += 1;
      }
  }

  // Retornar los valores
  return {
      cinestecico: p_CinestecicoTotal,
      visual: p_VisualTotal,
      auditivo: p_AuditivoTotal
  };
}

// Mando a llamar la funcion y la guardo en resultado
const paso1res = probabilidadesProc();
console.log(paso1res); // Pa ver que sale


// Paso 2.- sacar las evidencias a priori
// PRIMER COLUMNA DE LA TABLA, se lee,
function Probabilidad_priori() {
  let cinestesico_a_x1 = int=0
  let cinestesico_b_x1 = int=0
  let cinestesico_c_x1 = int=0
  let visual_a_x1 = int=0
  let visual_b_x1 = int=0
  let visual_c_x1 = int=0
  let auditivo_a_x1 = int=0
  let auditivo_b_x1 = int=0
  let auditivo_c_x1 = int=0


// ya creadas las variables de la tabla entonces
// creamos el for que va a recorrer todo
for (let i = 0; i < csvContenido.length; i++ ) {
  const etiqueta = csvContenido[i].etiqueta[i] 
}
}

//Cambiar form data por el dato para la prediccion
//const procesoIA = async (formData) => {
    //Codigo de IA con los datos del cuestionario


  //  return prediccion
//}

//module.exports = procesoIA;