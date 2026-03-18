// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// City name → GeoJSON path (WGS84). Adjust paths to match your setup.
// ─────────────────────────────────────────────────────────────────────────────
const CITY_FILES = {
  "Barcelona":  "data/barcelona_cartogram.geojson",
  "Paris":      "data/paris_cartogram.geojson",
  "Rome":       "data/rome_cartogram.geojson",
  "Milan":      "data/milan_cartogram.geojson",
  "New York":   "data/new_york_cartogram.geojson",
  "Nantes":     "data/nantes_cartogram.geojson",
  "Bordeaux":   "data/bordeaux_cartogram.geojson",
  "Berlin":     "data/berlin_cartogram.geojson",
  "Seattle":    "data/seattle_cartogram.geojson",
  "Málaga":     "data/malaga_cartogram.geojson",
  "Munich":     "data/munich_cartogram.geojson",
  "Vienna":     "data/vienna_cartogram.geojson",
  "Zurich":     "data/zurich_cartogram.geojson",
  "Karlsruhe":  "data/karlsruhe_cartogram.geojson",
  "Stockholm":  "data/stockholm_cartogram.geojson",
  "Porto":      "data/porto_cartogram.geojson",
  "Chicago":    "data/chicago_cartogram.geojson",
  "Valencia":   "data/valencia_cartogram.geojson",
};

// Approximate city centers for the landing map pins
const CITY_CENTERS = {
  "Barcelona":  [41.385, 2.173],
  "Paris":      [48.857, 2.352],
  "Rome":       [41.903, 12.496],
  "Milan":      [45.464, 9.190],
  "New York":   [40.713, -74.006],
  "Nantes":     [47.218, -1.554],
  "Bordeaux":   [44.838, -0.579],
  "Berlin":     [52.520, 13.405],
  "Seattle":    [47.606, -122.332],
  "Málaga":     [36.721, -4.421],
  "Munich":     [48.135, 11.582],
  "Vienna":     [48.208, 16.374],
  "Zurich":     [47.377, 8.542],
  "Karlsruhe":  [49.007, 8.404],
  "Stockholm":  [59.329, 18.069],
  "Porto":      [41.158, -8.629],
  "Chicago":    [41.878, -87.630],
  "Valencia":   [39.470, -0.376],
};

const ALL_CITIES = Object.keys(CITY_FILES);

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────
let features    = [];
let selectedId  = null;
let hoveredId   = null;
let hiddenTypes = new Set();

const HEX_ALPHA     = 0.8;
const HEX_ALPHA_DIM = 0.15;

const TYPE_COLOR = {
  "inclusion":         "#4caf50",
  "spatial isolation": "#2196f3",
  "social isolation":  "#ffc107",
  "total isolation":   "#f44336",
};
const TYPE_COLOR_DIM = {
  "inclusion":         "#c8e6c9",
  "spatial isolation": "#bbdefb",
  "social isolation":  "#fff9c4",
  "total isolation":   "#ffcdd2",
};

// ─────────────────────────────────────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

document.getElementById("about-btn").addEventListener("click", () => openModal("about-overlay"));
document.getElementById("about-close").addEventListener("click", () => closeModal("about-overlay"));
document.getElementById("help-btn").addEventListener("click", () => openModal("help-overlay"));
document.getElementById("help-close").addEventListener("click", () => closeModal("help-overlay"));
document.getElementById("map-help-btn").addEventListener("click", () => openModal("map-help-overlay"));
document.getElementById("map-help-close").addEventListener("click", () => closeModal("map-help-overlay"));

// Close modals on overlay click
["about-overlay", "help-overlay", "map-help-overlay"].forEach(id => {
  document.getElementById(id).addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal(id);
  });
});

// "Learn more" links open the about modal
document.getElementById("landing-about-link")?.addEventListener("click", e => {
  e.preventDefault(); openModal("about-overlay");
});
document.getElementById("legend-about-link")?.addEventListener("click", e => {
  e.preventDefault(); openModal("about-overlay");
});

// Close modals on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal("about-overlay");
    closeModal("help-overlay");
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// COLLAPSIBLE LANDING PANEL
// ─────────────────────────────────────────────────────────────────────────────
document.getElementById("collapse-side").addEventListener("click", () => {
  document.getElementById("view-landing").classList.add("collapsed");
  setTimeout(() => landingMap.invalidateSize(), 50);
});
document.getElementById("expand-side").addEventListener("click", () => {
  document.getElementById("view-landing").classList.remove("collapsed");
  setTimeout(() => landingMap.invalidateSize(), 50);
});
document.getElementById("close-info-box").addEventListener("click", () => {
  document.getElementById("info-box-landing").style.display = "none";
});


// ─────────────────────────────────────────────────────────────────────────────
// LANDING MAP
// ─────────────────────────────────────────────────────────────────────────────
const landingMap = L.map("landing-map", { zoomControl: false })
  .setView([30, 10], 2);
L.control.zoom({ position: "bottomright" }).addTo(landingMap);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  subdomains: "abcd", maxZoom: 19,
}).addTo(landingMap);

// Add city pins
const landingMarkers = [];
ALL_CITIES.forEach(city => {
  const center = CITY_CENTERS[city];
  if (!center) return;
  const marker = L.circleMarker(center, {
    radius: 7, color: "#2563eb", weight: 2,
    fillColor: "#2563eb", fillOpacity: 0.25,
  }).addTo(landingMap);
  marker.bindTooltip(`<b>${city}</b>`, { direction: "top", sticky: false });
  marker.on("click", () => goCity(city));
  landingMarkers.push(marker);
});

// Fit to all pins
try {
  const group = L.featureGroup(landingMarkers);
  landingMap.fitBounds(group.getBounds().pad(0.15));
} catch(e) {}

// ─────────────────────────────────────────────────────────────────────────────
// CITY LIST (sidebar)
// ─────────────────────────────────────────────────────────────────────────────
function renderCityList(filter = "") {
  const q   = filter.trim().toLowerCase();
  const el  = document.getElementById("city-list");
  el.innerHTML = "";
  ALL_CITIES
    .filter(c => !q || c.toLowerCase().includes(q))
    .forEach(city => {
      const card = document.createElement("div");
      card.className = "city-card";
      card.innerHTML = `<strong>${city}</strong><span class="arrow">›</span>`;
      card.onclick = () => goCity(city);
      el.appendChild(card);
    });
}
renderCityList();

document.getElementById("search-input").addEventListener("input", e => renderCityList(e.target.value));
document.getElementById("search-clear").addEventListener("click", () => {
  document.getElementById("search-input").value = "";
  renderCityList();
});

// ─────────────────────────────────────────────────────────────────────────────
// CITY MAP (Leaflet + Canvas overlay)
// ─────────────────────────────────────────────────────────────────────────────
let cityLeaflet = null;

function initCityMap() {
  if (cityLeaflet) return;
  cityLeaflet = L.map("city-map", { zoomControl: false }).setView([0, 0], 2);
  L.control.zoom({ position: "bottomright" }).addTo(cityLeaflet);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    subdomains: "abcd", maxZoom: 19,
  }).addTo(cityLeaflet);
  cityLeaflet.on("move zoom moveend zoomend", redrawCanvas);
}

const canvas = document.getElementById("map-canvas");
const ctx    = canvas.getContext("2d");

function resizeCanvas() {
  const r = document.getElementById("map-panel").getBoundingClientRect();
  canvas.width        = r.width  * devicePixelRatio;
  canvas.height       = r.height * devicePixelRatio;
  canvas.style.width  = r.width  + "px";
  canvas.style.height = r.height + "px";
}

function project(lng, lat) {
  const pt = cityLeaflet.latLngToContainerPoint(L.latLng(lat, lng));
  return [pt.x * devicePixelRatio, pt.y * devicePixelRatio];
}

function drawCanvas() {
  if (!cityLeaflet) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const f of features) {
    const p    = f.properties;
    const type = p.type;
    const isH   = hiddenTypes.has(type);
    const isHov = p.id === hoveredId;
    const isSel = p.id === selectedId;

    const color = isSel ? "#111"
                : isH   ? TYPE_COLOR_DIM[type]
                :          TYPE_COLOR[type];
    const alpha = isSel || isHov ? 1.0
                : isH            ? HEX_ALPHA_DIM
                :                  HEX_ALPHA;

    for (const ring of f.geometry.coordinates) {
      ctx.beginPath();
      for (let j = 0; j < ring.length; j++) {
        const [x, y] = project(ring[j][0], ring[j][1]);
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = color;
      ctx.fill();
      ctx.globalAlpha = isSel ? 0.9 : isHov ? 0.65 : 0.22;
      ctx.strokeStyle = isSel || isHov ? "#333" : "rgba(255,255,255,.7)";
      ctx.lineWidth   = isSel ? 2 * devicePixelRatio : 0.6 * devicePixelRatio;
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}

function redrawCanvas() { resizeCanvas(); drawCanvas(); }

// ─────────────────────────────────────────────────────────────────────────────
// HIT TEST
// ─────────────────────────────────────────────────────────────────────────────
function hitTest(clientX, clientY) {
  const px = clientX * devicePixelRatio;
  const py = clientY * devicePixelRatio;
  for (let i = features.length - 1; i >= 0; i--) {
    for (const ring of features[i].geometry.coordinates) {
      let inside = false;
      for (let j = 0, k = ring.length - 1; j < ring.length; k = j++) {
        const [xi, yi] = project(ring[j][0], ring[j][1]);
        const [xk, yk] = project(ring[k][0], ring[k][1]);
        if (((yi > py) !== (yk > py)) && (px < (xk - xi) * (py - yi) / (yk - yi) + xi))
          inside = !inside;
      }
      if (inside) return features[i];
    }
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS EVENTS
// We listen on the map-panel so Leaflet pan/zoom works normally
// (canvas has pointer-events: none).
// ─────────────────────────────────────────────────────────────────────────────
const mapPanel = document.getElementById("map-panel");

mapPanel.addEventListener("mousemove", e => {
  if (!cityLeaflet) return;
  const r   = canvas.getBoundingClientRect();
  const hit = hitTest(e.clientX - r.left, e.clientY - r.top);
  const newId = hit ? hit.properties.id : null;
  if (newId !== hoveredId) {
    hoveredId = newId;
    hit ? showTooltip(e, hit) : hideTooltip();
    refreshDots(); drawCanvas();
  } else if (hit) {
    tooltip.style.left = (e.clientX + 14) + "px";
    tooltip.style.top  = (e.clientY - 10) + "px";
  }
});
mapPanel.addEventListener("mouseleave", () => {
  hoveredId = null; hideTooltip(); refreshDots(); drawCanvas();
});
mapPanel.addEventListener("click", e => {
  if (!cityLeaflet) return;
  const r = canvas.getBoundingClientRect();
  const hit = hitTest(e.clientX - r.left, e.clientY - r.top);
  if (hit) selectFeature(hit);
});

// ─────────────────────────────────────────────────────────────────────────────
// SCATTER
// ─────────────────────────────────────────────────────────────────────────────
const scatterSVG  = document.getElementById("scatter-svg");
const M = { top: 40, right: 30, bottom: 52, left: 62 };
let scatterDots   = [];

function buildScatter() {
  scatterSVG.innerHTML = "";
  const W  = scatterSVG.clientWidth  || scatterSVG.getBoundingClientRect().width;
  const H  = scatterSVG.clientHeight || scatterSVG.getBoundingClientRect().height;
  const pw = W - M.left - M.right;
  const ph = H - M.top  - M.bottom;
  scatterSVG.setAttribute("viewBox", `0 0 ${W} ${H}`);

  const oppVals  = features.map(f => f.properties.opp);
  const proxVals = features.map(f => f.properties.prox);
  const maxOpp   = Math.max(...oppVals)  * 1.05;
  const maxProx  = Math.max(...proxVals) * 1.05;
  const medOpp   = features[0]?.properties.opp_med  || median(oppVals);
  const medProx  = features[0]?.properties.prox_med || median(proxVals);

  const sx = v => M.left + (v / maxOpp)  * pw;
  const sy = v => M.top  + ph - (v / maxProx) * ph;
  const g  = se("g"); scatterSVG.appendChild(g);

  // Quadrant fills + labels
  [
    { x: sx(medOpp), y: M.top,       w: sx(maxOpp) - sx(medOpp), h: sy(medProx) - M.top,       fill: "rgba(76,175,80,.08)",  label: "Inclusion" },
    { x: M.left,     y: M.top,       w: sx(medOpp) - M.left,     h: sy(medProx) - M.top,       fill: "rgba(33,150,243,.08)", label: "Spatial Isolation" },
    { x: sx(medOpp), y: sy(medProx), w: sx(maxOpp) - sx(medOpp), h: M.top + ph - sy(medProx),  fill: "rgba(255,193,7,.08)",  label: "Social Isolation" },
    { x: M.left,     y: sy(medProx), w: sx(medOpp) - M.left,     h: M.top + ph - sy(medProx),  fill: "rgba(244,67,54,.08)",  label: "Total Isolation" },
  ].forEach(q => {
    g.appendChild(se("rect", { x: q.x, y: q.y, width: q.w, height: q.h, fill: q.fill }));
    const t = se("text", {
      x: q.x + q.w / 2, y: q.y + q.h / 2,
      "text-anchor": "middle", "dominant-baseline": "middle",
      fill: "rgba(0,0,0,.18)", "font-size": "11", "font-family": "DM Sans",
    });
    t.textContent = q.label; g.appendChild(t);
  });

  // Median lines
  const md = { stroke: "rgba(0,0,0,.18)", "stroke-width": "1", "stroke-dasharray": "4,3" };
  g.appendChild(se("line", { x1: sx(medOpp), y1: M.top, x2: sx(medOpp), y2: M.top + ph, ...md }));
  g.appendChild(se("line", { x1: M.left, y1: sy(medProx), x2: M.left + pw, y2: sy(medProx), ...md }));

  // Axes
  const ac = "rgba(0,0,0,.13)";
  g.appendChild(se("line", { x1: M.left, y1: M.top,    x2: M.left,    y2: M.top + ph, stroke: ac, "stroke-width": "1" }));
  g.appendChild(se("line", { x1: M.left, y1: M.top+ph, x2: M.left+pw, y2: M.top + ph, stroke: ac, "stroke-width": "1" }));

  for (let i = 0; i <= 4; i++) {
    const v = maxOpp * i / 4, x = sx(v);
    g.appendChild(se("line", { x1: x, y1: M.top+ph, x2: x, y2: M.top+ph+4, stroke: ac }));
    const t = se("text", { x, y: M.top+ph+14, "text-anchor": "middle", fill: "rgba(0,0,0,.4)", "font-size": "9" });
    t.textContent = fmtK(v); g.appendChild(t);
  }
  for (let i = 0; i <= 4; i++) {
    const v = maxProx * i / 4, y = sy(v);
    g.appendChild(se("line", { x1: M.left-4, y1: y, x2: M.left, y2: y, stroke: ac }));
    const t = se("text", { x: M.left-7, y, "text-anchor": "end", "dominant-baseline": "middle", fill: "rgba(0,0,0,.4)", "font-size": "9" });
    t.textContent = fmtK(v); g.appendChild(t);
  }

  const xl = se("text", { x: M.left+pw/2, y: H-8, "text-anchor": "middle", fill: "rgba(0,0,0,.45)", "font-size": "10" });
  xl.textContent = "Opportunity Score"; g.appendChild(xl);
  const yl = se("text", { x: 12, y: M.top+ph/2, "text-anchor": "middle", fill: "rgba(0,0,0,.45)", "font-size": "10",
    transform: `rotate(-90,12,${M.top+ph/2})` });
  yl.textContent = "Proximity Score"; g.appendChild(yl);

  scatterDots = [];
  for (const f of features) {
    const p = f.properties;
    const c = se("circle", {
      cx: sx(p.opp), cy: sy(p.prox), r: 4,
      fill: TYPE_COLOR[p.type] || "#888", "fill-opacity": "0.8",
      stroke: "none", "stroke-width": "1.5", style: "cursor:pointer;transition:r .1s",
    });
    g.appendChild(c);
    scatterDots.push({ feat: f, el: c });
    c.addEventListener("mouseenter", e => { hoveredId = p.id; showTooltip(e, f); drawCanvas(); refreshDots(); });
    c.addEventListener("mouseleave", () => { hoveredId = null; hideTooltip(); drawCanvas(); refreshDots(); });
    c.addEventListener("click", () => selectFeature(f));
  }
}

function refreshDots() {
  for (const d of scatterDots) {
    const pid  = d.feat.properties.id;
    const isSel = pid === selectedId, isHov = pid === hoveredId;
    d.el.setAttribute("r",            isSel ? 7 : isHov ? 6 : 4);
    d.el.setAttribute("stroke",       isSel ? "#333" : isHov ? "rgba(0,0,0,.45)" : "none");
    d.el.setAttribute("fill-opacity", isSel || isHov ? "1" : "0.8");
  }
}

// Human-readable zone descriptions
const TYPE_DESC = {
  "inclusion":         "Well-served locally and well-connected by transit",
  "spatial isolation": "Good local services, but poor transit connections",
  "social isolation":  "Good transit, but few local amenities nearby",
  "total isolation":   "Low local services and low transit access",
};

// ─────────────────────────────────────────────────────────────────────────────
// SELECTION & INFO
// ─────────────────────────────────────────────────────────────────────────────
function selectFeature(f) {
  selectedId = f ? f.properties.id : null;
  updateInfoBox(f); refreshDots(); drawCanvas();
}

function updateInfoBox(f) {
  const box = document.getElementById("info-box");
  if (!f) { box.innerHTML = '<p class="no-sel">Click any hexagon or scatter point to inspect it.</p>'; return; }
  const p = f.properties;
  const aboveMedProx = p.prox >= p.prox_med;
  const aboveMedOpp  = p.opp >= p.opp_med;
  box.innerHTML = `
    <p class="info-title">Hexagon #${p.id}</p>
    <div class="info-row"><span class="info-key">Zone</span>
      <span class="info-val" style="color:${TYPE_COLOR[p.type]};text-transform:capitalize">${p.type}</span></div>
    <div class="info-desc">${TYPE_DESC[p.type] || ""}</div>
    <div class="info-row"><span class="info-key">Walkable services</span><span class="info-val">${fmtK(p.prox)} ${aboveMedProx ? "▲" : "▼"}</span></div>
    <div class="info-row"><span class="info-key">Transit reach</span><span class="info-val">${fmtK(p.opp)} ${aboveMedOpp ? "▲" : "▼"}</span></div>
    <div class="info-row"><span class="info-key">Population</span><span class="info-val">${Math.round(p.pop).toLocaleString()}</span></div>
    <div class="info-row info-row-muted"><span class="info-key">City median prox.</span><span class="info-val">${fmtK(p.prox_med)}</span></div>
    <div class="info-row info-row-muted"><span class="info-key">City median opp.</span><span class="info-val">${fmtK(p.opp_med)}</span></div>`;
}

function updateCityStats() {
  const n      = features.length;
  const proxes = features.map(f => f.properties.prox).sort((a, b) => a - b);
  const opps   = features.map(f => f.properties.opp).sort((a, b) => a - b);
  const incN   = features.filter(f => f.properties.type === "inclusion").length;
  document.getElementById("s-hex").textContent  = n;
  document.getElementById("s-prox").textContent = fmtK(proxes[Math.floor(n / 2)]);
  document.getElementById("s-opp").textContent  = fmtK(opps[Math.floor(n / 2)]);
  document.getElementById("s-inc").textContent  = (incN / n * 100).toFixed(1) + "%";
}

// ─────────────────────────────────────────────────────────────────────────────
// TOOLTIP
// ─────────────────────────────────────────────────────────────────────────────
const tooltip = document.getElementById("tooltip");
function showTooltip(e, f) {
  const p = f.properties;
  tooltip.innerHTML = `<strong>${p.type}</strong><span class="tt-desc">${TYPE_DESC[p.type] || ""}</span>Walkable services: ${fmtK(p.prox)}<br>Transit reach: ${fmtK(p.opp)}<br>Pop: ${Math.round(p.pop).toLocaleString()}`;
  tooltip.classList.add("visible");
  tooltip.style.left = (e.clientX + 14) + "px";
  tooltip.style.top  = (e.clientY - 10) + "px";
}
function hideTooltip() { tooltip.classList.remove("visible"); }

// ─────────────────────────────────────────────────────────────────────────────
// LEGEND TOGGLES
// ─────────────────────────────────────────────────────────────────────────────
document.querySelectorAll(".legend-item").forEach(el => {
  el.addEventListener("click", () => {
    const type = el.dataset.type;
    hiddenTypes.has(type) ? hiddenTypes.delete(type) : hiddenTypes.add(type);
    el.classList.toggle("hidden");
    drawCanvas();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ROUTING (hash-based)
// ─────────────────────────────────────────────────────────────────────────────
function goCity(city) { location.hash = "#/city/" + encodeURIComponent(city); }
function goHome()     { location.hash = "#/"; }

document.getElementById("back-btn").addEventListener("click", goHome);

async function router() {
  const hash = location.hash || "#/";

  if (hash.startsWith("#/city/")) {
    const city = decodeURIComponent(hash.split("/city/")[1] || "");
    if (!city || !CITY_FILES[city]) { goHome(); return; }
    await showCityView(city);
  } else {
    showLandingView();
  }
}

function showLandingView() {
  document.getElementById("view-landing").style.display = "grid";
  document.getElementById("view-city").style.display   = "none";
  document.getElementById("back-btn").style.display    = "none";
  document.getElementById("header-sub").textContent    = "Proximity · Opportunity · Value";
  // invalidate landing map in case it was hidden
  setTimeout(() => landingMap.invalidateSize(), 50);
}

async function showCityView(city) {
  // 1. Flip DOM visibility FIRST
  document.getElementById("view-landing").style.display = "none";
  document.getElementById("view-city").style.display    = "grid";
  document.getElementById("back-btn").style.display     = "inline-block";
  document.getElementById("header-sub").textContent     = city;

  // 2. Reset UI state immediately
  features   = [];
  selectedId = null;
  hoveredId  = null;
  hiddenTypes.clear();
  document.querySelectorAll(".legend-item").forEach(el => el.classList.remove("hidden"));
  updateInfoBox(null);

  // 3. Fetch GeoJSON
  let loaded = [];
  try {
    const res = await fetch(CITY_FILES[city]);
    if (!res.ok) throw new Error("Failed to load " + CITY_FILES[city]);
    const gj  = await res.json();
    loaded = gj.features.map(f => ({
      type: "Feature",
      geometry: f.geometry,
      properties: {
        id:       f.properties.hexagon_id,
        pop:      f.properties.population,
        opp:      f.properties.opportunity,
        prox:     f.properties.proximity,
        city:     f.properties.city,
        type:     f.properties.cell_type,
        opp_med:  f.properties.opportunity_median_city,
        prox_med: f.properties.proximity_median_city,
      }
    }));
  } catch(e) {
    console.error(e);
    document.getElementById("info-box").innerHTML =
      `<p style="color:#f44336">Could not load data for ${city}.<br><small>${e.message}</small></p>`;
    return;
  }

  // 4. Wait for the browser to paint
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  // 5. Init/resize Leaflet
  initCityMap();
  cityLeaflet.invalidateSize({ animate: false });

  features = loaded;

  // 6. Fit map to city bounds
  const lngs = features.flatMap(f => f.geometry.coordinates.flatMap(r => r.map(p => p[0])));
  const lats  = features.flatMap(f => f.geometry.coordinates.flatMap(r => r.map(p => p[1])));
  cityLeaflet.fitBounds(
    [[Math.min(...lats), Math.min(...lngs)], [Math.max(...lats), Math.max(...lngs)]],
    { padding: [2, 2], animate: false }
  );

  // 7. Draw canvas + scatter
  resizeCanvas();
  drawCanvas();
  buildScatter();
  updateCityStats();
}

// ─────────────────────────────────────────────────────────────────────────────
// RESIZE
// ─────────────────────────────────────────────────────────────────────────────
const ro = new ResizeObserver(() => {
  if (document.getElementById("view-city").style.display !== "none") {
    cityLeaflet?.invalidateSize();
    redrawCanvas();
    if (features.length) buildScatter();
  }
  landingMap?.invalidateSize();
});
ro.observe(document.getElementById("app"));

// ─────────────────────────────────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────────────────────────────────
function se(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
function fmtK(v) { return v >= 1000 ? (v / 1000).toFixed(1) + "k" : Math.round(v).toString(); }
function median(arr) { const s = [...arr].sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; }

// ─────────────────────────────────────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────────────────────────────────────
window.addEventListener("hashchange", router);
window.addEventListener("load", () => {
  router();
  setTimeout(() => document.getElementById("loading").classList.add("fade"), 300);
});
