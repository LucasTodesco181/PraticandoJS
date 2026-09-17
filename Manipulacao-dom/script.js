// const elementos = document.querySelectorAll(".texto");

// //percorrendo a lista e imprimindo cada um dos elementos
// elementos.forEach(elemento => console.log(elemento));

// //percorrendo a lista e pegando o tesxto do elemento (innerText)
// elementos.forEach(elemento => console.log(elemento.innerText));

// //alerando textos
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado";
//     //elemento.textContent = "Alterado"; //vem com a formatação do elemento
// })

// //trocando as tags - innerHTML
// elementos.forEach(elemento => {
//     elemento.innerHTML = "<h2>item</h2>"
// })

// //trocar a cor do elemento 
// elementos.forEach(elemento => {
//     elemento.style.color = "#0000FF";
// })


// //EVENTOS COM JS
// // o que sao eventos? Ações dos usuários



// //Evento click

// // const botao = document.getElementById("btn");

// // botao.addEventListener("click", () => {
// //     alert("Você clicou!");
// // });








// //Evento de digitação (input/ keyup)

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// //INPUT
// //evento input -> dispara sempre que digita, em tempo real
// // campo.addEventListener("input", () => {

// //     //value é o que esta sendo digitado dentro do campo
// //     resultado.innerText = campo.value;
// // })









//Evento KEYUP
//So dispara quando solta a tecla

// campo.addEventListener("keyup", () => {

//     //value é o que esta sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })


//evento do mouse 
// const elemento = document.getElementById("troca-cor");

// //mouseover -> quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000"
// })


// //mouseout -> quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
    
// })



//Mousemove
//pega a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`posição X: ${evento.clientX}, posição Y: ${evento.clientY}`);
    
// })



//Evento de formulario (submit)

const form = document.querySelector("form"); //pegando direto pela tag form

form.addEventListener("submit", (e) => {

    //O comportamento padrão do formulário é recarregar a página ao enviar o submit

    //impede o comportamento padcrão do formulário
    e.preventDefault()

    const nome = document.getElementById("nome").value

    console.log(`Nome: ${nome}`);
    
})
