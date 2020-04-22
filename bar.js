const button = document.getElementById("btn-submit");
const out = document.getElementById("output");
let state = false;
let text, output;

button.addEventListener("click", () => {
  if (!state) {
    const div = document.createElement("div");
    div.classList.add("output");
    state = true;
  } else {
  }
});
