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
