// LIGA ISSO DPS AI EU ACHO SLA NN SEI SE FICOU LEGAL NA REALKKKK
// startGameBtn.addEventListener("click", function (e) {
//   document.querySelector(".start-screen").classList.add("hidden");
// });

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

// TUDO ISSO AQUI É TEMPORARIO VIU FAZ ALGO DECENTE DPS
const changeScreenBtn = document.querySelector(".changeScreenBtn");
const enemyContainer = document.querySelector(".enemy-container");
const storeContainer = document.querySelector(".store-container");

// |/=====[ LOJA ]=====\|
let loja = false;
changeScreenBtn.addEventListener("click", function (e) {
  storeContainer.classList.toggle("hidden");
  enemyContainer.classList.toggle("hidden");
  changeScreenBtn.textContent = loja ? "loja" : "jogo";
  loja = !loja;
});
// |/=====[ LOJA ]=====\|

// |/=====[ ANIMAÇÃO DE EXPLOSÃO ]=====\|
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
// |/=====[ ANIMAÇÃO DE EXPLOSÃO ]=====\|

// |/=====[ COMPRAR CURSORES ]=====\|
const btnBuyCursor = document.querySelector(".btn--buy-cursor");
const cursorText = document.querySelector(".store-cursors");

const cursors = {
  amount: 0,
  baseCost: 15,
  currentCost: 15,
  damage: 1,
  stack: [],

  buyCursor() {
    if (player.gold >= this.currentCost) {
      // |/=====[ UPDATE COST ]=====\|
      player.gold -= this.currentCost;
      goldText.textContent = player.gold;
      this.currentCost = Math.round(this.currentCost * 1.15);
      btnBuyCursor.textContent = `${this.currentCost}$`;

      // |/=====[ UPDATE AMOUNT ]=====\|
      this.amount++;
      cursorText.textContent = this.amount;

      // |/=====[ CREATE CURSOR ]=====\|
      const cursorInterval = this.stack.push(
        setInterval(() => {
          dealDamage(this.damage);
        }, 2000)
      );
    }
  },

  removeAllCursors() {
    for (cursor of this.stack) {
      clearInterval(x);
    }
  },
};

btnBuyCursor.addEventListener("click", cursors.buyCursor.bind(cursors));
