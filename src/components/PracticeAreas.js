const AREAS = [
  {
    title: 'Wage and Hour',
    body: 'Our core practice. We model damages and exposure under federal (FLSA) and state law — regular rate and overtime true-ups, missed meal and rest break premiums, rounding, off-the-clock work, minimum wage, expense reimbursement shortfalls, and wage statement, waiting time, and other derivative penalties.',
    featured: true,
  },
  {
    title: 'PAGA & Class Actions',
    body: 'Penalty and damages estimation for Private Attorneys General Act claims, grounded in deep California experience. For class and hybrid actions we analyze data to identify trends, support claims, estimate potential liabilities, and support certification with statistical sampling and extrapolation.',
    featured: true,
  },
  {
    title: 'Labor & Employment Law',
    body: 'Expert support across employment-related matters — wage disputes, misclassification and exempt status review for groups of workers, joint employment analysis for staffing agencies and subcontractors, and economic models quantifying alleged lost wages in termination and discrimination matters.',
  },
  {
    title: 'Personal Injury',
    body: 'Data-driven reports to assess damages, validate claims, and support case strategy. To see how we might quantify your clients’ claims — or to receive a sample report — please contact us.',
  },
  {
    title: 'Custom & Unique Legal Matters',
    body: 'Some disputes don’t fit a standard mold. We provide tailored analytical support for unique, complex legal matters that require custom solutions — built from the actual records, whatever shape they arrive in.',
  },
];

const DATA_ITEMS = [
  'Excel / CSV exports and irregular spreadsheet data',
  'Payroll registers from ADP, Paychex, Paycom, and similar systems',
  'Timekeeping exports (Kronos/UKG, TSheets, POS systems)',
  'PDF pay stubs and timesheets — 1,800+ files consolidated in a single matter',
  'HR rosters, schedules, and personnel data',
];

function PracticeAreas() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="pa-grid">
            {AREAS.map((a) => (
              <div className={`pa-panel ${a.featured ? 'pa-featured' : ''}`} key={a.title}>
                <h2>{a.title}</h2>
                <p>{a.body}</p>
              </div>
            ))}
            <div className="pa-panel pa-cta">
              <h2>Not sure where your matter fits?</h2>
              <p>Tell us about the claims and the data — we&apos;ll tell you how we can help.</p>
              <a href="#/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section data-section">
        <div className="container data-grid">
          <div>
            <h2 className="section-title-light">Data types</h2>
            <p>
              We work with data in whatever form it exists — clean or messy,
              structured or not:
            </p>
            <ul className="chevron-list">
              {DATA_ITEMS.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title-light">Transformation &amp; integration</h2>
            <p>
              We convert, standardize, and integrate disparate sources into a
              single
              validated dataset — with a data inventory, field mapping, and
              validation summary documenting every step.
            </p>
            <p>
              The result is analysis you can defend. To discuss your matter,{' '}
              <a href="#/contact">contact us today</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PracticeAreas;
