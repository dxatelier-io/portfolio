const translations = {
  en: {
    about: "About",
    contact: "Contact",
    booking: "Booking",
    portfolio: "Portfolio",
    social: "Social Media",
    game: "Game",
    library: "Library",
    welcome: "Welcome to DX Atelier ✦",
    tagline: "A playful & modern portfolio by Δ"
  },
  id: {
    about: "Tentang",
    contact: "Kontak",
    booking: "Pesan",
    portfolio: "Portofolio",
    social: "Media Sosial",
    game: "Permainan",
    library: "Perpustakaan",
    welcome: "Selamat Datang di DX Atelier ✦",
    tagline: "Portofolio modern & ceria oleh Δ"
  },
  fr: {
    about: "À propos",
    contact: "Contact",
    booking: "Réservation",
    portfolio: "Portfolio",
    social: "Réseaux Sociaux",
    game: "Jeu",
    library: "Bibliothèque",
    welcome: "Bienvenue chez DX Atelier ✦",
    tagline: "Un portfolio moderne et ludique par Δ"
  }
};

document.getElementById("language").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
});
