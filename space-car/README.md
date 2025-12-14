
# Space Car Digital Project

A React + TypeScript + Three.js application for visualizing and managing a space vehicle design. The app integrates 3D visualization, engineering schematics, bill of materials, and mission planning tools.

## Features

- **3D Visualization**: Interactive Three.js viewer for space vehicle models
- **Engineering Schematics**: SVG-based technical drawings and diagrams
- **Bill of Materials**: Comprehensive component inventory and specifications
- **Mission Planning**: Checklist and sequence management for space operations
- **Load Analysis**: Structural load calculations and visualization
- **Anchor Planning**: Lunar and Martian surface anchor configurations

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
space-car/
├── src/
│   ├── components/     # React components
│   ├── scenes/         # Three.js scene management
│   ├── assets/         # Static assets (models, schematics, data)
│   ├── styles/         # CSS stylesheets
│   └── utils/          # Utility functions
├── public/             # Static assets served by Vite
└── package.json        # Dependencies and scripts
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **Vite** - Build tool and dev server
- **pnpm** - Package manager

## License

Apache License 2.0