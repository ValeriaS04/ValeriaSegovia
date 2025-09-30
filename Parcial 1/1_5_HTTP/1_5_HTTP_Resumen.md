<h1 style="color:deepskyblue; font-family:Arial, Helvetica, sans-serif">HTTP</h1>

### Realizado por: Valeria Segovia Espinoza 23100211

## ¿Qué es HTTP?
HTTP (Hypertext Transfer Protocol) es un **protocolo** de comunicación que permite la transferencia de información en la **World Wide Web**.   
Funciona como un lenguaje estándar que usan los navegadores y los servidores web para
solicitar y entregar recursos, como
páginas HTML, imágenes, videos archivos, etc.  
Es un protocolo sin estado (stateless), lo que significa que cada petición es independiente y no recuerda las anteriores.

### Protocolo 
Es un conjunto de reglas que permite que los dispositivos se entiendan entre sí.  
*Por ejemplo, HTTP es un protocolo, pero
también existen otros como FTP para
transferir archivos o SMTP para correo
electrónico.*

## ¿Cuál es la estructura de una petición?
**Petición HTTP**  
Mensaje que el cliente envía al servidor para iniciar una acción, como solicitar un documento o enviar datos.  
Se compone de las siguientes partes principales:
1. **Línea de petición**  
 Contiene el método, la ruta (URL) y la versión del protocolo.  
 *Ejemplo: GET /index.html HTTP/1.1*
2. **Encabezados (Headers)**  
 Aportan información adicional sobre la petición, como tipo de contenido, agente de usuario, autenticación, etc.  
 *Ejemplo: Host: www.ejemplo.com  
 User-Agent: Mozilla/5.0*
3. **Cuerpo (Body)** *(opcional)*  
 Solo se incluye en algunos métodos como POST o PUT, y contiene los datos que se envían al servidor   
 *Ejemplo: formularios o JSON*.  

Peticiones como GET, HEAD, DELETE, o
OPTIONS no suelen llevar cuerpo

![Cabeceras](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

## ¿Cuáles son los métodos mas usados?
Los metodos HTTP son verbos de acción que indican la operación que un cliente desea realizar sobre un recurso en un
servidor.
- **GET**: Solicita datos del           servidor. Solicita una representación del recurso especificado. No debe tener efectos secundarios en el servidor
- **POST**: Envía datos al servidor. Envía datos para ser procesados a un recurso específico. Causa cambios de estado o efectos secundarios en el servidor.
- **PUT**: Actualiza recursos existentes.  Reemplaza todas las representaciones actuales del recurso de destino con la carga de datos. Si el recurso no existe, lo crea.
- **DELETE**: Elimina recursos.
- **PATCH**: Modifica parcialmente un recurso.
- **HEAD**: Similar a GET, pero solo devuelve encabezados, no el cuerpo.

## ¿Cuáles son los codigos de estado?
Son respuestas de tres dígitos que un servidor web envía al cliente para indicar el resultado de una solicitud.
- **1xx (Informativos)**: Indican que la petición fue recibida y se está procesando.  
*Ejemplo:*   
    - 100 Continue: El cliente debe continuar con la solicitud
- **2xx (Éxito)**: La petición se completó correctamente.   
*Ejemplo:*   
    - 200 OK: La solicitud fue exitosa.
    - 201 Created: La solicitud fue exitosa y se ha creado un nuevo recurso.
    - 204 No Content: La solicitud fue exitosa, pero no hay contenido que enviar en el cuerpo de la respuesta.
- **3xx (Redirecciones)**: Indican que el cliente debe realizar otra acción.  
*Ejemplo:*   
    - 301 Moved Permanently: El recurso solicitado se ha movido permanentemente a una nueva URL.
    - 304 Not Modified: El recurso no ha sido modificado desde la última solicitud. El cliente puede usar la versión en caché
- **4xx (Errores del cliente)**: Problemas en la petición del cliente.  
*Ejemplo:*   
    - 400 Bad Request: El servidor no pudo entender la solicitud debido a una sintaxis incorrecta.
    - 401 Unauthorized: La solicitud requiere autenticación.
    - 403 Forbidden: El cliente no tiene permisos para acceder al recurso.
    - 404 Not Found: El recurso solicitado no se encuentra en el servidor.
    - 405 Method Not Allowed: El método de la solicitud no es soportado por el recurso
- **5xx (Errores del servidor)**: Problemas en el servidor al procesar la petición.  
*Ejemplo:*   
    -  500 Internal Server Error: Una condición inesperada impidió que el servidor completara la solicitud.
    - 503 Service Unavailable: El servidor no está listo para manejar la solicitud.
    - 504 Gateway Timeout: El servidor actuando como proxy no recibió una respuesta a tiempo de un servidor ascendente.

    ![Codigos](https://static.semrush.com/blog/uploads/media/f5/7c/f57c8f9295d20dc481e81ae1a782c13c/ES-HTTPS-Status-Codes.webp)

## ¿Qué son los encabezados?
Datos adicionales que van junto con una petición o respuesta HTTP. Viajan en pares de forma “nombre : valor”. (clave-valor)  
Se llaman así, porque son el encabezado de las peticiones o respuestas, es decir, se leen antes que el contenido principal

***Tipos***
- **Cabecera general:** Información sin relación con los datos del cuerpo.
- **Cabecera de consulta:** Información adicional sobre el contenido a obtenerse o sobre el cliente
- **Cabecera de respuesta:** Información adicional sobre el origen o servidor del contenido
- **Cabecera de entidad:** Información sobre el cuerpo de la entidad, como el tamaño o su formato

***Ejemplos:***

- **Content-Type**: Indica el tipo de contenido (ej. `application/json`).
- **Authorization**: Incluye credenciales de autenticación.
- **User-Agent**: Identifica el navegador o cliente que hace la petición.
- **Host**: Especifica el dominio al que se envía la petición.  

Es una parte fundamental de la comunicación entre el cliente y servidor, ya que controlan cuestiones de seguridad, rendimiento, formatos y compatibilidad.
![Cabeceras](https://blog.makeitreal.camp/assets/images/http-messages.jpg)
## ¿Qué es y cuál es la Estructura de una URL?
Una **URL (Uniform Resource Locator)** es la dirección que identifica un recurso en la web. 
es una secuencia específica de caracteres que identifica y permite localizar y recuperar una información determinada en internet.
![URL](https://www.sidn.es/_next/image?url=https%3A%2F%2Fwww.sidn.es%2Fwp-api%2Fwp-content%2Fuploads%2F2023%2F03%2Festructura-url-para-seo.png&w=1080&q=75)
### Componentes:
- **Protocolo**: Especifica el esquema de comunicación (`http`, `https`, `ftp`).
- **Dominio**: Nombre del servidor o dirección IP (`www.ejemplo.com`).
- **Puerto**: *(opcional)* número del puerto de conexión (`:443`).
- **Ruta**: Ubicación del recurso en el servidor (`/productos`).
- **Parámetros**: *(opcional)* datos adicionales enviados en la URL (`?id=25`).
- **Fragmento**: *(opcional)* apunta a una sección específica dentro del recurso (`#detalles`).
