let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
    } else {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
        input.focus();
    }
}

function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function(amigo) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        exibirResultado(amigoSorteado);
        limparListaAmigos();
        desativarEntrada();
        exibirBotaoNovoSorteio();
    }
}

function exibirResultado(amigo) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigo}</strong></li>`;
}

function limparListaAmigos() {
    amigos = [];
    atualizarListaAmigos();
}

function desativarEntrada() {
    let input = document.querySelector('#amigo');
    let botaoAdicionar = document.querySelector('.button-add');
    input.disabled = true;
    botaoAdicionar.disabled = true;
}

function exibirBotaoNovoSorteio() {
    let container = document.querySelector('.button-container');
    let botaoNovoSorteio = document.createElement('button');
    botaoNovoSorteio.textContent = 'Novo Sorteio';
    botaoNovoSorteio.className = 'button-new-draw';
    botaoNovoSorteio.onclick = reiniciarSorteio;
    container.appendChild(botaoNovoSorteio);
}

function reiniciarSorteio() {
    let input = document.querySelector('#amigo');
    let botaoAdicionar = document.querySelector('.button-add');
    let resultado = document.querySelector('#resultado');
    input.disabled = false;
    botaoAdicionar.disabled = false;
    resultado.innerHTML = '';
    removerBotaoNovoSorteio();
    input.focus();
}

function removerBotaoNovoSorteio() {
    let botaoNovoSorteio = document.querySelector('.button-new-draw');
    if (botaoNovoSorteio) {
        botaoNovoSorteio.remove();
    }
}

// Adiciona um ouvinte de eventos ao campo de entrada para detectar a tecla Enter
document.querySelector('#amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});
