// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};

// ANIMAÇÃO SCROLL (SUAVE)
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

// GITHUB API (PROJETOS AUTOMÁTICOS)
fetch("https://api.github.com/users/ganunes-lab/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("repos");

    data.slice(0, 6).forEach(repo => {
      container.innerHTML += `
        <div class="card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Projeto sem descrição"}</p>
          <a href="${repo.html_url}" target="_blank">Ver projeto</a>
        </div>
      `;
    });
  });

// PARALLAX TOKYO 🔥
document.addEventListener("mousemove", (e) => {
  const bg = document.getElementById("tokyo-bg");

  let x = (e.clientX / window.innerWidth - 0.5) * 20;
  let y = (e.clientY / window.innerHeight - 0.5) * 20;

  bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  buildings.forEach(b => {
    ctx.fillStyle = "#020617";
    ctx.fillRect(b.x, canvas.height - b.height, b.width, b.height);

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

// 🌧️ CHUVA ANIMADA
const rainCanvas = document.createElement("canvas");
rainCanvas.id = "rain";
document.body.appendChild(rainCanvas);

const rctx = rainCanvas.getContext("2d");

rainCanvas.width = window.innerWidth;
rainCanvas.height = window.innerHeight;

let rainDrops = [];

for (let i = 0; i < 200; i++) {
  rainDrops.push({
    x: Math.random() * rainCanvas.width,
    y: Math.random() * rainCanvas.height,
    length: Math.random() * 20,
    speed: Math.random() * 5 + 5
  });
}

function drawRain() {
  rctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);

  rctx.strokeStyle = "rgba(56,189,248,0.5)";
  rctx.lineWidth = 1;

  rainDrops.forEach(drop => {
    rctx.beginPath();
    rctx.moveTo(drop.x, drop.y);
    rctx.lineTo(drop.x, drop.y + drop.length);
    rctx.stroke();

    drop.y += drop.speed;

    if (drop.y > rainCanvas.height) {
      drop.y = 0;
      drop.x = Math.random() * rainCanvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}

drawRain();
