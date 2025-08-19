// Animasi interaktif kecil (misalnya floating hearts pas hover tombol)
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta");
  cta.addEventListener("mouseenter", () => {
    let heart = document.createElement("span");
    heart.textContent = "💖";
    heart.classList.add("floating-heart");
    cta.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
});

// CSS tambahan untuk heart (inject ke style.css atau tambahin via JS)
const style = document.createElement('style');
style.textContent = `
.floating-heart {
  position: absolute;
  animation: floatUp 1s ease forwards;
  margin-left: 10px;
}

@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-40px); opacity: 0; }
}
`;
document.head.appendChild(style);
