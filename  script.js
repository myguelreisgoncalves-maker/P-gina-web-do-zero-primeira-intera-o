const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    let texto = botao.querySelector("span");

    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  });
});

// BOTÃO DE TEMA ESCURO

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});