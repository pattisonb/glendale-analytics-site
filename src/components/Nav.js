import { useState } from 'react';
import logo from '../assets/logo.svg';
import wordmark from '../assets/wordmark-white.svg';

const LINKS = [
  { route: 'home', href: '#/', label: 'Home' },
  { route: 'practice', href: '#/practice', label: 'Practice Areas' },
  { route: 'about', href: '#/about', label: 'About Us' },
  { route: 'contact', href: '#/contact', label: 'Contact' },
];

function Nav({ route }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="nav-logo" />
          <img src={wordmark} alt="Glendale Analytics" className="nav-wordmark" />
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.route}
              href={l.href}
              className={route === l.route ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
