import logo from '../assets/logo.svg';
import wordmark from '../assets/wordmark-white.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-row">
            <img src={logo} alt="" className="footer-logo" />
            <img src={wordmark} alt="Glendale Analytics" className="footer-wordmark" />
          </div>
          <p className="footer-copy">
            Expert data analysis for employment litigation — wage &amp; hour,
            PAGA, class actions, and complex disputes. Serving clients
            nationwide.
          </p>
        </div>
        <div className="footer-col">
          <h4>Practice Areas</h4>
          <a href="#/practice">Wage and Hour</a>
          <a href="#/practice">PAGA &amp; Class Actions</a>
          <a href="#/practice">Labor &amp; Employment Law</a>
          <a href="#/practice">Personal Injury</a>
          <a href="#/practice">Custom Legal Matters</a>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="#/">Home</a>
          <a href="#/practice">Practice Areas</a>
          <a href="#/about">About Us</a>
          <a href="#/contact">Contact</a>
          <a
            href="https://www.linkedin.com/company/glendale-analytics"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:contact@glendaleanalytics.com">contact@glendaleanalytics.com</a>
          <span className="footer-muted">Serving clients nationwide</span>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Glendale Analytics, LLC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
