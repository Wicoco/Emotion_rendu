const sadnessSection = document.getElementById('sadness');
const circleContainer = sadnessSection.querySelector('.circle-container');
const gridOverlay = sadnessSection.querySelector('.grid-overlay');

for (let i = 0; i < 25; i++) {
  const cell = document.createElement('div');
  cell.className = 'grid-cell';
  gridOverlay.appendChild(cell);
}

circleContainer.addEventListener('mouseenter', () => {
  sadnessSection.classList.add('active');
  gridOverlay.querySelectorAll('.grid-cell').forEach(cell => {
    cell.classList.add('dark');
  });
});

circleContainer.addEventListener('mouseleave', () => {
  sadnessSection.classList.remove('active');
  gridOverlay.querySelectorAll('.grid-cell').forEach(cell => {
    cell.classList.remove('dark');
  });
});

const joySection = document.getElementById('joy');
const sunContainer = joySection.querySelector('.sun-container');
const squaresContainer = joySection.querySelector('.squares-container');

for (let i = 0; i < 64; i++) {
  const square = document.createElement('div');
  square.className = 'joy-square';
  square.style.animationDelay = `${i * 50}ms`;
  squaresContainer.appendChild(square);
}

sunContainer.addEventListener('mouseenter', () => {
  squaresContainer.querySelectorAll('.joy-square').forEach(square => {
    square.classList.add('bounce');
  });
});

sunContainer.addEventListener('mouseleave', () => {
  squaresContainer.querySelectorAll('.joy-square').forEach(square => {
    square.classList.remove('bounce');
  });
});

const angerSection = document.getElementById('anger');
const flameContainer = angerSection.querySelector('.flame-container');
const flamesOverlay = angerSection.querySelector('.flames-overlay');

for (let i = 0; i < 20; i++) {
  const flame = document.createElement('div');
  flame.className = 'flame-element';
  flame.style.left = `${Math.random() * 100}%`;
  flame.style.top = `${Math.random() * 100}%`;
  flame.style.animationDelay = `${i * 100}ms`;
  flamesOverlay.appendChild(flame);
}

flameContainer.addEventListener('mouseenter', () => {
  angerSection.classList.add('shake');
  flamesOverlay.querySelectorAll('.flame-element').forEach(flame => {
    flame.classList.add('active');
  });
});

flameContainer.addEventListener('mouseleave', () => {
  angerSection.classList.remove('shake');
  flamesOverlay.querySelectorAll('.flame-element').forEach(flame => {
    flame.classList.remove('active');
  });
});