// Ativa o link do menu ao clicar
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

// Menu hamburguer responsivo
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Insere o mapa do Google Maps no rodapé, se existir o elemento
const mapa = document.getElementById("mapa");
if (mapa) {
  mapa.innerHTML =
    '<iframe width="100%" height="200" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=R.+Conde+Afonso+Celso,+300+-+Jardim+Sumare,+Ribeir%C3%A3o+Preto+-+SP,+14025-040&output=embed"></iframe>';
}

