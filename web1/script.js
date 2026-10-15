const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');
const reviewDialog = document.querySelector('[data-review-dialog]');
const toast = document.querySelector('[data-toast]');

function setMenu(open) {
  navToggle?.setAttribute('aria-expanded', String(open));
  navToggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  primaryNav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
}

navToggle?.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') setMenu(false);
});

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 28);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    document.querySelectorAll('.catalogue-card').forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.status !== filter);
    });
  });
});

function openReview() {
  if (typeof reviewDialog?.showModal === 'function') reviewDialog.showModal();
}

document.querySelectorAll('[data-open-review]').forEach((button) => button.addEventListener('click', openReview));
document.querySelectorAll('[data-close-review]').forEach((button) => {
  button.addEventListener('click', () => reviewDialog?.close());
});
reviewDialog?.addEventListener('click', (event) => {
  if (event.target === reviewDialog) reviewDialog.close();
});

let toastTimer;
document.querySelectorAll('[data-concept]').forEach((button) => {
  button.addEventListener('click', () => {
    toast.textContent = `${button.dataset.concept} is a planned concept — scope and release details remain under review.`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
