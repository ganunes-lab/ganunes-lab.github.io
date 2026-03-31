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
          <img src="https://via.placeholder.com/400x200" />
          <h3>${repo.name}</h3>
          <p>${repo.description || "Projeto sem descrição"}</p>
          <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
        </div>
      `;
    });
  });

  particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#38bdf8" },
    line_linked: {
      enable: true,
      color: "#6366f1"
    },
    move: { speed: 2 }
  }
});

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

const canvas = document.getElementById("tokyo-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let buildings = [];

for (let i = 0; i < 60; i++) {
  buildings.push({
    x: i * 30,
    width: 20 + Math.random() * 20,
    height: Math.random() * 300,
    lights: Math.random()
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  buildings.forEach(b => {
    ctx.fillStyle = "#020617";
    ctx.fillRect(b.x, canvas.height - b.height, b.width, b.height);

    // luzes
    if (Math.random() > 0.7) {
      ctx.fillStyle = "#38bdf8";
      ctx.fillRect(
        b.x + 5,
        canvas.height - b.height + Math.random() * b.height,
        3,
        3
      );
    }
  });

  requestAnimationFrame(draw);
}

draw();
