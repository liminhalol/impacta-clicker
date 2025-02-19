const player = {
  dano: 4,
  gold: 0,
};

let inimigoAtual;
let numeroInimigoAtual = 0;

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
  if (inimigoAtual.vidaAtual <= 0) { return } // pra nao sobreescrever cliques quando clica dps da vida estar negativa (na animacao de explosao)

  console.log(inimigoAtual.ouro);
  // |/=====[GERAR FALA]=====\|
  let numeroFala = Math.trunc(Math.random() * inimigoAtual.falas.length);
  while (numeroFala === numeroFalaAtual) {
    numeroFala = Math.trunc(Math.random() * inimigoAtual.falas.length);
  }
  numeroFalaAtual = numeroFala;
  dialogueText.textContent = inimigoAtual.falas[numeroFalaAtual];

  // |/=====[DAR DANO]=====\|
  if (inimigoAtual.vidaAtual-player.dano >= 0) {
    inimigoAtual.vidaAtual -= player.dano;
  } else {
    inimigoAtual.vidaAtual = 0;
  }
  healthText.textContent = `${inimigoAtual.vidaAtual}/${inimigoAtual.vida}`;

  // |/=====[ ANIMACAO ATAQUE ]=====\|
  const slash = document.createElement("div");
  if (inimigoAtual.nome === "pexe") {
    slash.classList.add("blood-slash");
  } else {
    slash.classList.add("normal-slash");
  }

  Object.assign(slash.style, {
    top: e.pageY-100 + 'px',
    left: e.pageX-100 + 'px'
  });

  document.body.appendChild(slash);

  setTimeout(
    () => {
      document.body.removeChild(slash);
    },
    500
  )

  // |/=====[MATAR INIMIGO]=====\|
  if (inimigoAtual.vidaAtual <= 0) {

    // |/====[CHAMA EXPLOSAO]=====\/
    explosao.classList = "explosao explodindo";
    setTimeout(
      () => {
        explosao.classList = "explosao parada";
        gerarInimigo();
      },
      1000
    );
    // |/=====[GANHAR COISINHAS]=====\|]
    player.gold += inimigoAtual.gold;
    goldText.textContent = player.gold;

  }
});

gerarInimigo();
