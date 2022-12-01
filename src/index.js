import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();

  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  const newMonkeys = [];
  app.addBananas(newMonkeys);
  console.log(newMonkeys);

  const newDiv = document.getElementById("emojis");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = newMonkeys;
  newDiv.appendChild(newParagraph);
  window.__JS_APP = app;
});