/* ============================================
   Central America — sabbatical part two
   Self-contained; shares styles.css with the Indonesia page.
   ============================================ */

const TRIP_START = "2026-08-28"; // countdown target: start of the Santa Cruz reset

// Shared across both trip pages. Keep in sync with app.js.
const PHASES = [
  { key: "indonesia", icon: "🌊", label: "Indonesia", dates: "Aug 3–28", start: "2026-08-03", end: "2026-08-28", href: "index.html" },
  { key: "reset", icon: "🏡", label: "Santa Cruz", dates: "Aug 28–Sep 2", start: "2026-08-28", end: "2026-09-02", href: null },
  { key: "centralamerica", icon: "🌴", label: "Costa Rica", dates: "Sep 2 – Sep 25", start: "2026-09-02", end: "2026-09-25", href: "central-america.html" },
];

const ITINERARY = [
  {
    days: "Aug 28 – Sep 2",
    start: "2026-08-28",
    end: "2026-09-02",
    place: "Resetting in Santa Cruz",
    desc: "Home. Rest, reset, unpack the boards, do laundry, and recharge before round two. Flight out Sept 2 at 8:55am.",
    tags: ["Home", "Rest", "Reset"],
  },
  {
    days: "Sep 2",
    start: "2026-09-02",
    end: "2026-09-02",
    place: "Fly San Jose → San José",
    desc: "Cross the country with a Houston connection, landing in Costa Rica by evening.",
    flights: [
      { route: "SJC → HOU", detail: "Southwest WN 3508 · 8:55 AM → 2:40 PM" },
      { route: "HOU → SJO", detail: "Southwest WN 112 · 4:10 PM → 6:40 PM" },
    ],
    total: "8h 45m door-to-door",
    tags: ["Southwest", "Houston connection"],
  },
  {
    days: "Sep 2 – Sep 3",
    start: "2026-09-02",
    end: "2026-09-03",
    place: "Alajuela · Hotel City Alajuela",
    desc: "One night near the airport before heading to the coast.",
    nights: 1,
    tags: ["1 night"],
  },
  {
    days: "Sep 3 – Sep 8",
    start: "2026-09-03",
    end: "2026-09-08",
    place: "Pavones · Cabinas Las Gemelas",
    desc: "The long, walling lefts of Pavones on the southern Pacific coast.",
    nights: 5,
    tags: ["5 nights"],
  },
  {
    days: "Sep 9 – Sep 13",
    start: "2026-09-09",
    end: "2026-09-13",
    place: "Dominical · Hotel Rio Lindo",
    desc: "Moved up the coast to Dominical.",
    nights: 4,
    tags: ["4 nights"],
  },
  {
    days: "Sep 14 – Sep 24",
    start: "2026-09-14",
    end: "2026-09-24",
    place: "Santa Teresa · Nautilus Surf & Yoga",
    desc: "Final stretch, up on the Nicoya Peninsula.",
    nights: 10,
    tags: ["10 nights"],
  },
  {
    days: "Sep 24 – Sep 25",
    start: "2026-09-24",
    end: "2026-09-25",
    place: "Alajuela · Hotel City Alajuela",
    desc: "Back near the airport ahead of the flights home.",
    nights: 1,
    tags: ["1 night"],
  },
  {
    days: "Sep 25",
    start: "2026-09-25",
    end: "2026-09-25",
    place: "Fly San José → San Jose",
    desc: "The long way home — Orlando and Austin connections before landing back in San Jose the same night. Sabbatical complete.",
    flights: [
      { route: "SJO → MCO", detail: "Southwest WN 182 · 9:00 AM → 2:15 PM" },
      { route: "MCO → AUS", detail: "Southwest WN 2548 · 5:30 PM → 7:15 PM" },
      { route: "AUS → SJC", detail: "Southwest WN 1927 · 8:25 PM → 10:05 PM" },
    ],
    total: "14h 05m door-to-door",
    tags: ["Southwest", "2 connections", "Home"],
  },
];

const BREAKS = [
  {
    name: "Pavones",
    type: "Left point · river mouth",
    level: "Advanced",
    best: "Glassy, low wind — usually a narrow window",
    hazard: "River-mouth current, onshore wind most mornings",
    blurb: "Long, racey lefts off the river mouth — best in a short glassy window, often a late morning or a sneaky afternoon session.",
  },
  {
    name: "Dominical",
    type: "Beach break",
    level: "Advanced",
    best: "Rising tide, before the wind fills in",
    hazard: "Powerful shorebreak, closeouts at low tide",
    blurb: "Punchy, powerful beach break by the lifeguard stand — heavy and closing out at low tide, needs the tide pushing in to work.",
  },
  {
    name: "Playa Santa Teresa",
    type: "Beach break",
    level: "Intermediate",
    best: "Later morning, main peak or the rocks on the south end",
    hazard: "Shifts fast from fun to onshore shorebreak",
    blurb: "Long beach with a shifting main peak and a rocky-point left on the south end — quality swings a lot session to session.",
  },
  {
    name: "Playa Hermosa",
    type: "Beach break",
    level: "Intermediate",
    best: "First light, low tide, before the wind",
    hazard: "Inside sandbar can kill momentum, onshore by mid-morning",
    blurb: "Beach 15 minutes north of Santa Teresa — best at dawn before the wind fills in, with a peak up top and lefts further south.",
  },
];

const PACKING = [
  {
    id: "surf",
    icon: "🏄",
    title: "Surf Gear",
    items: [
      { label: "Surfboards ×2", note: "Daily driver + a step-up for Pavones on a south swell" },
      { label: "Board bag", note: "Padded travel bag for the flights + shuttles" },
      { label: "Leashes ×2", note: "Plus a spare leash string" },
      { label: "Fin sets ×2", note: "Match your boards; pack a fin key" },
      { label: "Tropical wax + comb", note: "Warm-water formula" },
      { label: "Ding repair kit", note: "Solar-cure resin + sandpaper" },
      { label: "Tie-down straps ×2", note: "Roof-rack straps for boat/car transfers" },
      { label: "Reef booties", note: "For the rocks at Pavones / point setups" },
      { label: "Surf earplugs", note: "Vented" },
    ],
  },
  {
    id: "surfwear",
    icon: "🩱",
    title: "Surf Apparel",
    items: [
      { label: "Boardshorts ×2", note: "Quick-dry, anti-chafe" },
      { label: "Rashguards ×2", note: "Long-sleeve UV50+" },
      { label: "Surf hat", note: "Brim + chin strap" },
      { label: "Sunglasses + strap", note: "Polarized, floating retainer" },
    ],
  },
  {
    id: "clothing",
    icon: "👕",
    title: "Clothing",
    items: [
      { label: "T-shirts ×4", note: "Lightweight" },
      { label: "Casual shorts ×2", note: "Walk-shorts" },
      { label: "Sun hoody", note: "Hooded UPF top" },
      { label: "Light layer", note: "For AC buses / cool evenings" },
      { label: "Flip-flops", note: "Quality rubber" },
      { label: "Walking / trail shoes", note: "For travel days and hikes" },
      { label: "Underwear + socks", note: "~6 / 3" },
    ],
  },
  {
    id: "health",
    icon: "🧴",
    title: "Health & Sun",
    items: [
      { label: "Reef-safe sunscreen ×2", note: "SPF 50+" },
      { label: "Zinc stick", note: "Face, stays on all session" },
      { label: "Aloe vera", note: "After-sun" },
      { label: "Mosquito repellent", note: "DEET/Picaridin — dengue risk in Costa Rica" },
      { label: "First-aid + reef kit", note: "Antiseptic, tape, waterproof band-aids" },
      { label: "Stomach meds + Liquid I.V.", note: "Traveler's tummy + rehydration" },
      { label: "Antihistamines", note: "Bites, stings, allergies" },
      { label: "Personal + prescription meds", note: "Full trip supply" },
    ],
  },
  {
    id: "tech",
    icon: "🔌",
    title: "Tech",
    items: [
      { label: "Phone + charger", note: "No adapter needed — Costa Rica uses US-style plugs, 120V" },
      { label: "Power bank", note: "20,000mAh, airline-approved" },
      { label: "Action camera", note: "Mounts, spare battery, SD cards" },
      { label: "Charging cables ×2", note: "Braided USB-C / Lightning" },
      { label: "Headlamp", note: "For dark early paddle-outs" },
    ],
  },
  {
    id: "docs",
    icon: "🛂",
    title: "Documents & Money",
    items: [
      { label: "Passport", note: "6+ months validity" },
      { label: "Passport copies", note: "Printed + offline digital" },
      { label: "Travel insurance", note: "Must cover surfing + medical" },
      { label: "Cash (USD)", note: "Small bills — widely accepted in Costa Rica" },
      { label: "Debit/credit cards", note: "No foreign-transaction fees" },
    ],
  },
];

const INFO = [
  {
    icon: "🇨🇷",
    title: "Costa Rica",
    type: "list",
    rows: [
      ["Currency", "Colón (CRC) · USD ok"],
      ["Plug", "Type A/B, 120V"],
      ["Language", "Spanish"],
      ["Getting there", "Fly into Liberia (LIR) or San José (SJO)"],
    ],
  },
  {
    icon: "🌊",
    title: "Surf Season",
    type: "text",
    text: "May–November is the Pacific green season with consistent S/SW groundswells. Expect glassy, offshore mornings, warm water, and afternoon rain, no wetsuit needed.",
  },
  {
    icon: "🦟",
    title: "Stay Well",
    type: "text",
    text: "Dengue is present in Costa Rica — wear repellent, especially at dawn and dusk. Drink filtered or bottled water, mind the rips, and reapply reef-safe sunscreen every session.",
  },
  {
    icon: "💵",
    title: "Money",
    type: "text",
    text: "US dollars are accepted almost everywhere — carry small, clean bills. Cards work in towns; keep cash for shuttles, sodas (local diners), and boat drivers.",
  },
];

// ---- Rendering ----------------------------------------------------

const CHECK_SVG = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const STORAGE_KEY = "surf-trip-ca-packing-v1";

function pop(el) {
  if (!el || !el.animate) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  el.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }],
    { duration: 260, easing: "cubic-bezier(.3, 1.4, .5, 1)" }
  );
}

function tripStatuses() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s) => new Date(s + "T00:00:00");
  let nowIdx = -1;
  ITINERARY.forEach((s, i) => {
    if (nowIdx === -1 && toDate(s.start) <= today && today <= toDate(s.end)) nowIdx = i;
  });
  let upcomingIdx = -1;
  if (nowIdx === -1) upcomingIdx = ITINERARY.findIndex((s) => toDate(s.start) > today);
  return ITINERARY.map((s, i) => {
    if (i === nowIdx) return "now";
    if (i === upcomingIdx) return "upcoming";
    if (toDate(s.end) < today) return "done";
    return "later";
  });
}

const STATUS_BADGE = {
  now: '<span class="tl-badge tl-badge--now"><span class="tl-badge__dot"></span>You\'re here</span>',
  upcoming: '<span class="tl-badge tl-badge--upcoming">Up next</span>',
  done: '<span class="tl-badge tl-badge--done">✓ Done</span>',
  later: "",
};

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveState(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}
let state = loadState();
function itemKey(catId, index) {
  return `${catId}:${index}`;
}

let revealIO = null;
function armReveal(root = document) {
  const items = root.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!revealIO) {
    revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  items.forEach((el) => {
    const sibs = el.parentElement
      ? [...el.parentElement.children].filter((c) => c.classList.contains("reveal"))
      : [el];
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 6) * 60 + "ms";
    revealIO.observe(el);
  });
}

// ---- Gallery -------------------------------------------------------

// Files live in assets/gallery-cr/{thumbs,full}.
const GALLERY = [
  "GPTempDownload_3", "GPTempDownload_4", "IMG_1C7C510D",
  "IMG_9052", "IMG_9055", "IMG_9059", "IMG_9060", "IMG_9061", "IMG_9064",
  "IMG_9068", "IMG_9071", "IMG_9074", "IMG_9078", "IMG_9082", "IMG_9090",
  "IMG_9095", "IMG_9102", "IMG_9111", "IMG_9115", "IMG_9125", "IMG_9131",
  "IMG_9132", "IMG_9136", "IMG_9138", "IMG_9140", "IMG_9142", "IMG_9148",
  "IMG_9150", "IMG_9151", "IMG_9158", "IMG_9160", "IMG_9162",
  "IMG_BD5BFEE7", "IMG_9104", "IMG_9116",
];

let lightboxSource = GALLERY;
let lightboxFolder = "assets/gallery-cr";
let lightboxIndex = 0;

function renderGalleryGrid(gridId, names, folder) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = names.map(
    (name, i) => `
    <button type="button" class="gallery__item reveal" data-index="${i}" aria-label="Open photo ${i + 1} of ${names.length}">
      <img src="${folder}/thumbs/${name}.jpg" alt="" loading="lazy" />
    </button>`
  ).join("");
  armReveal(grid);

  grid.querySelectorAll(".gallery__item").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(names, folder, Number(btn.dataset.index)));
  });
}

function renderGallery() {
  renderGalleryGrid("galleryGrid", GALLERY, "assets/gallery-cr");
}

// Files live in assets/videos-cr/.
const VIDEOS = [
  "IMG_9054", "IMG_9058", "IMG_9062", "IMG_9067", "IMG_9080", "IMG_9091",
  "IMG_9106", "IMG_9107", "IMG_9109", "IMG_9112", "IMG_9113", "IMG_9152",
  "IMG_9159", "IMG_9163",
];

function renderVideos() {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;
  grid.innerHTML = VIDEOS.map(
    (name) => `
    <div class="video-card reveal">
      <video controls preload="metadata" playsinline src="assets/videos-cr/${name}.mov"></video>
    </div>`
  ).join("");
  armReveal(grid);

  // Safari doesn't paint a frame from preload="metadata" alone — nudging the
  // playhead forces it to decode and show one, giving a real thumbnail.
  grid.querySelectorAll("video").forEach((video) => {
    video.addEventListener(
      "loadedmetadata",
      () => {
        try {
          video.currentTime = Math.min(0.1, video.duration / 2);
        } catch {
          /* ignore */
        }
      },
      { once: true }
    );
  });
}

function openLightbox(source, folder, index) {
  lightboxSource = source;
  lightboxFolder = folder;
  lightboxIndex = index;
  const box = document.getElementById("lightbox");
  box.hidden = false;
  document.body.style.overflow = "hidden";
  showLightboxImage();
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  box.hidden = true;
  document.body.style.overflow = "";
}

function showLightboxImage() {
  const name = lightboxSource[lightboxIndex];
  const img = document.getElementById("lightboxImg");
  img.src = `${lightboxFolder}/full/${name}.jpg`;
  img.alt = `Photo ${lightboxIndex + 1} of ${lightboxSource.length}`;
}

function lightboxStep(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxSource.length) % lightboxSource.length;
  showLightboxImage();
}

function initGallery() {
  renderGallery();
  const box = document.getElementById("lightbox");
  if (!box) return;

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => lightboxStep(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => lightboxStep(1));
  box.addEventListener("click", (e) => {
    if (e.target === box) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxStep(-1);
    if (e.key === "ArrowRight") lightboxStep(1);
  });
}

function renderStatusLine() {
  const el = document.getElementById("statusLine");
  if (!el) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s) => new Date(s + "T00:00:00");
  const days = (a, b) => Math.round((b - a) / 86400000);
  const page = document.body.dataset.page;
  const firstStart = toDate(PHASES[0].start);
  const lastEnd = toDate(PHASES[PHASES.length - 1].end);

  let msg;
  let isComplete = false;
  if (today < firstStart) {
    const n = days(today, firstStart);
    msg = `${n} day${n === 1 ? "" : "s"} until Indonesia`;
  } else if (today > lastEnd) {
    msg = "Sabbatical complete 🤙";
    isComplete = true;
  } else {
    const active = PHASES.find((p) => toDate(p.start) <= today && today <= toDate(p.end));
    if (active && active.key === page) {
      const nowIdx = tripStatuses().indexOf("now");
      if (nowIdx >= 0) {
        const stop = ITINERARY[nowIdx];
        const dayN = days(toDate(stop.start), today) + 1;
        const next = ITINERARY[nowIdx + 1];
        msg = `Day ${dayN} · ${stop.place}` + (next ? ` — up next: ${next.place}` : "");
      } else {
        msg = `${active.label} — underway`;
      }
    } else if (active) {
      const pagePhase = PHASES.find((p) => p.key === page);
      if (pagePhase && toDate(pagePhase.start) > today) {
        const n = days(today, toDate(pagePhase.start));
        msg = `${active.label} right now · ${pagePhase.label} in ${n} day${n === 1 ? "" : "s"}`;
      } else {
        msg = `${active.label} right now`;
      }
    }
  }
  el.innerHTML = `${isComplete ? "" : `<span class="statusline__dot" aria-hidden="true"></span>`}${msg}`;
}

function renderPhaseStrip() {
  const el = document.getElementById("phaseStrip");
  if (!el) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s) => new Date(s + "T00:00:00");
  const page = document.body.dataset.page;
  let activeIdx = PHASES.findIndex((p) => toDate(p.start) <= today && today <= toDate(p.end));
  if (activeIdx === -1) activeIdx = PHASES.findIndex((p) => toDate(p.start) > today);

  el.innerHTML = PHASES.map((p, i) => {
    const status = i === activeIdx ? "is-now" : toDate(p.end) < today ? "is-done" : "is-upcoming";
    const here = p.key === page ? "is-here" : "";
    const current = i === activeIdx ? '<span class="sr-only"> (current)</span>' : "";
    const inner = `<span class="phase__dot" aria-hidden="true"></span><span class="phase__icon" aria-hidden="true">${p.icon}</span><span class="phase__label">${p.label}${current}</span><span class="phase__dates">${p.dates}</span>`;
    return p.href && p.key !== page
      ? `<a class="phase ${status} ${here}" href="${p.href}">${inner}</a>`
      : `<div class="phase ${status} ${here}"${here ? ' aria-current="page"' : ""}>${inner}</div>`;
  }).join("");
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  const statuses = tripStatuses();
  el.innerHTML = ITINERARY.map((stop, idx) => {
    const status = statuses[idx];
    const dotInner = status === "done" ? CHECK_SVG : "";
    return `
    <li class="tl-item reveal is-${status}">
      <span class="tl-item__dot" aria-hidden="true">${dotInner}</span>
      <div class="tl-item__card">
        <div class="tl-item__meta">
          <span class="tl-item__days">${stop.days}</span>
          ${STATUS_BADGE[status]}
        </div>
        <h3 class="tl-item__place">${stop.place}</h3>
        ${stop.area ? `<span class="tl-item__area">${stop.area}</span>` : ""}
        <p class="tl-item__desc">${stop.desc}</p>
        ${
          stop.address
            ? `<dl class="tl-item__stay">
                <div><dt>Check-in</dt><dd>${stop.checkIn}</dd></div>
                <div><dt>Check-out</dt><dd>${stop.checkOut}</dd></div>
                <div><dt>Address</dt><dd>${escapeHTML(stop.address)}</dd></div>
              </dl>
              <div class="tl-item__stay-links">
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.place + " " + stop.address)}" target="_blank" rel="noopener">📍 Map<span class="sr-only"> (opens Google Maps)</span></a>
              </div>`
            : ""
        }
        ${
          stop.flights
            ? `<ul class="tl-item__flights">${stop.flights
                .map(
                  (f) =>
                    `<li><span class="tl-item__flight-route">✈ ${f.route}</span><span class="tl-item__flight-detail">${f.detail}</span></li>`
                )
                .join("")}${
                stop.total
                  ? `<li class="tl-item__flight-sum"><span class="tl-item__flight-route">Total travel</span><span class="tl-item__flight-detail">${stop.total}</span></li>`
                  : ""
              }</ul>`
            : ""
        }
        <div class="tl-item__tags">
          ${stop.tags.map((t) => `<span class="tl-item__tag">${t}</span>`).join("")}
        </div>
      </div>
    </li>`;
  }).join("");
}

function renderBreaks() {
  const grid = document.getElementById("breaksGrid");
  const list = BREAKS;
  grid.innerHTML = list
    .map(
      (b, i) => `
    <article class="break-card reveal">
      <div class="break-card__top">
        <div class="break-card__heading">
          <h3 class="break-card__name">${b.name}</h3>
        </div>
        <span class="break-card__level" data-level="${b.level.split("–")[0]}">${b.level}</span>
        <button type="button" class="break-card__chev" aria-expanded="false" aria-controls="break-body-${i}" aria-label="Toggle details for ${escapeHTML(b.name)}">▾</button>
      </div>
      <div class="break-card__body" id="break-body-${i}">
        <p class="break-card__blurb">${b.blurb}</p>
        <dl class="break-card__facts">
          <div><dt>Wave</dt><dd>${b.type}</dd></div>
          <div><dt>Best</dt><dd>${b.best}</dd></div>
          <div><dt>Watch for</dt><dd>${b.hazard}</dd></div>
        </dl>
        <div class="break-card__links">
          <a href="https://www.google.com/search?q=${encodeURIComponent(b.name + " surf forecast")}" target="_blank" rel="noopener">🌊 Forecast<span class="sr-only"> (opens a web search)</span></a>
        </div>
      </div>
    </article>`
    )
    .join("");
  armReveal(grid);
  if (!grid.dataset.bound) {
    grid.dataset.bound = "1";
    grid.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      const card = e.target.closest(".break-card");
      if (!card) return;
      const open = card.classList.toggle("is-open");
      card.querySelector(".break-card__chev")?.setAttribute("aria-expanded", String(open));
    });
  }
}

function renderPacking() {
  const grid = document.getElementById("packingGrid");
  grid.innerHTML = PACKING.map(
    (cat) => `
    <div class="pack-cat reveal" data-cat="${cat.id}">
      <div class="pack-cat__head">
        <span class="pack-cat__icon" aria-hidden="true">${cat.icon}</span>
        <h3 class="pack-cat__title">${cat.title}</h3>
        <span class="pack-cat__count" data-count="${cat.id}"></span>
      </div>
      <div class="pack-cat__items">
        ${cat.items
          .map((item, i) => {
            const key = itemKey(cat.id, i);
            const st = state[key] || {};
            const label = typeof item === "string" ? item : item.label;
            const note = typeof item === "string" ? "" : item.note;
            return `
            <div class="pack-item ${st.got ? "is-got" : ""} ${st.packed ? "is-packed" : ""}" data-key="${key}">
              <span class="pack-item__text">
                <span class="pack-item__label">${label}</span>
                ${note ? `<span class="pack-item__note">${note}</span>` : ""}
              </span>
              <span class="pack-item__toggles">
                <button type="button" class="pack-toggle pack-toggle--got ${st.got ? "is-on" : ""}" data-act="got" aria-pressed="${!!st.got}" aria-label="Got: ${escapeHTML(label)}">Got</button>
                <button type="button" class="pack-toggle pack-toggle--packed ${st.packed ? "is-on" : ""}" data-act="packed" aria-pressed="${!!st.packed}" aria-label="Packed: ${escapeHTML(label)}">Packed</button>
              </span>
            </div>`;
          })
          .join("")}
      </div>
    </div>`
  ).join("");

  if (!grid.dataset.bound) {
    grid.dataset.bound = "1";
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".pack-toggle");
      if (!btn) return;
      const item = btn.closest(".pack-item");
      const key = item.dataset.key;
      const cur = state[key] || { got: false, packed: false };
      if (btn.dataset.act === "got") {
        cur.got = !cur.got;
        if (!cur.got) cur.packed = false;
      } else {
        cur.packed = !cur.packed;
        if (cur.packed) cur.got = true;
      }
      if (!cur.got && !cur.packed) delete state[key];
      else state[key] = cur;
      saveState(state);
      const now = state[key] || { got: false, packed: false };
      item.classList.toggle("is-got", now.got);
      item.classList.toggle("is-packed", now.packed);
      const gotBtn = item.querySelector(".pack-toggle--got");
      const packedBtn = item.querySelector(".pack-toggle--packed");
      gotBtn.classList.toggle("is-on", now.got);
      packedBtn.classList.toggle("is-on", now.packed);
      gotBtn.setAttribute("aria-pressed", String(now.got));
      packedBtn.setAttribute("aria-pressed", String(now.packed));
      pop(btn);
      updateProgress();
    });
  }
}

function updateProgress() {
  const total = PACKING.reduce((n, c) => n + c.items.length, 0);
  let packed = 0;
  let got = 0;
  Object.values(state).forEach((v) => {
    if (v && v.packed) packed++;
    if (v && v.got) got++;
  });
  const pct = total ? Math.round((packed / total) * 100) : 0;
  const gotPct = total ? Math.round((got / total) * 100) : 0;

  document.getElementById("progressFill").style.transform = `scaleX(${pct / 100})`;
  const gotFill = document.getElementById("progressFillGot");
  if (gotFill) gotFill.style.transform = `scaleX(${gotPct / 100})`;
  document.getElementById("progressCount").textContent = packed;
  document.getElementById("progressTotal").textContent = total;
  const complete = total > 0 && packed === total;
  document.getElementById("progressPct").textContent = complete ? pct + "% 🤙" : pct + "%";
  document.querySelector(".packing__progress")?.classList.toggle("is-complete", complete);
  const bar = document.querySelector(".packing__progress-bar");
  if (bar) {
    bar.setAttribute("aria-valuenow", String(pct));
    bar.setAttribute("aria-valuetext", `${packed} of ${total} packed, ${got} obtained`);
  }
  const gotEl = document.getElementById("progressGot");
  if (gotEl) gotEl.textContent = got;

  PACKING.forEach((cat) => {
    const catPacked = cat.items.filter((_, i) => state[itemKey(cat.id, i)]?.packed).length;
    const badge = document.querySelector(`[data-count="${cat.id}"]`);
    if (badge) badge.textContent = `${catPacked}/${cat.items.length}`;
  });
}

function resetPacking() {
  if (!confirm("Clear every item's Got and Packed status and start fresh?")) return;
  state = {};
  saveState(state);
  renderPacking();
  updateProgress();
}

function renderInfo() {
  const grid = document.getElementById("infoGrid");
  grid.innerHTML = INFO.map((card) => {
    const body =
      card.type === "list"
        ? `<ul class="info-card__list">${card.rows.map((r) => `<li><span>${r[0]}</span><b>${r[1]}</b></li>`).join("")}</ul>`
        : `<p class="info-card__text">${card.text}</p>`;
    return `
      <div class="info-card reveal">
        <span class="info-card__icon" aria-hidden="true">${card.icon}</span>
        <h3 class="info-card__title">${card.title}</h3>
        ${body}
      </div>`;
  }).join("");
}

function renderCountdown() {
  const el = document.getElementById("countdown");
  const start = new Date(TRIP_START + "T00:00:00");
  const now = new Date();
  const days = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
  el.textContent = days > 0 ? days : "🌴";
  el.classList.toggle("is-complete", days <= 0);
}

// ---- Route map (Leaflet) ------------------------------------------

function caCurrentPoint(P) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s) => new Date(s + "T00:00:00");
  const inR = (a, b) => today >= toDate(a) && today <= toDate(b);
  if (inR("2026-09-02", "2026-09-03")) return P.sjo;
  if (inR("2026-09-03", "2026-09-08")) return P.pavones;
  if (inR("2026-09-08", "2026-09-13")) return P.dominical;
  if (inR("2026-09-13", "2026-09-24")) return P.santateresa;
  if (inR("2026-09-24", "2026-09-25")) return P.sjo;
  return P.sc; // home (Santa Cruz) before, during the reset, and after
}

function initRouteMap() {
  const el = document.getElementById("routeMap");
  if (!el) return;
  if (typeof L === "undefined") {
    el.classList.add("flightmap--offline");
    el.closest(".flightmap-wrap")?.classList.add("is-offline");
    el.innerHTML = "<p>The interactive map needs an internet connection.</p>";
    return;
  }
  const P = {
    sc: [36.97, -122.03],
    sjo: [9.9981, -84.2041],
    pavones: [8.3833, -83.0],
    dominical: [9.25, -83.8667],
    santateresa: [9.6461, -85.1691],
  };
  const map = L.map(el, { scrollWheelZoom: false, zoomControl: true });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    subdomains: "abcd",
    maxZoom: 10,
  }).addTo(map);

  L.polyline([P.sc, P.sjo], { color: "#3f9d5a", weight: 3, opacity: 0.9, dashArray: "1 9", lineCap: "round" }).addTo(map);
  [
    [P.sjo, P.pavones],
    [P.pavones, P.dominical],
    [P.dominical, P.santateresa],
    [P.santateresa, P.sjo],
  ].forEach((leg) =>
    L.polyline(leg, { color: "#ff7a3c", weight: 3, opacity: 0.9, dashArray: "1 9", lineCap: "round" }).addTo(map)
  );

  const stops = [
    { p: P.sc, name: "Santa Cruz", dest: false },
    { p: P.sjo, name: "Alajuela", dest: false },
    { p: P.pavones, name: "Pavones", dest: true },
    { p: P.dominical, name: "Dominical", dest: true },
    { p: P.santateresa, name: "Santa Teresa", dest: true },
  ];
  stops.forEach((s) => {
    L.circleMarker(s.p, {
      radius: 7,
      color: "#fff",
      weight: 2.5,
      fillColor: s.dest ? "#ff7a3c" : "#3f9d5a",
      fillOpacity: 1,
    })
      .addTo(map)
      .bindTooltip(s.name, { permanent: true, direction: "top", offset: [0, -6], className: "map-label" });
  });

  const icon = L.divIcon({
    className: "map-pulse",
    html: '<span class="map-pulse__ring"></span><span class="map-pulse__dot"></span>',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
  L.marker(caCurrentPoint(P), { icon, zIndexOffset: 1000 }).addTo(map);

  map.fitBounds(stops.map((s) => s.p), { padding: [55, 55] });
  setTimeout(() => map.invalidateSize(), 200);
}

// ---- Surf Log -----------------------------------------------------

// The quiver — used to color-code sessions.
const BOARDS = [
  { id: "5150", label: "5150+", color: "#2f6df6" },
  { id: "sword", label: "Sword", color: "#ff8a3d" },
];

// The trip is over — this is the final record, embedded so it survives
// a cleared localStorage. No more sessions get added after the fact.
const SEED_LOG = [
  { id: 1, date: "2026-09-04", spot: "Pavones", rating: 3, board: "5150", notes: "Pretty small. Swell is still building, but got a few and could see the potential for this weekend. Racey left walls." },
  { id: 2, date: "2026-09-05", spot: "Pavones", rating: 2, board: "5150", notes: "The swell arrived. Im learning that there is realistically an hour window to get decent surf. This morning session was pretty much on shore wind the whole time. Paddled at 8. Out by 9:30." },
  { id: 3, date: "2026-09-05", spot: "Pavones", rating: 4, board: "5150", notes: "11am session. This is when the wind finally dies. No offshore wind though. Sets every 15 minutes. A few longer rides. I drove to the paddle out this session." },
  { id: 4, date: "2026-09-06", spot: "Pavones", rating: 2, board: "5150", notes: "I attempted another 7am morning session. I surfed the river mouth. Pretty much onshore wind the whole time." },
  { id: 5, date: "2026-09-06", spot: "Pavones", rating: 4, board: "5150", notes: "11am to 12:30pm. Wind was mostly quiet, picked up onshore at the end so I got out. A few long waves with decent shoulders. Lineup was fine, not too crowded. Swell direction felt like it changed (as in it got better, probably more south than west)" },
  { id: 6, date: "2026-09-07", spot: "Pavones", rating: 2, board: "5150", notes: "6:30am session. Tide was rising and wind was on. Not great, caught a few." },
  { id: 7, date: "2026-09-07", spot: "Pavones", rating: 4, board: "5150", notes: "Sneaker session. Got in at 3pm. No wind, super glassy. Probably got the best wave of the trip so far. And pigdogged a small wave successfully." },
  { id: 8, date: "2026-09-08", spot: "Pavones", rating: 4, board: "5150", notes: "Surfed the river mouth and it was great. Super glassy, I was the only one out at one point. Solid 5ft, and consistent. Got in around 7am and out at 9:30am." },
  { id: 9, date: "2026-09-09", spot: "Dominical", rating: 2, board: "5150", notes: "Waited for the tide to push in. Got in around 10am. Started at the river mouth but eventually went about half a mile down the beach infront of the guard stand. You had to really scratch to get in the waves, but had a couple turns. Left and right." },
  { id: 10, date: "2026-09-10", spot: "Dominical", rating: 3, board: "5150", notes: "Session was ok, got in around 10. Got a couple hours in before the tide got too high and the wind came up. More people out today. Drifted down below the lifeguard stand." },
  { id: 11, date: "2026-09-11", spot: "Dominical", rating: 1, board: "5150", notes: "Big, closing out. Surfed around 10 again, it was a lower tide. Barely scratched under a huge set wave and decided to call it." },
  { id: 12, date: "2026-09-12", spot: "Dominical", rating: 2, board: "5150", notes: "In the water at 6am. Glassy, bit smaller than yesterday. Most people I've seen yet. Caught a few rights. Got my spine adjusted by a clean up set at the end. Met a guy who had a Stretch 2win." },
  { id: 13, date: "2026-09-14", spot: "Playa Hermosa", rating: 4, board: "5150", notes: "Paddled at 6am. Sheet glass with 3 people out. Took multiple fun waves from the peak going right. Some fun lefts further south on the beach." },
  { id: 14, date: "2026-09-14", spot: "Playa Hermosa", rating: 2, board: "5150", notes: "Evening session. Still choppy from the wind and tide was probably to high. Learning morning sessions are the best." },
  { id: 15, date: "2026-09-15", spot: "Playa Hermosa", rating: 2, board: "5150", notes: "Early morning session. Glassy but something was off. The waves weren't easy to paddle into and died quickly as they hit the inside sandbar." },
  { id: 16, date: "2026-09-16", spot: "Playa Hermosa", rating: 2, board: "5150", notes: "6am session again. There was bigger swell but still pretty inconsistent and slow. A couple fun lefts." },
  { id: 17, date: "2026-09-18", spot: "Playa Santa Teresa", rating: 4, board: "5150", notes: "Fun left off the rocks on the south side of the beach. Surfed later in the morning. Had the peak to myself." },
  { id: 18, date: "2026-09-19", spot: "Playa Santa Teresa", rating: 2, board: "5150", notes: "Waves were not nearly as good this morning. Got in the water just before 6. Really slow session. Left off the rock wasnt working." },
  { id: 19, date: "2026-09-20", spot: "Playa Santa Teresa", rating: 3, board: "5150", notes: "Slept in a bit. Didn't paddle until 8am. Went to the main peak right in the middle of the beach. Small cover up going right. Then drifted back down to the rocks on the south side and got some decent lefts. Wind came on around 9:30 and kinda blew it out." },
  { id: 20, date: "2026-09-20", spot: "Playa Santa Teresa", rating: 1, board: "5150", notes: "Evening session, pretty garbage. Basically onshore wind shore break." },
  { id: 21, date: "2026-09-21", spot: "Playa Santa Teresa", rating: 2, board: "5150", notes: "Stormed all last night and into this morning. Surf was choppy, short period. I moved down to the main peak and had a couple fun rights and lefts." },
  { id: 22, date: "2026-09-22", spot: "Playa Santa Teresa", rating: 1, board: "5150", notes: "Shore break essentially. Tried to move down to the rock on the south side but nothing ever came through." },
  { id: 23, date: "2026-09-23", spot: "Playa Santa Teresa", rating: 1, board: "5150", notes: "Low tide shore break, wind came onshore early…" },
  { id: 24, date: "2026-09-24", spot: "Playa Hermosa", rating: 3, board: "5150", notes: "Solid 3 star session. In the water before 6 am, barely anyone out. Really low tide so it was mostly hollow. Got a fun right cover up and some fun lefts." },
];

const logEntries = SEED_LOG;

function boardMeta(id) {
  return BOARDS.find((b) => b.id === id);
}

function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function saveJSON(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {
    /* ignore */
  }
}
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function starRow(n) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<span class="star ${i <= n ? "is-on" : ""}" aria-hidden="true">★</span>`;
  }
  return s;
}
function fmtLogDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}
function renderLog() {
  const el = document.getElementById("logList");
  const lede = document.getElementById("logLede");
  if (lede) lede.textContent = `${logEntries.length} session${logEntries.length === 1 ? "" : "s"} from the trip.`;
  if (!logEntries.length) {
    el.innerHTML = `<p class="log__empty">No sessions logged yet. Your first paddle-out goes here.</p>`;
    return;
  }
  const sorted = [...logEntries].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.id - a.id));
  el.innerHTML = sorted
    .map(
      (e) => `
    <div class="log-entry">
      <div class="log-entry__date">${fmtLogDate(e.date)}</div>
      <div class="log-entry__body">
        <div class="log-entry__head">
          <span class="log-entry__spot">${escapeHTML(e.spot)}</span>
          <span class="log-entry__tags">
            ${boardMeta(e.board) ? `<span class="log-entry__board" style="--board-color:${boardMeta(e.board).color}">${boardMeta(e.board).label}</span>` : ""}
            <span class="log-entry__stars" aria-label="${e.rating} out of 5 stars">${starRow(e.rating)}</span>
          </span>
        </div>
        ${e.notes ? `<p class="log-entry__notes">${escapeHTML(e.notes)}</p>` : ""}
      </div>
    </div>`
    )
    .join("");
}
function initLog() {
  renderLog();
}

// ---- Money: converter + budget ------------------------------------

const USD_TO_CRC = 510; // approximate — update to the live rate before departure
function fmtUSD(n) {
  return "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });
}
function fmtCRC(n) {
  return "₡" + Math.round(n).toLocaleString("en-US");
}
let convDir = "USD2CRC";
function updateConverter() {
  const from = document.getElementById("convFrom");
  const to = document.getElementById("convTo");
  const amt = parseFloat(from.value) || 0;
  to.value = convDir === "USD2CRC" ? fmtCRC(amt * USD_TO_CRC) : fmtUSD(amt / USD_TO_CRC);
}
function initConverter() {
  const from = document.getElementById("convFrom");
  const to = document.getElementById("convTo");
  const fromCur = document.getElementById("convFromCur");
  const toCur = document.getElementById("convToCur");
  const rate = document.getElementById("convRate");

  const applyLabels = () => {
    fromCur.textContent = convDir === "USD2CRC" ? "USD" : "CRC";
    toCur.textContent = convDir === "USD2CRC" ? "CRC" : "USD";
    rate.textContent = `Approx. $1 = ${fmtCRC(USD_TO_CRC)} · update before you go`;
  };

  from.addEventListener("input", updateConverter);
  document.getElementById("convSwap").addEventListener("click", () => {
    const shown = Number(String(to.value).replace(/[^0-9.]/g, "")) || 0;
    convDir = convDir === "USD2CRC" ? "CRC2USD" : "USD2CRC";
    from.value = shown || from.value;
    applyLabels();
    updateConverter();
  });

  applyLabels();
  updateConverter();

  const usd = [1, 5, 10, 20, 50, 100];
  const crc = [500, 1000, 5000, 10000, 20000];
  document.getElementById("cheatsheet").innerHTML = `
    <div class="cheatsheet__col">
      <h4>USD → CRC</h4>
      ${usd.map((v) => `<div class="cheatsheet__row"><span>${fmtUSD(v)}</span><b>${fmtCRC(v * USD_TO_CRC)}</b></div>`).join("")}
    </div>
    <div class="cheatsheet__col">
      <h4>CRC → USD</h4>
      ${crc.map((v) => `<div class="cheatsheet__row"><span>${fmtCRC(v)}</span><b>${fmtUSD(v / USD_TO_CRC)}</b></div>`).join("")}
    </div>`;
}

const BUDGET_CATS = [
  { id: "flights", label: "✈️ Flights" },
  { id: "stay", label: "🏨 Stay" },
  { id: "food", label: "🍜 Food" },
  { id: "transport", label: "🚐 Transport" },
  { id: "surf", label: "🏄 Surf" },
  { id: "fun", label: "🎉 Fun" },
  { id: "other", label: "🧾 Other" },
];
const BUDGET_KEY = "surf-trip-ca-budget-v1";
let budget = loadJSON(BUDGET_KEY, []);
function catLabel(id) {
  const c = BUDGET_CATS.find((x) => x.id === id);
  return c ? c.label : id;
}
function renderBudget() {
  const total = budget.reduce((n, e) => n + e.amount, 0);
  document.getElementById("budgetTotal").textContent = fmtUSD(total);
  const byCat = {};
  budget.forEach((e) => (byCat[e.cat] = (byCat[e.cat] || 0) + e.amount));
  const cats = Object.keys(byCat).sort((a, b) => byCat[b] - byCat[a]);
  const max = Math.max(1, ...cats.map((c) => byCat[c]));
  document.getElementById("budgetBars").innerHTML = cats
    .map(
      (c) => `
    <div class="budget-bar">
      <span class="budget-bar__label">${catLabel(c)}</span>
      <span class="budget-bar__track"><span class="budget-bar__fill" style="width:${(byCat[c] / max) * 100}%"></span></span>
      <span class="budget-bar__amt">${fmtUSD(byCat[c])}</span>
    </div>`
    )
    .join("");
  const listEl = document.getElementById("budgetList");
  if (!budget.length) {
    listEl.innerHTML = `<p class="budget__empty">No expenses yet. Add your flights or a shuttle to start.</p>`;
    return;
  }
  listEl.innerHTML = [...budget]
    .reverse()
    .map(
      (e) => `
    <div class="budget-item">
      <span class="budget-item__cat">${catLabel(e.cat)}</span>
      <span class="budget-item__label">${escapeHTML(e.label)}</span>
      <span class="budget-item__amt">${fmtUSD(e.amount)}</span>
      <button type="button" class="budget-item__del" data-id="${e.id}" aria-label="Delete expense">✕</button>
    </div>`
    )
    .join("");
  listEl.querySelectorAll(".budget-item__del").forEach((btn) => {
    btn.addEventListener("click", () => {
      budget = budget.filter((x) => String(x.id) !== btn.dataset.id);
      saveJSON(BUDGET_KEY, budget);
      renderBudget();
    });
  });
}
function initBudget() {
  document.getElementById("budgetCat").innerHTML = BUDGET_CATS.map((c) => `<option value="${c.id}">${c.label}</option>`).join("");
  document.getElementById("budgetForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const cat = document.getElementById("budgetCat").value;
    const label = document.getElementById("budgetLabel");
    const amount = document.getElementById("budgetAmount");
    const val = parseFloat(amount.value);
    if (!(val > 0) || !label.value.trim()) return;
    budget.push({ id: Date.now(), cat, label: label.value.trim(), amount: val });
    saveJSON(BUDGET_KEY, budget);
    label.value = "";
    amount.value = "";
    renderBudget();
  });
  renderBudget();
}

// ---- Interactions (shared behavior) -------------------------------

function initTheme() {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const btn = document.getElementById("themeToggle");
  const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : mq.matches);
  const sync = () => {
    const dark = isDark();
    btn.textContent = dark ? "☀️" : "🌙";
    btn.setAttribute("aria-pressed", String(dark));
  };
  if (!root.dataset.theme) root.dataset.theme = mq.matches ? "dark" : "light";
  sync();
  btn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try {
      localStorage.setItem("surf-theme", root.dataset.theme);
    } catch {
      /* ignore */
    }
    sync();
  });
  mq.addEventListener?.("change", (e) => {
    try {
      if (localStorage.getItem("surf-theme")) return;
    } catch {
      /* ignore */
    }
    root.dataset.theme = e.matches ? "dark" : "light";
    sync();
  });
}

function initNavScroll() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  if (!nav || !burger) return;
  const close = () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll(".nav__links a").forEach((a) => a.addEventListener("click", close));
}

function initScrollSpy() {
  const links = [...document.querySelectorAll(".nav__links a")];
  const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const sections = [...document.querySelectorAll("main section[id]")];
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.remove("is-current"));
        byId.get(entry.target.id)?.classList.add("is-current");
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));
}

function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bg = document.querySelector(".hero__bg");
  if (!bg) return;
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) bg.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
        ticking = false;
      });
    },
    { passive: true }
  );
}

// ---- Init ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderStatusLine();
  renderPhaseStrip();
  initGallery();
  renderVideos();
  renderTimeline();
  renderBreaks();
  renderPacking();
  renderInfo();
  updateProgress();
  renderCountdown();
  initRouteMap();
  initLog();
  initConverter();
  initBudget();
  initNavScroll();
  initScrollSpy();
  initMobileNav();
  initParallax();
  armReveal();
  document.getElementById("resetBtn").addEventListener("click", resetPacking);
});
