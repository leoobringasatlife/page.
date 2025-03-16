// Inicializar EmailJS con la clave pública
(function() {
    emailjs.init("DVs4bGC1XNd6yxhxN"); // Usamos tu clave pública aquí
})();

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
        // Ocultar el formulario
        document.getElementById("register-form").style.display = "none";
        
        // Crear el mensaje de "Gracias"
        const thankYouMessage = document.createElement('div');
        thankYouMessage.classList.add('thank-you-message');
        thankYouMessage.innerHTML = `Gracias por registrarte, ${name}!`;

        // Agregar el mensaje al contenedor y mostrarlo
        document.body.appendChild(thankYouMessage);
        
        // Mostrar el mensaje
        thankYouMessage.style.display = "flex";

        // Preparar los datos para enviar el correo
        const messageData = {
            to_email: email, // Correo de la persona
            from_name: name,
            message: `Hola ${name}, gracias por registrarte en nuestra lista de espera.`
        };

        // Enviar el correo usando EmailJS
        emailjs.send("service_sqxd4fl", "template_v684o08", messageData)
            .then(function(response) {
                console.log('Correo enviado exitosamente', response);
            }, function(error) {
                console.log('Error al enviar correo', error);
            });
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
