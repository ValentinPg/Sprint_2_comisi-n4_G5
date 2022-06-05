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

        let create = document.createElement("li");
        let lista = document.getElementById("texto");
        let ultimoItem = nombres[nombres.length-1] + "= " + "$" + valores[valores.length-1];
        lista.appendChild(create);
        create.innerText = ultimoItem;
    
    }
    console.log(nombres);
    console.log(valores);


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
            let lista = document.getElementById("texto");
            let item = document.getElementsByTagName("li");
            lista.removeChild(item.item(cortar));
        }
    }
    
}

function sumar() {
    let total = 0;
    for (let x of valores) {
    total += x;
    } 
    console.log (total);
    let create = document.createElement("p");
    let pantalla = document.getElementById("resultado");
    pantalla.innerHTML = "LA SUMA TOTAL ES =" + total;
    pantalla.appendChild(create);
}






