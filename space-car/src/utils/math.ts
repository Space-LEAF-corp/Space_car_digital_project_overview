import * as THREE from 'three'

// Vector operations
export const vector3 = {
  add: (a: THREE.Vector3, b: THREE.Vector3) => new THREE.Vector3().addVectors(a, b),
  subtract: (a: THREE.Vector3, b: THREE.Vector3) => new THREE.Vector3().subVectors(a, b),
  multiply: (v: THREE.Vector3, scalar: number) => v.clone().multiplyScalar(scalar),
  dot: (a: THREE.Vector3, b: THREE.Vector3) => a.dot(b),
  cross: (a: THREE.Vector3, b: THREE.Vector3) => new THREE.Vector3().crossVectors(a, b),
  magnitude: (v: THREE.Vector3) => v.length(),
  normalize: (v: THREE.Vector3) => v.clone().normalize(),
  distance: (a: THREE.Vector3, b: THREE.Vector3) => a.distanceTo(b)
}

// Matrix operations
export const matrix4 = {
  identity: () => new THREE.Matrix4().identity(),
  multiply: (a: THREE.Matrix4, b: THREE.Matrix4) => new THREE.Matrix4().multiplyMatrices(a, b),
  invert: (m: THREE.Matrix4) => m.clone().invert(),
  transpose: (m: THREE.Matrix4) => m.clone().transpose()
}

// Quaternion operations
export const quaternion = {
  fromEuler: (x: number, y: number, z: number) => new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z)),
  multiply: (a: THREE.Quaternion, b: THREE.Quaternion) => new THREE.Quaternion().multiplyQuaternions(a, b),
  slerp: (a: THREE.Quaternion, b: THREE.Quaternion, t: number) => new THREE.Quaternion().slerpQuaternions(a, b, t)
}

// Geometric utilities
export const geometry = {
  // Calculate bounding box
  getBoundingBox: (object: THREE.Object3D) => {
    const box = new THREE.Box3().setFromObject(object)
    return {
      min: box.min,
      max: box.max,
      center: box.getCenter(new THREE.Vector3()),
      size: box.getSize(new THREE.Vector3())
    }
  },

  // Check if point is inside bounding box
  isPointInBox: (point: THREE.Vector3, box: THREE.Box3) => box.containsPoint(point),

  // Calculate intersection of two bounding boxes
  intersectBoxes: (a: THREE.Box3, b: THREE.Box3) => a.intersectsBox(b),

  // Calculate distance from point to plane
  pointToPlaneDistance: (point: THREE.Vector3, plane: THREE.Plane) => plane.distanceToPoint(point)
}

// Interpolation utilities
export const interpolation = {
  linear: (a: number, b: number, t: number) => a + (b - a) * t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => 1 - (1 - t) * (1 - t),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

// Physics utilities
export const physics = {
  // Calculate gravitational force between two masses
  gravitationalForce: (m1: number, m2: number, distance: number, G: number = 6.67430e-11) => {
    return (G * m1 * m2) / (distance * distance)
  },

  // Calculate orbital velocity
  orbitalVelocity: (centralMass: number, radius: number, G: number = 6.67430e-11) => {
    return Math.sqrt((G * centralMass) / radius)
  },

  // Calculate escape velocity
  escapeVelocity: (mass: number, radius: number, G: number = 6.67430e-11) => {
    return Math.sqrt((2 * G * mass) / radius)
  }
}