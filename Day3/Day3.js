function startGame() {
    // Primera elección: Front-End o Back-End
    let area = prompt("¿Te gustaría seguir hacia el área de Front-End o Back-End?").toLowerCase();
    
    if (area === "front-end") {
        let frontEndChoice = prompt("¿Quieres aprender React o Vue?").toLowerCase();
        if (frontEndChoice === "react") {
            alert("Has elegido aprender React. ¡Buena elección!");
        } else if (frontEndChoice === "vue") {
            alert("Has elegido aprender Vue. ¡Excelente decisión!");
        } else {
            alert("Opción no válida. Por favor, vuelve a intentarlo.");
            return;
        }
    } else if (area === "back-end") {
        let backEndChoice = prompt("¿Quieres aprender C# o Java?").toLowerCase();
        if (backEndChoice === "c#") {
            alert("Has elegido aprender C#. ¡Fantástico!");
        } else if (backEndChoice === "java") {
            alert("Has elegido aprender Java. ¡Gran elección!");
        } else {
            alert("Opción no válida. Por favor, vuelve a intentarlo.");
            return;
        }
    } else {
        alert("Opción no válida. Por favor, vuelve a intentarlo.");
        return;
    }

    // Segunda elección: Especialización o Fullstack
    let pathChoice = prompt("¿Te gustaría seguir especializándote en esta área o convertirte en Fullstack? (especialización/fullstack)").toLowerCase();

    if (pathChoice === "especialización") {
        alert("Has elegido especializarte en tu área. ¡Serás un experto en tu campo!");
    } else if (pathChoice === "fullstack") {
        alert("Has elegido convertirte en Fullstack. ¡Un desarrollador versátil y completo!");
    } else {
        alert("Opción no válida. Por favor, vuelve a intentarlo.");
        return;
    }

    // Lista de tecnologías adicionales
    let moreTechnologies = true;
    while (moreTechnologies) {
        let technology = prompt("¿Qué otra tecnología te gustaría aprender?");
        alert(`¡Interesante! Aprender ${technology} es una gran idea.`);
        
        let another = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (ok/no)").toLowerCase();
        if (another !== "ok") {
            moreTechnologies = false;
        }
    }

    alert("¡Gracias por jugar! ¡Sigue aprendiendo y desarrollándote!");
}

// Iniciar el juego
startGame();
