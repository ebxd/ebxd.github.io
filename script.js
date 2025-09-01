// simple fake form submission
document.getElementById("consult-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.classList.add("hidden");
  document.querySelector(".thanks").classList.remove("hidden");
});
