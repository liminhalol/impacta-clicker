// LIGA ISSO DPS AI EU ACHO SLA NN SEI SE FICOU LEGAL NA REALKKKK
// startGameBtn.addEventListener("click", function (e) {
//   document.querySelector(".start-screen").classList.add("hidden");
// });

// TUDO ISSO AQUI É TEMPORARIO VIU FAZ ALGO DECENTE DPS
const changeScreenBtn = document.querySelector(".changeScreenBtn");
const enemyContainer = document.querySelector(".enemy-container");
const storeContainer = document.querySelector(".store-container");

let loja = false;
changeScreenBtn.addEventListener("click", function (e) {
  storeContainer.classList.toggle("hidden");
  enemyContainer.classList.toggle("hidden");
  changeScreenBtn.textContent = loja ? "loja" : "jogo";
  loja = !loja;
});

function explosionAnimation() {
  // |/====[CHAMA EXPLOSAO]=====\/
  explosao.classList = "explosao explodindo";

  // |/=====[ MUDA A EXPLOSÃO PRO PEIXE ]=====\|
  if (currentEnemy.name == "pexe") {
    explosao.src = "./imagens/bloodsplatter.gif";
    // |/=====[ REMOVER A EXPLOSÃO ]=====\|
    setTimeout(() => {
      explosao.classList = "explosao parada";

      // // |/=====[ VOLTAR PRA EXPLOSÃO CASO PEIXE ]=====\|
      if (currentEnemy.name == "pexe") {
        explosao.src = "./imagens/explosao.gif";
      }
    }, 1000);
  }
}

const btnBuyCursor = document.querySelector(".btn--buy-cursor");
const cursorText = document.querySelector(".store-cursors");

const cursors = {
  amount: 0,
  damage: 0,
  stack: [],

  buyCursor() {
    this.amount++;
    cursorText.textContent = this.amount;

    const cursorInterval = setInterval(function () {
      dealDamage(this.damage);
    }, 2000);
  },
};

btnBuyCursor.addEventListener("click", cursors.buyCursor.bind(cursors));
