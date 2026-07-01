/* ══════════════════════════════════════════════════════════════════
   app.js — Render & interaction logic
   Jangan edit file ini kecuali mau mengubah perilaku/tampilan UI.
   Untuk konten trip, edit config.js saja.
   ══════════════════════════════════════════════════════════════════ */

let activeIndex = 0;

/* ── BOOT ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initBrand();
  initFooter();
  initYear();
  initWaStaticLinks();
  initTripCards();
  loadTrip(0, false);
  initNav();
  initScrollEffects();
  initReveal();
});

/* ══════════════════════════════════════════════════════════════════
   BRAND
   ══════════════════════════════════════════════════════════════════ */
function initBrand() {
  const { name, accent, tagline } = SITE.brand;
  const prefix = name.replace(accent, '');
  const brandHTML = `${prefix}<span style="color:#E2622A">${accent}</span>`;

  document.getElementById('page-title').textContent = name;
  document.getElementById('nav-brand').innerHTML    = brandHTML;
  document.getElementById('footer-brand').innerHTML = brandHTML;
  document.getElementById('hero-tagline').textContent = tagline;
}

function initFooter() {
  const { entity, location, social } = SITE.footer;
  document.getElementById('footer-entity').textContent   = entity;
  document.getElementById('footer-location').textContent = location;
  document.getElementById('footer-social').textContent   = social;
}

function initYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

/* ══════════════════════════════════════════════════════════════════
   WHATSAPP
   ══════════════════════════════════════════════════════════════════ */
function waLink(msg) {
  return `https://wa.me/${SITE.wa.number}?text=${encodeURIComponent(msg)}`;
}

// Link WA yang tidak bergantung pada trip aktif
function initWaStaticLinks() {
  const def = SITE.wa.defaultMessage;
  setWaHref('hero-wa',  def);
  setWaHref('float-wa', def);
}

// Update link WA yang kontekstual saat ganti trip
function updateContextualWaLinks(trip) {
  const msg = `Halo, saya ingin bertanya tentang trip ${trip.name} 🙏`;
  setWaHref('nav-wa',   msg);
  setWaHref('cta-wa',   msg);
}

function setWaHref(id, msg) {
  const el = document.getElementById(id);
  if (el) el.href = waLink(msg);
}

/* ══════════════════════════════════════════════════════════════════
   TRIP SELECTOR CARDS
   ══════════════════════════════════════════════════════════════════ */
function initTripCards() {
  const container = document.getElementById('trip-cards');
  container.innerHTML = '';

  SITE.trips.forEach((trip, i) => {
    const minPrice = lowestPrice(trip);
    const priceLabel = minPrice
      ? `Mulai Rp ${minPrice.toLocaleString('id-ID')}`
      : 'Hubungi Admin';

    const diffKey   = (trip.difficulty || '').split(' ')[0].toLowerCase(); // ambil kata pertama
    const diffClass = { easy: 'badge-easy', moderate: 'badge-moderate', hard: 'badge-hard', expert: 'badge-expert' }[diffKey] || 'badge-moderate';
    const slotClass = trip.slotLeft <= 5 ? 'slot-low' : 'slot-good';

    const card = document.createElement('div');
    card.className = `trip-card bg-white border-stone/20 rounded-2xl p-6 select-none ${i === 0 ? 'active' : ''}`;
    card.dataset.index = i;
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-5">
        <div class="min-w-0">
          <p class="font-mono text-[10px] uppercase tracking-widest mb-1" style="color:#8C9485">${trip.route}</p>
          <h3 class="font-display text-2xl lg:text-3xl uppercase leading-[0.95] truncate">${trip.name}</h3>
        </div>
        <span class="badge ${diffClass} shrink-0">${trip.difficulty}</span>
      </div>

      <div class="grid grid-cols-3 gap-px rounded-xl overflow-hidden mb-5" style="background:rgba(0,0,0,0.08);border:1px solid rgba(0,0,0,0.08)">
        <div class="bg-white p-3 text-center">
          <p class="font-mono text-[9px] uppercase tracking-wider" style="color:#8C9485">Elevasi</p>
          <p class="font-body font-bold text-sm mt-0.5">${trip.elevation}<span class="text-xs font-normal">m</span></p>
        </div>
        <div class="bg-white p-3 text-center">
          <p class="font-mono text-[9px] uppercase tracking-wider" style="color:#8C9485">Durasi</p>
          <p class="font-body font-bold text-sm mt-0.5">${trip.duration}<span class="text-xs font-normal">H</span></p>
        </div>
        <div class="bg-white p-3 text-center">
          <p class="font-mono text-[9px] uppercase tracking-wider" style="color:#8C9485">Slot</p>
          <p class="font-body text-sm mt-0.5 ${slotClass}">${trip.slotLeft}</p>
        </div>
      </div>

      <div class="flex items-end justify-between">
        <div>
          <p class="font-mono text-[9px] uppercase tracking-wider" style="color:#8C9485">Berangkat</p>
          <p class="font-mono text-xs font-bold mt-0.5">${trip.nextDate}</p>
        </div>
        <p class="font-mono text-xs font-bold" style="color:#E2622A">${priceLabel}</p>
      </div>

      <div class="trip-card-bar mt-4"></div>
    `;

    card.addEventListener('click', () => selectTrip(i));
    container.appendChild(card);
  });
}

function lowestPrice(trip) {
  const prices = trip.packages
    .map(p => parseInt((p.price || '').replace(/\./g, '').replace(/[^0-9]/g, '')) || 0)
    .filter(n => n > 0);
  return prices.length ? Math.min(...prices) : 0;
}

function selectTrip(index) {
  if (index === activeIndex) return;

  // Visual: update active card
  document.querySelectorAll('.trip-card').forEach((c, i) => {
    c.classList.toggle('active', i === index);
  });

  // Fade out → update data → fade in
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(s => s.classList.add('fading'));

  setTimeout(() => {
    loadTrip(index, true);
    contentSections.forEach(s => s.classList.remove('fading'));
  }, 290);
}

/* ══════════════════════════════════════════════════════════════════
   LOAD TRIP — renders all dynamic sections
   ══════════════════════════════════════════════════════════════════ */
function loadTrip(index, scrollToDetail = false) {
  activeIndex = index;
  const trip = SITE.trips[index];

  renderTripDetail(trip);
  renderPackages(trip);
  renderComparison(trip);
  renderFAQ(trip);
  updateContextualWaLinks(trip);

  if (scrollToDetail) {
    setTimeout(() => {
      document.getElementById('trip-detail')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }
}

/* ══════════════════════════════════════════════════════════════════
   TRIP DETAIL SECTION
   ══════════════════════════════════════════════════════════════════ */
function renderTripDetail(trip) {
  document.getElementById('trip-detail-inner').innerHTML = `
    <div class="lg:col-span-4">
      <p class="font-mono text-xs uppercase tracking-[0.3em] mb-4" style="color:#E2622A">Tentang Trip</p>
      <h2 class="font-display text-4xl lg:text-5xl uppercase leading-[0.92]">${trip.name}</h2>
      <p class="font-mono text-base mt-1" style="color:#8C9485">${trip.route}</p>
    </div>
    <div class="lg:col-span-8">
      <p class="text-lg leading-relaxed max-w-3xl" style="color:#1B2B22">${trip.description}</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-px mt-10 rounded-xl overflow-hidden" style="background:rgba(0,0,0,0.09);border:1px solid rgba(0,0,0,0.09)">
        ${[
          ['Elevasi',       trip.elevation + ' mdpl'],
          ['Jarak',         trip.distance  + ' km'],
          ['Durasi',        trip.duration  + ' hari'],
          ['Tingkat',       trip.difficulty],
          ['Meeting Point', trip.meetingPoint],
        ].map(([label, val]) => `
          <div class="p-5" style="background:#F4F1E8">
            <p class="font-mono text-[9px] uppercase tracking-widest" style="color:#8C9485">${label}</p>
            <p class="font-display text-xl mt-1.5">${val}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════════════════
   PACKAGES SECTION
   ══════════════════════════════════════════════════════════════════ */
function renderPackages(trip) {
  document.getElementById('pkg-heading').innerHTML =
    `Paket Trip<br>${trip.name}`;
  document.getElementById('pkg-sub').textContent =
    `${trip.packages.length} pilihan paket. Tap "Pesan" untuk langsung chat admin.`;

  const grid = document.getElementById('packages-grid');
  grid.innerHTML = '';

  // Grid responsif: mobile (1 col) → tablet (2 col) → desktop (4 col)
  // CSS media queries menangani breakpoint, tidak perlu hardcode di JS

  trip.packages.forEach(pkg => {
    const card = document.createElement('div');
    const isFeatured = pkg.featured;
    card.className = 'pkg-card relative rounded-2xl p-6 min-h-[600px]';
    card.style.cssText = isFeatured
      ? 'border:2px solid #E2622A;background:#1B2B22'
      : 'border:2px solid rgba(255,255,255,0.10);background:#16221A';

    card.innerHTML = `
      ${isFeatured ? `<span class="absolute -top-3.5 left-6 font-mono text-[10px] uppercase tracking-widest px-3 m-3 py-1.5 rounded-full" style="background:#E2622A;color:#F4F1E8">Paling Diminati</span>` : ''}

      <p class="font-mono text-xs uppercase tracking-widest" style="color:#F2A24B">${pkg.tagline}</p>
      <h3 class="font-display text-3xl uppercase mt-2" style="color:#F4F1E8">${pkg.name}</h3>

      <div class="mt-5 flex items-baseline gap-1">
        <span class="font-mono text-xs" style="color:#8C9485">Rp</span>
        <span class="font-display text-3xl" style="color:#F4F1E8">${pkg.price}</span>
        <span class="font-mono text-xs" style="color:#8C9485">${pkg.unit}</span>
      </div>
      <p class="font-mono text-[11px] mt-1" style="color:#8C9485">${pkg.slot}</p>

      <ul class="mt-6 space-y-2.5 flex-1">
        ${pkg.points.map(p => `
          <li class="flex gap-2 text-sm" style="color:rgba(244,241,232,0.88)">
            <span style="color:#F2A24B;flex-shrink:0">✓</span>
            <span>${p}</span>
          </li>`).join('')}
      </ul>

      <button
        class="wa-pkg-btn mt-7 w-full font-mono text-xs uppercase tracking-widest py-3.5 rounded-full transition cursor-pointer border-0"
        style="${isFeatured ? 'background:#E2622A;color:#F4F1E8' : 'background:rgba(255,255,255,0.10);color:#F4F1E8'}"
        data-pkg="${escAttr(pkg.name)}"
        data-trip="${escAttr(trip.name)}"
        onmouseover="this.style.background='#F2A24B';this.style.color='#0F1A14'"
        onmouseout="this.style.background='${isFeatured ? '#E2622A' : 'rgba(255,255,255,0.10)'}';this.style.color='#F4F1E8'"
      >Pesan via WA →</button>
    `;
    grid.appendChild(card);
  });

  // Attach click handlers setelah render
  grid.querySelectorAll('.wa-pkg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkg  = btn.dataset.pkg;
      const trip = btn.dataset.trip;
      const msg  = `Halo, saya tertarik dengan paket *${pkg}* untuk trip *${trip}*.\nMohon info jadwal dan slot yang tersedia 🙏`;
      window.open(waLink(msg), '_blank');
      showToast('Membuka WhatsApp...');
    });
  });

  // Setup carousel pagination untuk mobile
  setupPackagePagination(grid, trip);
}

/* ══════════════════════════════════════════════════════════════════
   PACKAGE CAROUSEL PAGINATION (Mobile)
   ══════════════════════════════════════════════════════════════════ */
function setupPackagePagination(grid, trip) {
  const pagination = document.getElementById('pkg-pagination');
  pagination.innerHTML = '';

  // Create dots
  const dotsContainer = pagination;
  trip.packages.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.dataset.index = idx;
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      const card = grid.querySelectorAll('.pkg-card')[idx];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        updatePaginationDots(idx);
      }
    });
  });

  // Track scroll position and update dots
  let scrollTimeout;
  const parentContainer = grid.parentElement;
  
  parentContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      updatePaginationDots(getCurrentPageIndex());
    }, 100);
  });
}

function updatePaginationDots(activeIdx) {
  const dots = document.querySelectorAll('#pkg-pagination .dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === activeIdx);
  });
}

function getCurrentPageIndex() {
  const grid = document.getElementById('packages-grid');
  const container = grid.parentElement;
  const cards = grid.querySelectorAll('.pkg-card');
  
  if (cards.length === 0) return 0;

  let activeIdx = 0;
  let minDistance = Infinity;

  cards.forEach((card, idx) => {
    const rect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const distance = Math.abs(rect.left - containerRect.left);

    if (distance < minDistance) {
      minDistance = distance;
      activeIdx = idx;
    }
  });

  return activeIdx;
}

/* ══════════════════════════════════════════════════════════════════
   COMPARISON TABLE
   ══════════════════════════════════════════════════════════════════ */
function renderComparison(trip) {
  // Header
  const thead = document.getElementById('cmp-thead');
  thead.innerHTML = `
    <th class="text-left font-mono text-xs uppercase tracking-widest py-4 pr-4 w-36 lg:w-44" style="color:#8C9485">Fasilitas</th>
    ${trip.packages.map(p => `
      <th class="text-left font-display text-lg uppercase py-4 px-3 ${p.featured ? '' : ''}"
          style="${p.featured ? 'color:#E2622A' : ''}">
        ${p.name}
      </th>`).join('')}
  `;

  // Rows
  const tbody = document.getElementById('cmp-tbody');
  tbody.innerHTML = '';
  trip.benefitRows.forEach((row, idx) => {
    const tr = document.createElement('tr');
    tr.style.background = idx % 2 === 0 ? 'rgba(0,0,0,0.025)' : 'transparent';
    tr.innerHTML = `
      <td class="py-3.5 pr-4 font-mono font-semibold text-sm">${row.label}</td>
      ${row.values.map((v, vi) => {
        const isDash = v === '—';
        const isCheck = v === '✓';
        const color = isDash ? '#8C9485' : isCheck ? '#1B2B22' : '#1B2B22';
        const weight = (isCheck || !isDash) ? 'font-semibold' : 'font-normal';
        return `<td class="py-3.5 px-3 font-mono text-sm ${weight}" style="color:${color}">${v}</td>`;
      }).join('')}
    `;
    tbody.appendChild(tr);
  });
}

/* ══════════════════════════════════════════════════════════════════
   FAQ SECTION
   ══════════════════════════════════════════════════════════════════ */
function renderFAQ(trip) {
  document.getElementById('faq-trip-name').textContent = trip.name;

  const list    = document.getElementById('faq-list');
  list.innerHTML = '';

  const allFaqs = [...(trip.faqs || []), ...SITE.globalFaqs];

  allFaqs.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'faq-item border-b py-6';
    div.style.borderColor = 'rgba(255,255,255,0.10)';

    div.innerHTML = `
      <button class="faq-btn w-full flex items-center justify-between gap-4 text-left">
        <span class="font-display text-xl lg:text-2xl uppercase leading-tight" style="color:#F4F1E8">${item.q}</span>
        <span class="faq-icon font-mono text-2xl shrink-0" style="color:#F2A24B">+</span>
      </button>
      <div class="faq-body">
        <p class="mt-4 max-w-2xl leading-relaxed" style="color:#8C9485">${item.a}</p>
      </div>
    `;

    const btn  = div.querySelector('.faq-btn');
    const body = div.querySelector('.faq-body');
    const icon = div.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isOpen = div.classList.contains('open');

      // Close all
      list.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-body').style.maxHeight = '0px';
        item.querySelector('.faq-icon').textContent = '+';
      });

      // Open this one if it was closed
      if (!isOpen) {
        div.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        icon.textContent = '–';
      }
    });

    list.appendChild(div);
  });
}

/* ══════════════════════════════════════════════════════════════════
   NAV — hamburger, drawer, scroll-spy
   ══════════════════════════════════════════════════════════════════ */
function initNav() {
  const ham     = document.getElementById('hamburger');
  const drawer  = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    ham.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  };

  ham.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
  overlay.addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));

  // Scroll-spy
  const sectionIds = ['hero', 'select-trip', 'trip-detail', 'packages', 'comparison', 'faq'];
  const navLinks   = document.querySelectorAll('.nav-link');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const href = '#' + e.target.id;
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === href);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });
}

/* ══════════════════════════════════════════════════════════════════
   SCROLL EFFECTS — progress bar, back-to-top, navbar shadow
   ══════════════════════════════════════════════════════════════════ */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const backTop     = document.getElementById('back-to-top');
  const navbar      = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    progressBar.style.width = (scrolled * 100).toFixed(2) + '%';

    if (window.scrollY > 450) {
      backTop.classList.add('show');
    } else {
      backTop.classList.remove('show');
    }

    navbar.style.boxShadow = window.scrollY > 60
      ? '0 4px 24px -4px rgba(15,26,20,0.12)'
      : 'none';
  }, { passive: true });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        obs.unobserve(e.target); // hanya sekali
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════════════════════════════ */
let toastTimer = null;
function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.pointerEvents = 'auto';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.pointerEvents = 'none';
    toast.classList.remove('show');
  }, duration);
}

/* ── Utils ─────────────────────────────────────────────────────── */
function escAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
