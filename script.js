// Esperamos a que la página cargue para poder leer la pantalla correctamente
document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.getElementById('pantalla');
    // Inicializamos la pantalla en 0
    pantalla.value = '0';
});

// 1. Función para agregar números y operadores simples (+, -, *, /, .)
function agregar(valor) {
    const pantalla = document.getElementById('pantalla');
    
    if (pantalla.value === '0' || pantalla.value === 'Error') {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

// 2. Función específica para la Raíz Cuadrada (Tu botón tiene onclick="raiz()")
function raiz() {
    const pantalla = document.getElementById('pantalla');
    try {
        // Calculamos la raíz del número que esté en la pantalla en ese momento
        let numero = eval(pantalla.value);
        if (numero < 0) {
            pantalla.value = 'Error'; // Las raíces de números negativos no son reales
        } else {
            let resultado = Math.sqrt(numero);
            pantalla.value = Number(resultado.toFixed(8)); // Máximo 8 decimales
        }
    } catch (error) {
        pantalla.value = 'Error';
    }
}

// 3. Función para limpiar la pantalla (Tu botón tiene onclick="limpiar()")
function limpiar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = '0';
}

// 4. Función para resolver la operación (Tu botón tiene onclick="calcular()")
function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
        let ecuacion = pantalla.value;

        // JavaScript no entiende el símbolo '^', lo reemplazamos por '**' que es la potencia real
        ecuacion = ecuacion.replace(/\^/g, '**');

        let resultado = eval(ecuacion);
        
        // Evitamos que salgan números infinitos o muy largos
        pantalla.value = Number(resultado.toFixed(8)); 
    } catch (error) {
        pantalla.value = 'Error';
    }
}
