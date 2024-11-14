// Se está usando el módulo de csv-parse para leer el archivo
const { readFileSync } = require('fs');
const { parse } = require('csv-parse/sync'); // Leer el archivo

const dataset = readFileSync('./dataset_inteligencias.csv', 'utf8');
const csvContenido = parse(dataset, {
    columns: true
});

// Imprimir cada fila en una línea horizontal 
/* csvContenido.forEach((row, index) => { 
  const filaHorizontal = Object.values(row).join(', '); // Convierte los valores a una cadena separada por comas 
  console.log(`Registro ${index + 1}: ${filaHorizontal}`); 
}); 
*/

// FASE DE ENTRENAMIENTO 
// Paso 1.- sacar las probabilidades totales para cada etiqueta
function probabilidadesProc() {
// Definiendo variables para que ocupen un lugar de la memoria RAM
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

// Mando a llamar la función y la guardo en resultado 
//const paso1res = probabilidadesProc(); 
//console.log(paso1res); // Pa ver qué sale 

// Paso 2.- sacar las evidencias a priori 
// PRIMER COLUMNA DE LA TABLA, se lee,
function Probabilidad_priori() {
    // Se crea un diccionario para hacer todas las combinaciones de cada tabla
    let tablas_dicc = {};
    const etiquetas = ["cinestecico", "visual", "auditivo"];
    const salidas = ["a", "b", "c"];
    const laplace = 1; //Valor de suavizado para que lso valores no lleguen a cero

    // For anidados para crear las 20 tablas y sus combinaciones de elementos
    for (let i = 0; i < 20; i++) {
        for (let etiqueta of etiquetas) {
            for (let salida of salidas) {
                tablas_dicc[`${etiqueta},${salida},x${i + 1}`] = laplace; // Inicializa con Laplace smoothing
            }
        }
    }
    // Recorremos los datos en csvContenido y actualizamos tablas_dicc
    for (let j = 0; j < csvContenido.length; j++) {
        const etiqueta = csvContenido[j]["etiqueta"];
        
        // Itera sobre las 20 tablas para meter los datos a su respectivo campo
        for (let k = 0; k < 20; k++) {
            const salida_x1 = csvContenido[j][`x${k + 1}`];
            // Generamos clave ya que no se pueden crear claves compuestas como en Python
            const clave = `${etiqueta},${salida_x1},x${k + 1}`;
            
            // Verificamos si la clave existe y, si es así, incrementamos el valor
            if (clave in tablas_dicc) {
                tablas_dicc[clave] += 1;
            }
        }
    }
    return tablas_dicc;
}

// Solo es para ver que se clasifiquen correctamente 
//const paso2res = Probabilidad_priori(paso1res); 
//console.log(paso2res);

// Variables para almacenar los resultados de entrenamiento
const paso1res = probabilidadesProc();
const tablas_dicc = Probabilidad_priori();

// FIN DE LA FASE DE ENTRENAMIENTO

//Funcion para el usuario o calculo final del teorema de bayes(naibes)
function usuarioPromedio(usuario_x) {
    let p_Cinestecico_usuario = 1;
    let p_visual_usuario = 1;
    let p_auditivo_usuario = 1;
    // ^
    // |
    // Se inicializan en 1 y no en cero por problemas de calculo debido a que debe ser constante y evitaer la probabilidad a 0%

    for (let i = 0; i < usuario_x.length; i++) {
        const salida_usuario = usuario_x[i];

        // Generamos las claves para acceder a los valores en el diccionario de tablas que creamos en la parte de apriori
        const clave_visual = `visual,${salida_usuario},x${i + 1}`;
        const clave_auditivo = `auditivo,${salida_usuario},x${i + 1}`;
        const clave_cinestecico = `cinestecico,${salida_usuario},x${i + 1}`;

        // Obtenemos los valores de las claves generadas, en caso de no, generamos 1 si no existen
        const visual_val = tablas_dicc[clave_visual] || 1;
        const auditivo_val = tablas_dicc[clave_auditivo] || 1;
        const cinestecico_val = tablas_dicc[clave_cinestecico] || 1;
        
        // Calcular la probabilidad para cada tipo de inteligencia
        p_visual_usuario *= visual_val / (paso1res.visual + 3); // Ajustamos para Laplace para hacer que no generen ceros que seria el +3, este seria por el numero que tenemos de clases
        p_auditivo_usuario *= auditivo_val / (paso1res.auditivo + 3); // Ajustamos para Laplace para hacer que no generen ceros que seria el +3
        p_Cinestecico_usuario *= cinestecico_val / (paso1res.cinestecico + 3); // Ajustamos para Laplace para hacer que no generen ceros que seria el +3
    }

    // Multiplicamos la probabilidad acumulada por la probabilidad total de cada etiqueta
    p_visual_usuario *= paso1res.visual / csvContenido.length;
    p_auditivo_usuario *= paso1res.auditivo / csvContenido.length;
    p_Cinestecico_usuario *= paso1res.cinestecico / csvContenido.length;

    // Calculamos la probabilidad total sumando las probabilidades acumuladas
    const total_probabilidad = p_visual_usuario + p_auditivo_usuario + p_Cinestecico_usuario;

    // Calculamos el porcentaje final para cada tipo de inteligencia
    return {
        visual: (p_visual_usuario / total_probabilidad) * 100,
        auditivo: (p_auditivo_usuario / total_probabilidad) * 100,
        cinestecico: (p_Cinestecico_usuario / total_probabilidad) * 100
    };
}

// Simulación de respuestas recibidas del frontend (aquí son datos para probar) al final no se va a ocupar en el back
const respuestasDelUsuario = ["b", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", 
                              "a", "a", "b", "a", "a", "b", "c", "a", "b"];
const resultado = usuarioPromedio(respuestasDelUsuario);

// nota: el que va a ser la salida como tal seria llamar usuarioPromedio()

console.log("Resultados:");
console.log(`Porcentaje Visual: ${resultado.visual.toFixed(2)}%`);
console.log(`Porcentaje Auditivo: ${resultado.auditivo.toFixed(2)}%`);
console.log(`Porcentaje Cinestésico: ${resultado.cinestecico.toFixed(2)}%`);
// ^
// |
// Este no importa mucho, ya que solo es ver que los datos salgan como deben

//Cambiar form data por el dato para la prediccion
//const procesoIA = async (formData) => {
    //Codigo de IA con los datos del cuestionario


  //  return prediccion
//}

//module.exports = procesoIA;