import * as THREE from 'three'

export const materials = {
  // Space car body materials
  carBody: new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    metalness: 0.8,
    roughness: 0.2
  }),

  // Landing gear materials
  landingGear: new THREE.MeshStandardMaterial({
    color: 0x666666,
    metalness: 0.9,
    roughness: 0.1
  }),

  // Blade ring materials
  bladeRing: new THREE.MeshStandardMaterial({
    color: 0x888888,
    metalness: 0.7,
    roughness: 0.3,
    transparent: true,
    opacity: 0.8
  }),

  // Anchor materials
  anchor: new THREE.MeshStandardMaterial({
    color: 0x444444,
    metalness: 0.95,
    roughness: 0.05
  }),

  // Ground/regolith materials
  lunarSurface: new THREE.MeshLambertMaterial({
    color: 0x888888,
    transparent: false
  }),

  martianSurface: new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    transparent: false
  }),

  // Utility materials
  wireframe: new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  }),

  highlight: new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.5
  })
}

// Material presets for different environments
export const getEnvironmentMaterials = (environment: 'lunar' | 'martian') => {
  return {
    ...materials,
    surface: environment === 'lunar' ? materials.lunarSurface : materials.martianSurface
  }
}