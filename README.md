# 🚀 Space Car Project

The **Space Car** is a conceptual hybrid vehicle designed for both terrestrial roads and extraterrestrial environments (Moon, Mars).  
It combines **road wheels**, **VTOL lift fans**, **deployable morphing wings**, **hydraulic landing gear**, and **anchoring poles** for storm‑hold safety.  
This repository hosts the **3D model viewer**, **schematics**, **bill of materials**, and **mission checklists**.

---

## ✨ Features

- **3D Viewer**: Interactive Three.js scene of the Space Car (`src/components/Viewer3D.tsx`).
- **Schematics Panel**: SVG blueprints for chassis, landing gear, anchors, fan modules, and wings.
- **Bill of Materials (BOM)**: JSON‑driven table of assemblies, parts, and specifications.
- **Mission Checklist**: Mode sequences for road, VTOL, cruise, and anchor operations.
- **Anchor Planner**: Lunar vs Martian anchoring parameters and load charts.
- **Landing Gear Load Chart**: Strut load ratings and auto‑leveling logic.

---

## 📂 Repository Structure

src/ ├─ components/ # React UI panels (Viewer3D, Schematics, BOM, Checklist) ├─ scenes/ # Three.js scene setup and controls ├─ assets/ │ ├─ models/ # GLB 3D models (space_car, landing_gear, blade_ring) │ ├─ schematics/ # SVG blueprints │ └─ data/ # JSON data (bom, loads, sequences) └─ styles/ # CSS theme and layout

---

## 🛠️ Tech Stack

- **React + TypeScript** for UI
- **Vite** for fast dev/build
- **Three.js** for 3D visualization
- **JSON data files** for BOM, loads, mission sequences
- **SVG schematics** for blueprint panels

---

## 🚦 Quick Start

```bash
# Clone repo
git clone https://github.com/your-username/space-car.git
cd space-car

# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
pnpm preview
📑 Bill of Materials (sample)
See src/assets/data/bom.json for full list.

Assembly	Part	Qty	Spec
Chassis	Titanium spaceframe nodes	28	Ti‑6Al‑4V, CNC machined
Landing Gear	Electrohydraulic telescoping strut	4	1.2 m stroke, 25 kN
Anchors	Power‑pole deployer	4	2.0 m insertion depth
Lift & Fans	Blade ring cartridge (AMB)	4	CFRP impeller, magnetic coupling
Wings	Morphing wing panel	2	Electroactive fabric, elevons
Avionics/Power	Hybrid turbogenerator	1	Steady VTOL power
🌌 Mission Modes
Road: Wheels active, fan bays sealed, regenerative suspension harvesting energy.

VTOL: Extend landing gear, auto‑level, retract wheels, activate lift fans.

Cruise: Deploy morphing wings, throttle lift fans to idle, aero control surfaces active.

Anchor: Lower CG, deploy poles, tension guy lines, shutter intakes, lock struts.

🤝 Contributing
Pull requests are welcome!

Add new schematics (SVG)

Refine 3D models (GLB)

Expand BOM with detailed specs

Improve mission sequences or load charts
