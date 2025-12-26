const btn = document.getElementById("toggleBtn");
const layout = document.querySelector(".layout");

btn.addEventListener("click", () => {
   layout.classList.toggle("closed");
 });
