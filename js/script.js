// script.js
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});
