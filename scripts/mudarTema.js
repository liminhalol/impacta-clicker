let darkThemeActive = false;

// MELHORA ISSO AI DPS PFKKKKKKKK
function changeTheme() {
  if (darkThemeActive) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    descriptionText.style.color = "#464646";
    healthText.style.color = "#b30000";
  } else {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    descriptionText.style.color = "#bbbbbb";
    healthText.style.color = "#ff1717";
  }
  darkThemeActive = !darkThemeActive;
  changeThemeBtn.textContent = darkThemeActive ? "tema claro" : "tema escuro";
}

changeThemeBtn.addEventListener("click", changeTheme);
