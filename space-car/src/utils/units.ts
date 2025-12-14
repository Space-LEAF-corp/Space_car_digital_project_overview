// Unit conversion utilities for space engineering

// Length conversions
export const length = {
  // Metric to Imperial
  metersToFeet: (meters: number) => meters * 3.28084,
  metersToInches: (meters: number) => meters * 39.3701,
  feetToMeters: (feet: number) => feet / 3.28084,
  inchesToMeters: (inches: number) => inches / 39.3701,

  // Astronomical units
  metersToKilometers: (meters: number) => meters / 1000,
  kilometersToMeters: (kilometers: number) => kilometers * 1000,
  metersToMiles: (meters: number) => meters * 0.000621371,
  milesToMeters: (miles: number) => miles / 0.000621371
}

// Mass conversions
export const mass = {
  kilogramsToPounds: (kg: number) => kg * 2.20462,
  poundsToKilograms: (lbs: number) => lbs / 2.20462,
  kilogramsToSlugs: (kg: number) => kg * 0.0685218,
  slugsToKilograms: (slugs: number) => slugs / 0.0685218
}

// Force conversions
export const force = {
  newtonsToPoundsForce: (n: number) => n * 0.224809,
  poundsForceToNewtons: (lbf: number) => lbf / 0.224809,
  newtonsToKilonewtons: (n: number) => n / 1000,
  kilonewtonsToNewtons: (kn: number) => kn * 1000
}

// Pressure conversions
export const pressure = {
  pascalsToPsi: (pa: number) => pa * 0.000145038,
  psiToPascals: (psi: number) => psi / 0.000145038,
  pascalsToAtmospheres: (pa: number) => pa / 101325,
  atmospheresToPascals: (atm: number) => atm * 101325
}

// Temperature conversions
export const temperature = {
  celsiusToFahrenheit: (c: number) => (c * 9/5) + 32,
  fahrenheitToCelsius: (f: number) => (f - 32) * 5/9,
  celsiusToKelvin: (c: number) => c + 273.15,
  kelvinToCelsius: (k: number) => k - 273.15,
  fahrenheitToKelvin: (f: number) => (f - 32) * 5/9 + 273.15,
  kelvinToFahrenheit: (k: number) => (k - 273.15) * 9/5 + 32
}

// Energy conversions
export const energy = {
  joulesToFootPounds: (j: number) => j * 0.737562,
  footPoundsToJoules: (ftlb: number) => ftlb / 0.737562,
  joulesToKilowattHours: (j: number) => j / 3600000,
  kilowattHoursToJoules: (kwh: number) => kwh * 3600000
}

// Planetary constants and conversions
export const planetary: {
  gravity: Record<string, number>
  pressure: Record<string, number>
  convertWeight: (earthWeight: number, targetPlanet: string) => number
} = {
  // Gravitational acceleration (m/s²)
  gravity: {
    earth: 9.80665,
    moon: 1.625,
    mars: 3.72076,
    venus: 8.87,
    mercury: 3.7,
    jupiter: 24.79
  },

  // Atmospheric pressure at surface (Pa)
  pressure: {
    earth: 101325,
    moon: 0, // Vacuum
    mars: 636, // Average
    venus: 9200000,
    mercury: 0 // Effectively vacuum
  },

  // Convert weight between planets
  convertWeight: (earthWeight: number, targetPlanet: keyof typeof planetary.gravity) => {
    return earthWeight * (planetary.gravity[targetPlanet] / planetary.gravity.earth)
  }
}

// Engineering unit formatting
export const format = {
  // Format numbers with appropriate units
  length: (value: number, unit: 'm' | 'ft' | 'in' | 'km' | 'mi' = 'm') => {
    const precision = value < 1 ? 3 : value < 10 ? 2 : 1
    return `${value.toFixed(precision)} ${unit}`
  },

  mass: (value: number, unit: 'kg' | 'lb' | 'slug' = 'kg') => {
    const precision = value < 1 ? 3 : value < 10 ? 2 : 1
    return `${value.toFixed(precision)} ${unit}`
  },

  force: (value: number, unit: 'N' | 'lbf' | 'kN' = 'N') => {
    const precision = value < 1 ? 3 : value < 10 ? 2 : 1
    return `${value.toFixed(precision)} ${unit}`
  },

  pressure: (value: number, unit: 'Pa' | 'psi' | 'atm' = 'Pa') => {
    const precision = value < 1 ? 3 : value < 10 ? 2 : 1
    return `${value.toFixed(precision)} ${unit}`
  }
}