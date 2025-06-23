let clickCount = 0;
const lid = document.querySelector('.lid');
const message = document.getElementById('message');
const heartContainer = document.getElementById('hearts-container');

function openGift() {
  clickCount++;
  if (clickCount < 3) {
    // Her tıklamada kutu zıplasın
    document.querySelector('.gift-box').style.transform = 'scale(1.1)';
    setTimeout(() => {
      document.querySelector('.gift-box').style.transform = 'scale(1)';
    }, 150);
    return;
  }

  // Kutu açılıyor
  lid.style.top = "-100px";
  lid.style.transform = "rotate(25deg)";
  message.classList.remove("hidden");

  // Kalpler uçuşsun
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
