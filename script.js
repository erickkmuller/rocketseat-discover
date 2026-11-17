const switchButton = document.querySelector("#switch button");
const avatar = document.querySelector("#profile-avatar");
const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
const themeColor = document.querySelector('meta[name="theme-color"]');

function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // The selected theme will continue to work while the page is open.
  }
}

function setTheme(theme) {
  const isLight = theme === "light";

  document.documentElement.classList.toggle("light", isLight);
  switchButton.setAttribute("aria-pressed", String(isLight));
  switchButton.setAttribute(
    "aria-label",
    isLight ? "Ativar modo escuro" : "Ativar modo claro"
  );
  avatar.src = isLight
    ? "./assets/avatar-light.png"
    : "./assets/avatar_transparente.png";
  themeColor.setAttribute("content", isLight ? "#f5f5f5" : "#000000");
}

const savedTheme = getSavedTheme();
setTheme(savedTheme || (themeMedia.matches ? "light" : "dark"));

switchButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.classList.contains("light")
    ? "dark"
    : "light";

  setTheme(nextTheme);
  saveTheme(nextTheme);
});

themeMedia.addEventListener("change", (event) => {
  if (!getSavedTheme()) {
    setTheme(event.matches ? "light" : "dark");
  }
});
