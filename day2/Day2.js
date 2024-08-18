const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

const msg = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

alert(msg);

// Opcional
const opcional = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (opcional == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}

if (opcional == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
