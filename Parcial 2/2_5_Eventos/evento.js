document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe realmente
        
        const nombre = form.nombre.value;
    
        const mensaje = document.createElement("p");
        mensaje.textContent = `¡Gracias por unirte, ${nombre}! Bienvenido al club de fans de TayTay.`;
        mensaje.style.color = "#b30059";
        mensaje.style.fontWeight = "bold";
        
        form.parentNode.appendChild(mensaje);
    });
    
    document.querySelectorAll("table tr").forEach(fila => {
    fila.onmouseenter = () => fila.style.backgroundColor = "#f13983d0";
    fila.onmouseleave = () => fila.style.backgroundColor = "";
    });

    const imagenTaylor = document.querySelector('img[alt="Taylor Swift en concierto"]');

    imagenTaylor.addEventListener("click", () => {
        imagenTaylor.src = "https://www.infobae.com/resizer/v2/AWRLA3QEWFG5TNZVRQWYXJ2EBI.jpg?auth=2d3bfc7430332c5a879d3b90b533347b52e429f503a977305540adf1a3ecfc73&smart=true&width=350&height=197&quality=85";
        imagenTaylor.alt = "Taylor Swift antes";
    });
});
