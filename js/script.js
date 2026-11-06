
import { perguntas } from './perguntas.js';
import { aleatorio, nome } from './aleatorio.js';

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");

    caixaResultado.classList.remove("mostrar");

    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.textContent = "";

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = `A jornada de ${nome} chegou ao fim...`;

    textoResultado.textContent = historiaFinal;

    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");

    caixaAlternativas.textContent = "";

    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";

    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

botaoIniciar.addEventListener("click", iniciaJogo);

botaoJogarNovamente.addEventListener("click", jogaNovamente);
