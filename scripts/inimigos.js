class Inimigo {
  constructor(nome, vida, descrição, falas, imagem, ouro) {
    (this.nome = nome),
      (this.vida = vida),
      (this.vidaAtual = vida),
      (this.descrição = descrição),
      (this.falas = falas),
      (this.imagem = imagem),
      (this.ouro = ouro);
  }

  get gold() {
    return Math.trunc(this.ouro * (0.5 + Math.random() * 0.5));
  }
}

const inimigos = [
  new Inimigo(
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
    "imagens/joao.png",
    // |/====[OURO]====\|
    10
  ),
  new Inimigo(
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
    "imagens/caio.png",
    // |/====[OURO]====\|
    10
  ),
  new Inimigo(
    // |/====[NOME]====\|
    "guigas autopessas 3000",
    // |/====[VIDA]====\|
    50,
    // |/====[DESCRIÇÃO]====\|
    "guigao conseguiu um meca, e agora????",
    // |/====[FALAS]====\|
    ["chama!", "so pra rir", "essa e boa 😜", "bo joga baldurs gate mano"],
    // |/====[IMAGEM]====\|
    "imagens/guigas.png",
    // |/====[OURO]====\|
    10
  ),
];
