// Generar un número aleatorio entre 0 y 10
const numeroSecreto = Math.floor(Math.random() * 11);

// Tres intentos para adivinar el número
let intentosRestantes = 3;

while (intentosRestantes > 0) {
    // Solicitar al usuario que adivine el número
    const adivinanza = parseInt(prompt("Adivina el número entre 0 y 10:"));

    if (adivinanza === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número.");
        break;
    } else {
        intentosRestantes--;
        if (adivinanza > numeroSecreto) {
            alert(`Incorrecto. El número secreto es menor. Te quedan ${intentosRestantes} intento(s).`);
        } else {
            alert(`Incorrecto. El número secreto es mayor. Te quedan ${intentosRestantes} intento(s).`);
        }
    }
}

// Si se agotaron los intentos, revela
