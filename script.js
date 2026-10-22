
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const loveBtn = document.getElementById("loveBtn");
const message = document.getElementById("message");

// Tahun otomatis di footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Dark mode
themeBtn.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  themeBtn.textContent = dark ? "☀" : "☾";
});

// Menu navigasi untuk HP
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.textContent = open ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Menandai menu sesuai bagian yang dibuka
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
}, { passive: true });

// Tombol love dengan pesan acak
const messages = [
  "Sending you lots of pink happiness! 💗",
  "Semoga harimu seindah bunga! 🌷",
  "Keep blooming, Nista Nilda! ✨",
  "You deserve lovely little moments. ♡",
  "Jangan lupa bahagia hari ini! 🎀"
];

loveBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  message.textContent = messages[random];
  createHearts();
});

// Efek hati terbang
function createHearts() {
  const symbols = ["♡", "♥", "✧", "✿"];
  const colors = ["#e86d9b", "#f39cba", "#d95c90"];

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("span");

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.cssText = `
      position: fixed;
      left: ${5 + Math.random() * 90}%;
      bottom: 5%;
      z-index: 100;
      pointer-events: none;
      color: ${colors[i % colors.length]};
      font-size: ${18 + Math.random() * 18}px;
      animation: heartRise ${1.5 + Math.random()}s ease-out forwards;
    `;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2600);
  }
}

// Animasi hati
const style = document.createElement("style");
style.textContent = `
  @keyframes heartRise {
    0% { opacity: 0; transform: translateY(0) scale(.5); }
    20% { opacity: 1; }
    100% {
      opacity: 0;
      transform: translateY(-220px) rotate(30deg) scale(1.3);
    }
  }
`;
document.head.appendChild(style);
