import pattern from '../assets/pattern.svg';

function Engagements() {
  return (
    <>
      <section className="section results">
        <div className="container results-grid">
          <img src={pattern} alt="" className="results-pattern" aria-hidden="true" />
          <div>
            <h2 className="section-title">A results-driven firm</h2>
            <p>
              We strive to equip our clients with best-in-class, defensible,
              data-backed insight to guide case strategy and resolution. We
              understand the complexity — and the speed — our clients work at,
              and we partner with counsel to deliver thorough, accurate, and
              usable analysis.
            </p>
            <p>
              Our analysts have provided data analysis and damages modeling for
              leading labor and employment law firms — across wage and hour
              class actions, PAGA matters, personal injury, and other complex
              legal disputes.
            </p>
            <a href="#/about" className="btn btn-outline-dark">About Us</a>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container mission-inner">
          <h2 className="section-title">Our mission</h2>
          <p>
            Litigation evaluation is resource-intensive, and counsel is often
            brought to the data on the eve of mediation, certification, or
            trial. Our mission is timely, high-quality work: reliable analysis
            delivered when it is needed, presented so that it supports your
            legal strategy.
          </p>
          <p>
            Whether the matter involves rounding, meal and rest breaks, regular
            rate of pay, unpaid overtime, off-the-clock work, or derivative
            penalties — we ensure your data is analyzed accurately and results
            are communicated clearly.
          </p>
          <a href="#/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </>
  );
}

export default Engagements;
