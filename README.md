# Urban Accessibility P.O.V.

Interactive visualisation of urban accessibility across 18 cities worldwide, built as a companion to the research paper:

> **Bruno M., Campanelli B., Monteiro Melo H.P., Rossi Mori L., Loreto V.** (2026).  
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

## Data & Methods

- **Hexagonal grid:** [H3 geospatial indexing](https://h3geo.org/) at resolution 9 (~200 m sides)
- **Walking times:** [OSRM](http://project-osrm.org/) on [OpenStreetMap](https://www.openstreetmap.org/) road networks
- **Public transport:** GTFS schedules combined with Connection Scan Algorithm
- **Points of Interest:** extracted from OpenStreetMap
- **Population:** [WorldPop](https://www.worldpop.org/) 100 m grids, adjusted to UN estimates

Full methodological details are available in the [paper](https://doi.org/10.1140/epjds/s13688-026-00623-8).

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
