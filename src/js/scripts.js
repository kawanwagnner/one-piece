document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".button");
  let personagens = document.querySelectorAll(".personagem");

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      personagens.forEach(function (personagem) {
        personagem.classList.toggle(
          "select",
          personagem === personagens[index]
        );
      });

      buttons.forEach(function (btn) {
        btn.classList.toggle("select", btn === button);
      });
    });
  });
});
