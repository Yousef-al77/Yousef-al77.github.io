// عدّل بياناتك هنا قبل نشر الموقع
const SITE_CONFIG = {
  email: "your-email@example.com",
  // أضف روابطك عند الحاجة، مثل GitHub أو Telegram أو Instagram
  socialLinks: {
    github: "",
    telegram: "",
    instagram: ""
  }
};

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.textContent = '☰'; menuToggle.setAttribute('aria-label', 'فتح القائمة'); }
}));

document.getElementById('year').textContent = new Date().getFullYear();
const emailText = document.getElementById('emailText');
const emailLink = document.getElementById('emailLink');
if (SITE_CONFIG.email && SITE_CONFIG.email !== 'your-email@example.com') {
  emailText.textContent = SITE_CONFIG.email;
  emailLink.href = `mailto:${SITE_CONFIG.email}`;
} else {
  emailLink.addEventListener('click', event => {
    event.preventDefault();
    alert('افتح ملف script.js واستبدل your-email@example.com ببريدك الإلكتروني.');
  });
}
