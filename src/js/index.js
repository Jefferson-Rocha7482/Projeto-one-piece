const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll(".personagem")



console.log(personagens);

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        selecionarImagem(indice);
        selecionarBotaOuNao(botao);

    })
})

function selecionarImagem(indice) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagens[indice].classList.add('selecionado');
}

function selecionarBotaOuNao(botao) {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
}

