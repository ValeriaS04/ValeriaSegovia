document.addEventListener("DOMContentLoaded", function() { //Esta funcion es para que el DOM este completamente cargado antes de ejecutar cualquier script (opcional)

    const form = document.getElementById("formulario"); //Para poner un texto personalizado al enviar el formulario
    const nombreInput = document.getElementById("nombre");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); //Evita que el formulario se envie y la pagina se recargue ya que lo que se va a mostar es un texto
        
        const nombre = nombreInput.value;
        
        const mensaje = document.createElement("p"); //Crea un nuevo elemento <p> para mostrar el mensaje
        mensaje.textContent = `¡Gracias por unirte, ${nombre}! Bienvenido al club de fans de TayTay.`;
        mensaje.style.color = "#b30059";
        mensaje.style.fontWeight = "bold";
        form.parentNode.appendChild(mensaje);
    });


    const tabla = document.getElementById("tablaDatos"); //Es para poner como que un hover en las filas de la tabla
    const filas = tabla.getElementsByTagName("tr");

    for (let fila of filas) {
        fila.addEventListener("mouseenter", () => fila.style.backgroundColor = "#f13983d0");
        fila.addEventListener("mouseleave", () => fila.style.backgroundColor = "");
        fila.style.cursor = "pointer"; 
    }

    const imagenTaylor = document.getElementById("imagenTaylor"); // Este es para que la imagen de TayTay cambie al darle clic a la primera y muestre una fonto de antes haciendo un despues/antes
    imagenTaylor.style.cursor = "pointer";
    imagenTaylor.addEventListener("click", () => {
        imagenTaylor.src = "https://www.infobae.com/resizer/v2/AWRLA3QEWFG5TNZVRQWYXJ2EBI.jpg?auth=2d3bfc7430332c5a879d3b90b533347b52e429f503a977305540adf1a3ecfc73&smart=true&width=350&height=197&quality=85";
        imagenTaylor.alt = "Taylor Swift antes";
    });

    const lista = document.getElementById("listaAlbumes"); // Es para que al pasar el mouse por los elementos de la lista cambie de color
    const items = lista.getElementsByTagName("li"); 

   
    for (let item of items) {
        item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "#f7b3cc";
        item.style.transition = "0.3s";
        item.style.cursor = "pointer"; 
    });

    item.addEventListener("mouseleave", () => {
        item.style.backgroundColor = "";
    });
    }

});
