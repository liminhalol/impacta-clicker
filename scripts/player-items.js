// |/====[ARMAS]====\|
const weapons = {
  faca: {
    nome: "faca",
    damage: 1,
    description: "custa 1 real no mercado",
    image: "./imagens/ataques/4.gif",
  },
  espada: {
    nome: "espada",
    damage: 5,
    description: "custa 1 real no mercado",
    image: "./imagens/ataques/3.gif",
  },
  biribinha: {
    nome: "biribinha",
    damage: 10,
    description: "custa 1 real no mercado",
    image: "./imagens/ataques/1.gif",
  },
  magia: {
    nome: "magia",
    damage: 17,
    description: "custa 1 real no mercado",
    image: "./imagens/ataques/2.gif",
  },
};

// |/====[PLAYER]====\|
const player = {
  gold: 0,
  weapon: weapons.magia,
};

// |/====[CRIAR HTML DAS ARMAS]====\|
const shopWeaponsContainer = document.querySelector(".shop-weapons");

for (const [key, value] of Object.entries(weapons).reverse()) {
  const html = `
    <div class="shop-weapon" data-weapon="${key}">
        <p>${key}</p>
    </div>
    `;
  shopWeaponsContainer.insertAdjacentHTML("afterbegin", html);
}

// |/====[COMPRAR ARMAS]====\|
const shopWeapons = document.querySelectorAll(".shop-weapon");

shopWeapons.forEach(function (weapon) {
  weapon.addEventListener("click", function (e) {
    for (_ of shopWeapons) _.classList.remove("shop-weapon--active"); // |/ REMOVER CLASSE "ATIVA" DAS OUTRAS ARMAS \|
    weapon.classList.add("shop-weapon--active");
    player.weapon = weapons[weapon.dataset.weapon];
    document.querySelector(".stats-weapon").textContent = player.weapon.nome;
  });
});
