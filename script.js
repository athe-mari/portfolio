
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

const container = document.querySelector('.leaves-container');

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.innerHTML = "🍃";

  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = (5 + Math.random() * 5) + "s";
  leaf.style.fontSize = (15 + Math.random() * 20) + "px";

  container.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 10000);
}

setInterval(createLeaf, 500);