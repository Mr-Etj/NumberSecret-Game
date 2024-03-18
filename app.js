let listaNumerosSorteados = [];
let limite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
let text = `Escolha um número entre 1 a ${limite}`
console.log("Créditos ao Copêrnico")
console.log("FábioLinux é Foda")


function exibirTexto(tag, texto) {
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}

function mensagemInicial() {
    exibirTexto('h1', 'Número Secreto');
    exibirTexto('p', text);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemFinal = `Você descobriu em ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemFinal);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute < numeroSecreto) {
        exibirTexto('p', 'O número secreto é maior');
        limparCampo();
    } if(chute > numeroSecreto) {
        exibirTexto('p', 'O número secreto é menor');
        limparCampo();
    } tentativas++;
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let quantidadeDeElementos = listaNumerosSorteados.length;
    if(quantidadeDeElementos == limite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    mensagemInicial();
    tentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}