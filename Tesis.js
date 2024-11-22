let preguntaActual = 0;
const preguntas = [
    {
        pregunta: '¿Cuál es la primera parte de una tesis?',
        correcta: 'Introducción',
        opciones: ['Introducción', 'Metodología', 'Marco Teórico', 'Resultados', 'Conclusión', 'Bibliografía']
    },
    {
        pregunta: '¿En qué parte de la tesis se presentan los resultados?',
        correcta: 'Resultados',
        opciones: ['Introducción', 'Metodología', 'Marco Teórico', 'Resultados', 'Conclusión', 'Bibliografía']
    },
    {
        pregunta: '¿Qué parte contiene las fuentes consultadas?',
        correcta: 'Bibliografía',
        opciones: ['Introducción', 'Metodología', 'Marco Teórico', 'Resultados', 'Conclusión', 'Bibliografía']
    },
    {
        pregunta: '¿Qué sección se encarga de la revisión de la literatura existente?',
        correcta: 'Marco Teórico',
        opciones: ['Introducción', 'Metodología', 'Marco Teórico', 'Resultados', 'Conclusión', 'Bibliografía']
    },
    {
        pregunta: '¿En qué parte se describe el enfoque y las herramientas de investigación?',
        correcta: 'Metodología',
        opciones: ['Introducción', 'Metodología', 'Marco Teórico', 'Resultados', 'Conclusión', 'Bibliografía']
    }
];

// Función para mostrar la pregunta y las opciones
function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.querySelector('#texto-pregunta').textContent = pregunta.pregunta;
        const botones = document.querySelectorAll('.answers button');
        for (let i = 0; i < botones.length; i++) {
            botones[i].textContent = pregunta.opciones[i];
        }
        document.querySelector('#feedback').innerHTML = ''; // Limpiar feedback anterior
    } else {
        document.querySelector('#resultado').style.display = 'block';
    }
}

// Función que se llama cuando el usuario hace clic en una respuesta
function responder(respuesta) {
    const pregunta = preguntas[preguntaActual];
    const feedback = document.querySelector('#feedback');
    if (respuesta === pregunta.correcta) {
        feedback.textContent = '¡Respuesta correcta!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = 'Respuesta incorrecta, intenta nuevamente.';
        feedback.className = 'feedback incorrect';
    }
    preguntaActual++;
    setTimeout(mostrarPregunta, 1500); // Esperar antes de mostrar la siguiente pregunta
}

// Función para reiniciar el juego
function reiniciarJuego() {
    preguntaActual = 0;
    document.querySelector('#resultado').style.display = 'none';
    mostrarPregunta();
}

// Iniciar el juego al cargar la página
mostrarPregunta();
