type AEMConfig = {
  cameraId: string
  mountType: 'HELMET' | 'DASH' | 'CHEST' | 'HANDLEBAR' | 'ROVER_MAST' | 'CABIN'
  environment: 'EARTH_ROAD' | 'LUNAR_SURFACE' | 'MARS_SURFACE' | 'ORBITAL'
  vehicleClass: 'LIGHT' | 'MEDIUM' | 'HEAVY'
  sensitivityProfile: 'AUTO' | 'SPORT' | 'CAUTIOUS'
  gravityFactor?: number // override for exotic bodies
}
