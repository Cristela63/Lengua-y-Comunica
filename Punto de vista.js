 // Función para verificar las respuestas
 function verificarRespuestas() {
    const respuestasCorrectas = {
        'respuesta-1': '1', // Título
        'respuesta-2': '2', // Subtítulo
        'respuesta-3': '2', // Subtítulo
        'respuesta-4': '1' // Título
    };

    let feedback = document.getElementById("feedback");
    let allCorrect = true;

    for (let id in respuestasCorrectas) {
        const respuestaUsuario = document.getElementById(id).value.trim();
        if (respuestaUsuario !== respuestasCorrectas[id]) {
            allCorrect = false;
            document.getElementById(id).style.borderColor = "red";
        } else {
            document.getElementById(id).style.borderColor = "green";
        }
    }

    if (allCorrect) {
        feedback.textContent = "¡Todas las respuestas son correctas!";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunas respuestas son incorrectas. Inténtalo de nuevo.";
        feedback.className = "feedback incorrect";
    }
}
