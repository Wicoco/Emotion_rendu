// Audio elements
const sadnessAudio = document.getElementById('sadnessAudio');
const joyAudio = document.getElementById('joyAudio');
const angerAudio = document.getElementById('angerAudio');

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Scroll handling
const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('[data-section]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeSection = entry.target.id;
        navButtons.forEach((button) => {
          button.setAttribute(
            'data-active',
            button.dataset.section === activeSection ? activeSection : ''
          );
        });
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));

// Navigation
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => scrollToSection(button.dataset.section));
});

// Audio handling
function playAudio(audio) {
  audio.volume = 0.4;
  audio.currentTime = 0;
  audio.play();
}

function stopAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
}

// Sadness section
const sadnessIcon = document.querySelector('.sadness-icon');
const sadnessSection = document.getElementById('sadness');

// Create raindrops
function createRaindrops() {
  const numberOfDrops = 50;
  const container = sadnessSection;

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(drop);
  }
}

createRaindrops();

sadnessIcon.addEventListener('mouseenter', () => {
  playAudio(sadnessAudio);
  sadnessSection.querySelector('.gradient').style.opacity = '1';
  document.querySelectorAll('.raindrop').forEach(drop => {
    drop.style.opacity = '0.6';
  });
});

sadnessIcon.addEventListener('mouseleave', () => {
  stopAudio(sadnessAudio);
  sadnessSection.querySelector('.gradient').style.opacity = '0';
  document.querySelectorAll('.raindrop').forEach(drop => {
    drop.style.opacity = '0.4';
  });
});

// Joy section
const joyIcon = document.querySelector('.joy-icon');
const joySection = document.getElementById('joy');
const particles = document.querySelector('.particles');
const sparkles = document.querySelector('.sparkles');

// Create particles
for (let i = 0; i < 144; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particles.appendChild(particle);
}

// Create sparkles
for (let i = 0; i < 20; i++) {
  const sparkle = document.createElement('svg');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${i * 200}ms`;
  sparkle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3h.01"></path><path d="M12 21h.01"></path><path d="M21 12h.01"></path><path d="M3 12h.01"></path>
      <path d="M18 18h.01"></path><path d="M18 6h.01"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path>
    </svg>
  `;
  sparkles.appendChild(sparkle);
}

joyIcon.addEventListener('mouseenter', () => {
  playAudio(joyAudio);
  document.querySelectorAll('.particle').forEach((particle) => {
    particle.classList.add('active');
  });
  sparkles.style.opacity = '1';
  joyIcon.classList.add('spin');
});

joyIcon.addEventListener('mouseleave', () => {
  stopAudio(joyAudio);
  document.querySelectorAll('.particle').forEach((particle) => {
    particle.classList.remove('active');
  });
  sparkles.style.opacity = '0';
  joyIcon.classList.remove('spin');
});

// Anger section
const angerIcon = document.querySelector('.anger-icon');
const angerSection = document.getElementById('anger');
const flames = document.querySelector('.flames');

// Create flames
for (let i = 0; i < 30; i++) {
  const flame = document.createElement('div');
  flame.className = 'flame';
  flame.style.left = `${Math.random() * 100}%`;
  flame.style.top = `${Math.random() * 100}%`;
  flame.style.animationDelay = `${i * 200}ms`;
  flames.appendChild(flame);
}

angerIcon.addEventListener('mouseenter', () => {
  playAudio(angerAudio);
  document.body.classList.add('shake');
  angerSection.querySelector('.gradient').style.opacity = '1';
  angerIcon.classList.add('shake');
});

angerIcon.addEventListener('mouseleave', () => {
  stopAudio(angerAudio);
  document.body.classList.remove('shake');
  angerSection.querySelector('.gradient').style.opacity = '0';
  angerIcon.classList.remove('shake');
});