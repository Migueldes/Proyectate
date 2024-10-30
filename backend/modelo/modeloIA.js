//Codigo de la ia
// Datos globales
let etiqueta="";
let salida_x1="";

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
    // Se crea un diccionario para hacer todas las combinaciones de cada tabla
    let tablas_dicc = {};
    const etiquetas = ["cinestecico", "visual", "auditivo"];
    const salidas = ["a", "b", "c"];
  
    // For anidados para crear las 20 tablas y sus combinaciones de elementos
    for (let i = 0; i < 20; i++) {
      for (let etiqueta of etiquetas) {
        for (let salida of salidas) {
          tablas_dicc[`${etiqueta},${salida},x${i + 1}`] = 0;
        }
      }
    }
    // Recorremos los datos en csvContenido y actualizamos tablas_dicc
    for (let j = 0; j < csvContenido.length; j++) {
      const etiqueta = csvContenido[j]["etiqueta"];
      
      // itera sobre las 20 tablas para meter los datos a su respectivo campo
      for (let k = 0; k < 20; k++) {
          const salida_x1 = csvContenido[j][`x${k + 1}`];

          // Generamos clave ya que no se pueden crear claves compuestas como en python
          const clave = `${etiqueta},${salida_x1},x${k + 1}`;

          // Verificamos si la clave existe y, si es así, incrementamos el valor
          if (clave in tablas_dicc) {
              tablas_dicc[clave] += 1;
          }
      }
  }
    return tablas_dicc;
}

const paso2res = Probabilidad_priori(paso1res);
console.log(paso2res);

  // ya creadas las variables de la tabla entonces
  // creamos el for que va a recorrer todo


//Cambiar form data por el dato para la prediccion
//const procesoIA = async (formData) => {
    //Codigo de IA con los datos del cuestionario


  //  return prediccion
//}

//module.exports = procesoIA;