import { useState } from 'react';

const CONTACT_EMAIL = 'contact@glendaleanalytics.com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Contact us</h2>
          <p>
            Tell us a little about your matter — the claims at issue, the size
            of the workforce, and the shape of the data — and we&apos;ll follow up
            to discuss how we can help.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email</strong><br />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              <strong>LinkedIn</strong><br />
              <a
                href="https://www.linkedin.com/company/glendale-analytics"
                target="_blank"
                rel="noreferrer"
              >
                Glendale Analytics
              </a>
            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={update}
              required
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              required
              autoComplete="email"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={update}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">Send Message</button>
          <p className="form-note">
            Submitting opens your email client with the message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
