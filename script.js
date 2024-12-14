//Copiar e Colar os Nº de telefone
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Número copiado: " + text);
}


// Pra os nº do WhatsApp
function WhatsappNumbers() {
  alert('WhatApp: Dr. Tiago: +244 912 628 259.  Ancião Afonso: +244 941 373 427')
}

///////////////////////////////////////////////////////////////////////////

//barra Menu
function mostrarMenu() {
    const barra_de_lado = document.querySelector('.barra_de_lado');
    barra_de_lado.style.display = 'flex';
    document.body.classList.add('no-scroll'); // Adicionar classe para desativar rolagem
}

// Fechar menu com o ícone: X
function ocultarMenu() {
    const fechar = document.querySelector('.barra_de_lado');
    fechar.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Remover classe para reativar rolagem
}


// Já estás na Página.
function page() {
    alert('Você já Está na Página de Brochuras.')
}

function page1() {
    alert('Você já Está na Página de Folhetos.')
}

function page3() {
    alert('Você já está na Página das Pregações.')
}

function page4() {
    alert('Você já está em Contactos.')
}



// Scrolar até Sobre Nós

const sobre_nós_secção = document.getElementById('sobre-nós');
const sobre_nós_botão = document.getElementById('saber_mais');

// Adiciona um evento de clique ao botão
sobre_nós_botão.addEventListener('click', () => {
    // Faz a rolagem suave para a seção de informações
    sobre_nós_secção.scrollIntoView({ behavior: 'smooth' });
});




sobre_nós_botão.addEventListener('click', () => {
    // Calcula o topo da seção de informações e a altura da viewport
    const topOfInfoSection = sobre_nós_secção.offsetTop;
    const viewportHeight = window.innerHeight;

    // Calcula a posição para centralizar a seção
    const scrollPosition = topOfInfoSection - (viewportHeight / 2) + (sobre_nós_secção.offsetHeight / 2);

    // Faz a rolagem suave para a seção de informações
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});









// Scrollar até tela inicial
const inicialsecção = document.getElementById('inicial');
const inicial_letras_imagem = document.getElementById('esquerda');

// Adiciona um evento de clique ao botão
inicial_letras_imagem.addEventListener('click', () => {
    // Faz a rolagem suave para a seção de informações
    inicialsecção.scrollIntoView({ behavior: 'smooth' });
});





//Acessar Páginas pelo Rodapé

function contactar_nos() {
    document.getElementById('rodapé-contactar').addEventListener('click', function() {
        window.location.href = 'contactos.html';
    });
}

function literaturas() {
    document.getElementById('rodapé-literaturas').addEventListener('click', function() {
        window.location.href = 'literaturas.html';
    });
}

function pregações() {
    document.getElementById('rodapé-pregações').addEventListener('click', function() {
        window.location.href = 'pregações.html';
    });
}

