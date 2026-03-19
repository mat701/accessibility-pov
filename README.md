# Urban Accessibility P.O.V.

Interactive visualisation of urban accessibility across 18 cities worldwide, built as a companion to the research paper:

> **Bruno M., Campanelli B., Melo H.P.M., Rossi Mori L., Loreto V.** (2026).  
> *The dimensions of accessibility: proximity, opportunities, values.*  
> EPJ Data Science, 15:22.  
> [doi:10.1140/epjds/s13688-026-00623-8](https://doi.org/10.1140/epjds/s13688-026-00623-8)

🔗 **Live demo:** [mat701.github.io/accessibility-pov](https://mat701.github.io/accessibility-pov/)

---

## The P.O.V. Framework

Accessibility is not one-dimensional. The framework decomposes it into three axes:

- **Proximity** — walkable access to everyday services (shops, pharmacies, cafés, schools), measured by counting Points of Interest reachable on foot, weighted by walking time.
- **Opportunity** — access to city-scale resources (jobs, universities, stadiums, cultural venues) via public transport, measured by counting POIs reachable by transit, weighted by travel time.
- **Value** — the quality and desirability of reachable services (theorised but not yet quantified in this tool).

Each hexagonal cell in a city is classified into one of four zones based on whether its Proximity and Opportunity scores fall above or below the city-wide median:

| Zone | Proximity | Opportunity | Meaning |
|------|-----------|-------------|---------|
| 🟩 **Inclusion** | High | High | Well-served locally and well-connected globally |
| 🟦 **Spatial Isolation** | High | Low | Lively neighbourhood but disconnected from distant opportunities |
| 🟨 **Social Isolation** | Low | High | Good transit but lacking local services and community life |
| 🟥 **Total Isolation** | Low | Low | Car likely essential — typically found at the urban periphery |

## Features

- **Cartogram** — interactive map with hexagonal cells (~200 m, H3 resolution 9) coloured by zone type, with size proportional to resident population
- **Scatter plot** — each hexagon plotted by Opportunity (x) vs Proximity (y), with median threshold lines dividing the four quadrants
- **Cross-highlighting** — hover or click on either panel to highlight the corresponding element on the other
- **Resizable panels** — drag the handle between map and scatter to adjust the split
- **Collapsible sidebars** — edge toggle buttons to hide/show panels on both the landing and city views
- **Bilingual** — full English / Italian translation, switchable with a single click
- **Responsive** — mobile layout with tab-based navigation (Cartogram / Scatter / Info)
- **Explanatory modals** — "About" modal with full framework explanation, plus contextual help buttons on the cartogram and scatter panels

## Cities

Barcelona, Berlin, Bordeaux, Chicago, Karlsruhe, Málaga, Milan, Munich, Nantes, New York, Paris, Porto, Rome, Seattle, Stockholm, Valencia, Vienna, Zurich.

## Data & Methods

- **Hexagonal grid:** [H3 geospatial indexing](https://h3geo.org/) at resolution 9 (~200 m sides)
- **Walking times:** [OSRM](http://project-osrm.org/) on [OpenStreetMap](https://www.openstreetmap.org/) road networks
- **Public transport:** GTFS schedules (May 2025) combined with Connection Scan Algorithm
- **Points of Interest:** extracted from OpenStreetMap
- **Population:** [WorldPop](https://www.worldpop.org/) 100 m grids, adjusted to UN estimates

Full methodological details are available in the [paper](https://doi.org/10.1140/epjds/s13688-026-00623-8).

## Project Structure

```
accessibility-pov/
├── index.html          # Main page
├── style.css           # All styles
├── app.js              # Application logic, i18n, interactions
├── favicon.ico         # Site icon
├── favicon.svg         # SVG favicon
└── data/
    ├── barcelona_cartogram.geojson
    ├── paris_cartogram.geojson
    ├── rome_cartogram.geojson
    └── ...             # One GeoJSON per city
```

Each GeoJSON file contains hexagonal polygons in WGS84 coordinates with properties:

| Property | Description |
|----------|-------------|
| `hexagon_id` | Unique cell identifier |
| `population` | Estimated resident population |
| `proximity` | Proximity score (walkable POI access) |
| `opportunity` | Opportunity score (transit POI access) |
| `cell_type` | Zone classification (`inclusion`, `spatial isolation`, `social isolation`, `total isolation`) |
| `proximity_median_city` | City-wide median proximity value |
| `opportunity_median_city` | City-wide median opportunity value |

## Running Locally

No build step required — it's plain HTML/CSS/JS. Serve it with any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

## Tech Stack

- [Leaflet](https://leafletjs.com/) — interactive maps
- [CARTO basemaps](https://carto.com/basemaps/) — map tiles
- Canvas API — hexagon rendering on the cartogram
- SVG — scatter plot rendering
- Vanilla JS — no frameworks, no build tools

## License

The visualisation code is open source. The underlying research data and methodology are described in the accompanying [paper](https://doi.org/10.1140/epjds/s13688-026-00623-8) (Open Access, CC BY 4.0).

## Citation

If you use this visualisation or the underlying framework, please cite:

```bibtex
@article{bruno2026dimensions,
  title     = {The dimensions of accessibility: proximity, opportunities, values},
  author    = {Bruno, Matteo and Campanelli, Bruno and Melo, Hygor P. M. and Rossi Mori, Lavinia and Loreto, Vittorio},
  journal   = {EPJ Data Science},
  volume    = {15},
  number    = {22},
  year      = {2026},
  doi       = {10.1140/epjds/s13688-026-00623-8}
}
```
