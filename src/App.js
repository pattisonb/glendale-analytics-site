import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Engagements from './components/Engagements';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Tiny hash router — no dependencies. Routes: #/ #/practice #/about #/contact */

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  return hash || 'home';
}

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let page;
  switch (route) {
    case 'practice':
      page = (
        <>
          <Hero
            variant="page"
            title="Practice Areas"
            subtitle="Expert analysis across the employment litigation lifecycle"
          />
          <PracticeAreas />
        </>
      );
      break;
    case 'about':
      page = (
        <>
          <Hero
            variant="page"
            title="Who We Are"
            subtitle="Data-powered insight. Expert analytics that drive resolution."
          />
          <About />
        </>
      );
      break;
    case 'contact':
      page = (
        <>
          <Hero variant="page" title="Contact" subtitle="We respond quickly — often the same day" />
          <Contact />
        </>
      );
      break;
    default:
      page = (
        <>
          <Hero variant="home" />
          <Services />
          <Stats />
          <Engagements />
        </>
      );
  }

  return (
    <div className="App">
      <Nav route={route} />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

export default App;
