export type BaseType = 'commuter-ebike' | 'trail-ebike' | 'cafe-racer' | 'adventure-moto';

export type FrameMaterial = 'aluminum' | 'steel' | 'carbon';
export type MotorType = 'hub' | 'mid-drive';
export type TireType = 'street' | 'knobby';

export interface FrameOption {
  id: string;
  label: string;
  baseType: BaseType;
  material: FrameMaterial;
}

export interface MotorOption {
  id: string;
  label: string;
  type: MotorType;
  powerKw: number;
}

export interface WheelOption {
  id: string;
  label: string;
  tire: TireType;
  diameterIn: number;
}

export interface AccessoryOption {
  id: string;
  label: string;
  category: 'rack' | 'light' | 'fairing' | 'seat';
}

export const FRAME_OPTIONS: FrameOption[] = [
  { id: 'frame-commuter-alu', label: 'Commuter – Aluminum', baseType: 'commuter-ebike', material: 'aluminum' },
  { id: 'frame-trail-steel', label: 'Trail – Steel', baseType: 'trail-ebike', material: 'steel' },
  { id: 'frame-cafe-alu', label: 'Cafe Racer – Aluminum', baseType: 'cafe-racer', material: 'aluminum' },
  { id: 'frame-adv-steel', label: 'Adventure – Steel', baseType: 'adventure-moto', material: 'steel' },
];

export const MOTOR_OPTIONS: MotorOption[] = [
  { id: 'motor-hub-2kw', label: 'Hub 2 kW', type: 'hub', powerKw: 2 },
  { id: 'motor-mid-5kw', label: 'Mid-drive 5 kW', type: 'mid-drive', powerKw: 5 },
];

export const WHEEL_OPTIONS: WheelOption[] = [
  { id: 'wheel-27-street', label: '27.5" Street', tire: 'street', diameterIn: 27.5 },
  { id: 'wheel-27-knobby', label: '27.5" Knobby', tire: 'knobby', diameterIn: 27.5 },
];

export const ACCESSORY_OPTIONS: AccessoryOption[] = [
  { id: 'rack-rear', label: 'Rear Cargo Rack', category: 'rack' },
  { id: 'light-led', label: 'LED Headlight', category: 'light' },
  { id: 'fairing-mini', label: 'Mini Fairing', category: 'fairing' },
];
