function agregar(){
    let create = document.createElement("div");
    let inp = document.createElement("input");
    inp.classList.add("num");
    create.appendChild(inp);

    let adelante = document.getElementById("contador");
    adelante.insertAdjacentElement("afterend", create)
}

function calcular(){
    let boton = document.getElementsByClassName("num")[0].value;
    let bolsa = [];
    bolsa.push(Number(boton))

    

    console.log(bolsa);
}