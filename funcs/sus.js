/*function saludo(){   //FUNCION NORMAL
    let a = 'uwu onichan'
    return a
}
saludo()

const x = () => {let a = 'uwu onichan :v'} //FUNCION DE FLECHA

*/
 // OBEJeTOS
/*
const persona1 = {
    nombre : 'Darwom',
    apellidos : 'Gomez',
    edad : 17,
    celular: 3134838350,
    gustos: ['Musica', 'Jugar', 'Hacer nada'],
    casado: false,
    residencia: {
        barrio: 'Puelenje',
        pais: 'Colombia',
        ciudad: 'Papayan',
        direccion: 'Suputamadre'
    }
}
console.log(persona1.nombre, persona1.apellidos, persona1.gustos[1])
console.log(persona1.residencia.direccion)
*/



const celular = {
    marca: 'Samsung',   //MARCA CELULAR
    color: 'blanco',    //COLOR PARTE DE ATRAS DE TELEFONO :V
    medidas: {          //ALTO, ANCHO, LARGO :V
        altura: '163,7 milimetros',
        ancho: '8,7 milimetros',
        largo: '75,3 milímetros'
    },
    modelo: 'A21s',     //MODELO CELULAR
    componentes: {      //COMPONENT CELULAR
        procesador: 'Procesador Octa Core', //PROCESADOR DEL CELULAR A21S
        ram: 'Memoria RAM de 4GB',          //RAM DEL CELULAR A21S
        pantalla: 'Pantalla LED Multi Touch de 6.5" HD',   //PANTALLA CELULAR A21S
        so: 'Android 10' //SISTEMA OPERATIVO DEL CELULAR
    },
    precio:'$1.299.990 COP', //PRECIO CELULAR
    estado: false,//ESTADO POR DEFECTO DEL CELULAR
    volumen: 0,

    subirVolumen: function(){
        celular.volumen+=1;
        console.log(celular.volumen);
    },

    bajarVolumen: function(){
        celular.volumen-=1;
        console.log(celular.volumen);
        if (celular.volumen <= 0){
            stop
        }
        
    },
    
    encender: function(x){
        
        if (x == 0){
            this.estado = true
            console.log('el dispositivo se apaga')
        }else if (x == 1){
            this.estado = false
            console.log('el dispositivo se enciende')
        }else{
            console.log('valor no admitdo eligas dsad')
            
        }
        
    }
    
}

class Cellphone {
    // pasar un objeto al constructor como parametro de los oatributos
    /////////////////////////////
    constructor({
        marca, 
        color,
        medidas = {}, 
        modelo,  
        precio,
        componentes = {}
    })
    {
        this.marca = marca;
        this.color = color;
        this.medidas = medidas;
        this.modelo = modelo;
        this.precio = precio;
        this.componentes = componentes;
    }
    /////////////////////////////

    // contructor con parametros     
    /*constructor(marca, color, modelo, precio)
    {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.precio = precio;
        
    }*/

    /////////////////////////////
        

    prender(){
        console.log('se prende')
    }
}


let cel1 = new Cellphone({marca:'redmi', color:'rojo', medidas:{altura: '17 cm', largo: '9cm', ancho:'0.8 cm'} , model:'9t', precio:'3.400.000 COP', 
                        componentes:{procesador:'AJSJDASJD', ram:'AMD', pantalla: 'ASUS'} }) // constructor por medio de un objeto 
let cel2 = new Cellphone({marca:'aifon', color:'blanco', medidas:{altura: '20 cm', largo: '10cm', ancho:'0.5 cm'} , model:'14', precio:'3.800.000 COP', 
                        componentes:{procesador:'AJSJDASJD', ram:'AMD', pantalla: 'ASUS'} })
let cel3 = new Cellphone({marca:'samsung', color:'azul', medidas:{altura: '18 cm', largo: '12cm', ancho:'1 cm'} , model:'a32', precio:'2.400.000 COP', 
                        componentes:{procesador:'AJSJDASJD', ram:'AMD', pantalla: 'ASUS'} })
let list = []
list.push(cel1, cel2, cel3)
console.log('Celular')
console.log(list)

// let on = parseInt(prompt('0 apaga 1 enciende'))
// console.log(celular.encender(on))
// console.log(celular.encendido)



const audifonos = {
    marca: 'Bose',  //MARCA AUDIFONOS
    color: 'Negro', //COLOR AUDIFNOS
    botones: {      //BOTONES DE MANEJO O LATERALES
        on: 'Encendido / Apagado',  //BOTON ENCENDIDO / APAGADO
        boton1: 'bajar volumen / anterior canción', //BOTON BAJAR VOLUMEN / DEVOLVER CANCIOON
        boton2: 'pausar audio', // BOTON MEDIO PAUSAR / INICIAR AUDIO
        boton3: 'subir volumen / siguiente canción' // BOTON SUBIR VOLUMEN / PASAR A SIGUIENTE CANCIÓN
    },
    puertos: {    // PUERTOS O ENTRADAS DE LOS AUDIFONOS
        entradaCargador: 'USC c', //TIPO ENTRADA DE CARGADOR DE LOS AUDIFONOS
        auxiliar: 'Jack 3,5' //TIPO DE ENTRADA DE AUXILIAR DE LOS AUDIFONOS
    },
    precio: '70.000 COP' //PRECIO AUDIFONOS
}

class Headset{
    // pasar un objeto al constructor como parametro de los oatributos
    /////////////////////////////
    constructor({
        marca, 
        color, 
        Botones = {},  
        puertos = {},
        precio
    })
    {
        this.marca = marca;
        this.color = color;
        this.Botones = Botones;
        this.puertos = puertos;
        this.precio = precio;
    }

}

let Headset1 = new Headset({marca: 'AVG', color: 'Negro',
                            botones:{boton1: 'Subir volumen / siguiente cancion', boton2: 'Pausar Cancion', boton3: 'Bajara volumen / anterios vcacnion'},
                            puertos:{entradaCargador:'USB C', auxiliar: 'Jack 3.5'}, precio: '70.000'})
let Headset2 = new Headset({marca: 'AVG', color: 'Negro',
                            botones:{boton1: 'Subir volumen / siguiente cancion', boton2: 'Pausar Cancion', boton3: 'Bajara volumen / anterios vcacnion'},
                            puertos:{entradaCargador:'USB C', auxiliar: 'Jack 3.5'}, precio: '70.000'})
let Headset3 = new Headset({marca: 'AVG', color: 'Negro',
                            botones:{boton1: 'Subir volumen / siguiente cancion', boton2: 'Pausar Cancion', boton3: 'Bajara volumen / anterios vcacnion'},
                            puertos:{entradaCargador:'USB C', auxiliar: 'Jack 3.5'}, precio: '70.000'})

let lis2 = []
lis2.push(Headset1, Headset2, Headset3)
console.log('Headset')
console.log(lis2)

const speedMax = {
    material: 'Plastico',   //MATERIAL ENVASE DE SPEEDMAX
    colorTapa: 'Negro',     //COLOR TAPA DE ENVASE
    cantidad: '250 ml',     //CANTIDAD DE PRODUCTO EN ENVASE
    ingredientes: {         //INGREDIENTES DE LA BEBIDA
        ingredite1: 'pulpa de chontaduro', 
        ingredite2: 'vitaminas',
        ingredite3: 'cafeína'
    },
    precio: '1.500 COP' //PRECIO DE LA BEBIDA

    
}

class drink {
    constructor({
        material,
        colorTapa,
        cantidad,
        ingredientes = {},
        precio
    })
    {
        this.material
        this.colorTapa
        this.cantidad
        this.ingredientes
        this.precio
    }
}

let drink1 = new drink({material: 'Vidrio', colorTapa: 'gris', cantidad: '500ml',
                        ingredientes:{ingredite1: 'Uva', ingredite2: 'Agua Carbonatada', ingredite3: 'Azucar'},
                        precio: '2.500 COP'});
let drink2 = new drink({material: 'Vidrio', colorTapa: 'gris', cantidad: '500ml',
                        ingredientes:{ingredite1: 'Uva', ingredite2: 'Agua Carbonatada', ingredite3: 'Azucar'},
                        precio: '2.500 COP'});
let drink3 = new drink({material: 'Vidrio', colorTapa: 'gris', cantidad: '500ml',
                        ingredientes:{ingredite1: 'Uva', ingredite2: 'Agua Carbonatada', ingredite3: 'Azucar'},
                        precio: '2.500 COP'});

let lis3 = []
lis3.push(drink1,drink2,drink3)
console.log('Bebida')
console.log(lis3)
//console.log(celular.componentes, celular.color, celular.precio)



/*
const personaje = {
    caminar: function (){
        console.log('el personaje camina')
    }
}*/


/*
//CLASES
num = 123
//snake-case
nombres_y_apellidos = 'Steven Gomez'
//camellCase
fechaDeNacimiento = '14 jun 2006'
//PascalCase
CiudadOrigen = 'Popayan'
*/

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log('SUPUTAMADREEE')
    }
}
let a = new Persona('Stevem','17')

/*
class Vehiculo {
    constructor({
        marca: marca,
        color: color
    })
    {
        this.marca
        this.color
    }
}*/