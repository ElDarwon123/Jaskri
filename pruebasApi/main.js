// const usuario = { 
//     nombre: 'Juan',
//     edad: 20,
//     gustos: ['programacion', 'videojuegos', 'cine'],
//     direccion: {
//         calle: 'Calle falsa 123',
//         ciudad: 'Madrid',
//         pais: 'España'
//     },
//     casado: false,  // true o false
//     estudios: null, // null o undefined
//     imprimirGustos: function() {    
//         console.log(this.gustos);
//     }
// }

// const amigos = [
//     {nombre: 'Juan', edad: 20},
//     {nombre: 'Ana', edad: 25},  
//     {nombre: 'Pedro', edad: 30},
//     {nombre: 'María', edad: 35},
//     {nombre: 'José', edad: 40}
// ];

// // // recorre el array de amigos y muestra su nombre y edad
// // let salida = '';
// // for (let i = 0; i < amigos.length; i++) {

// //     salida = salida + `<li> ${amigos[i].nombre} - ${amigos[i].edad} años </li>`;
// //     console.log(amigos[i].nombre);
// // }
// // // dibuja en el html el array de amigos
// // document.getElementById('lista').innerHTML = salida

// // console.log(usuario);



// // stringify convierte un objeto en un string JSON
// console.log(JSON.stringify(usuario));
// //console.log(JSON.stringify(amigos));


// // parse convierte un string en JSOn en un objeto JavaScript
//JSON.parse(JSON.stringify(usuario));
let elementos = ''

fetch('https://rickandmortyapi.com/api/character')
.then(response => {
    // console.log(response.json());
    return response.json();
})
.then(data => {
    // console.log(data);
        
        let a = (x) => {
            if(x == 'Alive'){
               return `<img class="stat" src="https://cdn.pixabay.com/photo/2020/08/04/11/45/heart-5462571_1280.png" alt=""></img>`
            }else if(x == 'Dead'){
                return `<img class="stat" src="https://genesistoxical.com/wp-content/uploads/2021/05/Calavera_dibujo_animado.png" alt=""></img>`
            }else{
                return `<img class="stat" src="https://cdn-icons-png.flaticon.com/512/5446/5446963.png" alt=""></img>`
            }
        }
        
        for(let i = 0; i < data.results.length; i++) {
            
            elementos += `
            <li class="card ${data.results[i].species}">
            <img src="${data.results[i].image}" alt=""> 
            <h2 class="names">${data.results[i].name}</h2>
            <p clas="species">${data.results[i].species +' ' + a(data.results[i].status)}</p>
            
            <a href="">Ver más</a>
            </li>`;
            
            
            
            
            console.log(data.results[i].name);
            
        }
        
            
        
        document.getElementById('posts').innerHTML = elementos;
        
    })

