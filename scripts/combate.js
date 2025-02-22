let currentEnemy;
let currentEnemyNumber = 0;

function createEnemy() {
  // |/=====[NÃO REPETIR INIMIGOS]=====\|
  let randomEnemyNumber = Math.trunc(Math.random() * enemies.length);
  while (randomEnemyNumber === currentEnemyNumber) {
    randomEnemyNumber = Math.trunc(Math.random() * enemies.length);
  }
  currentEnemyNumber = randomEnemyNumber;

  // |/=====[GERAR INIMIGO]=====\|
  currentEnemy = { ...enemies[currentEnemyNumber] };
  currentEnemy.__proto__ = enemies[currentEnemyNumber].__proto__;

  // |/=====[TEXTOS]=====\|
  nameText.textContent = currentEnemy.name;
  descriptionText.textContent = currentEnemy.description;
  healthText.textContent = `${currentEnemy.health}/${currentEnemy.health}`;
  enemyImage.src = currentEnemy.image;
  dialogueText.textContent = currentEnemy.lines[0];
}

let currentLineNumber;
enemyImage.addEventListener("click", function (e) {
  if (currentEnemy.currentHealth <= 0) {
    return;
  } // pra nao sobreescrever cliques quando clica dps da health estar negativa (na animacao de explosao)

  damage = player.weapon.damage;

  // |/=====[ GERAR FALA ]=====\|
  let randomLineNumber = Math.trunc(Math.random() * currentEnemy.lines.length);
  while (randomLineNumber === currentLineNumber) {
    randomLineNumber = Math.trunc(Math.random() * currentEnemy.lines.length);
  }
  currentLineNumber = randomLineNumber;
  dialogueText.textContent = currentEnemy.lines[currentLineNumber];

  // |/=====[ DAR DANO ]=====\|
  if (currentEnemy.currentHealth - damage >= 0) {
    currentEnemy.currentHealth -= damage;
  } else {
    currentEnemy.currentHealth = 0;
  }
  healthText.textContent = `${currentEnemy.currentHealth}/${currentEnemy.health}`;

  // |/=====[ ANIMACAO DE ATAQUE ]=====\|
  const slash = document.createElement("img");
  slash.classList.add("attack-animation");

  slash.src =
    currentEnemy.name === "pexe"
      ? "./imagens/ataques/blood-slash.gif"
      : player.weapon.image;

  Object.assign(slash.style, {
    top: e.pageY - 100 + "px",
    left: e.pageX - 100 + "px",
  });

  document.body.appendChild(slash);

  setTimeout(() => {
    document.body.removeChild(slash);
  }, 500);

  // |/=====[MATAR INIMIGO]=====\|
  if (currentEnemy.currentHealth <= 0) {
    // |/====[CHAMA EXPLOSAO]=====\/
    explosao.classList = "explosao explodindo";

    // chama sangue pro peixe
    if (currentEnemy.name == "pexe") {
      explosao.src = "./imagens/bloodsplatter.gif";
    }
    setTimeout(() => {
      explosao.classList = "explosao parada";

      // volta a normalidade se for peixe
      if (currentEnemy.name == "pexe") {
        explosao.src = "./imagens/explosao.gif";
      }
      createEnemy();
    }, 1000);
    // |/=====[GANHAR COISINHAS]=====\|]
    // player.gold += currentEnemy.gold;
    // goldText.textContent = player.gold;
  }
});

createEnemy();
