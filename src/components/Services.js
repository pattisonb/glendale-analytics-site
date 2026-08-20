const SERVICES = [
  {
    title: 'Expert Data Analysis',
    body: 'We specialize in converting, extracting, and consolidating large, irregular payroll, HR, and timekeeping datasets — delivering reliable analysis for complex legal matters.',
  },
  {
    title: 'Settlement & Mediation',
    body: 'Engaged on the eve of mediation? We move fast. Balanced exposure models — gross and mitigated scenarios — built to support productive resolution on your timeline.',
  },
  {
    title: 'Class Certification, PAGA & Trial',
    body: 'Defensible expert reports, declarations, and rebuttals — with testimony support designed to withstand scrutiny in deposition or at trial.',
  },
];

function Services() {
  return (
    <section className="section svc">
      <div className="container">
        <div className="svc-head">
          <h2 className="section-title">What we deliver</h2>
          <p className="svc-lede">
            From raw records to the witness stand — analytical support at every
            stage of a dispute.
          </p>
        </div>
        <div className="svc-rows">
          {SERVICES.map((s) => (
            <div className="svc-row" key={s.title}>
              <h3>
                <span className="svc-chevron" aria-hidden="true" />
                {s.title}
              </h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
