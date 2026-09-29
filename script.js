const btnNo = document.getElementById('btn-no');
const msgBox = document.getElementById('dynamic-msg');
const finalMsg = document.getElementById('final-msg');
const photos = [
  'img/foto1.jpg',
  'img/foto2.jpg',
  'img/foto3.jpg',
  'img/foto4.jpg',
  'img/foto5.jpg'
];
const dramaticMessages = [
  "u Breakin my hearttt 💔 T_T pls stop!!",
  "y u do dis?? i thot we r meant 2 b!! 😿",
  "srsly??? im gonna cryyyy Q_Q dont leave meee",
  "wut about us?? 4ever & ever remember?? >_<",
  
  "no em facis aixo!! em trenques el cor t_t 💔",
  "perquee?? testimo moltissim jolinss >.<",
  "plorare fortissim eeee!! no siguis dolent pff 😿",
  "donam una altra oportunitat xfaaa <333",

  "nejjj varfor gor du sahhar?? 😭💔",
  "mitt hjarta krossas T_T snalla nnooo!!",
  "varfor ar du sa elak wtf??? >_<",
  "jag grater faktiskt nuuu... arhetu riktigt?? 😿"
];

let msgIndex = 0;

btnNo.addEventListener('mouseover', () => {
  const padding = 80;
  const x = Math.random() * (window.innerWidth - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - padding * 2) + padding;
  btnNo.style.position = 'fixed';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
  msgBox.innerText = dramaticMessages[msgIndex];
  msgIndex = (msgIndex + 1) % dramaticMessages.length;
});
function celebrate() {
  btnNo.style.display = 'none';
  msgBox.style.display = 'none';
  finalMsg.classList.remove('hidden');
  explodePhotosAndHearts();
}

function explodePhotosAndHearts() {
  const totalItems = 25;

  for (let i = 0; i < totalItems; i++) {
    const isPhoto = i % 2 === 0 && photos.length > 0;
    const elem = document.createElement(isPhoto ? 'img' : 'div');

    if (isPhoto) {
      elem.src = photos[Math.floor(Math.random() * photos.length)];
      elem.style.width = `${Math.random() * 50 + 60}px`;
      elem.style.height = 'auto';
      elem.style.borderRadius = '12px';
      elem.style.border = '2px solid #f38ba8';
      elem.style.boxShadow = '0 0 10px rgba(243, 139, 168, 0.8)';
    } else {
      const icons = ['❤️', '💖', '✨', '💕', '⭐', '💗'];
      elem.innerText = icons[Math.floor(Math.random() * icons.length)];
      elem.style.fontSize = `${Math.random() * 20 + 20}px`;
    }
    elem.style.position = 'fixed';
    elem.style.left = '50vw';
    elem.style.top = '50vh';
    elem.style.zIndex = '9999';
    elem.style.pointerEvents = 'none';
    elem.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    elem.style.opacity = '1';

    document.body.appendChild(elem);
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 350 + 150;
    const xDest = Math.cos(angle) * velocity;
    const yDest = Math.sin(angle) * velocity;
    const rotation = (Math.random() - 0.5) * 720;

    requestAnimationFrame(() => {
      elem.style.transform = `translate(${xDest}px, ${yDest}px) rotate(${rotation}deg) scale(${Math.random() * 0.5 + 0.8})`;
    });
    setTimeout(() => {
      elem.style.opacity = '0';
      setTimeout(() => elem.remove(), 1000);
    }, 1500);
  }
}
