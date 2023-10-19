/*
PRIMEROOO
function insertarDatos(valor, list){
    list.push(valor);
    }
    let list = [];
    for(let i = 0; i < 10 ; i++){
        let valor = parseInt(prompt("Ingrese Valor"))
        insertarDatos(valor, list);
    }
    list.sort(function(a, b){return a-b})
    console.log(list)
*/
/*
SEGUNDO
function lista(inicio, fn){
    let list = [];
    if(inicio < fn){
        let a =0
        for(let a = inicio; a <= fn ; a++){
            list.push(a);
        }
    }else{
        for(let a = inicio; a >= fn ; a--){
            list.push(a);
        }
    }
    console.log("esto es: ", list)
}

let a = parseInt(prompt("ingrese numero desde donde quiereiniciar"))
let b = parseInt(prompt("ingrese numero hasta donde va a llegar"))
lista(a,b)

*/
/*
TERCERO
let k = parseInt(prompt("ingrese numero"));
let i = 2;
let result = "";
let lis4=[]
let lis5=[]

while (k > 1) {
    if (k % i == 0) {
        result += i + " ";
        k /= i;
        lis4.push(k)
        lis5.push(i)
    } else {
        i++;
    }
    
}   

    console.log(lis4);
    console.log(lis5);
*/
/*
CUARTO
let numero = 1;
let acumulado = 0;
let cantidad = 0;

while (numero != 0) {
    numero = parseInt(prompt("Ingrese un número: "));
    if (isNaN(numero)) {
        alert("Debe ingresar un número válido.");
    } else {
        acumulado += numero;
        cantidad++;
    }
}

console.log("El número acumulado es",acumulado, " y se ingresaron",cantidad," números.")
*/
/*
QUINTOO
let sas = parseInt(prompt("ingrese el valor"))
let a = 1
while(a < sas) {
    console.log(a)
    a*=2;
}
*/
/*
SEXTA
let oracion = prompt("Ingrese oración")
let letra = prompt("que ltra quiere buscar?")
let cont = 0

for (let i = 0 ; i < oracion.length ; i++){
    if(oracion[i]=== letra){
        cont++
    }
}

console.log("La letra ", letra ,"aparece",cont ,"veces en la oración.")
*/
