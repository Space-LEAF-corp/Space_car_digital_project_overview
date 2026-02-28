import { useConfiguratorStore } from '../store/useConfiguratorStore';
import {
  FRAME_OPTIONS,
  MOTOR_OPTIONS,
  WHEEL_OPTIONS,
  ACCESSORY_OPTIONS,
  BaseType,
} from '../config/parts';

const baseLabels: Record<BaseType, string> = {
  'commuter-ebike': 'Commuter E‑Bike',
  'trail-ebike': 'Trail E‑Bike',
  'cafe-racer': 'Cafe Racer Moto',
  'adventure-moto': 'Adventure Moto',
};

export const Sidebar = () => {
  const {
    baseType,
    frame,
    motor,
    wheels,
    accessories,
    color,
    setBaseType,
    setFrame,
    setMotor,
    setWheels,
    toggleAccessory,
    setColor,
  } = useConfiguratorStore();

  return (
    <div>
      <h1 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>E‑Ride Forge</h1>
      <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1rem' }}>
        Start with a base, then layer frame, motor, wheels, and accessories.
      </p>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Base Type</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.75rem' }}>
          {(Object.keys(baseLabels) as BaseType[]).map((b) => (
            <button
              key={b}
              onClick={() => setBaseType(b)}
              style={{
                padding: '0.35rem 0.6rem',
                borderRadius: 999,
                border: '1px solid #444',
                background: baseType === b ? '#ff6600' : 'transparent',
                color: baseType === b ? '#050509' : '#f5f5f5',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              {baseLabels[b]}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Frame</h2>
        <select
          value={frame?.id ?? ''}
          onChange={(e) => {
            const selected = FRAME_OPTIONS.find((f) => f.id === e.target.value);
            if (selected) setFrame(selected);
          }}
          style={{ width: '100%', marginBottom: '0.75rem' }}
        >
          <option value="">Select frame</option>
          {FRAME_OPTIONS.filter((f) => f.baseType === baseType).map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Motor</h2>
        <select
          value={motor?.id ?? ''}
          onChange={(e) => {
            const selected = MOTOR_OPTIONS.find((m) => m.id === e.target.value);
            if (selected) setMotor(selected);
          }}
          style={{ width: '100%', marginBottom: '0.75rem' }}
        >
          <option value="">Select motor</option>
          {MOTOR_OPTIONS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label} ({m.powerKw} kW)
            </option>
          ))}
        </select>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Wheels</h2>
        <select
          value={wheels?.id ?? ''}
          onChange={(e) => {
            const selected = WHEEL_OPTIONS.find((w) => w.id === e.target.value);
            if (selected) setWheels(selected);
          }}
          style={{ width: '100%', marginBottom: '0.75rem' }}
        >
          <option value="">Select wheels</option>
          {WHEEL_OPTIONS.map((w) => (
            <option key={w.id} value={w.id}>
              {w.label}
            </option>
          ))}
        </select>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Accessories</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.75rem' }}>
          {ACCESSORY_OPTIONS.map((a) => {
            const active = !!accessories.find((x) => x.id === a.id);
            return (
              <label key={a.id} style={{ fontSize: '0.85rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggleAccessory(a)}
                  style={{ marginRight: '0.35rem' }}
                />
                {a.label}
              </label>
            );
          })}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Frame Color</h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ width: '100%', height: '2rem', border: 'none', padding: 0, marginBottom: '0.75rem' }}
        />
      </section>
    </div>
  );
};
