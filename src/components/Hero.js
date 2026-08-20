import logo from '../assets/logo.svg';

function Hero({ variant = 'home', title, subtitle }) {
  if (variant === 'page') {
    return (
      <section className="hero hero-page">
        <div className="container hero-page-inner">
          <div>
            <h1>{title}</h1>
            {subtitle && <p className="hero-sub">{subtitle}</p>}
          </div>
          <img src={logo} alt="" className="hero-page-mark" />
        </div>
      </section>
    );
  }

  return (
    <section className="hero hero-home">
      <div className="container hero-split">
        <div className="hero-copy">
          <p className="hero-kicker">Litigation data analytics</p>
          <h1>
            Complex data.<br />
            <span className="accent">Clear answers.</span>
          </h1>
          <p className="hero-sub">
            Glendale Analytics converts large, irregular payroll and
            timekeeping data into clear, defensible damages models and expert
            testimony for wage &amp; hour, PAGA, and class action matters
            nationwide.
          </p>
          <div className="hero-actions">
            <a href="#/contact" className="btn btn-primary">Contact Us</a>
            <a href="#/practice" className="btn btn-outline">Practice Areas</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <img src={logo} alt="" className="hero-mark" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
