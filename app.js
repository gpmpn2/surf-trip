/* ============================================
   Indonesia Surf Trip — app logic
   ============================================ */

// ---- Trip data ----------------------------------------------------

const TRIP_START = "2026-08-03"; // used for the hero countdown

// Shared across both trip pages. Keep in sync with central-america.js.
const PHASES = [
  { key: "indonesia", icon: "🌊", label: "Indonesia", dates: "Aug 3–28", start: "2026-08-03", end: "2026-08-28", href: "index.html" },
  { key: "reset", icon: "🏡", label: "Santa Cruz", dates: "Aug 28–Sep 1", start: "2026-08-28", end: "2026-09-01", href: null },
  { key: "centralamerica", icon: "🌴", label: "Central America", dates: "Sep 1 – Oct 4", start: "2026-09-01", end: "2026-10-04", href: "central-america.html" },
];

const ITINERARY = [
  {
    days: "Aug 3–4",
    start: "2026-08-03",
    end: "2026-08-04",
    place: "Fly San Francisco → Denpasar",
    desc: "The long haul across the Pacific with a Taipei connection. Land in Denpasar mid-afternoon.",
    flights: [
      { route: "SFO → TPE", detail: "EVA Air BR 027 · 1:00 AM → 4:40 AM (+1)" },
      { route: "TPE → DPS", detail: "EVA Air BR 255 · 9:50 AM → 3:15 PM" },
    ],
    total: "23h 15m door-to-door",
    tags: ["EVA Air", "Taipei layover"],
  },
  {
    days: "Aug 4–15",
    start: "2026-08-04",
    end: "2026-08-15",
    place: "Bali",
    desc: "Base in Bali. Ease in on the Canggu beach breaks, then chase the reef lefts of the Bukit — Uluwatu, Padang Padang, Bingin.",
    tags: ["Canggu", "The Bukit", "Reef + beach breaks"],
  },
  {
    days: "Aug 16",
    start: "2026-08-16",
    end: "2026-08-16",
    place: "Fly Denpasar → Padang",
    desc: "Early start. Garuda to Padang via a Jakarta connection, landing late morning ready for the boat.",
    flights: [
      { route: "DPS → CGK", detail: "Garuda GA 0403 · 7:30 AM → TBD" },
      { route: "CGK → PDG", detail: "Garuda GA 0148 · TBD → 11:15 AM" },
    ],
    total: "4h 45m door-to-door",
    tags: ["Garuda", "Jakarta connection"],
  },
  {
    days: "Aug 16–27",
    start: "2026-08-16",
    end: "2026-08-27",
    place: "Mentawai Boat Trip",
    desc: "Eleven nights aboard the Switchfoot, surfing reef setups across the Mentawai and Telo chains.",
    tags: ["Boat charter", "Pumping reef", "Remote"],
  },
  {
    days: "Aug 27–28",
    start: "2026-08-27",
    end: "2026-08-28",
    place: "Padang · Fahira Hotel",
    desc: "Back to the mainland around noon. One night at Fahira Hotel to clean up, repack, and rest before the flight home.",
    tags: ["Fahira Hotel", "1 night", "Recovery"],
  },
  {
    days: "Aug 28",
    start: "2026-08-28",
    end: "2026-08-28",
    place: "Fly Padang → San Francisco",
    desc: "The long way home. Garuda to Jakarta, then two EVA Air legs back across the Pacific via Taipei — landing the same day.",
    flights: [
      { route: "PDG → CGK", detail: "Garuda GA 0163 · 9:15 AM → 11:10 AM" },
      { route: "CGK → TPE", detail: "EVA Air BR 238 · 2:30 PM → 8:55 PM" },
      { route: "TPE → SFO", detail: "EVA Air BR 028 · 11:40 PM → 8:35 PM" },
    ],
    total: "25h 20m door-to-door",
    tags: ["Garuda + EVA", "3 legs", "Home"],
  },
];

const PACKING = [
  {
    id: "hardware",
    icon: "🏄",
    title: "Surf Hardware & Board Bag",
    items: [
      { label: "Surfboards ×2–3", note: "Daily shortboard, step-up for bigger swell, backup" },
      { label: "Board bag", note: '6\'6" heavy-duty coffin bag, high-density foam padding' },
      { label: "Leashes ×3", note: "Heavy-duty; 6ft + 7ft for varying wave sizes" },
      { label: "Spare leash string", note: "Cheap insurance against a snapped rail-saver" },
      { label: "Fin sets ×3", note: "Match your board boxes; thruster/quad setups" },
      { label: "Fin key ×2", note: "One in your wallet, one in the board bag" },
      { label: "Grub screws ×10", note: "Spare stainless steel fin screws" },
      { label: "Surf wax ×4–6", note: "Tropical water, hardest formula available" },
      { label: "Wax comb", note: "With integrated bottle opener" },
      { label: "Wax remover", note: "For re-waxing in tropical heat" },
      { label: "Ding repair kit", note: "Solar-cure resin, sandpaper, fiberglass patches" },
      { label: "Duct tape", note: "Small roll of heavy-duty gorilla tape" },
      { label: "Tie-down straps ×2", note: "Roof-rack straps for boat/car transfers" },
    ],
  },
  {
    id: "surfwear",
    icon: "🩱",
    title: "Surf Apparel & In-Water",
    items: [
      { label: "Boardshorts ×2", note: "High-stretch, anti-chafe, quick-dry" },
      { label: "Rash slides", note: "Chafe-guard shorts worn under boardshorts" },
      { label: "Rashguards ×2", note: "Long-sleeve UV50+" },
      { label: "Reef booties", note: "2–3mm split-toe" },
      { label: "Surf hat", note: "Cap or bucket, stiff brim + chin strap" },
      { label: "Sunglasses + strap", note: "Polarized, with a floating retainer" },
      { label: "Surf earplugs ×2", note: "Vented; prevent surfer's ear + infections" },
      { label: "Surf vest (optional)", note: "1.5mm neoprene top for wind chill / torso protection" },
    ],
  },
  {
    id: "bags",
    icon: "🎒",
    title: "Bags & Organization",
    items: [
      { label: "Dry bag", note: "20–30L roll-top waterproof, for boat excursions" },
      { label: "Main pack", note: "40L travel backpack (e.g. Osprey Farpoint)" },
      { label: "Packing cubes ×3–4", note: "Mesh; separate daily wear from wet gear" },
      { label: "Ziploc bags ×5", note: "Large heavy-duty, to waterproof electronics" },
      { label: "Water bottle", note: "Reusable; refill from the boat's watermaker" },
      { label: "Quick-dry towel", note: "Packable microfiber" },
      { label: "Neck pillow", note: "For the long-haul flights" },
      { label: "Ear plugs (sleep)", note: "Good-quality foam or silicone for noisy boat cabins" },
      { label: "Snacks", note: "Bars, nuts, candy — a morale boost after a long paddle" },
      { label: "Books ×2", note: "For flat spells and long steam times" },
    ],
  },
  {
    id: "land",
    icon: "👕",
    title: "Land Apparel",
    items: [
      { label: "T-shirts ×4", note: "Lightweight cotton or bamboo crewnecks" },
      { label: "Linen shirt", note: "Long-sleeve button-up for sun / dinners" },
      { label: "Casual shorts ×1", note: "Lightweight walk-shorts" },
      { label: "Linen pants", note: "Loose; required to cover up at Hindu temples" },
      { label: "Underwear ×6", note: "Moisture-wicking, anti-chafe boxers" },
      { label: "Socks ×3", note: "Ankle socks for trekking / travel days" },
      { label: "Sun hoody", note: "Hooded UPF top for all-day sun cover" },
      { label: "Compression socks", note: "For the long-haul flights" },
      { label: "Rain shell", note: "Packable, breathable waterproof jacket" },
    ],
  },
  {
    id: "footwear",
    icon: "🩴",
    title: "Footwear",
    items: [
      { label: "Flip-flops", note: "Quality rubber / water-resistant sandals" },
      { label: "Walking shoes", note: "Breathable sneakers or trail runners" },
    ],
  },
  {
    id: "tech",
    icon: "🔌",
    title: "Electronics & Power",
    items: [
      { label: "Travel adapter", note: "Universal, Type C + F outlets" },
      { label: "Power bank", note: "20,000mAh, airline-approved" },
      { label: "Action camera", note: "GoPro, floating grip, spare battery, 2 SD cards" },
      { label: "Charging cables ×2", note: "Braided long USB-C / Lightning" },
      { label: "Headlamp", note: "Waterproof LED with red-light setting" },
      { label: "USB drive / SSD", note: "Fast 128GB+ for the boat photographer's media package" },
      { label: "Surge protector", note: "Boat-generator power spikes can fry electronics" },
    ],
  },
  {
    id: "medical",
    icon: "🩹",
    title: "Medical & Reef First Aid",
    items: [
      { label: "Seasickness meds", note: "20 dimenhydrinate tablets or transdermal patches" },
      { label: "Antiseptic", note: "Betadine or hydrogen peroxide for reef cuts" },
      { label: "Antibiotic cream", note: "Neosporin or similar topical ointment" },
      { label: "Medical tape", note: "Waterproof athletic tape to secure dressings" },
      { label: "Gauze pads ×5", note: "Sterile non-stick dressings" },
      { label: "Band-aids ×20", note: "Assorted waterproof bandages" },
      { label: "Liquid I.V. ×10", note: "Rehydration for heat, sun, and Bali Belly recovery" },
      { label: "Stomach meds", note: "Imodium, Pepto-Bismol, activated charcoal tablets" },
      { label: "Pain relief", note: "Ibuprofen for sore paddling muscles" },
      { label: "Antimalarials", note: "Mentawais are malarial — see a travel doctor" },
      { label: "Prescription antibiotics", note: "Doctor-prescribed course for reef cuts / staph" },
      { label: "Antihistamines", note: "Allergies, bites, stings" },
      { label: "Antifungal cream", note: "Tropical rot / fungal infections" },
      { label: "Melatonin", note: "Reset for the long-haul jet lag" },
    ],
  },
  {
    id: "toiletries",
    icon: "🧴",
    title: "Toiletries & Sun Defense",
    items: [
      { label: "Face sunscreen ×2", note: "Heavy zinc surf mud, SPF 50+" },
      { label: "Body sunscreen ×2", note: "Reef-safe, biodegradable, SPF 50+" },
      { label: "Mosquito spray", note: "High-concentration DEET or Picaridin" },
      { label: "Aloe vera", note: "After-sun / burn relief" },
      { label: "Deodorant", note: "Travel-sized stick" },
      { label: "Toothbrush kit", note: "Toothbrush + travel toothpaste" },
      { label: "Floss", note: "" },
      { label: "Mouthwash", note: "Travel-sized" },
      { label: "Retainer", note: "Plus case" },
      { label: "Soap/shampoo bar", note: "Biodegradable, all-in-one" },
      { label: "Hand sanitizer + wipes", note: "For travel days and boat meals" },
    ],
  },
  {
    id: "docs",
    icon: "🛂",
    title: "Documents & Finances",
    items: [
      { label: "Passport", note: "6+ months validity, 2 blank pages" },
      { label: "Passport copies", note: "2 printed paper + 1 digital stored offline" },
      { label: "Visa docs", note: "e-VoA (Electronic Visa on Arrival) confirmation" },
      { label: "Travel insurance", note: "Must cover surfing + medical evacuation" },
      { label: "Cash", note: "$200 USD in crisp, unblemished bills for backup" },
      { label: "Mentawai surf tax", note: "~Rp 2,000,000 (≈$130) cash — mandatory region fee" },
      { label: "Crew tip cash", note: "Customary 10–15% of trip cost — set aside separately" },
      { label: "Cards ×2", note: "Zero foreign-exchange-fee debit/credit" },
    ],
  },
];

const BOAT = {
  intro:
    "A premium, custom-built 52-foot fiberglass power catamaran engineered for high-end wave-hunting. Built in Java by Crestrider Marine and skippered by seasoned Mentawai captain Jason Quinn under an Indonesian flag. Home base for eleven nights across the Mentawai and Telo chains.",
  stats: [
    { num: "52 ft", label: "length overall" },
    { num: "7.1 m", label: "beam" },
    { num: "10", label: "guests" },
    { num: "10 kn", label: "cruising speed" },
    { num: "5,200 L", label: "fuel range" },
  ],
  specs: [
    {
      icon: "📐",
      title: "Hull & Dimensions",
      rows: [
        ["Length overall", "15.8 m (52 ft)"],
        ["Beam", "7.1 m"],
        ["Draft", "0.66 m"],
        ["Lightship weight", "13 tonnes"],
        ["Construction", "Molded fiberglass · hard-chine hull"],
      ],
    },
    {
      icon: "⚙️",
      title: "Propulsion",
      rows: [
        ["Engines", "2× Yanmar 6LPA-STP2 · 315 hp"],
        ["Transmissions", "KMH50A · 1.67 ratio"],
        ["Steering", "Hydrive assist · Teleflex KE4+"],
        ["Speed", "10 kn cruise / 12 kn max"],
        ["Generators", "2× Yanmar 21 KVA"],
      ],
    },
    {
      icon: "⛽",
      title: "Tankage & Autonomy",
      rows: [
        ["Fuel", "5,200 L"],
        ["Freshwater", "620 L reserve"],
        ["Watermaker", "120 L/hr desalination"],
      ],
    },
    {
      icon: "🛏️",
      title: "Interior & Living",
      rows: [
        ["Guests", "Up to 10 + local crew"],
        ["Cabins", "4× twin + 2 privacy bunks"],
        ["Climate", "Fully air-conditioned throughout"],
        ["Heads", "2 modern marine washrooms"],
        ["Galley", "Commercial galley + indoor dining"],
      ],
    },
    {
      icon: "📡",
      title: "Nav, Safety & Tech",
      rows: [
        ["Radar", "Lowrance 4G · 36 nm"],
        ["Sounder", "Lowrance Elite 7 x HDI"],
        ["Navigation", "Corsemaster autopilot · AIS · compass"],
        ["Comms", "VHF/HF · sat phone · EPIRB · liferaft"],
        ["Connectivity", "24/7 Starlink · smart TV · 700+ films"],
      ],
    },
    {
      icon: "🚤",
      title: "Deck & Tenders",
      rows: [
        ["Deck", "Wide fore/aft decks · board racks"],
        ["Tender 1", "3.5 m Zodiac · 15 hp"],
        ["Tender 2", "4.6 m alloy console · 90 hp Suzuki"],
      ],
    },
  ],
};

const INFO = [
  {
    icon: "📋",
    title: "Essentials",
    type: "list",
    rows: [
      ["Visa", "VOA, 30 days"],
      ["Currency", "Rupiah (IDR)"],
      ["Plug", "Type C / F, 230V"],
      ["Language", "Bahasa / English"],
      ["Time zone", "WITA (GMT+8)"],
    ],
  },
  {
    icon: "🌊",
    title: "Surf Season",
    type: "text",
    text: "May–September is the dry season and prime time for the west-coast reefs. Expect clean offshore mornings, bigger swell on the Bukit, and consistent Mentawai lines.",
  },
  {
    icon: "⚠️",
    title: "Reef Safety",
    type: "text",
    text: "Most breaks are shallow coral. Wear booties, know the tide before you paddle out, and never surf a reef alone. Clean and treat every cut the same day.",
  },
  {
    icon: "💧",
    title: "Stay Well",
    type: "text",
    text: "Drink bottled or filtered water only. Skip ice you can't vouch for, load up on electrolytes, and reapply reef-safe sunscreen every session.",
  },
  {
    icon: "🛵",
    title: "Getting Around",
    type: "text",
    text: "Scooters rule Bali but ride within your limits and always wear a helmet. Gojek and Grab cover longer hops. For the Mentawais it's a ferry or charter from Padang.",
  },
];

// ---- Rendering ----------------------------------------------------

const CHECK_SVG = '<svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>';
const STORAGE_KEY = "surf-trip-packing-v3";

// Returns a status per itinerary stop: "done" | "now" | "upcoming" | "later".
// "now" = today falls inside the stop. If the trip hasn't started (or we're in a
// gap between stops), the next future stop is flagged "upcoming" so the pulse
// always shows where you are / where you're headed.
function tripStatuses() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s) => new Date(s + "T00:00:00");

  let nowIdx = -1;
  ITINERARY.forEach((s, i) => {
    if (nowIdx === -1 && toDate(s.start) <= today && today <= toDate(s.end)) nowIdx = i;
  });

  let upcomingIdx = -1;
  if (nowIdx === -1) {
    upcomingIdx = ITINERARY.findIndex((s) => toDate(s.start) > today);
  }

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
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — session only */
  }
}

let state = loadState();

function itemKey(catId, index) {
  return `${catId}:${index}`;
}

// Quick tactile bounce on interactive elements (skipped under reduced-motion).
function pop(el) {
  if (!el || !el.animate) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  el.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }],
    { duration: 260, easing: "cubic-bezier(.3, 1.4, .5, 1)" }
  );
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
    const inner = `<span class="phase__dot"></span><span class="phase__icon">${p.icon}</span><span class="phase__label">${p.label}</span><span class="phase__dates">${p.dates}</span>`;
    return p.href && p.key !== page
      ? `<a class="phase ${status} ${here}" href="${p.href}">${inner}</a>`
      : `<div class="phase ${status} ${here}">${inner}</div>`;
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
      <span class="tl-item__dot">${dotInner}</span>
      <div class="tl-item__card">
        <div class="tl-item__meta">
          <span class="tl-item__days">${stop.days}</span>
          ${STATUS_BADGE[status]}
        </div>
        <h3 class="tl-item__place">${stop.place}</h3>
        <p class="tl-item__desc">${stop.desc}</p>
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

function renderPacking() {
  const grid = document.getElementById("packingGrid");
  grid.innerHTML = PACKING.map(
    (cat) => `
    <div class="pack-cat reveal" data-cat="${cat.id}">
      <div class="pack-cat__head">
        <span class="pack-cat__icon">${cat.icon}</span>
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
                <button type="button" class="pack-toggle pack-toggle--got ${st.got ? "is-on" : ""}" data-act="got">Got</button>
                <button type="button" class="pack-toggle pack-toggle--packed ${st.packed ? "is-on" : ""}" data-act="packed">Packed</button>
              </span>
            </div>`;
          })
          .join("")}
      </div>
    </div>`
  ).join("");

  // Delegate clicks once. Packed implies got; un-getting also un-packs.
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
      item.querySelector(".pack-toggle--got").classList.toggle("is-on", now.got);
      item.querySelector(".pack-toggle--packed").classList.toggle("is-on", now.packed);
      pop(btn);
      updateProgress();
    });
  }
}

function renderBoat() {
  document.getElementById("boatIntro").textContent = BOAT.intro;

  document.getElementById("boatStats").innerHTML = BOAT.stats
    .map(
      (s) =>
        `<div class="boat__stat"><span class="boat__stat-num">${s.num}</span><span class="boat__stat-label">${s.label}</span></div>`
    )
    .join("");

  document.getElementById("boatSpecs").innerHTML = BOAT.specs
    .map(
      (card) => `
      <div class="info-card reveal">
        <span class="info-card__icon">${card.icon}</span>
        <h3 class="info-card__title">${card.title}</h3>
        <ul class="info-card__list">
          ${card.rows.map((r) => `<li><span>${r[0]}</span><b>${r[1]}</b></li>`).join("")}
        </ul>
      </div>`
    )
    .join("");
}

function renderInfo() {
  const grid = document.getElementById("infoGrid");
  grid.innerHTML = INFO.map((card) => {
    const body =
      card.type === "list"
        ? `<ul class="info-card__list">${card.rows
            .map((r) => `<li><span>${r[0]}</span><b>${r[1]}</b></li>`)
            .join("")}</ul>`
        : `<p class="info-card__text">${card.text}</p>`;
    return `
      <div class="info-card reveal">
        <span class="info-card__icon">${card.icon}</span>
        <h3 class="info-card__title">${card.title}</h3>
        ${body}
      </div>`;
  }).join("");
}

// ---- Progress -----------------------------------------------------

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

  document.getElementById("progressFill").style.width = pct + "%";
  const gotFill = document.getElementById("progressFillGot");
  if (gotFill) gotFill.style.width = gotPct + "%";
  document.getElementById("progressCount").textContent = packed;
  document.getElementById("progressTotal").textContent = total;
  const complete = total > 0 && packed === total;
  document.getElementById("progressPct").textContent = complete ? pct + "% 🤙" : pct + "%";
  document.querySelector(".packing__progress")?.classList.toggle("is-complete", complete);
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

// ---- Hero countdown ----------------------------------------------

function renderCountdown() {
  const el = document.getElementById("countdown");
  const start = new Date(TRIP_START + "T00:00:00");
  const now = new Date();
  const days = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
  el.textContent = days > 0 ? days : "🌴";
}

// ---- Scroll behaviors --------------------------------------------

function initNavScroll() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
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
    const i = sibs.indexOf(el);
    el.style.transitionDelay = Math.min(i, 6) * 60 + "ms";
    revealIO.observe(el);
  });
}

// ---- Surf Breaks --------------------------------------------------

const BREAKS = [
  {
    name: "Uluwatu",
    region: "Bali & Bukit",
    type: "Left · reef",
    level: "Advanced",
    best: "Dry-season SW swell · SE offshore · mid–high tide",
    hazard: "Shallow reef, strong currents, crowds",
    blurb: "Iconic Bukit left with multiple sections and a cave paddle-out.",
  },
  {
    name: "Padang Padang",
    region: "Bali & Bukit",
    type: "Left · reef barrel",
    level: "Expert",
    best: "Solid SW swell · mid tide",
    hazard: "Very shallow reef, heavy takeoff",
    blurb: "The 'Balinese Pipeline' — a perfect, hollow left when it's on.",
  },
  {
    name: "Bingin",
    region: "Bali & Bukit",
    type: "Left · reef",
    level: "Intermediate–Adv",
    best: "SW swell · mid–low tide",
    hazard: "Sharp reef, shallow at low tide",
    blurb: "Short, hollow, playful left right in front of the warungs.",
  },
  {
    name: "Canggu",
    region: "Bali & Bukit",
    type: "Beach + reef",
    level: "Beginner–Int",
    best: "Morning offshore · smaller swell",
    hazard: "Crowds, rips",
    blurb: "Mellow rollers at Batu Bolong / Echo — a good warm-up.",
  },
  {
    name: "Keramas",
    region: "Bali & Bukit",
    type: "Right · reef",
    level: "Advanced",
    best: "Dry season · glassy mornings · higher tide",
    hazard: "Reef",
    blurb: "East Bali right-hander, punchy and rippable — good for airs.",
  },
  {
    name: "Lance's Right (HT's)",
    region: "Mentawai",
    type: "Right · reef",
    level: "Advanced",
    best: "SW–S swell · SE wind · mid tide",
    hazard: "Shallow inside reef, crowds",
    blurb: "Sipora. Machine-like barreling right — the Mentawai benchmark.",
  },
  {
    name: "Lance's Left",
    region: "Mentawai",
    type: "Left · reef",
    level: "Intermediate–Adv",
    best: "Bigger swell · mid–high tide",
    hazard: "Reef",
    blurb: "Sipora. Long, rippable wall across the bay from HT's.",
  },
  {
    name: "Telescopes",
    region: "Mentawai",
    type: "Left · reef",
    level: "Advanced",
    best: "Solid SW swell · mid tide",
    hazard: "Fast, shallow sections",
    blurb: "Sipora. Fast, hollow left with multiple barrel sections.",
  },
  {
    name: "Macaronis",
    region: "Mentawai",
    type: "Left · reef",
    level: "Intermediate–Adv",
    best: "Most swell directions · mid tide",
    hazard: "End-section reef",
    blurb: "North Pagai. Often called the funnest wave on earth — an endless carveable wall.",
  },
  {
    name: "Greenbush",
    region: "Mentawai",
    type: "Left · reef barrel",
    level: "Expert",
    best: "Solid S/SW swell · mid–low tide",
    hazard: "Thick lip, very shallow",
    blurb: "South Pagai. A grinding, below-sea-level barrel — experts only.",
  },
  {
    name: "Thunders",
    region: "Mentawai",
    type: "Left · reef",
    level: "Advanced",
    best: "Bigger SW swell · mid tide",
    hazard: "Heavy takeoff, reef",
    blurb: "North Pagai. Powerful left barrel a paddle from Macaronis.",
  },
  {
    name: "Bintangs",
    region: "Mentawai",
    type: "A-frame · reef",
    level: "Beginner–Int",
    best: "Small–mid swell",
    hazard: "Reef at low tide",
    blurb: "Sipora. Fun, forgiving peaks — a great step-in wave.",
  },
  {
    name: "Roxies",
    region: "Mentawai",
    type: "Left · reef",
    level: "Advanced",
    best: "SW swell · mid tide",
    hazard: "Shallow reef",
    blurb: "Sipora. Hollow, punchy left when the swell is up.",
  },
  {
    name: "Bank Vaults",
    region: "Telos",
    type: "Right · reef",
    level: "Advanced",
    best: "S/SW swell · mid tide",
    hazard: "Fast, shallow reef",
    blurb: "Hollow, fast right that runs down a shallow reef.",
    verify: true,
  },
  {
    name: "Max's (Left)",
    region: "Telos",
    type: "Left · reef",
    level: "Intermediate",
    best: "Mid–bigger swell",
    hazard: "Reef",
    blurb: "Playful, rippable left — one of the friendlier Telo waves.",
    verify: true,
  },
  {
    name: "The Ledge",
    region: "Telos",
    type: "Left · reef",
    level: "Advanced",
    best: "Solid swell · mid tide",
    hazard: "Heavy takeoff, shallow",
    blurb: "Short, intense barrel breaking off a reef ledge.",
    verify: true,
  },
  {
    name: "Treasure Island",
    region: "Telos",
    type: "Right · reef",
    level: "Intermediate–Adv",
    best: "Mid swell",
    hazard: "Reef",
    blurb: "Fun right-hander peeling off a picture-perfect island.",
    verify: true,
  },
  {
    name: "Rockstar",
    region: "Telos",
    type: "Right · reef",
    level: "Advanced",
    best: "Solid S/SW swell",
    hazard: "Shallow, powerful",
    blurb: "Punchy right with barrel sections when it's on.",
    verify: true,
  },
];

const BREAK_REGIONS = ["All", "Bali & Bukit", "Mentawai", "Telos"];
let breakFilter = "All";

function renderBreakFilters() {
  const el = document.getElementById("breakFilters");
  el.innerHTML = BREAK_REGIONS.map(
    (r) =>
      `<button type="button" class="breaks__filter ${r === breakFilter ? "is-active" : ""}" data-region="${r}">${r}</button>`
  ).join("");
  el.querySelectorAll(".breaks__filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      breakFilter = btn.dataset.region;
      renderBreakFilters();
      renderBreaks();
    });
  });
}

function renderBreaks() {
  const grid = document.getElementById("breaksGrid");
  const list = BREAKS.filter((b) => breakFilter === "All" || b.region === breakFilter);
  grid.innerHTML = list
    .map(
      (b) => `
    <article class="break-card reveal">
      <div class="break-card__top">
        <div class="break-card__heading">
          <h3 class="break-card__name">${b.name}</h3>
          <span class="break-card__region">${b.region}${b.verify ? ` · <span class="break-card__verify">confirm on charter</span>` : ""}</span>
        </div>
        <span class="break-card__level" data-level="${b.level.split("–")[0]}">${b.level}</span>
        <span class="break-card__chev" aria-hidden="true">▾</span>
      </div>
      <div class="break-card__body">
        <p class="break-card__blurb">${b.blurb}</p>
        <dl class="break-card__facts">
          <div><dt>Wave</dt><dd>${b.type}</dd></div>
          <div><dt>Best</dt><dd>${b.best}</dd></div>
          <div><dt>Watch for</dt><dd>${b.hazard}</dd></div>
        </dl>
      </div>
    </article>`
    )
    .join("");
  armReveal(grid);

  // Tap-to-expand on mobile (cards are always expanded on desktop via CSS).
  if (!grid.dataset.bound) {
    grid.dataset.bound = "1";
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".break-card");
      if (card) card.classList.toggle("is-open");
    });
  }
}

// ---- Surf Log -----------------------------------------------------

const LOG_KEY = "surf-trip-log-v1";
let logEntries = loadJSON(LOG_KEY, []);
let logRating = 0;

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
    /* storage unavailable */
  }
}

function starRow(n, interactive) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    const on = i <= n ? "is-on" : "";
    s += interactive
      ? `<button type="button" class="star ${on}" data-val="${i}" aria-label="${i} star">★</button>`
      : `<span class="star ${on}">★</span>`;
  }
  return s;
}

function renderLogStars() {
  const el = document.getElementById("logStars");
  el.innerHTML = starRow(logRating, true);
  el.querySelectorAll(".star").forEach((btn) => {
    btn.addEventListener("click", () => {
      logRating = Number(btn.dataset.val);
      renderLogStars();
      pop(document.querySelector(`#logStars .star[data-val="${logRating}"]`));
    });
  });
}

function fmtLogDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function renderLog() {
  const el = document.getElementById("logList");
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
          <span class="log-entry__stars">${starRow(e.rating, false)}</span>
        </div>
        ${e.notes ? `<p class="log-entry__notes">${escapeHTML(e.notes)}</p>` : ""}
      </div>
      <button type="button" class="log-entry__del" data-id="${e.id}" aria-label="Delete session">✕</button>
    </div>`
    )
    .join("");
  el.querySelectorAll(".log-entry__del").forEach((btn) => {
    btn.addEventListener("click", () => {
      logEntries = logEntries.filter((x) => String(x.id) !== btn.dataset.id);
      saveJSON(LOG_KEY, logEntries);
      renderLog();
    });
  });
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function initLog() {
  const form = document.getElementById("logForm");
  const dateInput = document.getElementById("logDate");
  const spotInput = document.getElementById("logSpot");
  const notesInput = document.getElementById("logNotes");

  document.getElementById("breakList").innerHTML = BREAKS.map((b) => `<option value="${b.name}"></option>`).join("");
  dateInput.value = new Date().toISOString().slice(0, 10);
  renderLogStars();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    logEntries.push({
      id: Date.now(),
      date: dateInput.value,
      spot: spotInput.value.trim(),
      rating: logRating,
      notes: notesInput.value.trim(),
    });
    saveJSON(LOG_KEY, logEntries);
    spotInput.value = "";
    notesInput.value = "";
    logRating = 0;
    renderLogStars();
    renderLog();
  });

  renderLog();
}

// ---- Money: converter + budget ------------------------------------

const USD_TO_IDR = 16300; // approximate — update to the live rate before departure

function fmtUSD(n) {
  return "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });
}
function fmtIDR(n) {
  return "Rp " + Math.round(n).toLocaleString("en-US");
}

let convDir = "USD2IDR";
function updateConverter() {
  const from = document.getElementById("convFrom");
  const to = document.getElementById("convTo");
  const amt = parseFloat(from.value) || 0;
  to.value = convDir === "USD2IDR" ? fmtIDR(amt * USD_TO_IDR) : fmtUSD(amt / USD_TO_IDR);
}

function initConverter() {
  const from = document.getElementById("convFrom");
  const to = document.getElementById("convTo");
  const fromCur = document.getElementById("convFromCur");
  const toCur = document.getElementById("convToCur");
  const rate = document.getElementById("convRate");

  const applyLabels = () => {
    fromCur.textContent = convDir === "USD2IDR" ? "USD" : "IDR";
    toCur.textContent = convDir === "USD2IDR" ? "IDR" : "USD";
    rate.textContent = `Approx. $1 = ${fmtIDR(USD_TO_IDR)} · update before you go`;
  };

  from.addEventListener("input", updateConverter);
  document.getElementById("convSwap").addEventListener("click", () => {
    const shown = Number(String(to.value).replace(/[^0-9.]/g, "")) || 0;
    convDir = convDir === "USD2IDR" ? "IDR2USD" : "USD2IDR";
    from.value = shown || from.value;
    applyLabels();
    updateConverter();
  });

  applyLabels();
  updateConverter();

  // cheat-sheet
  const usd = [1, 5, 10, 20, 50, 100];
  const idr = [10000, 50000, 100000, 500000, 1000000];
  document.getElementById("cheatsheet").innerHTML = `
    <div class="cheatsheet__col">
      <h4>USD → IDR</h4>
      ${usd.map((v) => `<div class="cheatsheet__row"><span>${fmtUSD(v)}</span><b>${fmtIDR(v * USD_TO_IDR)}</b></div>`).join("")}
    </div>
    <div class="cheatsheet__col">
      <h4>IDR → USD</h4>
      ${idr.map((v) => `<div class="cheatsheet__row"><span>${fmtIDR(v)}</span><b>${fmtUSD(v / USD_TO_IDR)}</b></div>`).join("")}
    </div>`;
}

const BUDGET_CATS = [
  { id: "flights", label: "✈️ Flights" },
  { id: "boat", label: "⛵ Boat" },
  { id: "stay", label: "🏨 Stay" },
  { id: "food", label: "🍜 Food" },
  { id: "transport", label: "🛵 Transport" },
  { id: "gear", label: "🏄 Gear" },
  { id: "fun", label: "🎉 Fun" },
  { id: "other", label: "🧾 Other" },
];
const BUDGET_KEY = "surf-trip-budget-v1";
let budget = loadJSON(BUDGET_KEY, []);

function catLabel(id) {
  const c = BUDGET_CATS.find((x) => x.id === id);
  return c ? c.label : id;
}

function renderBudget() {
  const total = budget.reduce((n, e) => n + e.amount, 0);
  document.getElementById("budgetTotal").textContent = fmtUSD(total);

  // per-category bars
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

  // entry list
  const listEl = document.getElementById("budgetList");
  if (!budget.length) {
    listEl.innerHTML = `<p class="budget__empty">No expenses yet. Add your flights or boat deposit to start.</p>`;
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
  document.getElementById("budgetCat").innerHTML = BUDGET_CATS.map(
    (c) => `<option value="${c.id}">${c.label}</option>`
  ).join("");

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

// ---- Flight map (Leaflet, needs internet) -------------------------

function initFlightMap() {
  const el = document.getElementById("flightMap");
  if (!el) return;
  if (typeof L === "undefined") {
    el.classList.add("flightmap--offline");
    el.closest(".flightmap-wrap")?.classList.add("is-offline");
    el.innerHTML =
      "<p>The interactive map needs an internet connection.</p>";
    return;
  }

  // Asian longitudes shifted by -360 so the route draws across the Pacific
  // (the short way) instead of wrapping the long way around the globe.
  const P = {
    sfo: [37.62, -122.38],
    tpe: [25.08, -238.77],
    cgk: [-6.13, -253.34],
    dps: [-8.75, -244.83],
    pdg: [-0.79, -259.72],
    mtw: [-2.28, -260.43],
  };

  const map = L.map(el, { scrollWheelZoom: false, zoomControl: true });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: "abcd",
    maxZoom: 10,
  }).addTo(map);

  const flightLegs = [
    [P.sfo, P.tpe],
    [P.tpe, P.dps],
    [P.dps, P.cgk],
    [P.cgk, P.pdg],
    [P.tpe, P.cgk],
  ];
  flightLegs.forEach((leg) =>
    L.polyline(leg, { color: "#178ca4", weight: 3, opacity: 0.9, dashArray: "1 9", lineCap: "round" }).addTo(map)
  );
  L.polyline([P.pdg, P.mtw], { color: "#ff6b5b", weight: 3, opacity: 0.95, dashArray: "1 9", lineCap: "round" }).addTo(map);

  const stops = [
    { p: P.sfo, name: "San Francisco", dest: false },
    { p: P.tpe, name: "Taipei", dest: false },
    { p: P.cgk, name: "Jakarta", dest: false },
    { p: P.dps, name: "Bali (Denpasar)", dest: true },
    { p: P.pdg, name: "Padang", dest: false },
    { p: P.mtw, name: "Mentawai Is.", dest: true },
  ];
  stops.forEach((s) => {
    L.circleMarker(s.p, {
      radius: 7,
      color: "#fff",
      weight: 2.5,
      fillColor: s.dest ? "#ff6b5b" : "#178ca4",
      fillOpacity: 1,
    })
      .addTo(map)
      .bindTooltip(s.name, { permanent: true, direction: "top", offset: [0, -6], className: "map-label" });
  });

  map.fitBounds(stops.map((s) => s.p), { padding: [50, 40] });
  setTimeout(() => map.invalidateSize(), 200);
}

// ---- Theme, scroll-spy, parallax ----------------------------------

function initTheme() {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const btn = document.getElementById("themeToggle");

  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === "dark" : mq.matches;
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

  // follow the OS if the user hasn't made an explicit choice this session
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

// ---- Init ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderPhaseStrip();
  renderTimeline();
  renderBreakFilters();
  renderBreaks();
  renderBoat();
  renderPacking();
  renderInfo();
  updateProgress();
  renderCountdown();
  initFlightMap();
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
