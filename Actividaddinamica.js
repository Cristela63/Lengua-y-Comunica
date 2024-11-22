 // Secciones desordenadas
 const sections = [
    { id: 'A', text: 'La humanidad enfrenta uno de los mayores desafíos de la historia: el cambio climático. Este fenómeno está siendo acelerado por la actividad humana y tiene consecuencias devastadoras para el medio ambiente.' },
    { id: 'B', text: 'Las consecuencias del cambio climático son cada vez más evidentes. La temperatura global sigue aumentando, y fenómenos meteorológicos extremos, como huracanes, sequías e inundaciones, se están volviendo más comunes.' },
    { id: 'C', text: 'Para mitigar el cambio climático, es necesario reducir las emisiones de gases de efecto invernadero, invertir en energías renovables y cambiar los hábitos de consumo a nivel global.' },
    { id: 'D', text: 'El futuro de la humanidad depende de las decisiones que tomemos hoy. Si no actuamos con urgencia, los efectos del cambio climático podrían hacer que el planeta sea inhóspito para las futuras generaciones.' },
    { id: 'E', text: 'El cambio climático no solo afecta a los ecosistemas, sino que también pone en riesgo la salud humana, la seguridad alimentaria y la estabilidad económica de los países más vulnerables.' },
    { id: 'F', text: 'Es crucial que los gobiernos, las empresas y los individuos trabajen de manera conjunta para implementar soluciones sostenibles. Esto incluye políticas más estrictas sobre emisiones, conservación de recursos y promoción de tecnologías limpias.' }
];

// Orden correcto de las secciones
const correctOrder = ['A', 'B', 'E', 'C', 'F', 'D'];  // Orden lógico del ensayo
let userOrder = [];

// Función para cargar las secciones en el contenedor
function loadSections() {
    const container = document.getElementById('sections-container');
    container.innerHTML = ''; // Limpiar las secciones anteriores
    sections.sort(() => Math.random() - 0.5);  // Desordena las secciones aleatoriamente

    sections.forEach((section, index) => {
        const div = document.createElement('div');
        div.classList.add('section');
        div.textContent = section.text;

        // Contenedor para el número de orden
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        const input = document.createElement('input');
        input.type = 'number';
        input.min = 1;
        input.max = sections.length;
        input.placeholder = `Ordenar ${section.id}`;
        input.setAttribute('data-id', section.id);
        input.addEventListener('input', updateUserOrder);
        inputContainer.appendChild(input);

        div.appendChild(inputContainer);
        container.appendChild(div);
    });
}

// Función para actualizar el orden del usuario
function updateUserOrder() {
    userOrder = [];
    const inputs = document.querySelectorAll('.input-container input');
    inputs.forEach(input => {
        const sectionId = input.getAttribute('data-id');
        const order = parseInt(input.value);
        if (order >= 1 && order <= sections.length) {
            userOrder[order - 1] = sectionId;
        }
    });
}

// Función para verificar el orden
function checkOrder() {
    let score = 0;
    let isCorrectOrder = true;

    // Verificamos que la primera sección tenga el número 1 (el título)
    if (userOrder[0] !== 'A') {
        isCorrectOrder = false;
    }

    // Verificamos que las demás secciones estén en el orden correcto
    for (let i = 1; i < userOrder.length; i++) {
        if (userOrder[i] !== correctOrder[i]) {
            isCorrectOrder = false;
            break;
        }
    }

    // Si el orden es correcto, mostramos el puntaje
    if (isCorrectOrder) {
        score = 10;
        document.getElementById('score').textContent = `¡Orden Correcto! Puntaje: ${score} puntos`;
    } else {
        score = 0;
        document.getElementById('score').textContent = `Orden Incorrecto. Puntaje: ${score} puntos`;
    }

    // Resaltamos las secciones correctamente ordenadas
    userOrder.forEach((id, index) => {
        const section = document.querySelector(`[data-id="${id}"]`).parentElement;
        if (id === correctOrder[index]) {
            section.classList.add('correct');
        } else {
            section.classList.add('incorrect');
        }
    });
}

// Función para reiniciar el juego
function resetGame() {
    loadSections();
    document.getElementById('score').textContent = '';  // Limpiar el puntaje
}

// Cargar las secciones al cargar la página
window.onload = loadSections;