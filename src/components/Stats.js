const STATS = [
  { value: '100,000+', label: 'Pay periods analyzed' },
  { value: '1,800+', label: 'Data files consolidated in a single matter' },
  { value: '3', label: 'Engagement models: plaintiff, defense & neutral' },
  { value: '50', label: 'States served nationwide' },
];

function Stats() {
  return (
    <section className="stats" aria-label="Firm highlights">
      <div className="container stats-grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
