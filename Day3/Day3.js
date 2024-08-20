function startGame() {
    try {
        // Primera elección: Front-End o Back-End
        let area = prompt("¿Te gustaría seguir hacia el área de Front-End o Back-End?").toLowerCase();
        if (area !== "front-end" && area !== "back-end") {
            throw new Error("Debe seleccionar 'Front-End' o 'Back-End'.");
        }

        if (area === "front-end") {
            let frontEndChoice = prompt("¿Quieres aprender React o Vue?").toLowerCase();
            if (frontEndChoice !== "react" && frontEndChoice !== "vue") {
                throw new Error("Debe seleccionar 'React' o 'Vue'.");
            }
            alert(`Has elegido aprender ${frontEndChoice.charAt(0).toUpperCase() + frontEndChoice.slice(1)}. ¡Buena elección!`);
        } else {
            let backEndChoice = prompt("¿Quieres aprender C# o Java?").toLowerCase();
            if (backEndChoice !== "c#" && backEndChoice !== "java") {
                throw new Error("Debe seleccionar 'C#' o 'Java'.");
            }
            alert(`Has elegido aprender ${backEndChoice.toUpperCase()}. ¡Fantástico!`);
        }

        // Segunda elección: Especialización o Fullstack
        let pathChoice = prompt("¿Te gustaría seguir especializándote en esta área o convertirte en Fullstack? (especialización (Digite 1) /fullstack (Digite 2))").toLowerCase();
        if (pathChoice !== "1" && pathChoice !== "2") {
            throw new Error("Debe seleccionar 'especialización' o 'fullstack'.");
        }
        
        alert(pathChoice === "1"
            ? "Has elegido especializarte en tu área. ¡Serás un experto en tu campo!"
            : "Has elegido convertirte en Fullstack. ¡Un desarrollador versátil y completo!");

        // Lista de tecnologías adicionales
        let moreTechnologies = true;
        while (moreTechnologies) {
            let technology = prompt("¿Qué otra tecnología te gustaría aprender?");
            if (!technology) {
                throw new Error("Debe ingresar una tecnología válida.");
            }
            alert(`¡Interesante! Aprender ${technology} es una gran idea.`);
            
            let another = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (ok/no)").toLowerCase();
            if (another !== "ok") {
                moreTechnologies = false;
            }
        }

        alert("¡Gracias por jugar! ¡Sigue aprendiendo y desarrollándote!");

    } catch (error) {
        alert(`Error: ${error.message}`);
        startGame(); // Reiniciar el juego en caso de error
    }
}

// Iniciar el juego
startGame();
