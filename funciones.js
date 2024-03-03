//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Funciones en Javascript:  */
function mensaje (){
    return 'Mensaje como devolución de la función';
    

}

var msj = mensaje();
console.log(msj);
//****************************** */
var result = sumar(3, 7,5);

function sumar(a, b, c) {
    return a + b + c
}
console.log(result);

//****************************** */
/* Funciones Recursivas */

var factorial = function(n){
    if((n == 0) || (n == 1)){
        return 1;
    }else{
        return(n * factorial(n - 1));
    }
}
