```javascript
// Obtenemos la pantalla de la calculadora
let pantalla = document.getElementById("pantalla");

// Función para agregar números y operadores
function agregar(valor) {
    pantalla.value += valor;
}

// Función para calcular el resultado
function calcular() {
    try {

        // Reemplazamos ^ por ** para hacer potencias
        let operacion = pantalla.value.replace(/\^/g, "**");

        // Calculamos la operación
        pantalla.value = eval(operacion);

    } catch (error) {

        // Si hay un error, mostramos "Error"
        pantalla.value = "Error";
    }
}

// Función para limpiar la pantalla
function limpiar() {
    pantalla.value = "";
}
```
