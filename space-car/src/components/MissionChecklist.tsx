import sequences from '../assets/data/sequences.json'

export function MissionChecklist() {
  return (
    <div className="panel">
      <h2>Mission Modes</h2>
      {Object.entries(sequences.modes).map(([mode, steps]) => (
        <details key={mode}>
          <summary>{mode.toUpperCase()}</summary>
          <ol>
            {steps.map(s => <li key={s}>{s}</li>)}
          </ol>
        </details>
      ))}
    </div>
  )
}