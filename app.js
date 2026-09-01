/* ============================================
   Indonesia Surf Trip — app logic
   ============================================ */

// ---- Trip data ----------------------------------------------------

const TRIP_START = "2026-08-03"; // used for the hero countdown

// Shared across both trip pages. Keep in sync with central-america.js.
const PHASES = [
  { key: "indonesia", icon: "🌊", label: "Indonesia", dates: "Aug 3–28", start: "2026-08-03", end: "2026-08-28", href: "index.html" },
  { key: "reset", icon: "🏡", label: "Santa Cruz", dates: "Aug 28–Sep 2", start: "2026-08-28", end: "2026-09-02", href: null },
  { key: "centralamerica", icon: "🌴", label: "Costa Rica", dates: "Sep 2 – Sep 25", start: "2026-09-02", end: "2026-09-25", href: "central-america.html" },
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
    days: "Aug 4–6",
    start: "2026-08-04",
    end: "2026-08-06",
    place: "Alamanda Bingin",
    area: "Bingin · Uluwatu",
    desc: "Land and settle into the Bukit. Walk down to Bingin for the reef lefts and ease into the trip.",
    nights: 2,
    checkIn: "After 2:00 PM",
    checkOut: "11:00 AM",
    address: "Jalan Pantai Bingin, Uluwatu, 80361 Uluwatu, Indonesia",
    tags: ["2 nights", "Walk to Bingin"],
  },
  {
    days: "Aug 6–9",
    start: "2026-08-06",
    end: "2026-08-09",
    place: "Padang Padang Stay",
    area: "Padang Padang · Uluwatu",
    desc: "Shift up the coast to Padang Padang — the Balinese Pipeline — with Uluwatu and Impossibles a short ride away.",
    nights: 3,
    checkIn: "After 2:00 PM",
    checkOut: "12:00 PM (noon)",
    address: "Jln. Melasti Labuhan Sait, Padang-Padang Beach, 80361 Uluwatu, Indonesia",
    tags: ["3 nights", "Walk to Padang Padang"],
  },
  {
    days: "Aug 9–15",
    start: "2026-08-09",
    end: "2026-08-15",
    place: "Bali · open days",
    desc: "Unbooked days to surf around the Bukit and the Canggu beach breaks before the flight north to Padang.",
    tags: ["Canggu", "The Bukit", "Flexible"],
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
    place: "Telo Boat Trip",
    desc: "Eleven nights aboard the Switchfoot, surfing reef setups across the Telo chain.",
    tags: ["Boat charter", "Pumping reef", "Remote"],
  },
  {
    days: "Aug 27–28",
    start: "2026-08-27",
    end: "2026-08-28",
    place: "Padang · Sendosa Lodge",
    area: "Padang · Sumatera Barat",
    desc: "Back to the mainland around noon. One night at Sendosa Lodge to clean up, repack, and rest before the flight home.",
    nights: 1,
    checkIn: "After 2:00 PM",
    checkOut: "12:00 PM (noon)",
    address: "Jl. Tanah Beroyo No.17, Belakang Tangsi, Kec. Padang Bar., Kota Padang, Sumatera Barat 25119, Indonesia",
    tags: ["Sendosa Lodge", "1 night", "Recovery"],
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
      { label: "Day bags ×2", note: "Single-board sleeves for boat transfers and daybreak paddles" },
      { label: "Leashes ×3", note: "Heavy-duty; 6ft + 7ft for varying wave sizes" },
      { label: "Spare leash string ×2", note: "Cheap insurance against a snapped rail-saver" },
      { label: "Fin sets ×3", note: "Match your board boxes; thruster/quad setups" },
      { label: "Fin key ×2", note: "Keep it in the board bag" },
      { label: "Grub screws ×10", note: "Spare stainless steel fin screws" },
      { label: "Surf wax ×4", note: "Tropical water, hardest formula available" },
      { label: "Wax comb", note: "With integrated bottle opener" },
      { label: "Wax remover", note: "For re-waxing in tropical heat" },
      { label: "Ding repair kit", note: "Solar-cure resin, sandpaper, fiberglass patches" },
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
      { label: "Surf earplugs", note: "Vented; prevent surfer's ear + infections" },
      { label: "Anti-chafe stick", note: "Balm for neck / underarm rub from long paddles" },
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
      { label: "Dutch Blitz", note: "Fast card game — kills flat spells and boat downtime" },
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
      { label: "Underwear ×6", note: "Moisture-wicking, anti-chafe boxers" },
      { label: "Socks ×3", note: "Ankle socks for trekking / travel days" },
      { label: "Sun hoody", note: "Hooded UPF top for all-day sun cover" },
      { label: "Patagonia Houdini jacket", note: "Ultralight, packable windbreaker for cool evenings" },
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
      { label: "eSIM", note: "Indonesia data plan — activate before departure for connectivity between islands" },
      { label: "Action camera", note: "GoPro, floating grip, spare battery, 2 SD cards" },
      { label: "Charging cables ×2", note: "Braided long USB-C / Lightning" },
      { label: "Headlamp", note: "Waterproof LED with red-light setting" },
      { label: "AirTag", note: "Slip one in the board bag to track it through transfers" },
      { label: "AirPods Pro", note: "In-ear; everyday use and boat downtime" },
      { label: "MacBook Air", note: "Offloading photos/footage; travel days and downtime" },
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
      { label: "Prescription antibiotics", note: "Doctor-prescribed course for reef cuts / staph" },
      { label: "Antimalarial meds", note: "Doxycycline or Malarone — malaria risk in the Telos" },
      { label: "Antihistamines", note: "Allergies, bites, stings" },
      { label: "Tweezers", note: "Fine-point — for splinters, sea-urchin spines, reef debris" },
    ],
  },
  {
    id: "toiletries",
    icon: "🧴",
    title: "Toiletries & Sun Defense",
    items: [
      { label: "Face sunscreen ×2", note: "Heavy zinc surf mud, SPF 50+" },
      { label: "Body sunscreen ×2", note: "Reef-safe, biodegradable, SPF 50+" },
      { label: "SPF lip balm", note: "Prevents sunburned/split lips on long sessions" },
      { label: "Mosquito spray", note: "High-concentration DEET or Picaridin" },
      { label: "Aloe vera", note: "After-sun / burn relief" },
      { label: "Deodorant", note: "Travel-sized stick" },
      { label: "Razor", note: "Plus spare blades" },
      { label: "Shaving cream", note: "Travel-sized" },
      { label: "Toothbrush kit", note: "Toothbrush + travel toothpaste" },
      { label: "Floss", note: "" },
      { label: "Mouthwash", note: "Travel-sized" },
      { label: "Retainer", note: "Plus case" },
      { label: "Soap/shampoo bar", note: "Biodegradable, all-in-one" },
      { label: "Hand sanitizer + wipes", note: "For travel days and boat meals" },
      { label: "Nail kit", note: "Clippers, file, small scissors — keep nails short for reef safety" },
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
      { label: "Telos surf tax", note: "~Rp 2,000,000 (≈$130) cash — mandatory region fee" },
      { label: "Crew tip cash", note: "Customary 10–15% of trip cost — set aside separately" },
      { label: "Cards ×2", note: "Zero foreign-exchange-fee debit/credit" },
      { label: "Wallet (ID)", note: "Driver's license + everyday cards, kept separate from passport" },
      { label: "Pen", note: "For immigration / customs arrival forms" },
    ],
  },
];

const BOAT = {
  intro:
    "A custom-built 52-foot fiberglass power catamaran built in Java by Crestrider Marine and skippered by seasoned Telos captain Jason Quinn under an Indonesian flag. Home base for eleven nights across the Telo chain.",
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
    text: "May–September is the dry season and prime time for the west-coast reefs. Expect clean offshore mornings, bigger swell on the Bukit, and consistent Telo lines.",
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
    text: "Scooters rule Bali but ride within your limits and always wear a helmet. Gojek and Grab cover longer hops. For the Telos it's a ferry or charter from Padang.",
  },
];

// ---- Rendering ----------------------------------------------------

const CHECK_SVG = '<svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>';
const STORAGE_KEY = "surf-trip-packing-v3";
const PACKING_LOCKED = true; // trip is packed — list stays visible read-only

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
  if (today < firstStart) {
    const n = days(today, firstStart);
    msg = `${n} day${n === 1 ? "" : "s"} until Indonesia`;
  } else if (today > lastEnd) {
    msg = "Sabbatical complete 🤙";
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
  el.innerHTML = `<span class="statusline__dot" aria-hidden="true"></span>${msg}`;
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
                <button type="button" class="pack-toggle pack-toggle--got ${st.got ? "is-on" : ""}" data-act="got" aria-pressed="${!!st.got}" aria-label="Got: ${escapeHTML(label)}" ${PACKING_LOCKED ? "disabled" : ""}>Got</button>
                <button type="button" class="pack-toggle pack-toggle--packed ${st.packed ? "is-on" : ""}" data-act="packed" aria-pressed="${!!st.packed}" aria-label="Packed: ${escapeHTML(label)}" ${PACKING_LOCKED ? "disabled" : ""}>Packed</button>
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
        <span class="info-card__icon" aria-hidden="true">${card.icon}</span>
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
        <span class="info-card__icon" aria-hidden="true">${card.icon}</span>
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

// ---- Gallery -------------------------------------------------------

// Order set deliberately — not chronological. Files live in assets/gallery/{thumbs,full}.
const GALLERY = [
  "BW1_3341", "BW1_3343", "BW1_3346", "BW1_3347", "BW1_3350", "BW1_3351", "BW1_3358",
  "_BW20084", "_BW20090", "_BW20255", "_BW20256", "_BW20305", "_BW20364", "_BW20439", "_BW20441",
  "_BW21186", "_BW21255", "_BW21261", "_BW21265", "_BW21599", "_BW21775", "_BW21938", "_BW22093",
  "_BW22269", "_BW22270", "_BW22316",
  "BW1_1300", "BW1_1340", "BW1_1345", "BW1_1348", "BW1_1541", "BW1_1697", "BW1_1698", "BW1_1990",
  "BW1_2043", "BW1_2281", "BW1_2282", "BW1_2335", "BW1_3093",
];

// Files live in assets/gallery/landscapes/{thumbs,full}.
const GALLERY_LANDSCAPES = [
  "_BW20029", "_BW29863", "_BW20196", "_BW20214",
  "5A", "BW1_1127", "BW1_1227", "BW1_1255", "BW1_1263", "BW1_1685", "BWS_4909",
  "92499342-3496-4ed3-b821-b06f74675685", "bc5b5ce3-94b3-4183-8ded-02fd0d8aa220",
  "fce3bf81-d390-42f8-b5fc-aa04fbd9e7d6", "GPTempDownload", "GPTempDownload_2",
  "IMG_8908", "IMG_8919", "IMG_8927", "IMG_8932", "IMG_8933", "IMG_8950",
  "IMG_8973", "IMG_8974",
];

// Files live in assets/gallery/bali/{thumbs,full}.
const GALLERY_BALI = [
  "IMG_8796", "IMG_8798", "IMG_8799", "IMG_8801", "IMG_8803", "IMG_8804", "IMG_8811",
  "IMG_8816", "IMG_8817", "IMG_8821", "IMG_8822", "IMG_8828", "IMG_8829", "IMG_8831",
  "IMG_8836", "IMG_8837", "IMG_8838", "IMG_8843", "IMG_8849", "IMG_8857", "IMG_8862",
  "IMG_8864", "IMG_8867", "IMG_8873", "IMG_8875", "IMG_8885", "IMG_8902", "IMG_8904",
  "DSC_0368",
];

let lightboxSource = GALLERY;
let lightboxFolder = "assets/gallery";
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
  renderGalleryGrid("galleryGrid", GALLERY, "assets/gallery");
  renderGalleryGrid("galleryLandscapeGrid", GALLERY_LANDSCAPES, "assets/gallery/landscapes");
  renderGalleryGrid("galleryBaliGrid", GALLERY_BALI, "assets/gallery/bali");
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

// ---- Surf Breaks --------------------------------------------------

const BREAKS = [
  {
    name: "Bojo's",
    region: "Telos",
    type: "Left · reef",
    level: "Beginner–Int",
    best: "High tide · low wind",
    hazard: "Reef",
    blurb: "Easy, playful left — the first session in the Telos and a good warm-up for the islands.",
  },
  {
    name: "Jurassic's",
    region: "Telos",
    type: "Left · reef",
    level: "Advanced",
    best: "Lower tide",
    hazard: "Tight takeoff against the rocks",
    blurb: "Steep, section-y left with a small takeoff zone right off the rocks — named for the cliffs behind it.",
  },
  {
    name: "E.P.'s",
    region: "Telos",
    type: "Reef pass",
    level: "Advanced",
    best: "Offshore wind · glassy mornings",
    hazard: "Deep water, reef not visible",
    blurb: "Bowly reef pass that gets big — 8–10ft sessions with long, carvable faces on the sets.",
  },
  {
    name: "G-Banger's",
    region: "Telos",
    type: "Right · reef",
    level: "Advanced",
    best: "Most swell directions · mid tide",
    hazard: "Shallow reef, fast barrel section",
    blurb: "Right-hander that doubles up off the reef into a fast barrel section — the best barrels of the trip.",
  },
  {
    name: "Church's",
    region: "Telos",
    type: "Left · reef",
    level: "Advanced",
    best: "Solid swell",
    hazard: "Reef, heavy on size",
    blurb: "Big, fast left with plenty of carves — size and crowd picked up as the week went on.",
  },
  {
    name: "Monkey's",
    region: "Telos",
    type: "Right · reef",
    level: "Intermediate–Adv",
    best: "Most swell directions · mid tide",
    hazard: "Reef",
    blurb: "Peeling right that lines up all the way to the inside — the best session of the trip.",
  },
  {
    name: "Dreamland",
    region: "Bali",
    type: "Left & right · reef",
    level: "Intermediate–Adv",
    best: "Low–mid tide",
    hazard: "Shallow reef on the inside, strong current",
    blurb: "Popular Bukit reef break with a big, punchy drop — pumping and consistent, with easy entry and exit via the stairs.",
  },
  {
    name: "Bingin",
    region: "Bali",
    type: "Left · reef",
    level: "Advanced",
    best: "Low tide",
    hazard: "Sharp shallow reef, tight crowded pack",
    blurb: "Tight, crowded lineup over sharp reef — easy paddle out, hard exit, and a very critical takeoff even on smaller waves.",
  },
  {
    name: "Batu Bolong",
    region: "Bali",
    type: "Left · reef/beach",
    level: "Intermediate",
    best: "Mid, dropping tide",
    hazard: "Rocks at the point, crowds",
    blurb: "Playful Canggu point break that lines up for backside carves — got progressively more crowded as the swell held through the week.",
  },
  {
    name: "Canggu",
    region: "Bali",
    type: "Beach break",
    level: "Advanced",
    best: "Check from the sand first — deceptive size",
    hazard: "Strong current, bigger and more consequential than it looks from the beach",
    blurb: "Looked reasonable watching from the sand, but far bigger and heavier once out there — an hour just catching one smaller wave back in.",
  },
  {
    name: "Baby Padang",
    region: "Bali",
    type: "Reef · channel entry",
    level: "Advanced",
    best: "Enter via the channel from Padang-Padang beach",
    hazard: "Heavy, consequential wave; rip through the channel",
    blurb: "Channel paddle out from Padang-Padang beach into a heavy, consequential wave — smoked on the takeoff, pinned on the next, hard paddle in against the rip.",
  },
];

let activeBreaksRegion = "Telos";

function renderBreaksFilters() {
  const el = document.getElementById("breaksFilters");
  if (!el) return;
  const regions = [...new Set(BREAKS.map((b) => b.region))];
  el.innerHTML = regions
    .map(
      (r) => `
    <button type="button" class="breaks__filter${r === activeBreaksRegion ? " is-active" : ""}" data-region="${r}">${r}</button>`
    )
    .join("");
  el.querySelectorAll(".breaks__filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeBreaksRegion = btn.dataset.region;
      renderBreaksFilters();
      renderBreaks();
    });
  });
}

function renderBreaks() {
  const grid = document.getElementById("breaksGrid");
  const list = BREAKS.filter((b) => b.region === activeBreaksRegion);
  grid.innerHTML = list
    .map(
      (b, i) => `
    <article class="break-card reveal">
      <div class="break-card__top">
        <div class="break-card__heading">
          <h3 class="break-card__name">${b.name}</h3>
          <span class="break-card__region">${b.region}${b.verify ? ` · <span class="break-card__verify">confirm on charter</span>` : ""}</span>
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

  // Tap-to-expand on mobile (cards are always expanded on desktop via CSS).
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

// ---- Surf Log -----------------------------------------------------

// The quiver — used to color-code sessions.
const BOARDS = [
  { id: "5150", label: "5150+", color: "#2f6df6" },
  { id: "sword", label: "Sword", color: "#ff8a3d" },
];

// The trip is over — this is the final record, embedded so it survives
// a cleared localStorage. No more sessions get added after the fact.
const SEED_LOG = [
  { id: 1, date: "2026-08-05", spot: "Dreamland", rating: 4, board: "sword", notes: "Paddled at 8am on the lowest tide. Decent crowd. Pumping, 8ft on the sets. Caught 6-8 waves? Not much face to it. Big drop. Surfed over 2 hours. Easy entry and exit." },
  { id: 2, date: "2026-08-05", spot: "Bingin", rating: 2, board: "sword", notes: "Tight pack crowd. Easy getting in, hard getting out. I cut myself on the reef on my hands and feet. Had one wave, small 3-footer and got knocked off. Very critical wave. Was on the low tide." },
  { id: 3, date: "2026-08-06", spot: "Dreamland", rating: 2, board: "sword", notes: "Waves were bigger but less consistent. Almost always 8ft on the sets. One 12ft set. I didn't catch one. Paddled in after an hour and a half." },
  { id: 4, date: "2026-08-06", spot: "Baby Padang", rating: 1, board: "sword", notes: "Paddled out through the channel from Padang-Padang beach. Got completely smoked on the one wave I took off on, and pinned on the next one. Paddled in (hard to do with the rip)." },
  { id: 5, date: "2026-08-11", spot: "Batu Bolong", rating: 3, board: "sword", notes: "Paddled on dropping tide. Maybe mid tide. Wind was on, choppy and mushy but a couple nuggets. Easily overhead." },
  { id: 6, date: "2026-08-12", spot: "Canggu", rating: 1, board: "sword", notes: "I watched for about 15 minutes before paddling. It looked reasonable but when I got out there I realized it was way bigger and consequential than it looked from the beach. I took an hour catching one smaller wave back to the beach." },
  { id: 7, date: "2026-08-12", spot: "Batu Bolong", rating: 3, board: "sword", notes: "After Canggu I walked back up and got in at Batu. It was still big but manageable. Caught a few lefts. Harder to position. Went in after a couple hours." },
  { id: 8, date: "2026-08-13", spot: "Batu Bolong", rating: 4, board: "sword", notes: "Finally a decent session again. 6:30am paddle out. Got like maybe 5 waves? Decent quality and numerous cutbacks. Harder crowd, smaller swell. Surfed into high tide. Got out around 9." },
  { id: 9, date: "2026-08-17", spot: "Bojo's", rating: 4, board: "5150", notes: "First session in the Telo islands. Crystal clear water. High tide, low wind. Maybe 15 guys out? Caught a few fun ones. Easy left for the most part." },
  { id: 10, date: "2026-08-17", spot: "Bojo's", rating: 4, board: "5150", notes: "Evening session was much better than the morning. Better swell and wind. Inside was really fun. Some good backside carves. Starting to feel my backside surfing improve more." },
  { id: 11, date: "2026-08-18", spot: "Jurassic's", rating: 3, board: "sword", notes: "Steep critical left. Small take off zone against the rocks. Gets its name because the beach looks like a scene from Jurassic Park. I couldn't make most waves. Really section-y. Needed a wave off the top that rolled to have any hope of a turn." },
  { id: 12, date: "2026-08-18", spot: "Jurassic's", rating: 3, board: "sword", notes: "Second session on the lower tide. I had the line up to myself for a bit. Glassed off way nicer than the morning. The key was to take off only on the set waves directly off the rocks. Everything else was closing out. Multiple waves, nothing very long though." },
  { id: 13, date: "2026-08-19", spot: "E.P.'s", rating: 3, board: "sword", notes: "Pulled up early morning. Bombing 8-10ft. Deep water, couldn't really see the reef. Offshore and glassy, bowled on the inside. Caught 3. Got trapped inside on one big set. Wind shifted quickly and ruined it after about an hour and a half." },
  { id: 14, date: "2026-08-20", spot: "G-Banger's", rating: 5, board: "5150", notes: "Really fun right hander that barrels on the inside. Really fast take off as the wave doubles up off the reef. Fast pumping thru the barrel section. Maybe one carve on the end. Couldn't see reef, maybe sand break?" },
  { id: 15, date: "2026-08-20", spot: "G-Banger's", rating: 5, board: "5150", notes: "Another great session on the right side of the A-frame. A bit more crowded but wind was off or slightly offshore. Pulled into another decent barrel and multiple waves with good turns. Short wave but fun." },
  { id: 16, date: "2026-08-21", spot: "G-Banger's", rating: 3, board: "5150", notes: "Kinda weird this morning. Not as hollow, low crowd though. Early AM session. Caught plenty of waves but they were short." },
  { id: 17, date: "2026-08-21", spot: "Church's", rating: 5, board: "sword", notes: "Big, fast left hander. Tons of carves and tons of waves. Mid day session. Crowd was bad at the start but then mellowed out. 5-turn waves on average. Just had to get over the wave size." },
  { id: 18, date: "2026-08-21", spot: "Church's", rating: 2, board: "sword", notes: "Afternoon session was not great. Big crowd, bad wind, choppy water and it wasn't pulling through the channel like it was earlier. Occy snapped his board on the last wave." },
  { id: 19, date: "2026-08-22", spot: "Church's", rating: 3, board: "sword", notes: "First two waves closed out on me. Hit the reef pretty good on the second one. Waves improved after, got maybe 4 or 5 more decent ones. Not as good as yesterday. More crowded." },
  { id: 20, date: "2026-08-22", spot: "Church's", rating: 2, board: "sword", notes: "Onshore wind. Crowded. Caught 3 pretty garbage waves." },
  { id: 21, date: "2026-08-23", spot: "Church's", rating: 3, board: "sword", notes: "Early morning session, 6:30am paddle out. Already like 20 guys in the line up. Caught a few decent ones, nothing crazy. Wind came up again onshore." },
  { id: 22, date: "2026-08-23", spot: "Church's", rating: 2, board: "sword", notes: "Last session, mid day around 11:30. Still a crazy amount of people out. Couple steep drops but did not line up." },
  { id: 23, date: "2026-08-24", spot: "E.P.'s", rating: 4, board: "sword", notes: "Went back here this morning. Did dawn patrol with Tom. It was great for like 30 minutes, really glassy and reasonably sized. Then a strong cross wind came up and made it really choppy. If you could pick off a decent set wave it was still fun on the face. Only our boat in the line up." },
  { id: 24, date: "2026-08-24", spot: "Jurassic's", rating: 1, board: "sword", notes: "Was the only one from our boat to paddle out. Maybe around 2pm? Really small, not working and few other boats out. Glassy and pretty but pretty garbage surf." },
  { id: 25, date: "2026-08-25", spot: "E.P.'s", rating: 4, board: "sword", notes: "Guide told us the wind was on and parked us at Jurassic's. Few of us took the speedy back to E.P.'s and scored. Surfed for like 4 hours. Solid overhead on the sets. Lining up, plenty of carves." },
  { id: 26, date: "2026-08-25", spot: "Monkey's", rating: 5, board: "sword", notes: "Easily the best session of the trip. Peeling right handers. Multiple carves. Lined up all the way to the inside." },
  { id: 27, date: "2026-08-26", spot: "Monkey's", rating: 5, board: "sword", notes: "Final session. Surfed 3.5 hours. Couple barrels on the inside. Tons of great carves and critical take offs. Only our boat out until like 9am." },
];

const logEntries = SEED_LOG;

function boardMeta(id) {
  return BOARDS.find((b) => b.id === id);
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

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function initLog() {
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

function indoCurrentPoint(P) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s) => new Date(s + "T00:00:00");
  const inR = (a, b) => today >= toDate(a) && today <= toDate(b);
  if (inR("2026-08-03", "2026-08-04")) return P.tpe; // in transit
  if (inR("2026-08-04", "2026-08-15")) return P.dps;
  if (inR("2026-08-16", "2026-08-27")) return P.telo;
  if (inR("2026-08-27", "2026-08-28")) return P.pdg;
  return P.sfo; // home before and after the trip
}

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
    telo: [-2.28, -260.43],
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
  L.polyline([P.pdg, P.telo], { color: "#ff6b5b", weight: 3, opacity: 0.95, dashArray: "1 9", lineCap: "round" }).addTo(map);

  const stops = [
    { p: P.sfo, name: "San Francisco", dest: false },
    { p: P.tpe, name: "Taipei", dest: false },
    { p: P.cgk, name: "Jakarta", dest: false },
    { p: P.dps, name: "Bali (Denpasar)", dest: true },
    { p: P.pdg, name: "Padang", dest: false },
    { p: P.telo, name: "Telo Is.", dest: true },
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

  const icon = L.divIcon({
    className: "map-pulse",
    html: '<span class="map-pulse__ring"></span><span class="map-pulse__dot"></span>',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
  L.marker(indoCurrentPoint(P), { icon, zIndexOffset: 1000 }).addTo(map);

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
  renderStatusLine();
  renderPhaseStrip();
  initGallery();
  renderTimeline();
  renderBreaksFilters();
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
});
