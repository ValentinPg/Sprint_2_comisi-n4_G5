
let nombres = [];
let valores = [];

function agregarNombre(){
    let minombre = document.getElementById("nombre").value;
    let prueba = nombres.indexOf(minombre);
    if(prueba >= 0 || minombre == "" ) {
        alert("el nombre ingresado ya se encuentra en la base de datos, por favor cambielo")
    } else {
        nombres.push(minombre);
        let miImporte = Number(document.getElementById("importe").value);
        valores.push(miImporte);
        console.log(valores);
    }
    console.log(nombres);
    console.log(valores);



    let create = document.createElement("li");
    let lista = document.getElementById("texto");
    create.innerText = nombres + ": " + valores;
    lista.appendChild(create);
    
}

function borrarNombre(){
    let minombre = document.getElementById("nombre").value;
    for (let nomb of nombres) {
        if(nomb == minombre){
            let cortar = nombres.indexOf(nomb);
            nombres.splice(cortar, 1);
            console.log(nombres);
            valores.splice(cortar, 1);
            console.log(valores);
        }
    }
    let create = document.createElement("p");
    let lista = document.getElementById("texto");
    lista.innerText = nombres;
    lista.appendChild(create)
    
}

/// calcula el total de todos los integrantes
function sumar() { 
    let total = 0;
    for (let x of valores) {
    total += x;
    } 
    console.log (total);
    let create = document.createElement("p");
    let pantalla = document.getElementById("resultado");
    pantalla.innerHTML = "LA SUMA TOTAL ES : $" + total;
    pantalla.appendChild(create);
   
///  para imprimir lo que cada uno aporta de los integrantes
    let personas = nombres.length ;
    let aporte =  total / personas ;
    console.log(total)
    console.log(personas)
    console.log(aporte);
    let crear = document.createElement("p");
    let viewport = document.getElementById("DivisionGastos");
    viewport.innerHTML = "A cada uno le toca aportar: $" + aporte.toFixed(2);
    viewport.appendChild(crear);

}








