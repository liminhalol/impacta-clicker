class Enemy {
  constructor(name, health, description, lines, image, gold) {
    (this.name = name),
      (this.health = health),
      (this.currentHealth = health),
      (this.description = description),
      (this.lines = lines),
      (this.image = image),
      (this.gold_ = gold);
  }

  get gold() {
    return Math.trunc(this.gold_ * (0.5 + Math.random() * 0.5));
  }
}

const enemies = [
  new Enemy(
    // |/====[NOME]====\|
    "joao",
    // |/====[VIDA]====\|
    50,
    // |/====[DESCRIÇÃO]====\|
    "o mais foda (eu)",
    // |/====[FALAS]====\|
    [
      "eu foda vc nerd",
      "hahahahhaha eu sou o dev >:)",
      "bleckt",
      "isso é um teste",
    ],
    // |/====[IMAGEM]====\|
    "./imagens/joao.png",
    // |/====[OURO]====\|
    10
  ),
  new Enemy(
    // |/====[NOME]====\|
    "caio polonio",
    // |/====[VIDA]====\|
    50,
    // |/====[DESCRIÇÃO]====\|
    "caio polonio se ele fosse um mago foda",
    // |/====[FALAS]====\|
    [
      "meu nome e caio polonio! melhor tomar cuidado....",
      "bola de fogo!!!!!!",
      "vc ja assistiu bocchi the rock??!!?!?",
    ],
    // |/====[IMAGEM]====\|
    "./imagens/caio.png",
    // |/====[OURO]====\|
    10
  ),
  new Enemy(
    // |/====[NOME]====\|
    "guigas autopessas 3000",
    // |/====[VIDA]====\|
    50,
    // |/====[DESCRIÇÃO]====\|
    "guigao conseguiu um meca, e agora????",
    // |/====[FALAS]====\|
    ["chama!", "so pra rir", "essa e boa 😜", "bo joga baldurs gate mano"],
    // |/====[IMAGEM]====\|
    "./imagens/guigas.png",
    // |/====[OURO]====\|
    10
  ),
  new Enemy(
    // |/====[NOME]====\|
    "pexe",
    // |/====[VIDA]====\|
    50,
    // |/====[DESCRIÇÃO]====\|
    "guigao conseguiu um meca, e agora????",
    // |/====[FALAS]====\|
    ["glub glub!!!", "glub blub....", "","*sons de peixe diversos*", "o captalismo e uma praga pra sociedade moderna"],
    // |/====[IMAGEM]====\|
    "./imagens/pexe.png",
    // |/====[OURO]====\|
    10
  ),
  new Enemy(
    // |/====[NOME]====\|
    "luiz",
    // |/====[VIDA]====\|
    50,
    // |/====[DESCRIÇÃO]====\|
    "guigao conseguiu um meca, e agora????",
    // |/====[FALAS]====\|
    ["seja castigado, criminoso!", "sera que esse site roda bad apple?", "linux supremacia", "prefiria jogar touhou"],
    // |/====[IMAGEM]====\|
    "./imagens/luiz.png",
    // |/====[OURO]====\|
    10
  ),
];
