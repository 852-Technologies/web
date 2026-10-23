const header = document.querySelector('[data-header]');
const tabs = [...document.querySelectorAll('.screen-tab')];
const screens = [...document.querySelectorAll('[data-screen-image]')];
const stageCount = document.querySelector('#stage-count');
const stageLabel = document.querySelector('#stage-label');

const screenDetails = {
  home: { alt: 'Stoored overview screen', count: '100 items', label: 'Everything at a glance' },
  usage: { alt: 'Stoored consumption records screen', count: '1,551 used', label: 'Understand what you use' },
  expiry: { alt: 'Stoored expiring products screen', count: '17 expiring', label: 'Use these first' },
  reorder: { alt: 'Stoored reorder advice screen', count: '11 to reorder', label: 'A smarter shopping list' },
};

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
}, { passive: true });

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const key = tab.dataset.screen;
    if (!screens.some((item) => item.dataset.screenImage === key) || tab.classList.contains('is-active')) return;

    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });

    screens.forEach((item) => {
      item.classList.toggle('is-active', item.dataset.screenImage === key);
    });
    stageCount.textContent = screenDetails[key].count;
    stageLabel.textContent = screenDetails[key].label;
  });
});

// Footer page-view count from GoatCounter. The site code comes from the tracking script's tag, so
// it is set in one place (index.html). The number shows only if it loads: a new site, a blocker or
// "Allow adding visitor counts on your website" being off all leave the line hidden.
(() => {
  const box = document.querySelector('[data-visitor-counter]');
  const tag = document.querySelector('script[data-goatcounter]');
  if (!box || !tag || /YOURCODE/.test(tag.dataset.goatcounter)) return;
  const base = tag.dataset.goatcounter.replace(/\/count$/, '');
  window.addEventListener('load', () => {
    const data = window.goatcounter && window.goatcounter.get_data ? window.goatcounter.get_data() : null;
    const path = data && data.p ? data.p : location.pathname;
    fetch(base + '/counter/' + encodeURIComponent(path) + '.json')
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('no count'))))
      .then((result) => {
        box.querySelector('[data-visitor-count]').textContent = result.count;
        box.hidden = false;
      })
      .catch(() => {});
  });
})();
