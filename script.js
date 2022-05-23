const imagem = document.querySelector("#anya");
const legenda = document.querySelector("#legenda");
let botao = document.querySelector("#proximo");

botao.addEventListener("click", () => {
  if (botao.value == "um") {
    imagem.src = "./ASSETS/assustada.jpg";
    legenda.innerText = "Anya está assustada";
    botao.value = "dois";
  }else if(botao.value == 'dois'){
    imagem.src = "./ASSETS/chorando.jpg";
    legenda.innerText = "Anya está chorando!";
    botao.value = "tres";
  }else{
    imagem.src = "./ASSETS/carinha.jpg";
    legenda.innerText = "( ͡° ͜ʖ ͡°)"
    botao.value = 'um'
  }
});