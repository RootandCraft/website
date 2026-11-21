// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Mobile menu
const nav = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggle');
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Enquiry form: require at least one interest
const enquiry = document.querySelector('.enquiry-form');
if (enquiry) {
  enquiry.addEventListener('submit', (e) => {
    const picked = enquiry.querySelectorAll('input[name="interest[]"]:checked').length;
    const err = document.getElementById('interest-error');
    if (!picked) { e.preventDefault(); err.hidden = false; err.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    else { err.hidden = true; }
  });
}
