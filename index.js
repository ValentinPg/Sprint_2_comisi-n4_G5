function agregar(){
    let create = document.createElement("div");
    let inp = document.createElement("input");
    create.appendChild(inp);

    let adelante = document.getElementById("contador");
    adelante.insertAdjacentElement("afterend", create)
}

function calcular(){
    let boton = document.querySelectorAll("input");
    boton.classList.add("newclass")
    let bolsa = [];
    bolsa.push(boton);
    console.log(bolsa);
}