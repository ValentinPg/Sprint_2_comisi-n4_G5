let nombres = [];
let valores = [];

function agregarNombre(){
    let minombre = document.getElementById("nombre").value;
    let prueba = nombres.indexOf(minombre);
    if(prueba >= 0 || minombre == "" ) {
        alert("el nombre ingresado ya se encuentra en la base de datos, por favor cambielo")
    } else {
        nombres.push(minombre);
    }
    console.log(nombres)

    let create = document.createElement("p");
    let lista = document.getElementById("texto");
    lista.appendChild(create)
    lista.innerText = nombres;
}

function borrarNombre(){
    let minombre = document.getElementById("nombre").value;
    for (let nomb of nombres) {
        if(nomb == minombre){
            nombres.splice(nombres.indexOf(nomb), 1);
            console.log(nombres);
        }
    }
    let create = document.createElement("p");
    let lista = document.getElementById("texto");
    lista.appendChild(create)
    lista.innerText = nombres;
}






