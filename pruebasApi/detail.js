
// Sección de detail.html

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var anuncioParam = urlParams.get('id');

console.log("xxxxxxxxxxxxxxxxxxx\n"+anuncioParam)

let detalle = ''

fetch('https://jsonplaceholder.typicode.com/posts/'+anuncioParam)
.then(response => {
    // console.log(response.json());
    return response.json();
})
.then(data => {
    // console.log(data);
        
        detalle += `
        <p>ID = ${data.id}</p>
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `; 
        console.log(data.title);
    
        document.getElementById('detail').innerHTML = detalle;
    })

