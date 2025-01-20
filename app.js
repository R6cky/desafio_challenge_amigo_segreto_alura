//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const listaDeAmigos = [];
const inputName = document.querySelector(".input-name");
const ulHtml = document.querySelector(".name-list");
const newTagLi = document.createElement("li");
const result = document.querySelector(".result-list");

function adicionarAmigo() {
  if (inputName.value.length == 0) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  listaDeAmigos.push(inputName.value);
  inputName.value = "";
  ulHtml.innerHTML = "";
  listaDeAmigos.forEach((elem) => {
    const newTagLi = document.createElement("li");
    newTagLi.innerHTML = elem;
    ulHtml.append(newTagLi);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length == 0) {
    alert("Não é possível realizar o sorteio. A lista de amigos está vazia.");
    return;
  }
  const indexOfArray = Math.floor(Math.random() * listaDeAmigos.length);
  result.innerHTML = `O amigo secreto sorteado é: ${listaDeAmigos[indexOfArray]}`;
}
