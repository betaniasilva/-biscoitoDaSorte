const imgTry = document.querySelector("#imgTry");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnReset = document.querySelector("#btnReset");
const fortuneMessage = document.querySelector("#fortuneMessage");

const fortunes = [
  "Hoje é seu dia de sorte!",
  "Você terá uma surpresa agradável em breve.",
  "Um novo começo está por vir.",
  "A felicidade está ao virar da esquina.",
  "Você está cercado de amor.",
  "O sucesso está no seu futuro.",
  "Uma mudança emocionante está chegando.",
  "Você será recompensado por seu trabalho duro.",
];

imgTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

function handleTryClick(event) {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
  showRandomFortune();
}

function handleResetClick() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function showRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];
  fortuneMessage.textContent = randomFortune;
}
