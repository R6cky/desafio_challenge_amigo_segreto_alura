//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const listaDeAmigos = [];
const inputName = document.querySelector(".input-name");
const ulHtml = document.querySelector(".name-list");
const newTagLi = document.createElement("li");

function adicionarAmigo() {
  const buttonHtml = document.querySelector(".button-add");
  if (inputName.value.length == 0) {
    alert("Por favor, insira um nome válido.");
  }

  listaDeAmigos.push(inputName.value);
  ulHtml.innerHTML = "";
  listaDeAmigos.forEach((elem) => {
    const newTagLi = document.createElement("li");
    newTagLi.innerHTML = elem;
    ulHtml.append(newTagLi);
  });
}

function sortearAmigo() {}
