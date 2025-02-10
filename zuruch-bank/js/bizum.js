// Manejo de estrellas para calificación
document.querySelectorAll('.estrella').forEach(estrella => {
    estrella.addEventListener('click', function() {
        let valor = this.getAttribute('data-valor');
        document.querySelectorAll('.estrella').forEach(e => {
            e.classList.toggle('selected', e.getAttribute('data-valor') <= valor);
        });
    });
});

// Función para enviar feedback
function enviarFeedback() {
    let comentario = document.getElementById('comentario').value.trim();
    if (!comentario) {
        alert("Por favor, escribe un comentario antes de enviar.");
        return;
    }
    alert("¡Gracias por tu opinión! Tu feedback ha sido enviado.");
}