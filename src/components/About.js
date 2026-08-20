function About() {
  return (
    <>
      <section className="section">
        <div className="container about-cols">
          <div className="about-block">
            <h2>Our firm</h2>
            <p>
              Glendale Analytics, LLC is a boutique firm of highly skilled,
              technical analysts providing data analysis and expert support for
              legal disputes. We specialize in converting, extracting, and
              consolidating large, irregular datasets so legal teams can make
              informed decisions.
            </p>
            <p>
              With deep California experience, we support plaintiff, defense,
              and neutral engagements nationwide. Our reports are clear,
              neutral in tone, and designed to support productive dispute
              resolution.
            </p>
          </div>
          <div className="about-block">
            <h2>Our analysts</h2>
            <p>
              Our team of skilled analysts brings experience in data
              management, statistical methods, and litigation support —
              combined with financial and business expertise. This structure
              lets us handle large, complex datasets efficiently while staying
              responsive throughout each engagement.
            </p>
            <p>
              Our leadership brings 30+ years of business and financial
              expertise to every engagement, with extensive experience
              analyzing large, irregular payroll and timekeeping datasets to
              quantify damages, evaluate exposure, and prepare detailed,
              defensible reports used in mediations, settlements, and court
              proceedings.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container mission-inner">
          <h2 className="section-title">Our mission</h2>
          <p>
            Timely, high-quality work. Litigation evaluation is
            resource-intensive, and counsel often reaches the data on the eve
            of mediation, class certification, or trial — that is where we do
            our best work: reliable analysis, delivered when it is needed,
            presented so it supports your strategy.
          </p>
          <a href="#/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </>
  );
}

export default About;
