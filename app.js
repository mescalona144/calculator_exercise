console.log('Hola a todos!');
console.log(5+5);

//Variable: Es un espacio de memoria que definimos para utilizarla luego. Se le denomina VAR (no es necesario colocarle el tipo de dato).

//Tipo de datos primitivos: 

/*  A) NUMÉRICOS: enteros, decimal, y de coma flotante 
    B) STRING: Son cadenas de caracteres o cadena de textos (frase, palabra o letra)
    C) BOOLEAN: Son los true o false
    D) UNDEFINED: Son datos que no tienen una definición aún (hasta no recibir un valor)
    E) NULL: Son datos que aún no tienen espacio en memoria*/

// VARIABLES:
var nombre = 'Miguel';
console.log(nombre);
console.log(typeof(nombre));
//La función typeof se utiliza para saber el tipo de dato que tiene la variable.

var edad = 34;
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo = false;
console.log(puestoDeTrabajo);
console.log(typeof(puestoDeTrabajo));

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
console.log(typeof(puestoDeTrabajo));

//OPERADORES MATEMÁTICOS
/* Suma, Resta, Multiplicación y División */
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2024;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria

yearAna = yearActual - edadAna;
yearMaria = yearActual -edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana', +  yearAna);
console.log('Año en que nació Maria', +  yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);

//Operadores Lógicos y de asignación
/* Son operadores que me permiten hacer comparaciones sobre el valor de las variables, sobre la sentencia: Los Operadores Lógicos son: < > <= >= == */
var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

/* Operadores Unarios: Son los que van a incrementar o hacer decremento de la asignación del valor */

edadAna = 34;
edadAna++;
console.log(edadAna);

/* Operadores Asignación: SOn los que van a obtener datos más complejos como lo son:
+= -= *= /= %= */
var a = 12;
var b = 2;
var c = a % b;
console.log(c);

/* Sentencias en Javascript */
var nombre = 'Miguel';
var esEstudiante = false;

if(esEstudiante == true) {
    console.log(nombre + ' es estudiante')
} else {
    console.log(nombre + ' no es estudiante');
}

/* if anidados */
var nombre = 'Miguel';
var edad = 63;
//edad < 12 Miguel es un niño
//edad > 11 y < 18 Miguel es un adolescente
//edad > 17 7 < 60 Miguel es un adulto
//edad > 60 Miguel es un anciano

if (edad < 12){
    console.log(nombre + ' es un niño')
} else if((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente');
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto')
} else {
    console.log(nombre + ' es un anciano');
}

/* Sentencia Switch case */
var mes = 2;

switch(mes) {
    case 1: 
        console.log('Enero');
        break;
    case 2: 
        console.log('Febrero');
        break;
    case 3: 
        console.log('Marzo');
        break;
    case 4: 
        console.log('Abril');
        break;
    default: 
    console.log('Mes no encontrado')
}

/* Sentencia For */
/* for(var i=1; i<= 10; i+=2){
    console.log(i);
}
 */
/* Sentencia While */
/* var i = 1;
while(i <= 10){
    console.log(i)
    i++;
}
console.log(i); */

/* Sentencia Do..While */
var i = 1;
do{
    console.log(i);
    i++;
}while(i <= 10);
console.log(i);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Funciones en Javascript:  */