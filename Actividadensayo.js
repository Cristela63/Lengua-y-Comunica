        // Secciones del ensayo desordenadas
        const sections = [
            { id: 'A', text: 'El cambio climático es uno de los mayores retos globales del siglo XXI. Afecta a todos los países, pero sus consecuencias son especialmente graves en las naciones más vulnerables.' },
            { id: 'B', text: 'El cambio climático está relacionado con el aumento de las temperaturas, el derretimiento de los polos y la alteración de los patrones climáticos en diversas regiones.' },
            { id: 'C', text: 'El futuro del planeta depende de las decisiones que tomemos ahora. Si no actuamos con urgencia, el cambio climático podría provocar desastres irreversibles.' },
            { id: 'D', text: 'Se deben implementar políticas globales para mitigar los efectos del cambio climático. Esto incluye el uso de energías renovables y la reducción de emisiones de gases de efecto invernadero.' },
            { id: 'E', text: 'Es importante que los ciudadanos tomen conciencia de la situación y adopten prácticas sostenibles en su vida diaria, como el reciclaje y el uso responsable de los recursos.' },
            { id: 'F', text: 'El cambio climático afecta no solo a los ecosistemas, sino también a la salud humana, la agricultura y la economía de muchas naciones.' },
            { id: 'G', text: 'El impacto del cambio climático ya es visible: sequías extremas, fenómenos meteorológicos más intensos y el aumento del nivel del mar son solo algunas de sus consecuencias.' },
            { id: 'H', text: 'Para enfrentar el cambio climático, necesitamos actuar ahora y tomar medidas concretas, como la inversión en tecnologías verdes y la implementación de leyes más estrictas sobre la emisión de contaminantes.' }
        ];

        // Orden correcto de las secciones
        const correctOrder = ['Título', 'Subtítulo', 'Introducción', 'Tesis', 'Desarrollo', 'Desarrollo', 'Desarrollo', 'Conclusión'];  // Categorías correctas
        let userSelections = [];

        // Función para crear las secciones con los selectores de categoría
        function loadSections() {
            const container = document.getElementById('sections-container');
            container.innerHTML = ''; // Limpiar las secciones anteriores

            sections.forEach((section) => {
                const div = document.createElement('div');
                div.classList.add('section');
                div.id = `section-${section.id}`;
                div.textContent = section.text;

                // Crear un selector de categorías
                const select = document.createElement('select');
                select.setAttribute('data-id', section.id);
                const categories = ['Título', 'Subtítulo', 'Introducción', 'Tesis', 'Desarrollo', 'Conclusión'];
                categories.forEach((category) => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category;
                    select.appendChild(option);
                });

                select.addEventListener('change', updateUserSelections);
                div.appendChild(select);
                container.appendChild(div);
            });
        }

        // Función para actualizar las selecciones del usuario
        function updateUserSelections() {
            userSelections = [];
            const selects = document.querySelectorAll('select');
            selects.forEach(select => {
                userSelections.push({ id: select.getAttribute('data-id'), selection: select.value });
            });
        }

        // Función para verificar el orden
        function checkOrder() {
            let score = 0;
            userSelections.forEach(({ id, selection }) => {
                const section = document.getElementById(`section-${id}`);
                const correctCategory = correctOrder[sections.findIndex(s => s.id === id)];

                if (selection === correctCategory) {
                    section.classList.add('correct');
                    score += 10;
                } else {
                    section.classList.add('incorrect');
                }
            });
            document.getElementById('score').textContent = `Puntaje: ${score} puntos`;
        }

        // Función para reiniciar el juego
        function resetGame() {
            loadSections();
            document.getElementById('score').textContent = '';  // Limpiar el puntaje
        }

        // Cargar las secciones al cargar la página
        window.onload = loadSections;
