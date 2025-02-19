const player = {
  dano: 4,
  gold: 0,
};

let inimigoAtual;
let numeroInimigoAtual = 0;
let explosao = document.getElementById("explosao")

function gerarInimigo() {
  // |/=====[NÃO REPETIR INIMIGOS]=====\|
  let numero = Math.trunc(Math.random() * inimigos.length);
  while (numero === numeroInimigoAtual) {
    numero = Math.trunc(Math.random() * inimigos.length);
  }
  numeroInimigoAtual = numero;
  // |/=====[GERAR INIMIGO]=====\|
  inimigoAtual = { ...inimigos[numeroInimigoAtual] };
  inimigoAtual.__proto__ = inimigos[numeroInimigoAtual].__proto__;

  // |/=====[TEXTOS]=====\|
  nameText.textContent = inimigoAtual.nome;
  descriptionText.textContent = inimigoAtual.descrição;
  healthText.textContent = `${inimigoAtual.vida}/${inimigoAtual.vida}`;
  inimigoImage.src = inimigoAtual.imagem;
  dialogueText.textContent = inimigoAtual.falas[0];
}

let numeroFalaAtual;
inimigoImage.addEventListener("click", function (e) {
  console.log(inimigoAtual.ouro);
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

    // |/====[CHAMA EXPLOSAO]=====\/
    explosao.classList = "explosao explodindo";
    setTimeout(
      () => {
        explosao.classList = "explosao parada";
        gerarInimigo();
      },
      2000
    );
    // |/=====[GANHAR COISINHAS]=====\|]
    player.gold += inimigoAtual.gold;
    goldText.textContent = player.gold;

  }
});

gerarInimigo();
