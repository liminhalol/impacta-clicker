let temaEscuro = false;

// MELHORA ISSO AI DPS PFKKKKKKKK
function changeTheme() {
  if (temaEscuro) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    descriptionText.style.color = "#464646";
    healthText.style.color = "#b30000";
    attackButton.style.backgroundColor = "#000";
    attackButton.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    descriptionText.style.color = "#bbbbbb";
    healthText.style.color = "#ff1717";
    attackButton.style.backgroundColor = "#fff";
    attackButton.style.color = "#000";
  }
  temaEscuro = !temaEscuro;
  changeThemeBtn.textContent = temaEscuro ? "tema claro" : "tema escuro";
}

changeThemeBtn.addEventListener("click", changeTheme);
