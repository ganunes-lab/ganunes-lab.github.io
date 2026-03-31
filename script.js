// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};

// EFEITO DIGITAÇÃO
const text = ["Front-End Developer", "JavaScript Lover", "Future Full Stack"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = text[i];
  document.getElementById("typing").textContent =
    deleting ? current.substring(0, j--) : current.substring(0, j++);

  if (!deleting && j === current.length) {
    deleting = true;
    return setTimeout(type, 1000);
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// SCROLL ANIMATION
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// GITHUB API 🔥
fetch("https://api.github.com/users/ganunes-lab/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("repos");

    data.slice(0, 6).forEach(repo => {
      container.innerHTML += `
        <div class="card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Sem descrição"}</p>
          <a href="${repo.html_url}" target="_blank">Ver projeto</a>
        </div>
      `;
    });
  });