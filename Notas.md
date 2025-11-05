Parcial 2
# JavaScript

Librerias/Programas para inicar dependencias/Ejecutar proyecto
- npm
- yarn
- pnpm

En nmpjs.org (Es una pagina)  
Sistemas que procesan 
- ComputJsNode - require  
- Echa is estandar - imput


Lenguajes que traspilan a JS
TypeScript  (Este es el que se utiliza)   
CoffeScript

Js corre en el navegador (Chrome, Firefox) o ela PC (Note, Demo, Bun) Dependiento el entorno son las instrucciones que vas a usar.

**Frameworks**  
Electron/Tauri  
Express  
Rect/Vue/Angle  
Moka

**Empaquetadores**
Se empaquetan un modulo Rollup, Parcel, Viie

**Js/Navegador**  
Peticion a servidores / Jquery  


npm init -y

07/10/2025

Declaracion de una variable en JS
Forma - Ambito - Hoisting - Omision de debugs - Defucion 
var   - Funcion si no le pones nada se convierte en global / ya no se debe usar este - SI. La variable que declares con hoisting se ire para arriba - no strict strict - SI
let  -  Bloque se ve en el bloque donde la pongas - NO - NO - NO
const - Bloque - NO - NO -  NO

| Palabra clave | Ámbito                     | Hoisting | Omision debugs |
|----------------|----------------------------|-----------|----------------|
| **var**        | De función (o global si no está dentro de una función) | ✅ Sí | No string ❌ string ✅  |
| **let**        | De bloque (`{ ... }`)      | ❌ No      |  No string ❌ string❌    |
| **const**      | De bloque (`{ ... }`)      | ❌ No      |  No string ❌ string ❌   |

Declaracion de funcion 
function nombre (par) {

}

let a = function (par) {

} // expresion de funcion

(function nombre (par) {

}) ("j"), // Declaracion inmediatamente invocada 

function nom (par) {
   parametro
} //Declaracion de funcion
//funcion flecha let nom = (par) -> {} 

Quedarse con LET para declarar variables
y en funciones quedarse de cualquiera de las tres: declaracion de funcion, expresion de funcion, funcion flecha

Tarea
Tipos de datos de JS primitivos, objetos

Condicionales en JS
Ciclos en JS
- Bucles clasicos for-while-dowhile / break y continue
- Bucle for in / para objetos fio
- Bucle for of / para iterarse foi (arrays, string, colecciones)
- Bucle del array array.forEach (para recorrer un array)
Ya con el in, of y array no se necesitan los clasicos, los mas utilizados son estos

Metodo Dom API
elemento=document.getElementById('id') Esta consulta tiene propiedadeees

Trabajar con clases 

BOM window.
Dom window document
CSSOM window.document.styleshet

Fases de los eventos
- Generacion
- Captura
- 
- Propagacion burbujeo

Formatos de intercambio de informacion XML,JSON,YAML,TOML
Son maneras en la que representas estructura de datos 

JQuery 

XMLHTTPRequest
metodo open, send, abort

let solicitud = new XMLHttpRequest();

solicitud.onload = function() {
        console.log(solicitud.response);
    } 
solicitud.open('GET', 'URL', TRUE);
solicitud.send();


let solicitud = new XMLHttpRequest();
solicitud.onreadystatechange = function() {
    if (solicitud.readyState == 4 && this.status == 200) {
        console.log(solicitud.response);
    }
}
solicitud.open('GET', 'URL', TRUE);
solicitud.send();

AJAX  --examen 
Actualizar una parte de la pagina solamente 

XHR, Fetch

Asincronia, No espera a que una tarea termine para continuar
Sincrona, una tarea detras de otra tarea 


Funciones flecha son mas sencillas de hacer que las funciones normales
Callback
    seTimeout(function (){console.log('Hello World')}, 5000)
Promesa
    Algo que va a suceder, codigo que va a tardar
    Estados de la promesa
Sincrono renameSync si le quitas el sycn lo puedes hacer con callback, promise, async-await

Empaquetadores, links, scripts, Jquery, angular

const datosForm = new FormData(document.getElementById("idForm"));
const cadenaUrl = new URLSearchParams(datosForm).toString();

framework es todo un entorno para trabajar mientras que la libreria solo son funciones

REACT
Es una libreria para construir interfaces de usuarios, 
Las aplicaciones de react estan hechas de componentes, un compoente es una pieza de ui con su propia logica y apariencia, son simplementes funciones de JS que devuelven markup. Se pueden anidar para usarse en otros componentes. MiBoton empieza con mayuscula. Asi es como se identifica que es un compoente de react, la palabra clave export default especifican el componente principal en el archivo.
React usa una sintaxis llamada JSX que permite escribir html dentro e js. 
Jsx es mas estricto que html, se deben cerrar las etiquetas, un componente no puede devolver multiples etiquetas de JSX

JSX permite integrar logica de js facilmente usando llaves.
Se responde a eventos (como clic) con funciones controladoras
onClick={miFuncion}

Estado. es la memoria de un componente (que campos de formulario ya se lleno, etc)
Para añadir estado se usa el Hook useState
useState te da dos cosas, el valor actual del estado y una funcion para actualizarlo.

const[valos,setValor] = useState(valorInicial);

cuando se llama la funcion setValor, React vuelve a renderizar el componente con el nuevo valor 

Parcial 3 - arquitecturas mas usadas para intercambiar datos cliente servidor
SOAP xml url unica
REST json endopoints te trae todos los datos
GraphQL sql url unica consulta los datos y solo te trae lo que quieres

Webso