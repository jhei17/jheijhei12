const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {};}
for (let i = 0; i < botoes.length; i++) {
  botoes[j].onclick = function () {
    botoes[i].classList.remove("ativo");
  };
}
for (let j = 0; j < botoes.length; j++) {
  botoes[j].classList.remove("ativo");
}
const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}
