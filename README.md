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
🌠 Vision
The Space Car is more than a concept vehicle—it’s a blueprint for survivable mobility in hostile environments. Whether cruising Earth’s highways or anchoring against Martian dust storms, this project explores the fusion of engineering, imagination, and open collaboration.

---
---

⭐ README.md (Public‑Facing, Polished, Visual)

Space LEAF Civilian Ascent Vehicle (“Space Car”)

Civilian Access to Orbit — Safely, Simply, and Repeatably

The Space Car is Space LEAF Corp’s flagship civilian spacecraft:
a personal‑scale ascent and orbital mobility vehicle designed to make space accessible to everyone, not just astronauts.

This repository contains the public specification, safety philosophy, and program roadmap for the Space Car program.

---

🚀 Mission

To create the world’s first civilian‑friendly orbital transport system, enabling safe travel between:

• Ground launch interfaces
• Orbital stations, depots, and platforms
• Future Space LEAF orbital communities


The Space Car is the backbone of a future where space is a place to live, work, visit, and return from safely.

---

🛰️ What the Space Car Is

• A shirtsleeve‑environment cabin for 1–4 civilians
• A human‑rated orbital shuttle with autonomous docking
• A modular vehicle that integrates with multiple launch systems
• A NASA‑respectful, civilian‑first spacecraft architecture


---

📄 Technical Documentation

• Space Car SPEC.md — Full technical specification
• Space DMV Integration — Registration, licensing, and insurance logic
• Safety Architecture — Redundancy, abort modes, and human‑factors design


---

🧭 Program Roadmap

Phase 0 — Paper & Simulation

Public spec, mission sims, UI mockups, safety logic trees

Phase 1 — Mockup & VR

Full‑scale cabin mockup, VR/AR civilian training

Phase 2 — Subscale Flight Article

Uncrewed rendezvous/docking testbed

Phase 3 — Human‑Rated Prototype

NASA‑style review gates, Space DMV + insurance framework active

---

🛡️ Safety Philosophy

The Space Car is built on four pillars:

• Redundancy
• Abort clarity
• Passive survivability
• Civilian‑friendly interfaces


Every design choice is made to ensure non‑astronaut passengers can fly safely with minimal training.

---

🌐 Ecosystem Integration

The Space Car is designed to interoperate with:

• Space LEAF orbital ports
• NASA/ESA/JAXA‑style docking systems
• Orbital traffic management networks
• Civilian licensing + insurance frameworks


---

🧑‍🚀 Status

Public, safe for civilian review
Maintained by Captain Leif W. Sogge
Space LEAF Corp — Space is for everyone.

---

