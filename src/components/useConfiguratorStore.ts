import { create } from 'zustand';
import type {
  BaseType,
  FrameOption,
  MotorOption,
  WheelOption,
  AccessoryOption,
} from '../config/parts';

interface ConfigState {
  baseType: BaseType;
  frame?: FrameOption;
  motor?: MotorOption;
  wheels?: WheelOption;
  accessories: AccessoryOption[];
  color: string;

  setBaseType: (base: BaseType) => void;
  setFrame: (frame: FrameOption) => void;
  setMotor: (motor: MotorOption) => void;
  setWheels: (wheels: WheelOption) => void;
  toggleAccessory: (acc: AccessoryOption) => void;
  setColor: (color: string) => void;
}

export const useConfiguratorStore = create<ConfigState>((set, get) => ({
  baseType: 'commuter-ebike',
  accessories: [],
  color: '#ff6600',

  setBaseType: (base) =>
    set({
      baseType: base,
      frame: undefined,
      motor: undefined,
      wheels: undefined,
      accessories: [],
    }),

  setFrame: (frame) => set({ frame }),
  setMotor: (motor) => set({ motor }),
  setWheels: (wheels) => set({ wheels }),

  toggleAccessory: (acc) => {
    const { accessories } = get();
    const exists = accessories.find((a) => a.id === acc.id);
    if (exists) {
      set({ accessories: accessories.filter((a) => a.id !== acc.id) });
    } else {
      set({ accessories: [...accessories, acc] });
    }
  },

  setColor: (color) => set({ color }),
}));
