//XHR
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

// Promesas
let miPromesa = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("¡Promesa cumplida!"), 3000);
});

miPromesa.then(
    function(valor) { console.log(valor); },
    function(error) { console.log(error); }
);

let miPromesa2 = new Promise(function(resolve, reject) {
    resolve("¡Exito!");
    reject("¡Error!");
});

miPromesa.then(
    function(result) { console.log(result); },
    function(error) { console.log(error.message); }
);

// Fetch
fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: 'Juan', fake: true })
})
.then((res) => res.json())
.then((jsonData) => console.log(jsonData))
.catch((err) => console.error('Error:', err));