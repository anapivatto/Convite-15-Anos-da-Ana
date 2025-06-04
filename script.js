// Seleção das telas
const telas = {
  tela1: document.getElementById('tela1'),
  tela2: document.getElementById('tela2'),
  tela3: document.getElementById('tela3'),
  tela4: document.getElementById('tela4'),
  tela5: document.getElementById('tela5'),
};

// Botões e elementos interativos
const cartaSemFundo = document.getElementById('cartaSemFundo');
const videoCheshire = document.getElementById('videoCheshire');
const btnAtravessar = document.getElementById('btnAtravessar');
const btnSugestoes = document.getElementById('btnSugestoes');
const btnVoltar = document.getElementById('btnVoltar');

function mostrarTela(nomeTela) {
  // Oculta todas
  Object.values(telas).forEach((tela) => {
    tela.classList.remove('ativa', 'fade-in', 'fade-out', 'distorcao');
    tela.style.display = 'none';
  });
  // Mostra a selecionada com fade in
  const tela = telas[nomeTela];
  tela.style.display = 'flex';
  setTimeout(() => tela.classList.add('ativa', 'fade-in'), 50);
}

// Fluxo de telas e animações

// Tela 1 - carta sem fundo clicável para ir para tela 2
cartaSemFundo.addEventListener('click', () => {
  // Efeito distorção na tela1 antes de ir para tela2
  telas.tela1.classList.add('distorcao');
  setTimeout(() => {
    mostrarTela('tela2');
    videoCheshire.play();
  }, 800);
});

// Tela 2 - vídeo do Cheshire, ao acabar vai para tela 3
videoCheshire.addEventListener('ended', () => {
  mostrarTela('tela3');
});

// Tela 3 - botão atravessar vai para tela 4
btnAtravessar.addEventListener('click', () => {
  // fade out tela 3 e fade in tela 4
  telas.tela3.classList.add('fade-out');
  setTimeout(() => {
    mostrarTela('tela4');
  }, 600);
});

// Tela 4 - botão sugestões abre tela 5
btnSugestoes.addEventListener('click', () => {
  // fade out tela 4 e fade in tela 5
  telas.tela4.classList.add('fade-out');
  setTimeout(() => {
    mostrarTela('tela5');
  }, 600);
});

// Tela 5 - botão voltar volta pra tela 4
btnVoltar.addEventListener('click', () => {
  telas.tela5.classList.add('fade-out');
  setTimeout(() => {
    mostrarTela('tela4');
  }, 600);
});

// Iniciar mostrando a primeira tela
mostrarTela('tela1');
