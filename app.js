// ─────────────────────────────────────────────────────────────────────────────
// i18n
// ─────────────────────────────────────────────────────────────────────────────
let currentLang = "en";
const I18N = {
  en: {
    loading:"Loading…", header_sub:"Proximity · Opportunity · Value", back_btn:"World Map",
    about_btn:"About", paper_btn:"Paper ↗", cities_title:"Cities", search_placeholder:"Search…",
    landing_hint:'Explore urban accessibility across 18 cities. Each city is analysed through the <strong>P.O.V.</strong> framework: <strong>Proximity</strong> (walkable local services), <strong>Opportunity</strong> (transit-accessible resources), and <strong>Value</strong> (quality of access).',
    landing_hint2:"Click a city or map pin to begin.", learn_more:"Learn more →",
    infobox_title:"Urban Accessibility P.O.V.",
    infobox_text:"Each city is mapped across two dimensions: Proximity (walkable local services) and Opportunity (fast transit reach). Click any pin or city name to explore.",
    infobox_cite:"Based on",
    zone_type_title:"Zone type", zone_inclusion:"Inclusion", zone_spatial:"Spatial Isolation",
    zone_social:"Social Isolation", zone_total:"Total Isolation",
    tip_inclusion:"High proximity + High opportunity. Rich local services and good transit connections. Residents can walk to everyday needs and easily reach distant jobs and cultural venues.",
    tip_spatial:"High proximity + Low opportunity. Shops, cafés, schools nearby, but poor transit links. Reaching a specialised job or major cultural venue is difficult without a car.",
    tip_social:"Low proximity + High opportunity. Well connected by transit, but the local neighbourhood lacks everyday services — few shops, restaurants, or community spaces within walking distance.",
    tip_total:"Low proximity + Low opportunity. Neither local services nor good transit. A car is likely essential. Typically found at the urban periphery.",
    legend_explain:"Click ? for zone details.", full_explanation:"Full explanation →",
    city_summary_title:"City summary", stat_hexagons:"Total hexagons",
    stat_prox:"Median proximity", stat_opp:"Median opportunity",
    stat_prox_hint:"Walkable access to local services like shops, cafés, pharmacies",
    stat_opp_hint:"Transit access to city-wide resources like jobs, universities, stadiums",
    stat_inclusion:"Inclusion rate", selected_hex_title:"Selected hexagon",
    no_selection:"Click any hexagon or scatter point to inspect it.",
    interactions_title:"Interactions",
    interactions_hint:"Hover or click to cross-highlight.<br>Scroll &amp; drag to navigate.<br>Click legend to toggle types.",
    label_cartogram:"Cartogram", label_scatter:"Scatter · Proximity vs Opportunity",
    label_scatter_short:"Scatter", mobile_info:"Info", mobile_search_cities:"Search city",
    type_desc_inclusion:"Well-served locally and well-connected by transit",
    type_desc_spatial:"Good local services, but poor transit connections",
    type_desc_social:"Good transit, but few local amenities nearby",
    type_desc_total:"Low local services and low transit access",
    info_zone:"Zone", info_walkable:"Walkable services", info_transit:"Transit reach",
    info_population:"Population", info_med_prox:"City median prox.", info_med_opp:"City median opp.",
    scatter_opp_label:"Opportunity Score", scatter_prox_label:"Proximity Score",
    scatter_q_inclusion:"Inclusion", scatter_q_spatial:"Spatial Isolation",
    scatter_q_social:"Social Isolation", scatter_q_total:"Total Isolation",
    tt_walkable:"Walkable services", tt_transit:"Transit reach", tt_pop:"Pop",
    about_title:"The P.O.V. Framework", about_subtitle:"Proximity · Opportunity · Value",
    about_intro:'This interactive visualisation accompanies the research paper <a href="https://doi.org/10.1140/epjds/s13688-026-00623-8" target="_blank"><em>The dimensions of accessibility: proximity, opportunities, values</em></a> by Bruno, Campanelli, Melo, Rossi Mori &amp; Loreto (EPJ Data Science, 2026).',
    about_h_prox_opp:"What are Proximity and Opportunity?",
    about_prox_opp_intro:"Accessibility is not one-dimensional. The framework separates it into two spatial scales:",
    about_prox_card:'<strong>Proximity</strong> measures access to everyday services — grocery stores, pharmacies, cafés, schools — reachable <em>on foot</em> within short distances.',
    about_opp_card:'<strong>Opportunity</strong> measures access to city-scale resources — jobs, universities, stadiums, cultural venues — reachable via <em>public transport</em>.',
    about_h_zones:"The four zones",
    about_zones_intro:"Each hexagonal cell is classified based on whether its scores fall above or below the city-wide median:",
    about_zone_inc:"<strong>Inclusion</strong><br>Above-median in both dimensions.",
    about_zone_spatial:"<strong>Spatial Isolation</strong><br>Good local services but poor transit connections.",
    about_zone_social:"<strong>Social Isolation</strong><br>Good transit but few local amenities.",
    about_zone_total:"<strong>Total Isolation</strong><br>Below-median in both dimensions.",
    about_h_value:"The third dimension: Value",
    about_value_text:"The paper also theorises a third axis — Value — capturing the quality and desirability of reachable services.",
    about_h_read:"How to read the visualisation",
    about_read_text:"The cartogram shows hexagonal cells coloured by zone type. The scatter plot places each hexagon by Opportunity (x) and Proximity (y).",
    about_h_data:"Data & methods",
    about_data_text:"H3 res-9 hexagons. Walking times via OSRM. Public transport via GTFS + Connection Scan. POIs from OpenStreetMap. Population from WorldPop.",
    about_ref:'<strong>Reference:</strong> Bruno et al. (2026). <em>The dimensions of accessibility.</em> EPJ Data Science, 15:22. <a href="https://doi.org/10.1140/epjds/s13688-026-00623-8" target="_blank">doi:10.1140/epjds/s13688-026-00623-8</a>',
    help_scatter_title:"Reading the scatter plot", help_scatter_intro:"Each dot is a hexagonal cell:",
    help_scatter_x:"<strong>X-axis (Opportunity):</strong> POIs reachable by public transport.",
    help_scatter_y:"<strong>Y-axis (Proximity):</strong> POIs reachable on foot.",
    help_scatter_median:"Dashed lines = city-wide medians. Hover/click to cross-highlight.",
    help_scatter_cluster:"Bottom-left cluster = no transit stops within 15 min walk.",
    help_map_title:"Reading the cartogram",
    help_map_intro:"Hexagons coloured by zone type. Size = resident population.",
    help_map_inc:"<strong>Green — Inclusion</strong><br>High prox + High opp",
    help_map_spatial:"<strong>Blue — Spatial Isolation</strong><br>High prox + Low opp",
    help_map_social:"<strong>Yellow — Social Isolation</strong><br>Low prox + High opp",
    help_map_total:"<strong>Red — Total Isolation</strong><br>Low prox + Low opp",
    help_map_prox_opp:"Proximity = walkable local services. Opportunity = transit access to city resources.",
    help_map_threshold:"Thresholds are city-wide medians.",
    help_map_interact:"Click hexagon to inspect. Hover to cross-highlight.",
  },
  it: {
    loading:"Caricamento…", header_sub:"Prossimità · Opportunità · Valore", back_btn:"Mappa mondiale",
    about_btn:"Info", paper_btn:"Articolo ↗", cities_title:"Città", search_placeholder:"Cerca…",
    landing_hint:'Esplora l\'accessibilità urbana in 18 città tramite il framework <strong>P.O.V.</strong>: <strong>Prossimità</strong>, <strong>Opportunità</strong> e <strong>Valore</strong>.',
    landing_hint2:"Clicca su una città o un punto della mappa.", learn_more:"Scopri di più →",
    infobox_title:"Accessibilità Urbana P.O.V.",
    infobox_text:"Ogni città è mappata su due dimensioni: Prossimità (servizi locali a piedi) e Opportunità (accesso con i mezzi). Clicca per esplorare.",
    infobox_cite:"Basato su",
    zone_type_title:"Tipo di zona", zone_inclusion:"Inclusione", zone_spatial:"Isolamento Spaziale",
    zone_social:"Isolamento Sociale", zone_total:"Isolamento Totale",
    tip_inclusion:"Alta prossimità + Alta opportunità. Servizi locali ricchi e buoni collegamenti di trasporto.",
    tip_spatial:"Alta prossimità + Bassa opportunità. Negozi e scuole vicini, ma scarsi collegamenti con la città.",
    tip_social:"Bassa prossimità + Alta opportunità. Ben collegato ma pochi servizi locali.",
    tip_total:"Bassa prossimità + Bassa opportunità. Auto probabilmente essenziale.",
    legend_explain:"Clicca ? per i dettagli.", full_explanation:"Spiegazione completa →",
    city_summary_title:"Riepilogo città", stat_hexagons:"Esagoni totali",
    stat_prox:"Prossimità mediana", stat_opp:"Opportunità mediana",
    stat_prox_hint:"Accesso pedonale a servizi locali", stat_opp_hint:"Accesso con mezzi a risorse cittadine",
    stat_inclusion:"Tasso di inclusione", selected_hex_title:"Esagono selezionato",
    no_selection:"Clicca su un esagono o punto scatter.",
    interactions_title:"Interazioni",
    interactions_hint:"Passa il mouse o clicca per evidenziare.<br>Scorri e trascina per navigare.<br>Clicca legenda per filtrare.",
    label_cartogram:"Cartogramma", label_scatter:"Scatter · Prossimità vs Opportunità",
    label_scatter_short:"Scatter", mobile_info:"Info", mobile_search_cities:"Cerca città",
    type_desc_inclusion:"Ben servita localmente e ben collegata",
    type_desc_spatial:"Buoni servizi locali, scarsi collegamenti",
    type_desc_social:"Buoni trasporti, pochi servizi locali",
    type_desc_total:"Scarsi servizi locali e scarso accesso trasporti",
    info_zone:"Zona", info_walkable:"Servizi pedonali", info_transit:"Raggiungibilità mezzi",
    info_population:"Popolazione", info_med_prox:"Mediana pross.", info_med_opp:"Mediana opp.",
    scatter_opp_label:"Punteggio Opportunità", scatter_prox_label:"Punteggio Prossimità",
    scatter_q_inclusion:"Inclusione", scatter_q_spatial:"Isolamento Spaziale",
    scatter_q_social:"Isolamento Sociale", scatter_q_total:"Isolamento Totale",
    tt_walkable:"Servizi pedonali", tt_transit:"Raggiungibilità", tt_pop:"Pop",
    about_title:"Il Framework P.O.V.", about_subtitle:"Prossimità · Opportunità · Valore",
    about_intro:'Visualizzazione interattiva dell\'articolo <a href="https://doi.org/10.1140/epjds/s13688-026-00623-8" target="_blank"><em>The dimensions of accessibility</em></a> di Bruno et al. (EPJ Data Science, 2026).',
    about_h_prox_opp:"Cosa sono Prossimità e Opportunità?",
    about_prox_opp_intro:"L'accessibilità non è unidimensionale:",
    about_prox_card:'<strong>Prossimità</strong> = accesso a servizi quotidiani raggiungibili <em>a piedi</em>.',
    about_opp_card:'<strong>Opportunità</strong> = accesso a risorse cittadine con il <em>trasporto pubblico</em>.',
    about_h_zones:"Le quattro zone", about_zones_intro:"Classificazione per mediana cittadina:",
    about_zone_inc:"<strong>Inclusione</strong><br>Sopra la mediana in entrambe.", about_zone_spatial:"<strong>Isolamento Spaziale</strong><br>Buoni servizi, scarsi trasporti.",
    about_zone_social:"<strong>Isolamento Sociale</strong><br>Buoni trasporti, pochi servizi.", about_zone_total:"<strong>Isolamento Totale</strong><br>Sotto la mediana in entrambe.",
    about_h_value:"La terza dimensione: Valore", about_value_text:"Il Valore cattura la qualità dei servizi raggiungibili.",
    about_h_read:"Come leggere la visualizzazione", about_read_text:"Cartogramma = esagoni colorati per tipo zona. Scatter = ogni esagono per Opportunità (x) e Prossimità (y).",
    about_h_data:"Dati e metodi", about_data_text:"Esagoni H3, tempi a piedi via OSRM, trasporto pubblico via GTFS. POI da OpenStreetMap, popolazione da WorldPop.",
    about_ref:'<strong>Rif.:</strong> Bruno et al. (2026). <em>The dimensions of accessibility.</em> EPJ Data Science. <a href="https://doi.org/10.1140/epjds/s13688-026-00623-8" target="_blank">DOI</a>',
    help_scatter_title:"Leggere lo scatter", help_scatter_intro:"Ogni punto è un esagono:",
    help_scatter_x:"<strong>X (Opportunità):</strong> POI raggiungibili con mezzi.", help_scatter_y:"<strong>Y (Prossimità):</strong> POI raggiungibili a piedi.",
    help_scatter_median:"Linee tratteggiate = mediane. Hover/click per evidenziare.",
    help_scatter_cluster:"Angolo in basso a sinistra = nessuna fermata entro 15 min.",
    help_map_title:"Leggere il cartogramma", help_map_intro:"Esagoni colorati per zona. Dimensione = popolazione.",
    help_map_inc:"<strong>Verde — Inclusione</strong><br>Alta pross + Alta opp", help_map_spatial:"<strong>Blu — Isol. Spaziale</strong><br>Alta pross + Bassa opp",
    help_map_social:"<strong>Giallo — Isol. Sociale</strong><br>Bassa pross + Alta opp", help_map_total:"<strong>Rosso — Isol. Totale</strong><br>Bassa pross + Bassa opp",
    help_map_prox_opp:"Prossimità = servizi locali. Opportunità = accesso con mezzi.", help_map_threshold:"Soglie = mediane cittadine.",
    help_map_interact:"Clicca per ispezionare. Hover per evidenziare.",
  }
};
function t(key) { return I18N[currentLang]?.[key] || I18N.en[key] || key; }
function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.getElementById("lang-btn").textContent = currentLang === "en" ? "IT" : "EN";
  document.title = currentLang === "en" ? "Accessibility P.O.V." : "Accessibilità P.O.V.";
  if (features.length) { updateInfoBox(selectedId ? features.find(f => f.properties.id === selectedId) : null); buildScatter(); }
}
document.getElementById("lang-btn").addEventListener("click", () => { currentLang = currentLang === "en" ? "it" : "en"; applyLanguage(); });

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const CITY_FILES = {
  "Barcelona":"data/barcelona_cartogram.geojson","Paris":"data/paris_cartogram.geojson",
  "Rome":"data/rome_cartogram.geojson","Milan":"data/milan_cartogram.geojson",
  "New York":"data/new_york_cartogram.geojson","Nantes":"data/nantes_cartogram.geojson",
  "Bordeaux":"data/bordeaux_cartogram.geojson","Berlin":"data/berlin_cartogram.geojson",
  "Seattle":"data/seattle_cartogram.geojson","Málaga":"data/malaga_cartogram.geojson",
  "Munich":"data/munich_cartogram.geojson","Vienna":"data/vienna_cartogram.geojson",
  "Zurich":"data/zurich_cartogram.geojson","Karlsruhe":"data/karlsruhe_cartogram.geojson",
  "Stockholm":"data/stockholm_cartogram.geojson","Porto":"data/porto_cartogram.geojson",
  "Chicago":"data/chicago_cartogram.geojson","Valencia":"data/valencia_cartogram.geojson",
};
const CITY_CENTERS = {
  "Barcelona":[41.385,2.173],"Paris":[48.857,2.352],"Rome":[41.903,12.496],"Milan":[45.464,9.190],
  "New York":[40.713,-74.006],"Nantes":[47.218,-1.554],"Bordeaux":[44.838,-0.579],"Berlin":[52.520,13.405],
  "Seattle":[47.606,-122.332],"Málaga":[36.721,-4.421],"Munich":[48.135,11.582],"Vienna":[48.208,16.374],
  "Zurich":[47.377,8.542],"Karlsruhe":[49.007,8.404],"Stockholm":[59.329,18.069],"Porto":[41.158,-8.629],
  "Chicago":[41.878,-87.630],"Valencia":[39.470,-0.376],
};
const ALL_CITIES = Object.keys(CITY_FILES);

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────
let features=[], selectedId=null, hoveredId=null, hiddenTypes=new Set();
const HEX_ALPHA=0.8, HEX_ALPHA_DIM=0.15;
const TYPE_COLOR={"inclusion":"#4caf50","spatial isolation":"#2196f3","social isolation":"#ffc107","total isolation":"#f44336"};
const TYPE_COLOR_DIM={"inclusion":"#c8e6c9","spatial isolation":"#bbdefb","social isolation":"#fff9c4","total isolation":"#ffcdd2"};
function getTypeDesc(type){const m={"inclusion":"type_desc_inclusion","spatial isolation":"type_desc_spatial","social isolation":"type_desc_social","total isolation":"type_desc_total"};return t(m[type]||"");}
function getTypeName(type){const m={"inclusion":"scatter_q_inclusion","spatial isolation":"scatter_q_spatial","social isolation":"scatter_q_social","total isolation":"scatter_q_total"};return t(m[type]||"");}

// ─────────────────────────────────────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────────────────────────────────────
function openModal(id){document.getElementById(id).classList.add("open");}
function closeModal(id){document.getElementById(id).classList.remove("open");}
document.getElementById("about-btn").addEventListener("click",()=>openModal("about-overlay"));
document.getElementById("about-close").addEventListener("click",()=>closeModal("about-overlay"));
document.getElementById("help-btn").addEventListener("click",()=>openModal("help-overlay"));
document.getElementById("help-close").addEventListener("click",()=>closeModal("help-overlay"));
document.getElementById("map-help-btn").addEventListener("click",()=>openModal("map-help-overlay"));
document.getElementById("map-help-close").addEventListener("click",()=>closeModal("map-help-overlay"));
["about-overlay","help-overlay","map-help-overlay"].forEach(id=>{
  document.getElementById(id).addEventListener("click",e=>{if(e.target===e.currentTarget)closeModal(id);});
});
document.getElementById("landing-about-link")?.addEventListener("click",e=>{e.preventDefault();openModal("about-overlay");});
document.getElementById("legend-about-link")?.addEventListener("click",e=>{e.preventDefault();openModal("about-overlay");});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal("about-overlay");closeModal("help-overlay");closeModal("map-help-overlay");closeStatPopover();}});

// ─────────────────────────────────────────────────────────────────────────────
// LEGEND EXPLAIN BUTTONS (click to toggle, not hover)
// ─────────────────────────────────────────────────────────────────────────────
document.querySelectorAll(".legend-explain-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation(); // don't trigger legend toggle
    const item = btn.closest(".legend-item");
    const wasOpen = item.classList.contains("tip-open");
    // Close all others
    document.querySelectorAll(".legend-item").forEach(li => li.classList.remove("tip-open"));
    if (!wasOpen) item.classList.add("tip-open");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// STAT HINT POPOVERS (clickable)
// ─────────────────────────────────────────────────────────────────────────────
const statPopover = document.getElementById("stat-popover");
function closeStatPopover() { statPopover.classList.remove("open"); }
document.querySelectorAll(".stat-hint-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const key = btn.dataset.hintKey;
    const text = t(key);
    const rect = btn.getBoundingClientRect();
    statPopover.textContent = text;
    statPopover.style.left = rect.left + "px";
    statPopover.style.top = (rect.bottom + 6) + "px";
    statPopover.classList.toggle("open");
  });
});
document.addEventListener("click", () => closeStatPopover());

// ─────────────────────────────────────────────────────────────────────────────
// EDGE PANEL TOGGLES
// ─────────────────────────────────────────────────────────────────────────────
// Landing side
const landingSideToggle = document.getElementById("landing-side-toggle");
landingSideToggle.addEventListener("click", () => {
  const vl = document.getElementById("view-landing");
  const closed = vl.classList.toggle("side-closed");
  landingSideToggle.textContent = closed ? "›" : "‹";
  setTimeout(() => landingMap.invalidateSize(), 50);
});

// City side
const citySideToggle = document.getElementById("city-side-toggle");
citySideToggle.addEventListener("click", () => {
  const vc = document.getElementById("view-city");
  const closed = vc.classList.toggle("side-closed");
  citySideToggle.textContent = closed ? "›" : "‹";
  // Update grid to redistribute space
  if (window.innerWidth > 1024) {
    const sideW = closed ? "0px" : "var(--sidebar-w)";
    vc.style.gridTemplateColumns = `${sideW} 1fr 8px 1fr`;
  }
  setTimeout(() => {
    cityLeaflet?.invalidateSize();
    redrawCanvas();
    if (features.length) buildScatter();
  }, 50);
});

// ─────────────────────────────────────────────────────────────────────────────
// INFO BOX CLOSE / REOPEN (landing map)
// ─────────────────────────────────────────────────────────────────────────────
document.getElementById("close-info-box").addEventListener("click",()=>{
  document.getElementById("info-box-landing").style.display="none";
  document.getElementById("expand-info").style.display="flex";
});
document.getElementById("expand-info").addEventListener("click",()=>{
  document.getElementById("info-box-landing").style.display="";
  document.getElementById("expand-info").style.display="none";
});

// MOBILE: landing panel open/close
document.getElementById("mobile-landing-open")?.addEventListener("click",()=>{
  document.getElementById("view-landing").classList.add("mobile-side-open");
});
document.getElementById("mobile-landing-close")?.addEventListener("click",()=>{
  document.getElementById("view-landing").classList.remove("mobile-side-open");
});

// ─────────────────────────────────────────────────────────────────────────────
// RESIZE HANDLE (drag to resize map vs scatter)
// ─────────────────────────────────────────────────────────────────────────────
const resizeHandle = document.getElementById("resize-handle");
let resizing = false;
resizeHandle.addEventListener("mousedown", e => {
  if (window.innerWidth <= 1024) return;
  resizing = true;
  resizeHandle.classList.add("dragging");
  document.body.style.cursor = "col-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});
document.addEventListener("mousemove", e => {
  if (!resizing) return;
  const vc = document.getElementById("view-city");
  const sidebar = document.getElementById("city-sidebar");
  const sideW = sidebar.getBoundingClientRect().width;
  const vcRect = vc.getBoundingClientRect();
  const handleW = 8;
  const available = vcRect.width - sideW - handleW;
  const mouseX = e.clientX - vcRect.left - sideW;
  const ratio = Math.max(0.15, Math.min(0.85, mouseX / available));
  const mapFr = ratio;
  const scatterFr = 1 - ratio;
  vc.style.gridTemplateColumns = `${sideW}px ${mapFr}fr ${handleW}px ${scatterFr}fr`;
  cityLeaflet?.invalidateSize();
  redrawCanvas();
});
document.addEventListener("mouseup", () => {
  if (!resizing) return;
  resizing = false;
  resizeHandle.classList.remove("dragging");
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
  if (features.length) buildScatter();
});

// ─────────────────────────────────────────────────────────────────────────────
// LANDING MAP
// ─────────────────────────────────────────────────────────────────────────────
const landingMap = L.map("landing-map",{zoomControl:false}).setView([30,10],2);
L.control.zoom({position:"bottomright"}).addTo(landingMap);
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{
  attribution:'&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',subdomains:"abcd",maxZoom:19,
}).addTo(landingMap);
const landingMarkers=[];
ALL_CITIES.forEach(city=>{
  const center=CITY_CENTERS[city]; if(!center)return;
  const marker=L.circleMarker(center,{radius:7,color:"#2563eb",weight:2,fillColor:"#2563eb",fillOpacity:0.25}).addTo(landingMap);
  marker.bindTooltip(`<b>${city}</b>`,{direction:"top",sticky:false});
  marker.on("click",()=>goCity(city)); landingMarkers.push(marker);
});
try{landingMap.fitBounds(L.featureGroup(landingMarkers).getBounds().pad(0.15));}catch(e){}

// ─────────────────────────────────────────────────────────────────────────────
// CITY LIST
// ─────────────────────────────────────────────────────────────────────────────
function renderCityList(filter=""){
  const q=filter.trim().toLowerCase(),el=document.getElementById("city-list"); el.innerHTML="";
  ALL_CITIES.filter(c=>!q||c.toLowerCase().includes(q)).forEach(city=>{
    const card=document.createElement("div"); card.className="city-card";
    card.innerHTML=`<strong>${city}</strong><span class="arrow">›</span>`;
    card.onclick=()=>goCity(city); el.appendChild(card);
  });
}
renderCityList();
document.getElementById("search-input").addEventListener("input",e=>renderCityList(e.target.value));

// ─────────────────────────────────────────────────────────────────────────────
// CITY MAP
// ─────────────────────────────────────────────────────────────────────────────
let cityLeaflet=null;
function initCityMap(){
  if(cityLeaflet)return;
  cityLeaflet=L.map("city-map",{zoomControl:false}).setView([0,0],2);
  L.control.zoom({position:"bottomright"}).addTo(cityLeaflet);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{
    attribution:'&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',subdomains:"abcd",maxZoom:19,
  }).addTo(cityLeaflet);
  cityLeaflet.on("move zoom moveend zoomend",redrawCanvas);
}
const canvas=document.getElementById("map-canvas"),ctx=canvas.getContext("2d");
function resizeCanvas(){const r=document.getElementById("map-panel").getBoundingClientRect();canvas.width=r.width*devicePixelRatio;canvas.height=r.height*devicePixelRatio;canvas.style.width=r.width+"px";canvas.style.height=r.height+"px";}
function project(lng,lat){const pt=cityLeaflet.latLngToContainerPoint(L.latLng(lat,lng));return[pt.x*devicePixelRatio,pt.y*devicePixelRatio];}
function drawCanvas(){
  if(!cityLeaflet)return; ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const f of features){
    const p=f.properties,type=p.type,isH=hiddenTypes.has(type),isHov=p.id===hoveredId,isSel=p.id===selectedId;
    const color=isSel?"#111":isH?TYPE_COLOR_DIM[type]:TYPE_COLOR[type];
    const alpha=isSel||isHov?1.0:isH?HEX_ALPHA_DIM:HEX_ALPHA;
    for(const ring of f.geometry.coordinates){
      ctx.beginPath();
      for(let j=0;j<ring.length;j++){const[x,y]=project(ring[j][0],ring[j][1]);j===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
      ctx.closePath(); ctx.globalAlpha=alpha; ctx.fillStyle=color; ctx.fill();
      ctx.globalAlpha=isSel?0.9:isHov?0.65:0.22;
      ctx.strokeStyle=isSel||isHov?"#333":"rgba(255,255,255,.7)";
      ctx.lineWidth=isSel?2*devicePixelRatio:0.6*devicePixelRatio; ctx.stroke();
    }
  }
  ctx.globalAlpha=1;
}
function redrawCanvas(){resizeCanvas();drawCanvas();}

// HIT TEST
function hitTest(cx,cy){
  const px=cx*devicePixelRatio,py=cy*devicePixelRatio;
  for(let i=features.length-1;i>=0;i--){for(const ring of features[i].geometry.coordinates){let inside=false;for(let j=0,k=ring.length-1;j<ring.length;k=j++){const[xi,yi]=project(ring[j][0],ring[j][1]);const[xk,yk]=project(ring[k][0],ring[k][1]);if(((yi>py)!==(yk>py))&&(px<(xk-xi)*(py-yi)/(yk-yi)+xi))inside=!inside;}if(inside)return features[i];}}
  return null;
}
const mapPanel=document.getElementById("map-panel");
mapPanel.addEventListener("mousemove",e=>{if(!cityLeaflet)return;const r=canvas.getBoundingClientRect();const hit=hitTest(e.clientX-r.left,e.clientY-r.top);const newId=hit?hit.properties.id:null;if(newId!==hoveredId){hoveredId=newId;hit?showTooltip(e,hit):hideTooltip();refreshDots();drawCanvas();}else if(hit){tooltip.style.left=(e.clientX+14)+"px";tooltip.style.top=(e.clientY-10)+"px";}});
mapPanel.addEventListener("mouseleave",()=>{hoveredId=null;hideTooltip();refreshDots();drawCanvas();});
mapPanel.addEventListener("click",e=>{if(!cityLeaflet)return;const r=canvas.getBoundingClientRect();const hit=hitTest(e.clientX-r.left,e.clientY-r.top);if(hit)selectFeature(hit);});

// ─────────────────────────────────────────────────────────────────────────────
// SCATTER
// ─────────────────────────────────────────────────────────────────────────────
const scatterSVG=document.getElementById("scatter-svg");const M={top:40,right:30,bottom:52,left:62};let scatterDots=[];
function buildScatter(){
  scatterSVG.innerHTML="";
  const W=scatterSVG.clientWidth||scatterSVG.getBoundingClientRect().width;
  const H=scatterSVG.clientHeight||scatterSVG.getBoundingClientRect().height;
  const pw=W-M.left-M.right,ph=H-M.top-M.bottom; scatterSVG.setAttribute("viewBox",`0 0 ${W} ${H}`);
  const oppV=features.map(f=>f.properties.opp),proxV=features.map(f=>f.properties.prox);
  const maxO=Math.max(...oppV)*1.05,maxP=Math.max(...proxV)*1.05;
  const medO=features[0]?.properties.opp_med||median(oppV),medP=features[0]?.properties.prox_med||median(proxV);
  const sx=v=>M.left+(v/maxO)*pw,sy=v=>M.top+ph-(v/maxP)*ph;
  const g=se("g");scatterSVG.appendChild(g);
  [{x:sx(medO),y:M.top,w:sx(maxO)-sx(medO),h:sy(medP)-M.top,fill:"rgba(76,175,80,.08)",key:"scatter_q_inclusion"},
   {x:M.left,y:M.top,w:sx(medO)-M.left,h:sy(medP)-M.top,fill:"rgba(33,150,243,.08)",key:"scatter_q_spatial"},
   {x:sx(medO),y:sy(medP),w:sx(maxO)-sx(medO),h:M.top+ph-sy(medP),fill:"rgba(255,193,7,.08)",key:"scatter_q_social"},
   {x:M.left,y:sy(medP),w:sx(medO)-M.left,h:M.top+ph-sy(medP),fill:"rgba(244,67,54,.08)",key:"scatter_q_total"}
  ].forEach(q=>{
    g.appendChild(se("rect",{x:q.x,y:q.y,width:q.w,height:q.h,fill:q.fill}));
    const txt=se("text",{x:q.x+q.w/2,y:q.y+q.h/2,"text-anchor":"middle","dominant-baseline":"middle",fill:"rgba(0,0,0,.18)","font-size":"11","font-family":"DM Sans"});
    txt.textContent=t(q.key);g.appendChild(txt);
  });
  const md={stroke:"rgba(0,0,0,.18)","stroke-width":"1","stroke-dasharray":"4,3"};
  g.appendChild(se("line",{x1:sx(medO),y1:M.top,x2:sx(medO),y2:M.top+ph,...md}));
  g.appendChild(se("line",{x1:M.left,y1:sy(medP),x2:M.left+pw,y2:sy(medP),...md}));
  const ac="rgba(0,0,0,.13)";
  g.appendChild(se("line",{x1:M.left,y1:M.top,x2:M.left,y2:M.top+ph,stroke:ac,"stroke-width":"1"}));
  g.appendChild(se("line",{x1:M.left,y1:M.top+ph,x2:M.left+pw,y2:M.top+ph,stroke:ac,"stroke-width":"1"}));
  for(let i=0;i<=4;i++){const v=maxO*i/4,x=sx(v);g.appendChild(se("line",{x1:x,y1:M.top+ph,x2:x,y2:M.top+ph+4,stroke:ac}));const txt=se("text",{x,y:M.top+ph+14,"text-anchor":"middle",fill:"rgba(0,0,0,.4)","font-size":"9"});txt.textContent=fmtK(v);g.appendChild(txt);}
  for(let i=0;i<=4;i++){const v=maxP*i/4,y=sy(v);g.appendChild(se("line",{x1:M.left-4,y1:y,x2:M.left,y2:y,stroke:ac}));const txt=se("text",{x:M.left-7,y,"text-anchor":"end","dominant-baseline":"middle",fill:"rgba(0,0,0,.4)","font-size":"9"});txt.textContent=fmtK(v);g.appendChild(txt);}
  const xl=se("text",{x:M.left+pw/2,y:H-8,"text-anchor":"middle",fill:"rgba(0,0,0,.45)","font-size":"10"});xl.textContent=t("scatter_opp_label");g.appendChild(xl);
  const yl=se("text",{x:12,y:M.top+ph/2,"text-anchor":"middle",fill:"rgba(0,0,0,.45)","font-size":"10",transform:`rotate(-90,12,${M.top+ph/2})`});yl.textContent=t("scatter_prox_label");g.appendChild(yl);
  scatterDots=[];
  for(const f of features){const p=f.properties;const c=se("circle",{cx:sx(p.opp),cy:sy(p.prox),r:4,fill:TYPE_COLOR[p.type]||"#888","fill-opacity":"0.8",stroke:"none","stroke-width":"1.5",style:"cursor:pointer;transition:r .1s"});
  g.appendChild(c);scatterDots.push({feat:f,el:c});
  c.addEventListener("mouseenter",e=>{hoveredId=p.id;showTooltip(e,f);drawCanvas();refreshDots();});
  c.addEventListener("mouseleave",()=>{hoveredId=null;hideTooltip();drawCanvas();refreshDots();});
  c.addEventListener("click",()=>selectFeature(f));}
}
function refreshDots(){for(const d of scatterDots){const pid=d.feat.properties.id,isSel=pid===selectedId,isHov=pid===hoveredId;d.el.setAttribute("r",isSel?7:isHov?6:4);d.el.setAttribute("stroke",isSel?"#333":isHov?"rgba(0,0,0,.45)":"none");d.el.setAttribute("fill-opacity",isSel||isHov?"1":"0.8");}}

// ─────────────────────────────────────────────────────────────────────────────
// SELECTION & INFO
// ─────────────────────────────────────────────────────────────────────────────
function selectFeature(f){selectedId=f?f.properties.id:null;updateInfoBox(f);refreshDots();drawCanvas();}
function updateInfoBox(f){
  const box=document.getElementById("info-box");
  if(!f){box.innerHTML=`<p class="no-sel">${t("no_selection")}</p>`;return;}
  const p=f.properties,abP=p.prox>=p.prox_med,abO=p.opp>=p.opp_med;
  box.innerHTML=`<p class="info-title">Hexagon #${p.id}</p>
    <div class="info-row"><span class="info-key">${t("info_zone")}</span><span class="info-val" style="color:${TYPE_COLOR[p.type]};text-transform:capitalize">${getTypeName(p.type)}</span></div>
    <div class="info-desc">${getTypeDesc(p.type)}</div>
    <div class="info-row"><span class="info-key">${t("info_walkable")}</span><span class="info-val">${fmtK(p.prox)} ${abP?"▲":"▼"}</span></div>
    <div class="info-row"><span class="info-key">${t("info_transit")}</span><span class="info-val">${fmtK(p.opp)} ${abO?"▲":"▼"}</span></div>
    <div class="info-row"><span class="info-key">${t("info_population")}</span><span class="info-val">${Math.round(p.pop).toLocaleString()}</span></div>
    <div class="info-row info-row-muted"><span class="info-key">${t("info_med_prox")}</span><span class="info-val">${fmtK(p.prox_med)}</span></div>
    <div class="info-row info-row-muted"><span class="info-key">${t("info_med_opp")}</span><span class="info-val">${fmtK(p.opp_med)}</span></div>`;
}
function updateCityStats(){
  const n=features.length,proxes=features.map(f=>f.properties.prox).sort((a,b)=>a-b);
  const opps=features.map(f=>f.properties.opp).sort((a,b)=>a-b);
  const incN=features.filter(f=>f.properties.type==="inclusion").length;
  document.getElementById("s-hex").textContent=n;
  document.getElementById("s-prox").textContent=fmtK(proxes[Math.floor(n/2)]);
  document.getElementById("s-opp").textContent=fmtK(opps[Math.floor(n/2)]);
  document.getElementById("s-inc").textContent=(incN/n*100).toFixed(1)+"%";
}

// TOOLTIP
const tooltip=document.getElementById("tooltip");
function showTooltip(e,f){const p=f.properties;tooltip.innerHTML=`<strong>${getTypeName(p.type)}</strong><span class="tt-desc">${getTypeDesc(p.type)}</span>${t("tt_walkable")}: ${fmtK(p.prox)}<br>${t("tt_transit")}: ${fmtK(p.opp)}<br>${t("tt_pop")}: ${Math.round(p.pop).toLocaleString()}`;tooltip.classList.add("visible");tooltip.style.left=(e.clientX+14)+"px";tooltip.style.top=(e.clientY-10)+"px";}
function hideTooltip(){tooltip.classList.remove("visible");}

// LEGEND TOGGLES
document.querySelectorAll(".legend-item").forEach(el=>{
  el.addEventListener("click",e=>{
    if(e.target.closest(".legend-explain-btn"))return; // don't toggle when clicking explain
    const type=el.dataset.type;hiddenTypes.has(type)?hiddenTypes.delete(type):hiddenTypes.add(type);el.classList.toggle("hidden");drawCanvas();
  });
});

// MOBILE TABS
document.querySelectorAll(".mobile-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".mobile-tab").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
    const panel=btn.dataset.panel;
    if(window.innerWidth<=1024){
      document.getElementById("map-panel").style.display=panel==="map"?"block":"none";
      document.getElementById("scatter-panel").style.display=panel==="scatter"?"block":"none";
      document.getElementById("city-sidebar").style.display=panel==="sidebar"?"flex":"none";
      if(panel==="map"){cityLeaflet?.invalidateSize();redrawCanvas();}
      if(panel==="scatter"&&features.length)setTimeout(()=>buildScatter(),50);
    }
  });
});
window.addEventListener("resize",()=>{if(window.innerWidth>1024){document.getElementById("map-panel").style.display="";document.getElementById("scatter-panel").style.display="";document.getElementById("city-sidebar").style.display="";}});

// ─────────────────────────────────────────────────────────────────────────────
// ROUTING
// ─────────────────────────────────────────────────────────────────────────────
function goCity(city){location.hash="#/city/"+encodeURIComponent(city);}
function goHome(){location.hash="#/";}
document.getElementById("back-btn").addEventListener("click",goHome);

async function router(){
  const hash=location.hash||"#/";
  if(hash.startsWith("#/city/")){const city=decodeURIComponent(hash.split("/city/")[1]||"");if(!city||!CITY_FILES[city]){goHome();return;}await showCityView(city);}
  else showLandingView();
}

function showLandingView(){
  document.getElementById("view-landing").style.display="grid";
  document.getElementById("view-city").style.display="none";
  document.getElementById("back-btn").style.display="none";
  document.getElementById("header-sub").textContent=t("header_sub");
  setTimeout(()=>landingMap.invalidateSize(),50);
}

async function showCityView(city){
  document.getElementById("view-landing").style.display="none";
  document.getElementById("view-city").style.display="grid";
  document.getElementById("back-btn").style.display="inline-block";
  document.getElementById("header-sub").textContent=city;
  // Reset grid to default proportions
  if(window.innerWidth>1024){
    document.getElementById("view-city").style.gridTemplateColumns=`var(--sidebar-w) 1fr 8px 1fr`;
  }
  features=[];selectedId=null;hoveredId=null;hiddenTypes.clear();
  // Reset sidebar state
  document.getElementById("view-city").classList.remove("side-closed");
  citySideToggle.textContent = "‹";
  document.querySelectorAll(".legend-item").forEach(el=>{el.classList.remove("hidden");el.classList.remove("tip-open");});
  updateInfoBox(null);
  // Reset mobile tabs
  document.querySelectorAll(".mobile-tab").forEach(b=>b.classList.remove("active"));
  document.querySelector('.mobile-tab[data-panel="map"]')?.classList.add("active");
  if(window.innerWidth<=1024){document.getElementById("map-panel").style.display="block";document.getElementById("scatter-panel").style.display="none";document.getElementById("city-sidebar").style.display="none";}

  let loaded=[];
  try{
    const res=await fetch(CITY_FILES[city]);if(!res.ok)throw new Error("Failed to load "+CITY_FILES[city]);
    const gj=await res.json();
    loaded=gj.features.map(f=>({type:"Feature",geometry:f.geometry,properties:{id:f.properties.hexagon_id,pop:f.properties.population,opp:f.properties.opportunity,prox:f.properties.proximity,city:f.properties.city,type:f.properties.cell_type,opp_med:f.properties.opportunity_median_city,prox_med:f.properties.proximity_median_city}}));
  }catch(e){console.error(e);document.getElementById("info-box").innerHTML=`<p style="color:#f44336">Could not load data for ${city}.</p>`;return;}

  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  initCityMap();
  if(window.innerWidth<=1024){document.getElementById("map-panel").style.display="block";await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));}
  cityLeaflet.invalidateSize({animate:false});
  features=loaded;
  const lngs=features.flatMap(f=>f.geometry.coordinates.flatMap(r=>r.map(p=>p[0])));
  const lats=features.flatMap(f=>f.geometry.coordinates.flatMap(r=>r.map(p=>p[1])));
  const pad=window.innerWidth<=1024?[10,10]:[2,2];
  cityLeaflet.fitBounds([[Math.min(...lats),Math.min(...lngs)],[Math.max(...lats),Math.max(...lngs)]],{padding:pad,animate:false});
  resizeCanvas();drawCanvas();buildScatter();updateCityStats();
}

// RESIZE
const ro=new ResizeObserver(()=>{
  if(document.getElementById("view-city").style.display!=="none"){cityLeaflet?.invalidateSize();redrawCanvas();if(features.length)buildScatter();}
  landingMap?.invalidateSize();
});
ro.observe(document.getElementById("app"));

// UTILS
function se(tag,attrs={}){const el=document.createElementNS("http://www.w3.org/2000/svg",tag);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);return el;}
function fmtK(v){return v>=1000?(v/1000).toFixed(1)+"k":Math.round(v).toString();}
function median(arr){const s=[...arr].sort((a,b)=>a-b);return s[Math.floor(s.length/2)];}

// BOOT
window.addEventListener("hashchange",router);
window.addEventListener("load",()=>{applyLanguage();router();setTimeout(()=>document.getElementById("loading").classList.add("fade"),300);});
