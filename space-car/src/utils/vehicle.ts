export type VehicleMode = 'road' | 'vtol' | 'cruise' | 'anchor'

export interface VehicleParams {
  mode: VehicleMode
  gearExtended: boolean
  wheelTiltDeg: number
  wingsDeployed: boolean
  ambActive: boolean
}

export const defaultParams: VehicleParams = {
  mode: 'road',
  gearExtended: false,
  wheelTiltDeg: 0,
  wingsDeployed: false,
  ambActive: false,
}