export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Ready to Set Sail?</h2>
        <p>Contact us today to book your dream yacht experience</p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-YACHT</p>
          </div>
          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>bookings@luxyacht.com</p>
          </div>
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Marina Bay, Coastal City</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <a href="mailto:bookings@luxyacht.com" className="btn-primary">Get Quote</a>
        </div>
      </div>
    </section>
  );
}
