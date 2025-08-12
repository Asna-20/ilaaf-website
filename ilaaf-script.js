/* ilaaf-script.js */
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const greetBtn = document.getElementById("greetBtn");
  const greetingEl = document.getElementById("greeting");
  const clickBtn = document.getElementById("clickMe");
  const counterEl = document.getElementById("counter");

  let count = 0;

  greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
      greetingEl.textContent = "Please enter your name."; 
      greetingEl.style.color = "red";
    } else {
      greetingEl.textContent = `Hello, ${name}! 👋`;
      greetingEl.style.color = "green";
    }
    greetingEl.classList.remove("hidden");
  });

  clickBtn.addEventListener("click", () => {
    count += 1;
    counterEl.textContent = count;
  });
});
