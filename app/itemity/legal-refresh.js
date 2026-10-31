(() => {
  const lang = document.documentElement.lang || 'en';
  const isChinese = lang.toLowerCase().startsWith('zh');
  const page = location.pathname.split('/').pop() || '';

  const replacements = isChinese
    ? [
        [/852 Technologies(?! LLC)/g, '852 Technologies LLC'],
        [/\[the Commonwealth of Pennsylvania, United States\]/g, 'the Commonwealth of Pennsylvania, United States'],
        [/14 天/g, '10 天'],
        [/RevenueCat/g, '購買管理服務供應商'],
        [/Tally/g, '意見表格服務供應商'],
        [/GoatCounter/g, '重視私隱的彙總分析服務供應商']
      ]
    : [
        [/852 Technologies(?! LLC)/g, '852 Technologies LLC'],
        [/\[the Commonwealth of Pennsylvania, United States\]/g, 'the Commonwealth of Pennsylvania, United States'],
        [/14 days/g, '10 days'],
        [/RevenueCat/g, 'our purchase-management provider'],
        [/Tally/g, 'our feedback-form provider'],
        [/GoatCounter/g, 'our privacy-oriented aggregate analytics provider']
      ];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    if (node.parentElement?.closest('script, style')) return;
    let value = node.nodeValue;
    replacements.forEach(([pattern, replacement]) => { value = value.replace(pattern, replacement); });
    node.nodeValue = value;
  });

  const originalChildren = [...document.body.children].filter((node) => node.tagName !== 'SCRIPT');
  const header = document.createElement('header');
  header.className = 'legal-header';
  header.innerHTML = `
    <div class="legal-header-inner">
      <a class="legal-brand" href="./index.html">Itemity</a>
      <nav class="legal-nav" aria-label="${isChinese ? '法律頁面' : 'Legal pages'}">
        <a href="./index.html">${isChinese ? '產品首頁' : 'Product home'}</a>
        <a href="./${isChinese ? 'privacy.zh-HK.html' : 'privacy.html'}">${isChinese ? '私隱政策' : 'Privacy'}</a>
        <a href="./${isChinese ? 'terms.zh-HK.html' : 'terms.html'}">${isChinese ? '使用條款' : 'Terms'}</a>
        <a href="./${isChinese ? page.replace('.zh-HK', '') : page.replace('.html', '.zh-HK.html')}">${isChinese ? 'English' : '繁體中文'}</a>
      </nav>
    </div>`;

  const main = document.createElement('main');
  main.className = 'legal-main';
  const h1 = originalChildren.flatMap((node) => [...node.querySelectorAll?.('h1') || []])[0]
    || originalChildren.find((node) => node.tagName === 'H1');
  const effective = [...document.querySelectorAll('p')].find((node) => /Effective|生效日期/.test(node.textContent));
  const hero = document.createElement('div');
  hero.className = 'legal-hero';
  hero.innerHTML = `<p class="legal-kicker">${isChinese ? 'Itemity 法律資料' : 'Itemity legal'}</p>`;
  if (h1) hero.append(h1);
  if (effective) { effective.classList.add('effective'); hero.append(effective); }
  main.append(hero);

  const card = document.createElement('article');
  card.className = 'legal-card';
  originalChildren.forEach((node) => {
    if (node === h1 || node === effective) return;
    if (!node.textContent.trim() && !node.querySelector?.('img')) return;
    if (node.matches?.('main, .container, .content')) {
      [...node.childNodes].forEach((child) => card.append(child));
      node.remove();
    } else {
      card.append(node);
    }
  });

  if (/privacy/.test(page)) {
    if (!card.querySelector('[data-compliance-supplement]')) {
    const supplement = document.createElement('section');
    supplement.dataset.complianceSupplement = 'true';
    supplement.innerHTML = isChinese ? `
      <h2>資料控制者及適用範圍</h2>
      <p>852 Technologies LLC（美國賓夕法尼亞州）是本通知所述 Itemity App 及網站資料處理的資料控制者。獨立應用程式商店、條碼資料來源及其網站按其各自的私隱條款營運。</p>
      <h2>處理依據</h2>
      <p>視乎適用法律，我們為提供你要求的 App 功能及購買服務、履行法律責任、保障和改善服務的合法利益，以及在需要時取得你的同意而處理資料。你可選擇是否提交意見或聯絡資料。</p>
      <h2>分享、出售及廣告</h2>
      <p>我們只向提供託管、購買管理、條碼查詢、意見表格及重視私隱的彙總分析服務的供應商披露完成該目的所需的資料。我們不出售個人資料，亦不為跨情境行為廣告分享個人資料。Itemity 不包含第三方廣告。</p>
      <h2>跨境處理</h2>
      <p>供應商可能在你所在州或國家以外處理資料。適用法律要求時，我們會依賴合約及其他適當保障措施。</p>
      <h2>你的權利</h2>
      <p>視乎你所在地及適用法律，你可要求查閱、更正、刪除或取得個人資料副本，及反對或限制某些處理。你亦可撤回同意及向所在地的資料保障機構投訴。請電郵 support@852technologies.com；我們可能需要核實你的要求。</p>
      <h2>兒童</h2>
      <p>Itemity 是一般受眾的家居清單工具，並非為 13 歲以下兒童而設。我們不會明知而收集 13 歲以下兒童的個人資料。如你認為兒童向我們提供了個人資料，請聯絡我們。</p>
      <h2>政策更新</h2>
      <p>如本通知有重大變更，我們會更新頁首的生效日期，並在適當情況下於網站或 App 內提供額外通知。</p>` : `
      <h2>Controller and scope</h2>
      <p>852 Technologies LLC, based in Pennsylvania, United States, is the controller for the Itemity app and website processing described here. App stores, barcode data sources, and external websites operate independently under their own privacy terms.</p>
      <h2>Legal bases</h2>
      <p>Where applicable, we process data to provide requested app and purchase functions, comply with legal duties, pursue legitimate interests in securing and improving the service, and obtain consent where required. Feedback and contact details are optional.</p>
      <h2>Sharing, sales, and advertising</h2>
      <p>We disclose only the data needed to providers that support hosting, purchase management, barcode lookup, feedback forms, and privacy-oriented aggregate analytics. We do not sell personal information or share it for cross-context behavioral advertising. Itemity does not contain third-party advertising.</p>
      <h2>International processing</h2>
      <p>Providers may process data outside your state or country. Where applicable law requires it, we rely on contracts and other appropriate safeguards.</p>
      <h2>Your privacy rights</h2>
      <p>Depending on your location and applicable law, you may request access, correction, deletion, or a copy of personal data, and object to or restrict certain processing. You may withdraw consent and complain to your local data-protection authority. Email support@852technologies.com; we may need to verify a request.</p>
      <h2>Children</h2>
      <p>Itemity is a general-audience home-inventory tool and is not directed to children under 13. We do not knowingly collect personal information from children under 13. Contact us if you believe a child supplied personal information.</p>
      <h2>Changes to this notice</h2>
      <p>We will update the effective date above when this notice changes and provide additional website or in-app notice when a change is material and appropriate.</p>`;
    card.append(supplement);
    }

    const barcodeHeading = [...card.querySelectorAll('h2, h3')].find((node) => /Barcode|條碼/.test(node.textContent));
    if (barcodeHeading && !card.querySelector('[data-barcode-guarantee]')) {
      const warning = document.createElement('p');
      warning.className = 'legal-note';
      warning.dataset.barcodeGuarantee = 'true';
      warning.textContent = isChinese
        ? '我們不保證每次查詢均會收到回應、服務會在任何特定時間可用，或所傳回的產品資料準確、完整、最新或正確。該等服務及資料並非百分之百可用或準確。請以產品現行標籤及適用的官方資料核對重要詳情。'
        : 'We do not guarantee that a lookup will return a response, that the service will be available at any particular time, or that returned product data is accurate, complete, current, or correct. The service and data are not 100% available or 100% accurate. Verify important details against the current product label or an official source.';
      barcodeHeading.insertAdjacentElement('afterend', warning);
    }
  }

  if (/terms/.test(page)) {
    const barcodeHeading = [...card.querySelectorAll('h2, h3')].find((node) => /Barcode|條碼/.test(node.textContent));
    if (barcodeHeading && !card.querySelector('[data-barcode-guarantee]')) {
      const warning = document.createElement('p');
      warning.className = 'legal-note';
      warning.dataset.barcodeGuarantee = 'true';
      warning.textContent = isChinese
        ? '條碼查詢並非百分之百可用，資料亦並非百分之百準確。我們不保證會收到回應，亦不保證任何回應準確、完整、最新或正確；請自行核對重要資料。'
        : 'Barcode lookup is not 100% available and its data is not 100% accurate. We do not guarantee a response or that any response is accurate, complete, current, or correct; you must verify important information yourself.';
      barcodeHeading.insertAdjacentElement('afterend', warning);
    }
  }

  main.append(card);
  const footer = document.createElement('footer');
  footer.className = 'legal-footer';
  footer.innerHTML = `<div class="legal-footer-inner"><span>© ${new Date().getFullYear()} 852 Technologies LLC</span><span><a href="mailto:support@852technologies.com">support@852technologies.com</a></span></div>`;
  document.body.prepend(header);
  document.body.insertBefore(main, document.body.querySelector('script'));
  document.body.insertBefore(footer, document.body.querySelector('script'));
})();

