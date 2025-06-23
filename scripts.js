function openGift() {
  const lid = document.querySelector('.lid');
  lid.style.top = "-100px";
  lid.style.transform = "rotate(25deg)";
  document.getElementById('message').classList.remove('hidden');
}
