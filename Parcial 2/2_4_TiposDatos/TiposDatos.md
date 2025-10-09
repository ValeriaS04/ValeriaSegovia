# Tipos de datos en JavaScript

**Concepto:**  
En JavaScript, los tipos de datos se dividen en **primitivos** (simples e inmutables) y **no primitivos (objetos/estructuras)** (colecciones de propiedades y métodos). Los primitivos representan valores simples e inmutables, mientras que los objetos pueden almacenar colecciones de datos y funciones.

| Tipo de dato | Categoría           | Descripción breve                                                                 | Ejemplo                           | Resultado de `typeof` |
|--------------|-------------------|-----------------------------------------------------------------------------------|-----------------------------------|---------------------|
| Undefined    | Primitivo          | Variable declarada sin valor asignado.                                            | `let x;`                          | `"undefined"`       |
| Boolean      | Primitivo          | Valor lógico: `true` o `false`.                                                  | `let activo = true;`              | `"boolean"`         |
| Number       | Primitivo          | Números enteros o decimales.                                                     | `let edad = 30;`                  | `"number"`          |
| BigInt       | Primitivo          | Números enteros muy grandes.                                                     | `let big = 12345678901234567890n;` | `"bigint"`          |
| String       | Primitivo          | Texto o cadenas de caracteres.                                                   | `let nombre = "Valu";`            | `"string"`          |
| Symbol       | Primitivo          | Identificador único e inmutable, usado como clave de propiedades.                | `let id = Symbol("id");`          | `"symbol"`          |
| Null         | Primitivo especial | Ausencia intencional de valor; `typeof null` devuelve `"object"`.                | `let vacio = null;`               | `"object"`          |
| Object       | Estructura         | Colección de propiedades y métodos; incluye Array, Map, Set, Date, etc.          | `let persona = {nombre: "Ana"};`  | `"object"`          |
| Function     | Estructura         | Bloque de código ejecutable; derivado de Object, `typeof` devuelve `"function"`. | `function saludar() {}`           | `"function"`        |