const attackButton = document.querySelector(".attackBtn");

// ELEMENTOS
const nameText = document.querySelector(".name");
const healthText = document.querySelector(".health");
const descriptionText = document.querySelector(".description");
const dialogueText = document.querySelector(".dialogue");
const inimigoImage = document.querySelector(".inimigo");

const impacters = [
  {
    nome: "joão",
    vida: 50,
    vidaAtual: 50,
    descrição: "muito foda (eu)",
    falas: [
      "eu foda vc nerd",
      "hahahahhaha eu sou o dev >:)",
      "bleckt",
      "isso é um teste",
    ],
    imagem: "imagens/joao.png",
  },
  {
    nome: "caio polonio",
    vida: 50,
    vidaAtual: 50,
    descrição: "caio polonio se ele fosse um mago foda",
    falas: [
      "meu nome é ciao polonio! melhor tomar cuidado....",
      "bola de fogo!!!!!!",
      "vc ja assistiu bocchi the rock??!!?!?",
    ],
    imagem: "imagens/caio.png",
  },
  {
    nome: "guigas autopeças 3000",
    vida: 50,
    vidaAtual: 50,
    descrição: "guigao conseguiu um meca, e agora????",
    falas: [
      "chama!",
      "só pra rir",
      "essa é boa 😜",
      "bo joga baldurs gate mano",
    ],
    imagem: "imagens/guigas.png",
  },
];

const player = {
  dano: 2,
};

let inimigoAtual;

let numeroInimigoAtual = 0;
function gerarInimigo() {
  // |/=====[NÃO REPETIR INIMIGOS]=====\|
  let numero = Math.trunc(Math.random() * impacters.length);
  while (numero === numeroInimigoAtual) {
    numero = Math.trunc(Math.random() * impacters.length);
  }
  numeroInimigoAtual = numero;
  // |/=====[GERAR INIMIGO]=====\|
  inimigoAtual = { ...impacters[numeroInimigoAtual] };

  // |/=====[TEXTOS]=====\|
  nameText.textContent = inimigoAtual.nome;
  healthText.textContent = `${inimigoAtual.vida}/${inimigoAtual.vida}`;
  descriptionText.textContent = inimigoAtual.descrição;
  inimigoImage.src = inimigoAtual.imagem;
  dialogueText.textContent = inimigoAtual.falas[0];
}

let numeroFalaAtual;
attackButton.addEventListener("click", function (e) {
  // |/=====[GERAR FALA]=====\|
  let numeroFala = Math.trunc(Math.random() * inimigoAtual.falas.length);
  while (numeroFala === numeroFalaAtual) {
    numeroFala = Math.trunc(Math.random() * inimigoAtual.falas.length);
  }
  numeroFalaAtual = numeroFala;
  dialogueText.textContent = inimigoAtual.falas[numeroFalaAtual];

  // |/=====[DAR DANO]=====\|
  inimigoAtual.vidaAtual -= player.dano;
  healthText.textContent = `${inimigoAtual.vidaAtual}/${inimigoAtual.vida}`;

  // |/=====[MATAR INIMIGO]=====\|
  if (inimigoAtual.vidaAtual <= 0) {
    gerarInimigo();
  }
});

gerarInimigo();
